import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-white transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white transform -translate-x-1/3 -translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Impulsa tu negocio con una presencia web profesional
          </motion.h2>
          <motion.p 
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde una simple landing page hasta una completa tienda online, estamos aquí para ayudarte a destacar en el mundo digital. ¡Comienza hoy mismo!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Link 
                to="/precios" 
                className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 text-center"
              >
                Ver Planes y Precios
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Link 
                to="/contacto" 
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Contáctanos <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;