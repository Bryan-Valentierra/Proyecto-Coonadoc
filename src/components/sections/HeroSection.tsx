import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden pt-20">
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
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tu Presencia Digital <br />
            <span className="text-blue-200">Profesional y Efectiva</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Diseñamos y desarrollamos soluciones web a medida que convierten visitantes en clientes. Empieza hoy mismo a destacar en internet.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link 
              to="/precios" 
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 text-center hover-lift"
            >
              Ver Precios
            </Link>
            <Link 
              to="/servicios" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center hover-lift"
            >
              Nuestros Servicios <ChevronRight size={18} className="ml-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-blue-100 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p>Confían en nosotros:</p>
            <div className="mt-4 flex flex-wrap gap-8">
              <motion.div 
                className="h-8 w-24 bg-white/20 rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="h-8 w-32 bg-white/20 rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="h-8 w-28 bg-white/20 rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="h-8 w-20 bg-white/20 rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;