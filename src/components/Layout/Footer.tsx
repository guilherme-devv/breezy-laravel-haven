
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FUNPJF</h3>
            <p className="text-gray-300 text-sm">
              Fundo Previdenciário do Município de José de Freitas, 
              garantindo segurança e tranquilidade aos servidores públicos municipais.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/transparencia" className="text-gray-300 hover:text-white">Transparência</a></li>
              <li><a href="/crps" className="text-gray-300 hover:text-white">CRPs</a></li>
              <li><a href="/investimentos" className="text-gray-300 hover:text-white">Investimentos</a></li>
              <li><a href="/certificacoes" className="text-gray-300 hover:text-white">Certificações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                (86) 3343-1234
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                contato@funpjf.gov.br
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>Rua Principal, 123<br />Centro - José de Freitas/PI</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <div className="flex items-start text-sm">
              <Clock size={16} className="mr-2 mt-1" />
              <div>
                <p>Segunda a Sexta</p>
                <p className="text-gray-300">08:00 às 12:00</p>
                <p className="text-gray-300">14:00 às 18:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 FUNPJF - Fundo Previdenciário do Município de José de Freitas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
