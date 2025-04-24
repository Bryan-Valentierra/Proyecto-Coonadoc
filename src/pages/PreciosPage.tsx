import React from 'react';
import { motion } from 'framer-motion';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import ContactSection from '../components/sections/ContactSection';

const PreciosPage: React.FC = () => {
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
              Precios transparentes y competitivos
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Encuentra el plan perfecto para tu proyecto con nuestra estructura de precios simple y sin sorpresas.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <PricingSection />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <p className="text-lg text-gray-600 mb-10">
              Respuestas a las dudas más comunes sobre nuestros servicios y precios.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Cuánto tiempo lleva crear un sitio web?</h3>
              <p className="text-gray-600">
                El tiempo de desarrollo varía según la complejidad. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio corporativo o e-commerce puede tomar 4-8 semanas. Establecemos un cronograma claro al inicio del proyecto.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Hay costos adicionales ocultos?</h3>
              <p className="text-gray-600">
                No. Nuestros precios son transparentes e incluyen todo lo mencionado en cada plan. Si se requieren funcionalidades adicionales, las cotizamos por separado antes de comenzar el trabajo para evitar sorpresas.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Qué incluye el mantenimiento mensual?</h3>
              <p className="text-gray-600">
                El mantenimiento incluye actualizaciones de seguridad, copias de seguridad regulares, monitoreo de rendimiento, corrección de errores, actualizaciones de contenido menores y soporte técnico por email.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Puedo actualizar o cambiar mi plan más adelante?</h3>
              <p className="text-gray-600">
                Sí, puedes actualizar tu plan en cualquier momento. Simplemente contáctanos para discutir tus nuevas necesidades y te proporcionaremos un presupuesto para la actualización.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default PreciosPage;