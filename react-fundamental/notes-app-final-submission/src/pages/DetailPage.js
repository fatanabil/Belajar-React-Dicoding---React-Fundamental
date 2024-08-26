import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../api/notesAPI";
import { FaTrash, FaCheck, FaArchive, FaArrowLeft } from "react-icons/fa";
import LocaleContext from "../contexts/LocaleContecxt";
import { str } from "../assets/string-assets";
import Loader from "../components/Loader";

function DetailPage() {
    const navigate = useNavigate();
    const { noteId } = useParams();
    const [note, setNote] = useState({});
    const { locale } = useContext(LocaleContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNoteById = async () => {
            const { error, data } = await getNote(noteId);
            if (!error) {
                setNote(data);
                setLoading(false);
            }
        }

        getNoteById();
    }, [noteId])

    const onArchiveNote = async () => {
        const { error } = await archiveNote(noteId);

        if (!error) {
            alert(str[locale].archiveMsg);
            return navigate('/');
        }
    }

    const onUnarchiveNote = async () => {
        const { error } = await unarchiveNote(noteId);

        if (!error) {
            alert(str[locale].unArchiveMsg);
            return navigate('/archive');
        }
    }

    const onDeleteNote = async () => {
        const opt = window.confirm(str[locale].delConfMsg);
        if (opt) {
            const { error } = await deleteNote(noteId);

            if (!error) {
                alert(str[locale].delMsg);
                return navigate(`${note.archived ? '/archive' : '/'}`);
            }
        }
        return
    }

    return (
        <div className="bg-slate-200 px-24 min-h-screen pt-24 dark:bg-slate-800 dark:text-slate-100 transition-all">
            <div className="flex flex-col">
                <Link to={note.archived ? '/archive' : '/'} className="underline flex items-center gap-4 w-fit"><FaArrowLeft /><span>{note.archived ? str[locale].detailbackArchiveBtn : str[locale].detailBackHomeBtn}</span></Link>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <>
                            <header className="mt-8">
                                <h1 className="text-5xl break-words">{note.title}</h1>
                                <p className="text-lg text-slate-500 mt-4">{new Date(note.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'long' })}</p>
                            </header>
                            <main className="mt-8 break-words">
                                <p>{note.body}</p>
                            </main>
                            <div className="self-end flex gap-4 mt-8">
                                {note.archived ? (
                                    <button onClick={onUnarchiveNote} title={str[locale].detailBtnTitle2} className="p-6 bg-slate-500 rounded-full shadow-lg hover:bg-slate-600 transition-all duration-300" ><FaCheck className="text-white" /></button>
                                ) : (
                                    <button onClick={onArchiveNote} title={str[locale].detailBtnTitle1} className="p-6 bg-slate-500 rounded-full shadow-lg hover:bg-slate-600 transition-all duration-300"><FaArchive className="text-white" /></button>
                                )}
                                <button onClick={onDeleteNote} title={str[locale].detailBtnTitle3} className="p-6 bg-slate-500 rounded-full shadow-lg hover:bg-slate-600 transition-all duration-300"><FaTrash className="text-red-500" /></button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default DetailPage;