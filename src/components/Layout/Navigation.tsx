
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            FUNPJF
          </Link>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/historia" className="nav-link">História</Link>
            </li>
            <li className="nav-item">
              <Link to="/transparencia" className="nav-link">Transparência</Link>
            </li>
            <li className="nav-item">
              <Link to="/crps" className="nav-link">CRPs</Link>
            </li>
            <li className="nav-item">
              <Link to="/contabilidade" className="nav-link">Contabilidade</Link>
            </li>
            <li className="nav-item">
              <Link to="/investimentos" className="nav-link">Investimentos</Link>
            </li>
            <li className="nav-item">
              <Link to="/certificacoes" className="nav-link">Certificações</Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">Fale Conosco</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
