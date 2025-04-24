import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Coonadoc</h2>
            <p className="text-gray-400 mb-4">
              Creamos soluciones digitales profesionales y personalizadas para ayudar a tu negocio a destacar en el mundo digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/precios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Diseño Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mantenimiento Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  SEO
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Calle Siempre Viva 123, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+57 601 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">info@coonadoc.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Coonadoc. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
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