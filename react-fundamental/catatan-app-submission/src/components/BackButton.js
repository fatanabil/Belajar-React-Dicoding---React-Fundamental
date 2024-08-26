import { FiArrowLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function BackButton({ target, children }) {
    const navigate = useNavigate()

    return (
        <button className='flex items-center gap-4' onClick={() => navigate(target)} ><FiArrowLeft /><span>{children}</span></button>
    )
}

BackButton.propTypes = {
    target: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default BackButton;