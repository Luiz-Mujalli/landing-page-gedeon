'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Anilda',
    text: 'Já vinha de outras terapias que me deram consciência dos meus bloqueios, mas nenhuma me deu ferramentas para acessá-los. Com o trabalho do Gedeon Monteiro, além de trazer questões que achei que estavam resolvidas, percebi que seria através do amor próprio que tudo se libertaria. Há coisas que nunca falei a ninguém — e consegui falar, sem julgamento. Foi transformador.',
  },
  {
    id: 2,
    name: 'Ana',
    text: 'Antes da sessão, me sentia presa dentro de mim, com uma angústia sem explicação. O que mais me marcou foi como os resultados vieram sem que eu precisasse forçar nada — e consegui falar de algo que havia aprisionado dentro de mim há muito tempo. Saí me sentindo leve e mais segura. É algo além da terapia convencional. Se tem dúvidas: só faça.',
  },
  {
    id: 3,
    name: 'Vanilson',
    text: 'Antes das sessões, me sentia confuso, ansioso e sem confiança. O que mais me marcou foi a condução acolhedora e clara — cada etapa foi explicada com transparência. As conversas me ajudaram a enxergar situações de uma perspectiva diferente. Saí com mais segurança nas minhas decisões e com clareza sobre o que me gerava ansiedade. Vale muito a pena.',
  },
  {
    id: 4,
    name: 'David',
    text: 'Vi um story no Instagram, me identifiquei e resolvi entender por que não estava me sentindo bem — cheio de dúvidas e com traumas do passado. Na sessão, o que mais me marcou foi a libertação imediata, interna e externa. Voltei a querer me amar. É uma reconexão de corpo e alma. Super indico para quem quer se reencontrar.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive items per page logic
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section id="depoimentos" className="py-20 bg-[#d4d4d4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00214a] uppercase tracking-tight">
            AVALIAÇÕES DE CLIENTES
          </h2>
        </div>

        <div className="relative group px-4 md:px-0">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-xl text-[#00214a] transition-all duration-300 ${
              currentIndex === 0 ? 'opacity-0 invisible' : 'opacity-100 visible hover:bg-gray-50'
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute -right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-xl text-[#00214a] transition-all duration-300 ${
              currentIndex >= maxIndex ? 'opacity-0 invisible' : 'opacity-100 visible hover:bg-gray-50'
            }`}
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-4 transition-opacity duration-500 ${
                    itemsPerPage === 3 
                      ? 'w-1/3' 
                      : 'w-full'
                  }`}
                >
                  <div className="bg-[#e3e3e3] p-8 rounded-2xl shadow-sm border-none hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-[#1e293b] italic mb-8 flex-grow leading-relaxed">
                      "{t.text}"
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div>
                        <h4 className="font-bold text-[#1e3a8a] text-lg">{t.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-[#00214a] w-6' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
