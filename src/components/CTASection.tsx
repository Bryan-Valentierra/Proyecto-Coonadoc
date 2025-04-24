import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-white transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white transform -translate-x-1/3 -translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Impulsa tu negocio con una presencia web profesional
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Desde una simple landing page hasta una completa tienda online, estamos aquí para ayudarte a destacar en el mundo digital. ¡Comienza hoy mismo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#precios" 
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 text-center"
            >
              Ver Planes y Precios
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Contáctanos <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;