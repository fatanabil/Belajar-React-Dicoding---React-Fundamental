import PropTypes from 'prop-types';

function SearchBar({ keyword, onChangeKeyword }) {
    return (
        <input className='w-full px-4 py-2 border-2 border-slate-900 outline-none rounded-md focus:ring-4 focus:ring-slate-400 transition-all duration-300' placeholder='Cari Catatan ...' type="text" value={keyword} onChange={(e) => onChangeKeyword(e.target.value)} />
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    onChangeKeyword: PropTypes.func.isRequired,
}

export default SearchBar;