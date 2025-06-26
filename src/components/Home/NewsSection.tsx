
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nova Regulamentação dos Benefícios Previdenciários",
      excerpt: "Conheça as mudanças aprovadas que entrarão em vigor no próximo mês...",
      date: "2024-01-15",
      author: "Assessoria FUNPJF",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Recadastramento Anual de Aposentados",
      excerpt: "Período de recadastramento já está aberto. Veja documentos necessários...",
      date: "2024-01-10",
      author: "Departamento de Benefícios",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Assembleia Geral Ordinária - Prestação de Contas",
      excerpt: "Convocação para assembleia que apresentará os resultados do exercício...",
      date: "2024-01-05",
      author: "Diretoria FUNPJF",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Últimas Notícias</h2>
          <Link 
            to="/noticias" 
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver todas <ArrowRight size={20} className="ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600">
                  <Link to={`/noticia/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {article.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
