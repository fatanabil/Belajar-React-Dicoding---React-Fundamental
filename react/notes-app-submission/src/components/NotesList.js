import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, archived, onActive, onArchive, onDelete }) {
    return (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4">
            {
                notes.map(note => {
                    if (note.archived === archived) {
                        return <NoteItem key={note.id} {...note} onActive={onActive} onArchive={onArchive} onDelete={onDelete} />
                    }
                    return null;
                })
            }
        </div>
    );
}

export default NotesList;