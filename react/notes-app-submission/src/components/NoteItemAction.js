import React from "react";

function NoteItemAction({ isArchived, id, onActive, onArchive, onDelete }) {
    return (
        <div className="w-full flex">
            {
                isArchived ? (
                    <button className="basis-1/2 py-2 border-t-2 border-r-2 border-slate-700 text-emerald-500 rounded-bl-md hover:bg-emerald-500 hover:text-white transition-all duration-150" onClick={() => onActive(id)} >Active</button>
                ) : (
                    <button className="basis-1/2 py-2 border-t-2 border-r-2 border-slate-700 text-amber-600 rounded-bl-md hover:bg-amber-600 hover:text-white transition-all duration-150" onClick={() => onArchive(id)} >Archive</button>
                )
            }
            <button className="basis-1/2 border-t-2 border-slate-700 text-red-500 rounded-br-md hover:bg-red-500 hover:text-white transition-all duration-150" onClick={() => onDelete(id)} >Delete</button>
        </div >
    )
}

export default NoteItemAction;