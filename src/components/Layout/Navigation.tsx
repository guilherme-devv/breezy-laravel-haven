
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'História FUNPJF', href: '/historia' },
    {
      label: 'Transparência',
      href: '/transparencia',
      dropdown: [
        { label: 'Relatórios Financeiros', href: '/transparencia/relatorios' },
        { label: 'Balancetes', href: '/transparencia/balancetes' },
        { label: 'Demonstrativos', href: '/transparencia/demonstrativos' }
      ]
    },
    { label: 'CRPs', href: '/crps' },
    { label: 'Divisão de Contabilidade', href: '/contabilidade' },
    { label: 'Investimentos', href: '/investimentos' },
    { label: 'Certificações', href: '/certificacoes' },
    { label: 'Fale Conosco', href: '/contato' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/placeholder.svg" 
              alt="FUNPJF Logo" 
              className="h-12 w-12 mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">FUNPJF</h1>
              <p className="text-sm text-gray-600">Fundo Previdenciário</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-900 transition-colors py-2"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                </Link>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
