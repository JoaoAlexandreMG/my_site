import React, { useState } from 'react';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'portfolio':
                return <PortfolioPage />;
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
                    <a href="#" className={currentPage === 'portfolio' ? 'active' : ''} onClick={() => setCurrentPage('portfolio')}>Portfólio</a>                </div>
            </nav>
            {renderPage()}
        </div>
    );
}

export default App;
