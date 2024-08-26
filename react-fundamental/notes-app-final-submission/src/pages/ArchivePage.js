import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../api/notesAPI";
import { str } from "../assets/string-assets";
import Input from "../components/Input";
import Loader from "../components/Loader";
import NoteItem from "../components/NoteItem";
import LocaleContext from "../contexts/LocaleContecxt";
import useInput from "../hooks/useInput";

function ArchivePage() {
    const [notes, setNotes] = useState([]);
    const { locale } = useContext(LocaleContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useInput(() => searchParams.get('title') || '');
    const [loading, setLoading] = useState(true);

    const onChangeKeywordHandler = (ev) => {
        setKeyword(ev);
        setSearchParams({ title: ev.target.value });
    }

    useEffect(() => {
        const getNote = async () => {
            const { error, data } = await getArchivedNotes();

            if (!error) {
                setNotes(data);
                setLoading(false);
            }
        }

        getNote();
    }, [])

    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    })

    return (
        <div className="bg-slate-200 px-24 min-h-screen pt-24 dark:bg-slate-800 dark:text-slate-100 transition-all">
            <header>
                <h1 className="text-3xl font-semibold mb-4">{str[locale].archiveTitle}</h1>
                <Input type="text" value={keyword} onChange={onChangeKeywordHandler} placeholder={str[locale].searchText} />
            </header>
            {
                loading ? (
                    <Loader />
                ) : (
                    <main className="grid grid-cols-4 mt-6 gap-4">
                        {filteredNotes?.map(note => (
                            <NoteItem key={note.id} {...note} />
                        ))}
                    </main>
                )
            }
        </div>
    )
}

export default ArchivePage;