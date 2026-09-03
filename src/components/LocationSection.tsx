import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, Clock, Phone, ExternalLink, MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, getWhatsAppUrl } from '../data/config';

interface LocationSectionProps {
  onOpenContact: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const address = RESTAURANT_CONFIG.address.full;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de informações sobre como chegar à Forno Nobile.');

  return (
    <section id="localizacao" className="relative py-24 lg:py-32 bg-[#0E0C0A] overflow-hidden">
      {/* Glow background elements */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-[#EA580C]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C2410C]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1714] border border-[#EA580C]/30 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-4"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>São Paulo • Centro</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-tight"
          >
            Venha nos Visitar ou <br />
            <span className="italic text-[#EA580C]">Retire seu Pedido no Forno</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="mt-4 text-[#F8FAFC]/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Atendimento no salão com ambiente acolhedor e balcão dedicado para retirada rápida de pedidos quentinhos direto do forno a lenha.
          </motion.p>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Location & Hours Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#14110F] border border-white/10 shadow-xl"
          >
            <div>
              {/* Address Highlight */}
              <div className="flex items-start gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="p-3.5 rounded-2xl bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#EA580C] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold">
                    Endereço
                  </span>
                  <p className="font-display text-xl font-bold text-white mt-1 leading-snug">
                    {RESTAURANT_CONFIG.address.street}
                  </p>
                  <p className="text-sm text-[#F8FAFC]/70 mt-0.5">
                    {RESTAURANT_CONFIG.address.district}, {RESTAURANT_CONFIG.address.city} - {RESTAURANT_CONFIG.address.state}
                  </p>

                  {/* Copy button & Google Maps link */}
                  <div className="flex flex-wrap items-center gap-2.5 mt-4">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201A16] hover:bg-[#2A231E] border border-white/10 text-xs text-[#F8FAFC]/90 font-medium transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Endereço Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#EA580C]" />
                          <span>Copiar Endereço</span>
                        </>
                      )}
                    </button>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EA580C]/15 hover:bg-[#EA580C]/25 border border-[#EA580C]/30 text-xs text-[#EA580C] font-semibold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Traçar Rota</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="flex items-start gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="p-3.5 rounded-2xl bg-[#201A16] border border-white/10 text-[#EA580C] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold block mb-2">
                    Horário de Funcionamento
                  </span>

                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between text-[#F8FAFC]/90">
                      <span>Terça a Quinta:</span>
                      <span className="font-semibold text-white">18:00 às 23:30</span>
                    </div>
                    <div className="flex justify-between text-[#F8FAFC]/90">
                      <span>Sexta e Sábado:</span>
                      <span className="font-semibold text-[#EA580C]">18:00 às 00:30</span>
                    </div>
                    <div className="flex justify-between text-[#F8FAFC]/90">
                      <span>Domingo:</span>
                      <span className="font-semibold text-white">18:00 às 23:00</span>
                    </div>
                    <div className="flex justify-between text-[#F8FAFC]/50">
                      <span>Segunda-feira:</span>
                      <span className="italic">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone Contact */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#201A16] border border-white/10 text-[#EA580C] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold block">
                    Telefone & WhatsApp
                  </span>
                  <a
                    href="tel:11999990000"
                    className="font-display text-xl font-bold text-white hover:text-[#EA580C] transition-colors"
                  >
                    {RESTAURANT_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#EA580C]/25 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                <span>Solicitar Reserva ou Pedido</span>
                <Navigation className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right: Rich Interactive Visual Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[400px] lg:min-h-full flex flex-col justify-between bg-[#110E0C]"
          >
            {/* Dark Styled Map Graphic Mockup */}
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full opacity-60 mix-blend-luminosity bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=1200&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#14110F]/85 to-[#14110F]/60" />
            </div>

            {/* Top Map Bar */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span className="font-medium">São Paulo • Centro</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#EA580C] text-white text-xs font-semibold hover:bg-[#C2410C] transition-colors shadow-md flex items-center gap-1.5"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Central Pin Pulse */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center p-6 text-center">
              <div className="relative mb-3">
                <div className="absolute -inset-4 bg-[#EA580C]/40 rounded-full blur-lg animate-ping" />
                <div className="relative w-14 h-14 rounded-full bg-[#EA580C] border-2 border-white flex items-center justify-center shadow-2xl shadow-[#EA580C]/80">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 max-w-sm shadow-2xl">
                <h4 className="font-display font-bold text-lg text-white">
                  {RESTAURANT_CONFIG.name}
                </h4>
                <p className="text-xs text-[#F8FAFC]/80 mt-1">
                  {RESTAURANT_CONFIG.address.full}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#EA580C] font-semibold">Salão & Retirada</span>
                  <span className="text-white/60">Mesas & Balcão</span>
                </div>
              </div>
            </div>

            {/* Bottom Details Footer */}
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/90 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-[#F8FAFC]/80">
                  Atendimento presencial, retirada no balcão e delivery
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#EA580C] hover:text-[#F97316] flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {RESTAURANT_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
