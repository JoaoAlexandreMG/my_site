/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function ProjectsPage() {
    return (
        <div>
            <div className="projects_all">
                <h1>Projetos</h1>
                <div className="projects">
                    <h2>Projetos Fáceis</h2>
                    <div className="project-item">
                        <h3>Calculadora</h3>
                        <p>Calculadora simples, com as 4 operações básicas da matemática. Feita em HTML5, CSS3 e JS. Para acessar clique <a target='_blank' href="https://calculadorajohn.netlify.app" rel="noreferrer">Aqui</a>.</p>
                    </div>
                </div>
                <div className="projects">
                    <h2>Projetos Médios</h2>
                    {
                        <div className="project-item">
                            <h3>Em breve...</h3>
                            {/* <p>Descrição breve do projeto médio 1.</p> */}
                        </div>
                    }
                </div>
                <div className="projects">
                    <h2>Projetos Difíceis</h2>
                    {

                        <div className="project-item">
                            <h3>Em Breve...</h3>
                            {/* <p>Descrição breve do projeto difícil 1.</p> */}
                        </div>
                    }
                </div>
            </div>

            <footer>
                <div className="socials">
                    <a target='_blank' href="https://github.com/JoaoAlexandreMG" rel="noreferrer">Github</a>
                    <a target='_blank' href="https://www.instagram.com/joaoa_sa/" rel="noreferrer">Instagram</a>
                    <a target='_blank' href="https://www.linkedin.com/in/joaosa2004/" rel="noreferrer">LinkedIn</a>
                </div>
                <a className="online" href="#"><i className="fas fa-circle"></i> Disponível para trabalho</a>
            </footer>
        </div>
    );
}

export default ProjectsPage;
