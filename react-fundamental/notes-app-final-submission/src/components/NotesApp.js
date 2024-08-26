import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getUserloggedIn } from "../api/authAPI";
import { str } from "../assets/string-assets";
import { LocaleProvider } from "../contexts/LocaleContecxt";
import { ThemeProvider } from "../contexts/ThemeContext";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { setAccessToken } from "../utils/tokenUtils";
import Navigation from "./Navigation";

function NotesApp() {
    const navigate = useNavigate();
    const [autheduser, setAutheduser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'id');

    const localeContextValue = useMemo(() => {
        return {
            locale,
            toggleLocale: () => {
                setLocale((prev) => {
                    prev === 'id' ? localStorage.setItem('locale', 'en') : localStorage.setItem('locale', 'id');
                    return prev === 'id' ? 'en' : 'id';
                })
            }
        }
    }, [locale])

    const themeContextValue = useMemo(() => {
        return {
            theme,
            toggleTheme: () => {
                setTheme((prev) => {
                    prev === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
                    return prev === 'light' ? 'dark' : 'light'
                });
            }
        }
    }, [theme]);

    const onLoginSuccess = async ({ accessToken }) => {
        setAccessToken(accessToken);
        const { data } = await getUserloggedIn();

        setAutheduser(data);
        navigate('/');
    }

    const onLogout = () => {
        const opt = window.confirm(str[locale].logoutMsg)
        if (opt) {
            setAutheduser(null)

            setAccessToken('');
        }

        return null
    }

    useEffect(() => {
        async function getLogged() {
            const { data } = await getUserloggedIn()

            setAutheduser(data);
            setInitializing(false);
        }

        getLogged();
    }, []);

    if (initializing) {
        return null
    }

    if (autheduser === null) {
        return (
            <ThemeProvider value={themeContextValue}>
                <LocaleProvider value={localeContextValue}>
                    <div>
                        <Routes>
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        </Routes>
                    </div>
                </LocaleProvider>
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider value={themeContextValue}>
            <LocaleProvider value={localeContextValue}>
                <div>
                    <header className="fixed w-full top-0">
                        <Navigation onLogout={onLogout} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/notes/new" element={<AddPage />} />
                            <Route path="/notes/:noteId" element={<DetailPage />} />
                            <Route path="/archive" element={<ArchivePage />} />
                        </Routes>
                    </main>
                </div>
            </LocaleProvider>
        </ThemeProvider>
    )
}

export default NotesApp;