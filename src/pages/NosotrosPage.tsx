import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Target } from 'lucide-react';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

type Value = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ana María Rodríguez',
    role: 'CEO & Fundadora',
    bio: 'Con más de 10 años de experiencia en desarrollo web y diseño digital, Ana María fundó Coonadoc con la visión de crear soluciones digitales accesibles y efectivas para empresas de todos los tamaños.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Director de Tecnología',
    bio: 'Especialista en arquitectura de software y desarrollo fullstack con experiencia en múltiples industrias. Carlos lidera el equipo técnico asegurando soluciones robustas y escalables.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    role: 'Directora de Diseño',
    bio: 'Diseñadora UX/UI con un ojo perfecto para la estética y funcionalidad. Laura transforma conceptos en experiencias visuales impactantes que conectan con los usuarios.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 4,
    name: 'Daniel Ramírez',
    role: 'Especialista en Marketing Digital',
    bio: 'Experto en estrategias de marketing digital y SEO. Daniel ayuda a nuestros clientes a maximizar su presencia online y alcanzar a su audiencia objetivo de manera efectiva.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

const values: Value[] = [
  {
    id: 'innovation',
    title: 'Innovación',
    description: 'Constantemente exploramos nuevas tecnologías y enfoques para ofrecer soluciones digitales de vanguardia.',
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />
  },
  {
    id: 'quality',
    title: 'Calidad',
    description: 'Nos comprometemos con la excelencia en cada proyecto, prestando atención a cada detalle para entregar resultados excepcionales.',
    icon: <Award className="h-8 w-8 text-blue-600" />
  },
  {
    id: 'client-focus',
    title: 'Enfoque al Cliente',
    description: 'Creamos relaciones duraderas basadas en la comprensión profunda de las necesidades de nuestros clientes.',
    icon: <Target className="h-8 w-8 text-blue-600" />
  },
  {
    id: 'collaboration',
    title: 'Colaboración',
    description: 'Trabajamos como un equipo integrado con nuestros clientes para asegurar que sus objetivos se cumplan.',
    icon: <Users className="h-8 w-8 text-blue-600" />
  }
];

const NosotrosPage: React.FC = () => {
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
              Sobre Nosotros
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Somos un equipo apasionado de profesionales digitales comprometidos con el éxito de nuestros clientes.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestra Historia</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transformando ideas en experiencias digitales desde 2015
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Coonadoc nació de la pasión por crear experiencias digitales excepcionales que ayuden a las empresas a crecer y destacar en un mundo cada vez más conectado.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A lo largo de los años, hemos evolucionado de ser una pequeña agencia a convertirnos en un socio digital integral para empresas de todos los tamaños, manteniendo siempre nuestro compromiso con la calidad y la innovación.
              </p>
              <p className="text-lg text-gray-600">
                Hoy, con un equipo multidisciplinario de expertos en diseño, desarrollo, marketing y estrategia digital, estamos equipados para enfrentar cualquier desafío y convertir tu visión en realidad.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Placeholder for company image */}
              <div className="h-96 bg-gradient-to-r from-blue-400 to-blue-600 w-full flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Imagen de la empresa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestros Valores</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Los principios que nos guían
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Estos valores fundamentales definen nuestra cultura y enfoque en cada proyecto.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.id}
                className="bg-white rounded-xl p-8 shadow-sm"
                initial={{ opacity: a0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
                }}
              >
                <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Conozca a los expertos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un equipo apasionado de profesionales dedicados a hacer realidad tu visión digital.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default NosotrosPage;