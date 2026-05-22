'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Abordagens', href: '#abordagens' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#dedede] shadow-md py-3' : 'bg-[#d4d4d4] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 max-w-[70%] sm:max-w-none">
            <Link 
              href="#inicio" 
              className="flex flex-col min-[901px]:flex-row min-[901px]:items-center text-[#00214a] font-bold text-lg sm:text-xl tracking-tight leading-none"
              onClick={(e) => handleSmoothScroll(e, '#inicio')}
            >
              <span className="leading-none">Gedeon Monteiro</span>
              <span className="hidden min-[901px]:block w-[1px] h-4 bg-gray-400 mx-3 self-center"></span>
              <span className="font-light text-gray-500 text-base sm:text-lg min-[901px]:text-lg uppercase tracking-widest min-[901px]:normal-case min-[901px]:tracking-normal leading-none min-[901px]:mt-[2px]">
                Terapia Energética e Espiritual
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden below 900px */}
          <div className="hidden min-[901px]:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1e293b] hover:text-[#1e3a8a] transition-colors font-medium text-sm"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/5531992270194?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20entender%20melhor%20como%20funciona%20seu%20trabalho."
              className="bg-[#0071fc] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0071fc]/90 transition-all shadow-sm"
            >
              Agendar
            </Link>
          </div>

          {/* Mobile menu button - Visible below 900px */}
          <div className="min-[901px]:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1e293b] hover:text-[#1e3a8a]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Animated for smooth transition */}
      <div
        ref={menuRef}
        className={`min-[901px]:hidden absolute top-full left-0 w-full bg-white z-40 shadow-xl transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'translate-x-0 opacity-100 visible' 
            : 'translate-x-full opacity-0 invisible'
        } overflow-hidden border-t border-gray-100`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-xl font-semibold text-[#1e293b] border-b border-gray-50 hover:text-[#1e3a8a] transition-colors"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-12 pb-8">
            <Link
              href="https://wa.me/5531992270194?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20entender%20melhor%20como%20funciona%20seu%20trabalho."
              className="group flex items-center justify-center gap-3 w-full text-center bg-[#0071fc] text-white px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-[#0071fc]/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-5 h-5 transition-transform group-hover:scale-110">
                <Image
                  src="/img/whatsapp2.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                  sizes="20px"
                />
              </div>
              Agendar Consulta
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
