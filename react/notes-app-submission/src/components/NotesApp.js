import autoBind from "auto-bind";
import React from "react";
import { getData, saveData } from "../utils/localStorage";
import Nav from "./Nav";
import NoteAdd from "./NoteAdd";
import NotesActive from "./NotesActive";
import NotesArchived from "./NotesArchived";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getData() || [],
            filteredNotes: null,
        }

        autoBind(this);
    }

    onKeywordChangeHandler(event) {
        const keyword = event.target.value;
        const regex = new RegExp(keyword, 'ig');
        let filteredNotes = null;
        if (keyword !== "") {
            filteredNotes = this.state.notes.filter(note => note.title.match(regex));
        }
        this.setState(() => {
            return {
                filteredNotes,
            }
        })
    }

    onActiveNoteHandler(id) {
        const noteTarget = this.state.notes.filter(note => note.id === id)[0];
        noteTarget.archived = false;
        this.setState(prev => {
            return {
                ...prev,
                notes: [...prev.notes],
            }
        }, () => { saveData(this.state.notes); })
    }

    onArchivedNoteHandler(id) {
        const noteTarget = this.state.notes.filter(note => note.id === id)[0];
        noteTarget.archived = true;
        this.setState(prev => {
            return {
                ...prev,
                notes: [...prev.notes],
            }
        }, () => { saveData(this.state.notes); })
    }

    onDeleteNoteHandler(id) {
        const noteTargetIndex = this.findNoteIndex(id);
        this.state.notes.splice(noteTargetIndex, 1);
        this.setState(prev => {
            return {
                ...prev,
                notes: [...prev.notes]
            }
        }, () => { saveData(this.state.notes); })
    }

    findNoteIndex(id) {
        for (const index in this.state.notes) {
            if (this.state.notes[index].id === id) {
                return index;
            }
        }
        return -1;
    }

    onAddNoteHandler(event, note) {
        event.preventDefault()
        note.id = new Date().getTime();
        note.createdAt = new Date().toISOString();
        note.body = note.body.replaceAll('\n', '<br />');
        this.setState(prev => {
            return {
                ...prev,
                notes: [...prev.notes, note],
            }
        }, () => { saveData(this.state.notes); })
    }

    render() {
        return (
            <div className="font-inter bg-slate-800 pb-16 min-h-screen">
                <Nav keyword={this.state.keyword} onSearch={this.onKeywordChangeHandler} />
                <NoteAdd onAddNote={this.onAddNoteHandler} />
                <NotesActive notes={this.state.filteredNotes === null ? this.state.notes : this.state.filteredNotes} onArchive={this.onArchivedNoteHandler} onDelete={this.onDeleteNoteHandler} />
                <NotesArchived notes={this.state.filteredNotes === null ? this.state.notes : this.state.filteredNotes} onActive={this.onActiveNoteHandler} onDelete={this.onDeleteNoteHandler} />
            </div>
        )
    }
}

export default NotesApp;