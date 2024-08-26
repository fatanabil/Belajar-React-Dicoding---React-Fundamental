import autoBind from "auto-bind";
import { Component } from "react";
import { FiCheck } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddPageWrapper() {
    const navigate = useNavigate();

    return <AddPage navigate={navigate} />
}

class AddPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catatan: {
                title: '',
                body: '',
            }
        }

        autoBind(this);
    }

    onChangeTitleHandler(e) {
        this.setState((prev) => {
            return {
                catatan: {
                    ...prev.catatan,
                    title: e.target.value,
                }
            }
        })
    }

    onChangeBodyHandler(e) {
        this.setState((prev) => {
            return {
                catatan: {
                    ...prev.catatan,
                    body: e.target.value,
                }
            }
        })
    }

    onSubmitCatatanHandler(e) {
        e.preventDefault();
        const catatan = this.state.catatan;
        addNote(catatan);
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="px-16 py-8 min-h-full">
                <section>
                    <header>
                        <h2 className="text-3xl">Tambah Catatan</h2>
                    </header>
                    <main className="mt-4">
                        <form action="" className="flex flex-col gap-4" onSubmit={(e) => this.onSubmitCatatanHandler(e)} >
                            <input type="text" value={this.state.catatan.title} onChange={(e) => this.onChangeTitleHandler(e)} placeholder='Judul' className="px-4 py-2 text-2xl rounded-lg outline-none border-2 border-slate-400 focus:ring-2 focus:ring-slate-600 transition-all duration-300" required={true} />
                            <textarea name="body" id="" cols="30" rows="10" placeholder="Isi" value={this.state.catatan.body} onChange={(e) => this.onChangeBodyHandler(e)} className="px-4 py-2 text-xl rounded-lg outline-none border-2 border-slate-400 focus:ring-2 focus:ring-slate-600 transition-all duration-300" required={true} ></textarea>
                            <button type="submit" className="bg-slate-400 self-end px-4 py-3 rounded-md"><FiCheck className="text-white text-3xl" /></button>
                        </form>
                    </main>
                </section>
            </div>
        )
    }
}

export default AddPageWrapper