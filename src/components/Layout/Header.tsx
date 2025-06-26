
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(86) 3343-1234</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>contato@funpjf.gov.br</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>José de Freitas - PI</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
