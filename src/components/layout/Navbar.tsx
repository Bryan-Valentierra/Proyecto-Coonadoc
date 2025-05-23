import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        ? 'text-primary-orange hover:text-primary-green' 
        : 'text-gray-700 hover:text-primary-orange'
    }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

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
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold" style={{ color: 'var(--primary-orange)' }}>Coonadoc</span>
            </Link>
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
              <button 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-orange flex items-center gap-1 transition-colors duration-300"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Precios <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--primary-orange)' }} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="py-1">
                      <Link to="/precios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange/10 hover:text-primary-orange">
                        Página Web
                      </Link>
                      <Link to="/precios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange/10 hover:text-primary-orange">
                        E-Commerce
                      </Link>
                      <Link to="/precios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange/10 hover:text-primary-orange">
                        Corporativo
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink to="/nosotros" className={navLinkClass}>
              Nosotros
            </NavLink>
            <NavLink to="/contacto" className={navLinkClass}>
              Contacto
            </NavLink>
          </div>
          
          <div className="hidden md:flex">
            <Link
              to="/contacto"
              className="ml-8 px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm transition-colors duration-300"
              style={{ background: 'var(--primary-gradient)' }}
            >
              ¡Empezar ahora!
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-orange hover:bg-primary-orange/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-orange"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-primary-orange/10"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/servicios"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-primary-orange/10"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </NavLink>
              <div>
                <Link 
                  to="/precios"
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-primary-orange/10"
                  onClick={() => setIsOpen(false)}
                >
                  Precios
                </Link>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/precios" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-orange"
                    onClick={() => setIsOpen(false)}
                  >
                    Página Web
                  </Link>
                  <Link 
                    to="/precios" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-orange"
                    onClick={() => setIsOpen(false)}
                  >
                    E-Commerce
                  </Link>
                  <Link 
                    to="/precios" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-orange"
                    onClick={() => setIsOpen(false)}
                  >
                    Corporativo
                  </Link>
                </div>
              </div>
              <NavLink
                to="/nosotros"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-primary-orange/10"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </NavLink>
              <NavLink
                to="/contacto"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-primary-orange/10"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </NavLink>
              <Link
                to="/contacto"
                className="block px-3 py-2 rounded-md text-base font-medium text-white"
                style={{ background: 'var(--primary-gradient)' }}
                onClick={() => setIsOpen(false)}
              >
                ¡Empezar ahora!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;