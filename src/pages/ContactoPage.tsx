import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const ContactoPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contacto
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Estamos aquí para ayudarte. Contáctanos y comencemos a trabajar juntos en tu próximo proyecto.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <ContactSection />
      
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Ubicación</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Encuéntranos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Visítanos en nuestra oficina o contáctanos a través de medios digitales.
            </p>
          </motion.div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* Replace with an actual map component or embed if available */}
            <div className="h-96 bg-gray-200 w-full flex items-center justify-center">
              <span className="text-lg font-medium text-gray-600">Mapa de la ubicación</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;