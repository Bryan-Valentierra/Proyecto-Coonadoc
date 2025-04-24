import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

type PlanFeature = {
  name: string;
  included: boolean;
};

type PricingPlan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 499,
    description: 'Ideal para pequeños negocios que quieren comenzar su presencia online.',
    features: [
      { name: 'Hasta 5 páginas', included: true },
      { name: 'Diseño responsive', included: true },
      { name: 'Formulario de contacto', included: true },
      { name: 'Integración con redes sociales', included: true },
      { name: 'SEO básico', included: true },
      { name: 'Optimización de velocidad', included: true },
      { name: 'Dominio personalizado', included: false },
      { name: 'Hosting premium', included: false },
      { name: 'Certificado SSL', included: true },
      { name: 'Actualizaciones mensuales', included: false },
    ],
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: 999,
    description: 'Perfecto para empresas en crecimiento que necesitan una presencia web sólida.',
    features: [
      { name: 'Hasta 10 páginas', included: true },
      { name: 'Diseño responsive', included: true },
      { name: 'Formulario de contacto avanzado', included: true },
      { name: 'Integración con redes sociales', included: true },
      { name: 'SEO avanzado', included: true },
      { name: 'Optimización de velocidad', included: true },
      { name: 'Dominio personalizado', included: true },
      { name: 'Hosting premium', included: true },
      { name: 'Certificado SSL', included: true },
      { name: 'Actualizaciones mensuales', included: false },
    ],
    popular: true,
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    price: 1999,
    description: 'Solución completa para grandes empresas con necesidades específicas.',
    features: [
      { name: 'Páginas ilimitadas', included: true },
      { name: 'Diseño responsive premium', included: true },
      { name: 'Formulario de contacto avanzado', included: true },
      { name: 'Integración con redes sociales', included: true },
      { name: 'SEO profesional', included: true },
      { name: 'Optimización de velocidad', included: true },
      { name: 'Dominio personalizado', included: true },
      { name: 'Hosting premium', included: true },
      { name: 'Certificado SSL', included: true },
      { name: 'Actualizaciones mensuales', included: true },
    ],
  },
];

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const toggleBillingPeriod = () => {
    setBillingPeriod(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  const getPrice = (basePrice: number) => {
    if (billingPeriod === 'annual') {
      return Math.round(basePrice * 0.8);
    }
    return basePrice;
  };

  return (
    <section id="precios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Precios transparentes</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Planes de Diseño Web para Cada Necesidad
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Elige el plan que mejor se adapte a tus necesidades y comienza a destacar en el mundo digital.
          </p>
          
          <div className="mt-10 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`${
                billingPeriod === 'monthly' 
                  ? 'bg-white shadow-sm text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              } px-4 py-2 text-sm font-medium rounded-md transition-all duration-200`}
            >
              Pago único
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`${
                billingPeriod === 'annual' 
                  ? 'bg-white shadow-sm text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              } px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ml-1`}
            >
              Con mantenimiento <span className="text-xs font-normal text-green-600 ml-1">-20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'md:scale-105 ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{getPrice(plan.price)}€</span>
                    {billingPeriod === 'annual' && (
                      <span className="ml-2 text-sm text-gray-600">
                        /mes <span className="text-xs">(facturado anualmente)</span>
                      </span>
                    )}
                  </div>
                  {billingPeriod === 'monthly' && (
                    <p className="mt-1 text-sm text-gray-500">Pago único</p>
                  )}
                </div>
                
                <a
                  href="#contacto"
                  className={`mt-8 block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Elegir plan
                </a>
              </div>
              
              <div className="px-8 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Lo que incluye:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">¿Necesitas una solución personalizada?</p>
          <a 
            href="#contacto" 
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
          >
            Contáctanos para un presupuesto a medida →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;