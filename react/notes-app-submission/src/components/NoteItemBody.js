import React from "react";

function NoteItemBody({ title, createdAt, body }) {
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' }
    const parsedDate = new Date(createdAt).toLocaleString('id-ID', options);

    return (
        <div className="p-4 break-words">
            <h3 className="text-2xl text-slate-300 font-semibold">{title}</h3>
            <p className="text-xs text-slate-400 mb-4 mt-1">{parsedDate}</p>
            <p className="text-sm text-slate-300 text-start" dangerouslySetInnerHTML={{ __html: body }} ></p>
        </div>
    )
}

export default NoteItemBody;