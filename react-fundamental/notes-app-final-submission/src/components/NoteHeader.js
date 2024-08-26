import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteHeader({ id, title, createdAt }) {
    const parsedDate = new Date(createdAt).toLocaleString('id-ID', { dateStyle: "medium", timeStyle: "long" })

    return (
        <header>
            <Link to={`/notes/${id}`}>
                <h1 className="text-xl underline font-semibold break-words">{title}</h1>
            </Link>
            <p className="text-slate-500">{parsedDate}</p>
        </header>
    )
}

NoteHeader.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteHeader;