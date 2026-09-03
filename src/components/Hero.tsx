import React from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, Sparkles, MessageCircle, ChevronDown } from 'lucide-react';
import { RESTAURANT_CONFIG, getWhatsAppUrl } from '../data/config';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá! Gostaria de consultar o cardápio e fazer um pedido na Forno Nobile.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-[#EA580C]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#C2410C]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Staggered CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Oven Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1613] border border-[#EA580C]/30 text-xs sm:text-sm font-medium text-[#F8FAFC]/90 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping" />
              <span className="text-[#EA580C] font-semibold">Forno a Lenha Napolitano</span>
              <span className="text-white/30">•</span>
              <span className="text-[#F8FAFC]/80">48h de Fermentação Lenta</span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
              className="font-display font-bold tracking-tight text-[#F8FAFC] leading-[1.05] mb-6 text-[2.6rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.85rem] xl:text-[5.25rem]"
            >
              Tradição napolitana <br className="hidden sm:inline" />
              forjada a <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FED7AA]">480°C</span>.
            </motion.h1>

            {/* Subheadline: Exact text from requirements */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-[#F8FAFC]/80 font-normal max-w-2xl leading-relaxed mb-8 sm:mb-10"
            >
              Massa de fermentação lenta, ingredientes selecionados e o calor intenso do forno para criar pizzas artesanais feitas para serem lembradas.
            </motion.p>

            {/* CTAs Button Row: Primary CTA with superior visual hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA (Superior Visual Hierarchy): Pedir pelo WhatsApp */}
              <a
                id="hero-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-base transition-all duration-300 shadow-xl shadow-[#EA580C]/35 hover:shadow-[#EA580C]/55 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2 focus:ring-offset-[#0B0908]"
              >
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Pedir pelo WhatsApp</span>
              </a>

              {/* Secondary CTA: Ver Cardápio */}
              <button
                id="hero-cta-cardapio"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#181412] hover:bg-[#231D19] text-[#F8FAFC] border border-white/15 hover:border-white/30 font-medium text-base transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <span>Ver Cardápio</span>
                <ChevronDown className="w-4 h-4 text-[#EA580C]" />
              </button>
            </motion.div>

            {/* Process Highlights: 48h, 480°C, 90s */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 sm:mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
            >
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">48h</span>
                <span className="text-xs sm:text-sm text-[#F8FAFC]/65 mt-0.5 block">Fermentação lenta</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">480°C</span>
                <span className="text-xs sm:text-sm text-[#F8FAFC]/65 mt-0.5 block">Forno a lenha</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-[#EA580C]">90s</span>
                <span className="text-xs sm:text-sm text-[#F8FAFC]/65 mt-0.5 block">Cocção rápida</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#EA580C]/40 via-white/5 to-transparent shadow-2xl shadow-black/80">
                <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#14110F]">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
                    alt="Pizza artesanal napolitana assando com borda aerada no forno a lenha da Forno Nobile"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Inside badge: Massa Viva & Crocante */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-[#F8FAFC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Massa Leve & Aerada</span>
                  </div>

                  {/* Bottom showcase card inside hero image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-[#EA580C] font-semibold">
                          Assinatura Artesanal
                        </p>
                        <h2 className="font-display font-bold text-lg text-white">
                          Margherita di Bufala
                        </h2>
                      </div>
                      <span className="text-[#F8FAFC] font-display font-bold text-lg">
                        R$ 74
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: Process Highlight (Replaces fake award) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -top-4 -right-4 sm:top-6 sm:-right-8 px-4 py-3 rounded-2xl bg-[#181411]/95 backdrop-blur-lg border border-[#EA580C]/40 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C]">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Maturação a Frio</p>
                  <p className="text-[11px] text-white/60">48 horas de descanso</p>
                </div>
              </motion.div>

              {/* Floating Pill 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 px-4 py-3 rounded-2xl bg-[#181411]/95 backdrop-blur-lg border border-white/15 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#EA580C]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Cocção a 90 Segundos</p>
                  <p className="text-[11px] text-white/60">Forno intenso a 480°C</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
