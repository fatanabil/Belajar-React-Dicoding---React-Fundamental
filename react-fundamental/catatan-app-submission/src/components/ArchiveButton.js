import { FiDownload } from 'react-icons/fi';
import PropTypes from 'prop-types';

function ArchiveButton({ onArchive }) {
    return <button title='Arsipkan Catatan' onClick={() => onArchive()} className="w-14 h-14 flex justify-center items-center rounded-full bg-slate-400" ><FiDownload className='text-slate-900 text-xl' /></button>
}

ArchiveButton.propTypes = {
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;