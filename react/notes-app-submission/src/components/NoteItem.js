import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, body, archived, createdAt, onActive, onArchive, onDelete }) {

    return (
        <div className="p-0 h-fit flex flex-col justify-between rounded-md border-2 border-slate-700 mb-4 aspect-auto break-inside-avoid">
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <NoteItemAction isArchived={archived} id={id} onActive={onActive} onArchive={onArchive} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem;