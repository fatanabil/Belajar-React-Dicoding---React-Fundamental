import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, archived, createdAt }) {
    return (
        <div className="p-4 border-2 bg-white border-slate-500 rounded-md flex flex-col gap-4 dark:bg-transparent">
            <NoteHeader id={id} title={title} createdAt={createdAt} />
            <NoteBody body={body} />
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NoteItem;