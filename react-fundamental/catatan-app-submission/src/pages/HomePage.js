import autoBind from "auto-bind";
import { Component } from "react";
import { FiPlus } from 'react-icons/fi';
import { Link, useSearchParams } from "react-router-dom";
import CatatanItem from "../components/CatatanItem";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('title');

    function onChangeKeyword(keyword) {
        setSearchParams({ title: keyword });
    }

    return <HomePage keyword={keyword} onChangeKeyword={onChangeKeyword} />
}

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catatan: getActiveNotes(),
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
            <>
                <div className="px-16 py-8 min-h-full">
                    <section>
                        <header>
                            <SearchBar keyword={this.state.keyword} onChangeKeyword={this.onChangeKeywordHandler} />
                            <h2 className="text-3xl mt-8">Daftar Catatan</h2>
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
                <Link to={'/note/new'} className="bg-slate-600 w-14 h-14 fixed top-[85%] left-[90%] rounded-full flex justify-center items-center shadow-lg"><FiPlus className="text-white text-3xl " /></Link>
            </>
        )
    }
}

export default HomePageWrapper;