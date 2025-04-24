import React from 'react';
import { MonitorSmartphone, ShoppingBag, LineChart, Search, Settings, Server } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 'responsive',
    title: 'Diseño Responsive',
    description: 'Sitios web optimizados para cualquier dispositivo: ordenadores, tablets y móviles.',
    icon: <MonitorSmartphone className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Plataformas de comercio electrónico seguras y fáciles de gestionar para vender online.',
    icon: <ShoppingBag className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 'seo',
    title: 'Optimización SEO',
    description: 'Mejoramos tu posicionamiento en buscadores para que te encuentren más clientes.',
    icon: <Search className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 'analytics',
    title: 'Analítica Web',
    description: 'Informes detallados del rendimiento de tu web para tomar mejores decisiones.',
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento',
    description: 'Actualizaciones periódicas y soporte técnico para mantener tu web segura y funcional.',
    icon: <Settings className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 'hosting',
    title: 'Hosting Premium',
    description: 'Alojamiento web de alta velocidad y seguridad para una experiencia óptima.',
    icon: <Server className="h-10 w-10 text-blue-600" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestros servicios</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Soluciones Digitales Completas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ofrecemos servicios integrales de diseño y desarrollo web para impulsar tu presencia online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-md hover:bg-white group"
            >
              <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#precios" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 inline-block"
          >
            Ver nuestros planes
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;