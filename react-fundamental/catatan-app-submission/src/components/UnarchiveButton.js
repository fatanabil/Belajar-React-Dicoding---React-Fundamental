import PropTypes from 'prop-types';
import { FiUpload } from 'react-icons/fi';

function UnarchiveButton({ onUnarchive }) {
    return <button title="Aktifkan Catatan" onClick={() => onUnarchive()} className="w-14 h-14 flex justify-center items-center rounded-full bg-slate-400" ><FiUpload className='text-slate-900 text-xl' /></button>
}

UnarchiveButton.propTypes = {
    onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveButton;