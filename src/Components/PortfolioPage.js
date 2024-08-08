import React from 'react';

function PortfolioPage() {
    return (
        <div>
            <div className="portfolio">
                <h1>Portfólio de Projetos</h1>
                <div className="projects">
                    <h2>Projetos Fáceis</h2>
                    <div className="project-item">
                        <h3>Projeto 1</h3>
                        <p>Descrição breve do projeto fácil 1.</p>
                    </div>
                    <div className="project-item">
                        <h3>Projeto 2</h3>
                        <p>Descrição breve do projeto fácil 2.</p>
                    </div>
                </div>
                <div className="projects">
                    <h2>Projetos Médios</h2>
                    <div className="project-item">
                        <h3>Projeto 3</h3>
                        <p>Descrição breve do projeto médio 1.</p>
                    </div>
                    <div className="project-item">
                        <h3>Projeto 4</h3>
                        <p>Descrição breve do projeto médio 2.</p>
                    </div>
                </div>
                <div className="projects">
                    <h2>Projetos Difíceis</h2>
                    <div className="project-item">
                        <h3>Projeto 5</h3>
                        <p>Descrição breve do projeto difícil 1.</p>
                    </div>
                    <div className="project-item">
                        <h3>Projeto 6</h3>
                        <p>Descrição breve do projeto difícil 2.</p>
                    </div>
                </div>
            </div>

            <footer>
                <a href="#">Meu Portfólio</a>
                <div className="socials">
                    <a href="https://github.com/JoaoAlexandreMG">Github</a>
                    <a href="https://www.instagram.com/joaoa_sa/">Instagram</a>
                    <a href="https://www.linkedin.com/in/joaosa2004/">LinkedIn</a>
                </div>
                <a className="online" href="#"><i className="fas fa-circle"></i> Disponível para trabalho</a>
            </footer>
        </div>
    );
}

export default PortfolioPage;
