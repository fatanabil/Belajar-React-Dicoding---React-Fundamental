import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContecxt";
import { str } from "../assets/string-assets";

function Navigation({ onLogout }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { locale, toggleLocale } = useContext(LocaleContext);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-mode', 'dark');
        } else {
            document.documentElement.setAttribute('data-mode', 'light');
        }
    }, [theme])

    return (
        <nav className="bg-white px-24 py-2 flex w-full justify-between dark:bg-slate-700 dark:text-slate-100 transition-all">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold mr-8">Notes App</h1>
                <Link to='/' className="px-4 py-3 hover:underline" >{str[locale].home}</Link>
                <Link to='/archive' className="px-4 py-3 hover:underline" >{str[locale].archive}</Link>
            </div>
            <div className="flex gap-4 items-center">
                <button onClick={toggleLocale} className="text-lg font-semibold" >{locale === 'id' ? 'EN' : 'ID'}</button>
                <button onClick={toggleTheme} >{theme === 'light' ? <FaMoon className="w-6 h-6 text-slate-700" /> : <FaSun className="w-6 h-6 text-slate-100" />}</button>
                <button onClick={onLogout} className="bg-red-400 px-4 py-2 rounded-md text-white self-center hover:bg-red-500">Logout</button>
            </div>
        </nav>
    )
}

Navigation.propTypes = {
    onLogout: PropTypes.func.isRequired,
}

export default Navigation;