import React from 'react';
import { Flame, Phone, MapPin, Clock, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080605] border-t border-white/10 pt-16 pb-12 text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EA580C] flex items-center justify-center text-white shadow-md">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block">
                  FORNO NOBILE
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#EA580C] font-semibold">
                  Pizzaria Artesanal
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F8FAFC]/70 leading-relaxed font-normal max-w-sm">
              Massa de fermentação lenta por 48 horas, ingredientes de alta qualidade e forneamento a lenha a 480°C no coração de São Paulo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Forno Nobile"
                className="p-2.5 rounded-xl bg-[#14110F] border border-white/10 text-white/80 hover:text-[#EA580C] hover:border-[#EA580C]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Forno Nobile"
                className="p-2.5 rounded-xl bg-[#14110F] border border-white/10 text-white/80 hover:text-[#EA580C] hover:border-[#EA580C]/40 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#F8FAFC]/70">
              <li>
                <a href="#inicio" className="hover:text-[#EA580C] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#EA580C] transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#EA580C] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#EA580C] transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#EA580C] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm text-[#F8FAFC]/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>{RESTAURANT_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_CONFIG.phoneRaw}`}
                  className="hover:text-white font-semibold text-white/90"
                >
                  {RESTAURANT_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>{RESTAURANT_CONFIG.hours.weekdays}</span>
              </li>
            </ul>
          </div>

          {/* Process Quality Card */}
          <div className="lg:col-span-3 p-5 rounded-2xl bg-[#120F0D] border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                Processo Artesanal
              </span>
              <p className="text-xs text-[#F8FAFC]/80 leading-relaxed">
                Massa fermentada pacientemente por 48 horas. Tomates selecionados e forno a lenha a 480°C.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#F8FAFC]/60">
              <span>Cocção em 90 segundos</span>
              <span className="text-white/80 font-medium">Forno a Lenha</span>
            </div>
          </div>
        </div>

        {/* Bottom bar with exact required disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8FAFC]/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. Todos os direitos reservados.
          </p>

          {/* Required Discreet CF Web Studio Disclaimer */}
          <p className="text-center md:text-right text-[#F8FAFC]/45 max-w-md">
            {RESTAURANT_CONFIG.demoDisclaimer}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/80 hover:text-[#EA580C] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
