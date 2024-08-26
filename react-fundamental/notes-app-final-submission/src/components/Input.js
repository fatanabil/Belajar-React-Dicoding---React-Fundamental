import PropTypes from "prop-types";

function Input({ type, value, onChange, id, required, placeholder }) {
    return <input id={id} type={type} value={value} onChange={(ev) => onChange(ev)} className="px-3 py-2 w-full outline-none bg-white border-2 border-slate-400 rounded-md focus:ring-1 focus:ring-slate-400 transition-all duration-300 dark:bg-slate-700" required={required} placeholder={placeholder} />
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
}

export default Input;