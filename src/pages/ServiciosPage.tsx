import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MonitorSmartphone, ShoppingBag, Search, Settings, LineChart, Server, Palette, Code, Smartphone, Globe } from 'lucide-react';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

type DetailedService = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

const detailedServices: DetailedService[] = [
  {
    id: 'webdesign',
    title: 'Diseño Web',
    description: 'Creamos diseños atractivos, modernos y funcionales que representan tu marca y conectan con tu audiencia.',
    icon: <Palette className="h-12 w-12 text-blue-600" />,
    features: [
      'Diseño personalizado y único',
      'Experiencia de usuario intuitiva',
      'Adaptable a todos los dispositivos',
      'Optimización para conversiones',
      'Identidad visual coherente'
    ]
  },
  {
    id: 'webdev',
    title: 'Desarrollo Web',
    description: 'Implementamos tu sitio con código limpio y optimizado, asegurando velocidad, seguridad y escalabilidad.',
    icon: <Code className="h-12 w-12 text-blue-600" />,
    features: [
      'Desarrollo frontend y backend',
      'Código limpio y documentado',
      'Optimización de velocidad',
      'Integración de APIs',
      'Sistemas de gestión de contenidos'
    ]
  },
  {
    id: 'responsive',
    title: 'Diseño Responsive',
    description: 'Garantizamos que tu sitio web se vea perfecto en cualquier dispositivo, desde smartphones hasta monitores de escritorio.',
    icon: <Smartphone className="h-12 w-12 text-blue-600" />,
    features: [
      'Adaptación automática a cualquier pantalla',
      'Experiencia de usuario consistente',
      'Optimización para dispositivos táctiles',
      'Velocidad de carga optimizada para móviles',
      'Pruebas en múltiples dispositivos'
    ]
  },
  {
    id: 'seo',
    title: 'Optimización SEO',
    description: 'Mejoramos tu visibilidad en los motores de búsqueda para que tus clientes potenciales te encuentren fácilmente.',
    icon: <Globe className="h-12 w-12 text-blue-600" />,
    features: [
      'Investigación de palabras clave',
      'Optimización técnica del sitio',
      'Contenido optimizado para SEO',
      'Mejora de la autoridad del dominio',
      'Análisis y seguimiento de resultados'
    ]
  }
];

const ServiciosPage: React.FC = () => {
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
              Nuestros Servicios
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Soluciones digitales completas diseñadas para hacer crecer tu negocio en el mundo digital.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Servicios detallados</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Lo que podemos hacer por ti
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos digitales.
            </p>
          </div>
          
          <div className="space-y-24">
            {detailedServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="flex flex-col md:flex-row gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`md:w-1/2 bg-gray-100 h-64 rounded-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Placeholder for service image */}
                  <div className="h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-70 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">Imagen de {service.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/precios" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 inline-block hover-lift"
            >
              Ver nuestros planes
            </Link>
          </motion.div>
        </div>
      </div>
      
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default ServiciosPage;