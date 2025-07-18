import React from 'react';

const Transparencia = () => {
  // Dados simulados - em produção viriam do backend
  const documentos = [
    {
      id: 1,
      title: "Relatório Anual 2023",
      date: "2024-01-15",
      type: "Relatório",
      fileUrl: "/docs/relatorio-anual-2023.pdf"
    },
    {
      id: 2,
      title: "Demonstrativo de Gastos Q4 2023",
      date: "2023-12-31",
      type: "Demonstrativo",
      fileUrl: "/docs/gastos-q4-2023.pdf"
    },
    {
      id: 3,
      title: "Ata da Assembleia - Janeiro 2024",
      date: "2024-01-20",
      type: "Ata",
      fileUrl: "/docs/ata-janeiro-2024.pdf"
    }
  ];

  const handleDownload = (fileUrl: string, title: string) => {
    // Simular download do arquivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title;
    link.click();
  };

  const handleView = (fileUrl: string) => {
    // Abrir PDF em nova aba
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Transparência</h1>
        <p>Acesse documentos e informações transparentes sobre o FUNPJF</p>
      </div>

      <div className="documents-grid">
        {documentos.map(doc => (
          <div key={doc.id} className="document-card">
            <div className="document-icon">
              📄
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

export default Transparencia;