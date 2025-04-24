import React from 'react';
import { MessageSquare, Lightbulb, Code, CheckCircle } from 'lucide-react';

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

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestro proceso</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un proceso estructurado y transparente para garantizar el éxito de tu proyecto web.
          </p>
        </div>
        
        <div className="relative">
          {/* Línea de conexión */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 z-10"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>
                
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">¿Listo para comenzar?</h3>
          <p className="text-gray-600 text-center mb-6">
            Cuéntanos sobre tu proyecto y te guiaremos a través de todo el proceso.
          </p>
          <div className="text-center">
            <a 
              href="#contacto" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 inline-block"
            >
              Contáctanos ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;