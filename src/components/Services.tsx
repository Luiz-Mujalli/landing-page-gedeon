import React from 'react';
import { Brain, Heart, Zap } from 'lucide-react';

const services = [
  {
    title: 'Identificação',
    description: 'Eu te ajudo a enxergar padrões, que muitas vezes passam despercebidos, mas continuam influenciando sua vida.',
    icon: <Brain className="w-10 h-10" />,
  },
  {
    title: 'Limpeza',
    description: 'Trabalho bloqueios emocionais, traumas, crenças e cargas acumuladas que mantêm você preso nos mesmos ciclos.',
    icon: <Heart className="w-10 h-10" />,
  },
  {
    title: 'Reconexão',
    description: 'O objetivo é ajudar você a recuperar clareza e direção para viver de forma mais alinhada consigo mesmo.',
    icon: <Zap className="w-10 h-10" />,
  },
];

const Services = () => {
  return (
    <section id="abordagens" className="py-20 bg-[#d4d4d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00214a] uppercase tracking-tight">
            ESTRUTURA DAS SESSÕES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#dedede] p-10 rounded-2xl border-none shadow-sm hover:shadow-md transition-all duration-300 text-center space-y-6"
            >
              <div className="inline-flex items-center justify-center text-[#0071fc] bg-blue-50 p-4 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#00214a]">{service.title}</h3>
              <p className="text-[#1e293b] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
