
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
            <li className="nav-item dropdown">
              <span className="nav-link">Transparência</span>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Relatórios Financeiros</a>
                <a href="#" className="dropdown-item">Balanços</a>
                <a href="#" className="dropdown-item">Demonstrativos</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">CRPs</span>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">CRP Atual</a>
                <a href="#" className="dropdown-item">CRPs Anteriores</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">Contabilidade</span>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Balancetes</a>
                <a href="#" className="dropdown-item">Demonstrações</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">Investimentos</span>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Política de Investimentos</a>
                <a href="#" className="dropdown-item">Relatórios</a>
              </div>
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
