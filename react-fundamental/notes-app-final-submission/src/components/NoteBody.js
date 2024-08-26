import PropTypes from "prop-types";

function NoteBody({ body }) {
    return (
        <main className="break-words">
            {body}
        </main>
    )
}

NoteBody.propTypes = {
    body: PropTypes.string.isRequired,
}

export default NoteBody;