import autoBind from "auto-bind";
import { Component } from "react";
import { useSearchParams } from "react-router-dom";
import CatatanItem from "../components/CatatanItem";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('title');

    function onChangeKeyword(keyword) {
        setSearchParams({ title: keyword });
    }

    return <ArchivePage keyword={keyword} onChangeKeyword={onChangeKeyword} />
}

class ArchivePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catatan: getArchivedNotes(),
            keyword: props.keyword || '',
        }

        autoBind(this);
    }

    onChangeKeywordHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        })

        this.props.onChangeKeyword(keyword)
    }

    render() {
        const catatan = this.state.catatan.filter(ctn => {
            return ctn.title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase());
        })

        return (
            <div className="px-16 py-8 min-h-full">
                <section>
                    <header>
                        <SearchBar keyword={this.state.keyword} onChangeKeyword={this.onChangeKeywordHandler} />
                        <h2 className="text-3xl mt-8">Arsip Catatan</h2>
                    </header>
                    {
                        catatan.length === 0 ? (
                            <main className="w-full mt-8">
                                <h1 className="text-2xl text-slate-400 text-center">Tidak ada catatan</h1>
                            </main>
                        ) : (
                            <main className="grid grid-cols-4 gap-4 mt-8">
                                {
                                    catatan.map(ctn => (
                                        <CatatanItem key={ctn.id} {...ctn} />
                                    ))
                                }
                            </main>
                        )
                    }
                </section>
            </div>
        )
    }
}

export default ArchivePageWrapper;