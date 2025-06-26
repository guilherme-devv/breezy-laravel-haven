
import React from 'react';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';

const Historia = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">História do FUNPJF</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Fundação e Primeiros Anos</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Fundo Previdenciário do Município de José de Freitas (FUNPJF) foi criado em 1995, 
              com o objetivo de garantir a seguridade social dos servidores públicos municipais. 
              Desde sua fundação, tem sido um pilar fundamental na proteção social dos trabalhadores 
              do município.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Inicialmente, o fundo atendia apenas aos servidores efetivos, mas ao longo dos anos 
              expandiu seus serviços para incluir pensionistas e beneficiários diversos, sempre 
              mantendo o compromisso com a transparência e eficiência na gestão.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Evolução e Modernização</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ao longo dos anos 2000, o FUNPJF passou por importantes modernizações em sua 
              estrutura administrativa e tecnológica. A implementação de sistemas digitais 
              permitiu maior agilidade no atendimento aos beneficiários e melhor controle 
              dos recursos.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Em 2010, foi criado o programa de transparência ativa, disponibilizando online 
              todos os relatórios financeiros e demonstrativos de gestão, reforçando o 
              compromisso com a prestação de contas à sociedade.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">FUNPJF Hoje</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Atualmente, o FUNPJF atende mais de 1.200 beneficiários entre servidores ativos, 
              aposentados e pensionistas. Com uma gestão moderna e transparente, mantém 
              equilibrio atuarial e garante a sustentabilidade do sistema previdenciário municipal.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900">1.200+</h3>
                <p className="text-gray-600">Beneficiários</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900">29</h3>
                <p className="text-gray-600">Anos de História</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900">100%</h3>
                <p className="text-gray-600">Transparência</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Historia;
