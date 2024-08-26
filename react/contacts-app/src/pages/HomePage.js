import React from 'react';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
import { deleteContact, getContacts } from '../utils/data';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { useEffect } from 'react';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [contacts, setContacts] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    })
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        setContacts(() => getContacts())
    }, []);

    async function onDeleteHandler(id) {
        await deleteContact(id);

        const { data } = await getContacts();
        setContacts(data);
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(keyword.toLowerCase())
    })

    return (
        <section>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <h2>{locale === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
            <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
        </section>
    )
}

export default HomePage;