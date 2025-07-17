import React from 'react';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <h1>Painel Administrativo - FUNPJF</h1>
        <div className="admin-header-actions">
          <span>Bem-vindo, Administrador</span>
          <button className="btn btn-outline">Sair</button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;