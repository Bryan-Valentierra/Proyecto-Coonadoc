import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white" />
        <div className="grid grid-cols-12 h-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="col-span-1 border-r border-white h-full" />
          ))}
        </div>
        <div className="grid grid-rows-12 w-full absolute inset-0">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="row-span-1 border-b border-white w-full" />
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Tu Presencia Digital <br />
            <span className="text-blue-200">Profesional y Efectiva</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl animate-fadeInDelay">
            Diseñamos y desarrollamos sitios web a medida que convierten visitantes en clientes. Empieza hoy mismo a destacar en internet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInDelayLong">
            <a 
              href="#precios" 
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 text-center"
            >
              Ver Precios
            </a>
            <a 
              href="#servicios" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Nuestros Servicios <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
          
          <div className="mt-12 text-blue-100 text-sm animate-fadeInDelayLong">
            <p>Confían en nosotros:</p>
            <div className="mt-4 flex flex-wrap gap-8">
              <div className="h-8 w-24 bg-white/20 rounded-md"></div>
              <div className="h-8 w-32 bg-white/20 rounded-md"></div>
              <div className="h-8 w-28 bg-white/20 rounded-md"></div>
              <div className="h-8 w-20 bg-white/20 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;