import React from 'react';

const Investimentos = () => {
  // Dados simulados - em produção viriam do backend
  const documentos = [
    {
      id: 1,
      title: "Relatório de Investimentos Q1 2024",
      date: "2024-03-31",
      type: "Relatório Trimestral",
      fileUrl: "/docs/investimentos-q1-2024.pdf"
    },
    {
      id: 2,
      title: "Performance Anual 2023",
      date: "2023-12-31",
      type: "Relatório Anual",
      fileUrl: "/docs/performance-2023.pdf"
    },
    {
      id: 3,
      title: "Política de Investimentos 2024",
      date: "2024-01-01",
      type: "Política",
      fileUrl: "/docs/politica-investimentos-2024.pdf"
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
        <h1>Investimentos</h1>
        <p>Relatórios e documentos sobre os investimentos do FUNPJF</p>
      </div>

      <div className="documents-grid">
        {documentos.map(doc => (
          <div key={doc.id} className="document-card">
            <div className="document-icon">
              📈
            </div>
            <div className="document-info">
              <h3 className="document-title">{doc.title}</h3>
              <p className="document-type">{doc.type}</p>
              <p className="document-date">
                {new Date(doc.date).toLocaleDateString('pt-BR')}
              </p>
            </div>
            <div className="document-actions">
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => handleView(doc.fileUrl)}
              >
                Visualizar
              </button>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => handleDownload(doc.fileUrl, doc.title)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {documentos.length === 0 && (
        <div className="empty-state">
          <p>Nenhum documento disponível no momento.</p>
        </div>
      )}
    </div>
  );
};

export default Investimentos;