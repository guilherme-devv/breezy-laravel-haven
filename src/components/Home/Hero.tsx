
import React from 'react';
import { Shield, Users, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Fundo Previdenciário do Município de José de Freitas
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Garantindo segurança e tranquilidade para os servidores públicos municipais 
          através de uma gestão transparente e eficiente dos recursos previdenciários.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Shield className="mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">Segurança</h3>
            <p className="text-blue-100">Proteção garantida para todos os beneficiários</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">Comunidade</h3>
            <p className="text-blue-100">Atendendo servidores e suas famílias</p>
          </div>
          <div className="text-center">
            <FileText className="mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">Transparência</h3>
            <p className="text-blue-100">Informações claras e acessíveis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
