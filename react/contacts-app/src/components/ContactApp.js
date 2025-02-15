import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import { LocaleProvider } from "../contexts/LocaleContext";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import Navigation from "./Navigation";


class ContactApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authedUser: null,
            initializing: true,
            localeContext: {
                locale: 'id',
                toggleLocale: () => {
                    this.setState((prevState) => {
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: prevState.localeContext.locale === 'id' ? 'en' : 'id'
                            }
                        }
                    })
                }
            }
        }

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
            }
        })
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null,
            }
        });

        putAccessToken('');
    }

    async componentDidMount() {
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
                initializing: false,
            }
        })
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <LocaleProvider value={this.state.localeContext}>
                    <div className='contact-app'>
                        <header className='contact-app__header'>
                            <h1>Aplikasi Kontak</h1>
                        </header>
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                    </div>
                </LocaleProvider>
            )
        }

        return (
            <LocaleProvider value={this.state.localeContext}>
                <div className="contact-app">
                    <header className='contact-app__header'>
                        <h1>Aplikasi Kontak</h1>
                        <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/add" element={<AddPage />} />
                        </Routes>
                    </main>
                </div>
            </LocaleProvider>
        )
    }
}

export default ContactApp;