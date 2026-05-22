import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#d4d4d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-2">
              <span className="block text-[#00214a] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                GEDEON MONTEIRO - ATENDIMENTO 100% ONLINE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#00214a] leading-tight">
                Nem tudo que te trava é <em>psicológico</em>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-[#1e293b] leading-relaxed max-w-xl mx-auto lg:mx-0">
              As vezes o problema não é falta de esforço.
              É excesso de peso emocional, padrões invisíveis e desconexão de si mesmo.
              Meu trabalho une terapia energética, consciência e espiritualidade prática, para te ajudar a entender a raiz do que está vivendo e reencontrar clareza, equilíbrio e
              direção.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/5531992270194?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20entender%20melhor%20como%20funciona%20seu%20trabalho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0071fc] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0071fc]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="relative w-5 h-5 mr-3">
                  <Image
                    src="/img/whatsapp2.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                Agende Sua Sessão
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/img/herosection.png"
                alt="Gedeon Monteiro - Terapeuta"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
