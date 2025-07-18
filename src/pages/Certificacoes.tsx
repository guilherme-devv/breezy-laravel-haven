import React from 'react';

const Certificacoes = () => {
  // Dados simulados - em produção viriam do backend
  const certificacoes = [
    {
      id: 1,
      title: "Certificado ISO 9001:2015",
      issuer: "INMETRO",
      date: "2024-01-15",
      validity: "2027-01-15",
      fileUrl: "/docs/iso-9001-2024.pdf"
    },
    {
      id: 2,
      title: "Certificado de Regularidade PREVIC",
      issuer: "PREVIC",
      date: "2023-12-20",
      validity: "2024-12-20",
      fileUrl: "/docs/previc-2023.pdf"
    },
    {
      id: 3,
      title: "Certificado de Auditoria Externa",
      issuer: "Ernst & Young",
      date: "2024-02-10",
      validity: "2025-02-10",
      fileUrl: "/docs/auditoria-externa-2024.pdf"
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

  const isValidCertificate = (validity: string) => {
    return new Date(validity) > new Date();
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Certificações</h1>
        <p>Certificados e documentos de conformidade do FUNPJF</p>
      </div>

      <div className="documents-grid">
        {certificacoes.map(cert => (
          <div key={cert.id} className="document-card">
            <div className="document-icon">
              🏆
            </div>
            <div className="document-info">
              <h3 className="document-title">{cert.title}</h3>
              <p className="document-issuer">Emitido por: {cert.issuer}</p>
              <p className="document-date">
                Emitido em: {new Date(cert.date).toLocaleDateString('pt-BR')}
              </p>
              <p className={`document-validity ${isValidCertificate(cert.validity) ? 'valid' : 'expired'}`}>
                Válido até: {new Date(cert.validity).toLocaleDateString('pt-BR')}
                {isValidCertificate(cert.validity) ? ' ✅' : ' ⚠️ Expirado'}
              </p>
            </div>
            <div className="document-actions">
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => handleView(cert.fileUrl)}
              >
                Visualizar
              </button>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => handleDownload(cert.fileUrl, cert.title)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {certificacoes.length === 0 && (
        <div className="empty-state">
          <p>Nenhuma certificação disponível no momento.</p>
        </div>
      )}
    </div>
  );
};

export default Certificacoes;