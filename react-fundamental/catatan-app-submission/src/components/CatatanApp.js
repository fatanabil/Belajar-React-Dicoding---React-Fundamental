import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import ArchivePage from '../pages/ArchivePage';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import TestingPage from '../pages/TestingPage';
import Navigation from './Navigation';

function CatatanApp() {
    return (
        <div>
            <header className='sticky top-0'>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/archive' element={<ArchivePage />} />
                    <Route exact path='/note/new' element={<AddPage />} />
                    <Route path='/note/:id' element={<DetailPage />} />
                    <Route path='/testing' element={<TestingPage />} />
                    <Route exact path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default CatatanApp;