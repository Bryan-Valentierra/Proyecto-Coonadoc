import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive 
        ? 'text-blue-600 hover:text-blue-700' 
        : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">PomStandard</span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass}>
              Inicio
            </NavLink>
            <NavLink to="/servicios" className={navLinkClass}>
              Servicios
            </NavLink>
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors duration-300">
                Precios <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="py-1">
                  <a href="#landing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Landing Page
                  </a>
                  <a href="#ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    E-Commerce
                  </a>
                  <a href="#corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Corporativo
                  </a>
                </div>
              </div>
            </div>
            <NavLink to="/nosotros" className={navLinkClass}>
              Nosotros
            </NavLink>
            <NavLink to="/contacto" className={navLinkClass}>
              Contacto
            </NavLink>
          </div>
          
          <div className="hidden md:flex">
            <a
              href="#contacto"
              className="ml-8 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
              ¡Empezar ahora!
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <NavLink
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/servicios"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </NavLink>
          <div>
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Precios
            </button>
            <div className="pl-4 space-y-1">
              <a href="#landing" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                Landing Page
              </a>
              <a href="#ecommerce" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                E-Commerce
              </a>
              <a href="#corporate" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                Corporativo
              </a>
            </div>
          </div>
          <NavLink
            to="/nosotros"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </NavLink>
          <a
            href="#contacto"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            ¡Empezar ahora!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;