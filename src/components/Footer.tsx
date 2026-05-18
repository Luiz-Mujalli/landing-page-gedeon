'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-[#00214a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex-1 space-y-6 flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold tracking-tight">
              Gedeon Monteiro
              <span className="block text-sm font-light text-blue-200/60 mt-1 uppercase tracking-widest">Terapeuta Energético</span>
            </div>
            <p className="text-blue-100/70 leading-relaxed max-w-xs">
              Transformando vidas através da terapia energética, consciência e espiritualidade prática.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/gedeonmonteiro?igsh=MXdkcDZoZ2wya2V1Zw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/img/instagram.png"
                    alt="Instagram Gedeon Monteiro"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 flex flex-col items-center">
            <h4 className="text-lg font-bold mb-6 text-white text-center">Navegação</h4>
            <ul className="space-y-4 text-blue-100/70 text-center">
              <li>
                <Link 
                  href="#inicio" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, '#inicio')}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="#sobre" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, '#sobre')}
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link 
                  href="#abordagens" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, '#abordagens')}
                >
                  Abordagens
                </Link>
              </li>
              <li>
                <Link 
                  href="#depoimentos" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, '#depoimentos')}
                >
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-6 text-white">Ética Profissional</h4>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
              Atendimento em conformidade com o Código de Ética Profissional, garantindo sigilo absoluto e excelência técnica em todas as sessões.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-blue-200/40">
          <p>© {currentYear} Gedeon Monteiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
