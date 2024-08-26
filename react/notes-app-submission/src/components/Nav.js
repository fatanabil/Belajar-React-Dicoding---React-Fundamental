import React from "react";

function Nav({ keyword, onSearch }) {
    return (
        <nav className="flex justify-between px-4 md:px-16 py-6 bg-slate-700 shadow-lg sticky top-0">
            <h1 className="text-white text-3xl font-semibold">NotesApp</h1>
            <input type="text" value={keyword} onChange={onSearch} placeholder="Search note ... " className="w-1/2 md:w-auto px-4 py-2 rounded-md bg-slate-500 text-white placeholder:text-white outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-150" />
        </nav>
    )
}

export default Nav;