import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Rodríguez',
    position: 'CEO',
    company: 'ModoStyle',
    content: 'Desde que lanzamos nuestra nueva web con Coonadoc, nuestras ventas online han aumentado un 45%. El diseño es moderno, funcional y exactamente lo que buscábamos.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
  },
  {
    id: 2,
    name: 'Javier Martín',
    position: 'Director de Marketing',
    company: 'Innova Plus',
    content: 'Trabajar con el equipo de Coonadoc ha sido una experiencia excelente. Entendieron perfectamente nuestras necesidades y crearon una web que supera nuestras expectativas.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
  },
  {
    id: 3,
    name: 'Elena Castillo',
    position: 'Fundadora',
    company: 'EcoVida',
    content: 'Nuestra tienda online ha recibido muchos elogios por su diseño y usabilidad. El proceso fue sencillo y el resultado final es impresionante. Totalmente recomendable.',
    rating: 4,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
  },
];

const slideVariants = {
  enter: (direction: number) => ({ 
    x: direction > 0 ? 500 : -500,
    opacity: 0 
  }),
  center: { 
    x: 0,
    opacity: 1 
  },
  exit: (direction: number) => ({ 
    x: direction > 0 ? -500 : 500,
    opacity: 0 
  })
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nos enorgullece el feedback de quienes han confiado en nosotros para sus proyectos digitales.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:block"
            aria-label="Testimonio anterior"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>
          
          <motion.button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:block"
            aria-label="Testimonio siguiente"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;