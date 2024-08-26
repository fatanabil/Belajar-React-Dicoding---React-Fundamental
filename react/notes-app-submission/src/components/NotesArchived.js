import React from "react";
import NotesList from "./NotesList";

function NotesArchived({ notes, onActive, onDelete }) {
    const isEmpty = notes.filter(note => note.archived);

    return (
        <div className="m-auto max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl my-8">
            <h2 className="text-3xl text-white mb-5">Archived Notes</h2>
            {
                isEmpty.length <= 0 ?
                    (
                        <div className="text-slate-600 text-xl text-center">No note found</div>
                    ) :
                    (
                        <NotesList notes={notes} archived={true} onActive={onActive} onArchive={null} onDelete={onDelete} />
                    )
            }
        </div >
    )
}

export default NotesArchived;