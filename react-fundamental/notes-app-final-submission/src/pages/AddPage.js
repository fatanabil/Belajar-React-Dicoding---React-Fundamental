import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../api/notesAPI";
import { str } from "../assets/string-assets";
import Input from "../components/Input";
import LocaleContext from "../contexts/LocaleContecxt";
import useInput from "../hooks/useInput";

function AddPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useInput('');
    const [body, setBody] = useInput('');
    const { locale } = useContext(LocaleContext);

    const onSubmitNewNote = async (ev) => {
        ev.preventDefault();
        const payload = { title, body }
        const { error } = await addNote(payload);

        if (!error) {
            alert(str[locale].addMessage)
            return navigate('/');
        }
    }

    return (
        <div className="bg-slate-200 px-24 min-h-screen pt-24 dark:bg-slate-800 dark:text-slate-100 transition-all" >
            <header>
                <h1 className="text-3xl font-semibold">{str[locale].addTitle}</h1>
            </header>
            <main className="mt-6">
                <form action="" className="flex flex-col gap-4" onSubmit={(ev) => onSubmitNewNote(ev)} >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title">{str[locale].addLabel1}</label>
                        <Input id="title" type="text" value={title} onChange={setTitle} required={true} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="body">{str[locale].addLabel2}</label>
                        <textarea id="body" value={body} onChange={setBody} rows={15} className="px-3 py-2 w-full outline-none bg-white border-2 border-slate-400 rounded-md focus:ring-1 focus:ring-slate-400 transition-all duration-300 dark:bg-slate-700" ></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-emerald-500 rounded-md hover:bg-emerald-600 transition-all duration-300">{str[locale].addButton}</button>
                </form>
            </main>
        </div >
    )
}

export default AddPage;