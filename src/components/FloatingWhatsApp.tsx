import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, getWhatsAppUrl } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = 'Olá! Gostaria de informações sobre o cardápio e atendimento da Forno Nobile.';
  const whatsappUrl = getWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip Label */}
      <div
        className={`hidden sm:block px-3.5 py-1.5 rounded-full bg-[#181412]/95 backdrop-blur-md border border-white/15 text-xs text-white shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Fale Conosco no WhatsApp</span>
      </div>

      {/* WhatsApp Button */}
      <a
        id="btn-floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp com a Forno Nobile"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white/20 text-white relative z-10" />
      </a>
    </div>
  );
};
