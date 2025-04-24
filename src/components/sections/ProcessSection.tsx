import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Lightbulb, Code, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Consulta inicial',
    description: 'Conocemos tus necesidades y objetivos para entender completamente tu proyecto.',
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 'design',
    title: 'Diseño y planificación',
    description: 'Creamos mockups y prototipos para visualizar cómo será tu sitio web antes de desarrollarlo.',
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 'development',
    title: 'Desarrollo',
    description: 'Implementamos tu sitio web con las últimas tecnologías asegurando calidad y rendimiento.',
    icon: <Code className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 'launch',
    title: 'Lanzamiento',
    description: 'Ponemos tu sitio en línea y te enseñamos a gestionar tu nuevo activo digital.',
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestro proceso</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un proceso estructurado y transparente para garantizar el éxito de tu proyecto web.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Línea de conexión */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 z-10"
                variants={item}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
                }}
              >
                <motion.div 
                  className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <motion.div 
                  className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4, type: 'spring' }}
                >
                  {index + 1}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">¿Listo para comenzar?</h3>
          <p className="text-gray-600 text-center mb-6">
            Cuéntanos sobre tu proyecto y te guiaremos a través de todo el proceso.
          </p>
          <div className="text-center">
            <Link 
              to="/contacto" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 inline-block hover-lift"
            >
              Contáctanos ahora
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;