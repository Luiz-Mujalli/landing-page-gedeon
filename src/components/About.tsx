import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-[#c9c9c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Side */}
          <div className="relative group flex justify-center lg:justify-start">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg w-full max-w-[500px] aspect-[4/5]">
              <Image
                src="/img/sobre.jpg"  
                alt="Gedeon Monteiro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Right: Text Side */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00214a] leading-tight">
              SOBRE GEDEON MONTEIRO
            </h2>
            <div className="space-y-6 text-[#1e293b] text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Durante muito tempo busquei entender por que tantas pessoas se sentem travadas, emocionalmente
                cansadas e desconectadas de si mesmas, mesmo tentando mudar.
              </p>
              <p>
                Foi mergulhando profundamente em estudos sobre consciência, comportamento humano, energia e
                espiritualidade prática que compreendi algo importante: muitas dores não são apenas emocionais ou
                mentais. Elas também envolvem padrões invisíveis e desconexão da própria essência.
              </p>
              <p>
                Meu trabalho não é criar dependência.
                É ajudar você a desenvolver consciência, reconexão interna e lucidez sobre si mesmo.
                Porque a vida não está te punindo.
                Ela só está mostrando que existe uma parte sua pedindo atenção.              
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
