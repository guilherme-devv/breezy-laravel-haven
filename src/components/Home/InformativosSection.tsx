
import React from 'react';
import { Download, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const InformativosSection = () => {
  const informativos = [
    {
      id: 1,
      title: "Informativo Mensal - Janeiro 2024",
      description: "Relatório completo das atividades e demonstrativos financeiros do mês",
      date: "2024-01-31",
      downloadUrl: "/downloads/informativo-jan-2024.pdf",
      views: 245
    },
    {
      id: 2,
      title: "Informativo Mensal - Dezembro 2023",
      description: "Balanço anual e perspectivas para o novo exercício",
      date: "2023-12-31",
      downloadUrl: "/downloads/informativo-dez-2023.pdf",
      views: 189
    },
    {
      id: 3,
      title: "Informativo Mensal - Novembro 2023",
      description: "Atualizações sobre investimentos e novos beneficiários",
      date: "2023-11-30",
      downloadUrl: "/downloads/informativo-nov-2023.pdf",
      views: 156
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Informativos Mensais
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {informativos.map((informativo) => (
            <div key={informativo.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {informativo.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Eye size={16} className="mr-1" />
                  {informativo.views}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                {informativo.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  {new Date(informativo.date).toLocaleDateString('pt-BR')}
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={`/informativo/${informativo.id}`}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                  >
                    Visualizar
                  </Link>
                  <a
                    href={informativo.downloadUrl}
                    download
                    className="flex items-center px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                  >
                    <Download size={14} className="mr-1" />
                    PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/informativos"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Todos os Informativos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InformativosSection;
