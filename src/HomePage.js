/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="sobre">
        <div className="left">
          <h3>Estudante de Engenharia de Computação - UFU</h3>
          <div className="info">
            <h2>Meu nome é João Alexandre</h2>
            <p>
              Estou em busca de uma oportunidade de estágio na área de
              tecnologia, com foco no desenvolvimento de software back-end e em
              áreas correlacionadas.
            </p>
            <div className="buttons">
              <button className="hire">
                Contrate-me <i className="fa-solid fa-plus"></i>
              </button>
              <button className="email">
                Copiar email <i className="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <a className="online">
            <i className="fa fa-circle"> Disponivel para trabalho</i>
          </a>
          <img src="profile.jpg" alt="Profile" />
        </div>
      </div>

      <div className="works">
        <div className="right">
          <div className="item">
            <a>Descrição sobre mim</a>
            <p>
              Sou apaixonado por tecnologia, focado no desenvolvimento back-end
              com Python e JavaScript. Gosto de criar sistemas eficientes e
              escaláveis, explorando frameworks modernos e boas práticas de
              programação. Sempre busco novos desafios para aprender e
              contribuir com projetos que façam a diferença.
            </p>
          </div>
          <div className="item">
            <a>Formação</a>
            <ul>
              <li>Técnico em Automação Industrial - NÃO CONCLUÍDO</li>
              <li>
                Bacharelado em Engenharia de Computação - Universidade Federal
                de Uberlândia (Andamento - 2026)
              </li>
            </ul>
          </div>
          <div className="item">
            <a>Cursos Adicionais</a>
            <ul>
              <li>Office completo - 120h</li>
              <li>Programação de CLPS - 60h</li>
              <li>Introdução a Rede de Computadores - 15h</li>
              <li>Gestão do tempo e produtividade - 2h</li>
              <li>Fundamentos de TI- Hardware e Software - 15h</li>
              <li>Python básico ao avançado.</li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <div className="socials">
          <a
            target="_blank"
            href="https://github.com/JoaoAlexandreMG"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/joaoa_sa/"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joaosa2004/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <a className="online">
          <i className="fas fa-circle"></i> Disponível para trabalho
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
