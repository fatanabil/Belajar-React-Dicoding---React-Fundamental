import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CatatanHeader({ id, title, createdAt }) {
    const timeStampOpt = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'shortGeneric' };
    const parsedDate = new Date(createdAt).toLocaleString('id-ID', timeStampOpt);

    return (
        <header className='mb-4'>
            <h1 className='underline text-2xl break-words'><Link to={`/note/${id}`} >{title}</Link></h1>
            <p className='text-slate-400 mt-2'>{parsedDate}</p>
        </header>
    )
}

CatatanHeader.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default CatatanHeader;