import CatatanBody from "./CatatanBody";
import CatatanHeader from "./CatatanHeader";
import PropTypes from 'prop-types';

function CatatanItem({ id, title, body, createdAt }) {
    return (
        <div className="border-2 border-slate-900 border-t-8 p-4 rounded-lg">
            <CatatanHeader id={id} title={title} createdAt={createdAt} />
            <CatatanBody body={body} />
        </div>
    )
}

CatatanItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default CatatanItem;