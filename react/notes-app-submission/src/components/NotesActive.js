import React from "react";
import NotesList from "./NotesList";

function NotesActive({ notes, onArchive, onDelete }) {
    const isEmpty = notes.filter(note => !note.archived);

    return (
        <div className="m-auto max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl my-8">
            <h2 className="text-3xl text-white mb-5">Active Notes</h2>
            {
                isEmpty.length <= 0 ? (
                    <div className="text-slate-600 text-xl text-center">No note found</div>
                ) : (
                    <NotesList notes={notes} archived={false} onActive={null} onArchive={onArchive} onDelete={onDelete} />
                )
            }
        </div >
    )
}

export default NotesActive;