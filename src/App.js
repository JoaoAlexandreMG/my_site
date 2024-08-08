/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'projetos':
                return <ProjectsPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div>
            <nav>
                <div className="logo">
                    <i className="fa fa-code"></i>
                </div>
                <div className="links">
                    <a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Sobre</a>
                    <a href="#" className={currentPage === 'projetos' ? 'active' : ''} onClick={() => setCurrentPage('projetos')}>Projetos</a>                </div>
            </nav>
            {renderPage()}
        </div>
    );
}

export default App;
