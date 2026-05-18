'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { handleLeadCapture } from '@/src/app/actions/lead-capture';
import { Loader2 } from 'lucide-react';

const Ebook = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      let result = numbers;
      if (numbers.length > 0) result = `(${numbers.slice(0, 2)}`;
      if (numbers.length > 2) result += `) ${numbers.slice(2, 3)}`;
      if (numbers.length > 3) result += ` ${numbers.slice(3, 7)}`;
      if (numbers.length > 7) result += `-${numbers.slice(7, 11)}`;
      return result;
    }
    return phone;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      whatsapp: phone,
    };

    startTransition(async () => {
      const result = await handleLeadCapture(data);
      if (result.success) {
        setSubmitted(true);
      } else {
        const errorMessage = typeof result.error === 'string' 
          ? result.error 
          : result.error && typeof result.error === 'object'
            ? Object.values(result.error).flat()[0]
            : 'Ocorreu um erro ao processar sua solicitação.';
        setError(errorMessage);
      }
    });
  };

  return (
    <section className="py-20 bg-[#c8c8c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#dedede] rounded-[2rem] p-8 md:p-16 shadow-sm border-none overflow-hidden">
          {/* Left: Image Side */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[450px] aspect-[3/4] group">
              <Image
                src="/img/capa-e-book8.png"
                alt="E-book Exclusivo Gedeon Monteiro"
                fill
                className="object-contain mix-blend-multiply transform group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 450px"
                priority
              />
            </div>
          </div>

          {/* Right: Form Side */}
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-4 w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00214a] leading-tight">
                E-BOOK EXCLUSIVO
              </h2>
              <p className="text-[#1e293b] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Baixe agora meu guia prático sobre inteligência emocional e descubra como fortalecer sua mente para os desafios do cotidiano.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1e293b] mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-all disabled:opacity-50"
                    placeholder="Seu nome completo"
                    disabled={isPending}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1e293b] mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-all disabled:opacity-50"
                    placeholder="Seu melhor e-mail"
                    disabled={isPending}
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-[#1e293b] mb-1">WhatsApp</label>
                  <input
                    type="text"
                    id="whatsapp"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-all disabled:opacity-50"
                    placeholder="(99) 9 9999-9999"
                    disabled={isPending}
                  />
                </div>
                
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#0071fc] text-white py-4 rounded-xl font-bold text-lg cursor-pointer hover:bg-[#0030fc]/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Baixar Agora Gratuitamente'
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-blue-50 p-8 rounded-2xl text-center space-y-4 border border-blue-100 animate-in fade-in zoom-in duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a]">Obrigado!</h3>
                <p className="text-[#1e293b]">O link para download do e-book foi enviado para o seu e-mail com sucesso.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
