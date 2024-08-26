import autoBind from "auto-bind";
import React from "react";

class NoteAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: {
                title: '',
                body: '',
                archived: false,
            },
            charRemaining: 50,
        }

        autoBind(this);
    }

    onTitleChangeHandler(event) {
        const limit = 50;
        const limitedTitle = event.target.value.slice(0, limit);

        this.setState(prev => {
            return {
                ...prev,
                note: {
                    ...prev.note,
                    title: limitedTitle,
                },
                charRemaining: 50 - limitedTitle.length,
            }
        })
    }

    onBodyChangeHandler(event) {
        this.setState(prev => {
            return {
                ...prev,
                note: {
                    ...prev.note,
                    body: event.target.value,
                },
            }
        })
    }

    onResetFormHandler() {
        this.setState(() => {
            return {
                charRemaining: 50,
                note: {
                    title: '',
                    body: '',
                    archived: false,
                }
            }
        })
    }

    render() {
        return (
            <div className="m-auto max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl my-8 bg-slate-700 rounded-md p-6 shadow-lg">
                <header className="flex justify-between items-center mb-5">
                    <h2 className="text-3xl text-white">Add Note</h2>
                    <p className={`text-md ${this.state.charRemaining === 0 ? 'text-red-400' : 'text-slate-400'}`}>Character remaining : {this.state.charRemaining}</p>
                </header>
                <form action="" className="flex flex-col gap-4" onSubmit={event => { this.props.onAddNote(event, this.state.note); this.onResetFormHandler() }} >
                    <input type="text" placeholder="Note Title ..." className="px-4 py-2 ring-2 ring-slate-600 bg-slate-700 text-slate-200 outline-none placeholder-slate-400 rounded-md focus:bg-slate-600 focus:ring-2 focus:ring-slate-600 transition-all" value={this.state.note.title} onChange={this.onTitleChangeHandler} required={true} />
                    <textarea name="body" id="body" cols="30" rows="8" className="px-4 py-2 ring-2 ring-slate-600 bg-slate-700 text-slate-200 outline-none placeholder-slate-400 rounded-md focus:bg-slate-600 focus:ring-2 focus:ring-slate-600 transition-all" placeholder="Your note here ..." value={this.state.note.body} onChange={this.onBodyChangeHandler} required={true} ></textarea>
                    <button type="submit" className="bg-slate-800 py-2 text-white rounded-md hover:bg-slate-900 transition-all">Add Note</button>
                </form>
            </div >
        );
    }
}

export default NoteAdd;