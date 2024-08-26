import { login } from "../api/authAPI";
import Input from "../components/Input";
import useInput from "../hooks/useInput"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContecxt";
import { str } from "../assets/string-assets";

function LoginPage({ loginSuccess }) {
    const [email, setEmail] = useInput('');
    const [password, setpassword] = useInput('');
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-mode', 'dark');
        } else {
            document.documentElement.setAttribute('data-mode', 'light');
        }
    }, [theme])

    const onSubmitLogin = async (ev) => {
        ev.preventDefault();

        const payload = { email, password };

        const { error, data } = await login(payload);

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <div className="h-screen flex justify-center pt-32 bg-slate-200 dark:bg-slate-800 dark:text-slate-100">
            <section className="flex flex-col w-1/4 gap-3">
                <header>
                    <h1 className="text-center text-2xl font-semibold">Login</h1>
                </header>
                <hr className="border-2 border-slate-500" />
                <main className="flex flex-col gap-8">
                    <form action="" onSubmit={(ev) => onSubmitLogin(ev)} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Input id="email" type="email" value={email} onChange={setEmail} required={true} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password">Password</label>
                            <Input id="password" type="password" value={password} onChange={setpassword} required={true} />
                        </div>
                        <button type="submit" className="w-full bg-slate-500 text-white rounded-md px-4 py-2 hover:bg-slate-600 transition-all duration-300 mt-6">Login</button>
                    </form>
                    <Link to='/register' className="underline self-center">{str[locale].loginLink}</Link>
                </main>
            </section>
        </div>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;