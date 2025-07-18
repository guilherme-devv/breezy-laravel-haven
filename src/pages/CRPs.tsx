import React from 'react';

const CRPs = () => {
  // Dados simulados - em produção viriam do backend
  const crps = [
    {
      id: 1,
      title: "CRP Janeiro 2024",
      date: "2024-01-31",
      fileUrl: "/docs/crp-janeiro-2024.pdf"
    },
    {
      id: 2,
      title: "CRP Dezembro 2023",
      date: "2023-12-31",
      fileUrl: "/docs/crp-dezembro-2023.pdf"
    },
    {
      id: 3,
      title: "CRP Novembro 2023",
      date: "2023-11-30",
      fileUrl: "/docs/crp-novembro-2023.pdf"
    }
  ];

  const handleDownload = (fileUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title;
    link.click();
  };

  const handleView = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>CRPs</h1>
        <p>Certificados de Regularidade Previdenciária disponíveis para download</p>
      </div>

      <div className="documents-grid">
        {crps.map(crp => (
          <div key={crp.id} className="document-card">
            <div className="document-icon">
              📄
            </div>
            <div className="document-info">
              <h3 className="document-title">{crp.title}</h3>
              <p className="document-date">
                {new Date(crp.date).toLocaleDateString('pt-BR')}
              </p>
            </div>
            <div className="document-actions">
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => handleView(crp.fileUrl)}
              >
                Visualizar
              </button>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => handleDownload(crp.fileUrl, crp.title)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {crps.length === 0 && (
        <div className="empty-state">
          <p>Nenhum CRP disponível no momento.</p>
        </div>
      )}
    </div>
  );
};

export default CRPs;