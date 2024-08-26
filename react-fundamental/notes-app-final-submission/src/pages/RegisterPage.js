import { useNavigate } from "react-router-dom";
import { register } from "../api/authAPI";
import Input from "../components/Input";
import useInput from "../hooks/useInput";

function RegisterPage() {
    const navigate = useNavigate();
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confPass, setConfPass] = useInput('');

    const onSubmitRegister = async (ev) => {
        ev.preventDefault();

        if (password !== confPass) {
            return window.alert("Password not match!")
        }

        const payload = { name, email, password };

        const { error } = await register(payload);

        if (!error) {
            navigate('/login');
        }
    }

    return (
        <div className="h-screen flex justify-center pt-32 bg-slate-200 dark:bg-slate-800 dark:text-white">
            <div className="flex flex-col w-1/4 gap-3">
                <h1 className="text-center text-2xl font-semibold">Register</h1>
                <hr className="border-2 border-slate-500" />
                <form action="" className="flex flex-col gap-3" onSubmit={(ev) => onSubmitRegister(ev)}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <Input id="name" type="text" value={name} onChange={setName} required={true} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="email" value={email} onChange={setEmail} required={true} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <Input id="password" type="password" value={password} onChange={setPassword} required={true} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="conf-password">Confirm Password</label>
                        <Input id="conf-password" type="password" value={confPass} onChange={setConfPass} required={true} />
                    </div>
                    <button type="submit" className="w-full bg-slate-500 text-white rounded-md px-4 py-2 hover:bg-slate-600 transition-all duration-300 mt-6" >Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;