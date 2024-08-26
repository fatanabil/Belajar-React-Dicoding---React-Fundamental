import { FiTrash } from 'react-icons/fi';
import PropTypes from 'prop-types';

function DeleteButton({ onDelete }) {
    return <button title='Hapus Catatan' onClick={() => onDelete()} className="w-14 h-14 flex justify-center items-center rounded-full bg-slate-400" ><FiTrash className='text-red-500 text-xl' /></button>
}

DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;