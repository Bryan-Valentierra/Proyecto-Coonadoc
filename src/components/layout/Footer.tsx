import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      className="text-white"
      style={{ background: 'var(--primary-gradient)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-orange)' }}>Coonadoc</h2>
            <p className="mb-4" style={{ color: 'var(--primary-green)' }}>
              Creamos soluciones digitales profesionales y personalizadas para ayudar a tu negocio a destacar en el mundo digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/precios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Diseño Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  Mantenimiento Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary-orange transition-colors duration-300" style={{ color: 'white' }}>
                  SEO
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-orange)' }} />
                <span style={{ color: 'white' }}>Calle Siempre Viva 123, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--primary-orange)' }} />
                <span style={{ color: 'white' }}>+57 601 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--primary-orange)' }} />
                <span style={{ color: 'white' }}>info@coonadoc.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8" style={{ borderColor: 'var(--primary-orange)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: 'white' }}>
              &copy; {new Date().getFullYear()} Coonadoc. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-orange text-sm transition-colors duration-300" style={{ color: 'white' }}>
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-primary-orange text-sm transition-colors duration-300" style={{ color: 'white' }}>
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-orange text-sm transition-colors duration-300" style={{ color: 'white' }}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;