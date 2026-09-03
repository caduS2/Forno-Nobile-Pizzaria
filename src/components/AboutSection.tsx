import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Flame, Clock, Star, Quote, Sparkles, UtensilsCrossed } from 'lucide-react';
import { STATS_DATA, REVIEWS_DATA } from '../data/pizzas';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1600;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = (end - start) / totalSteps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Number(current.toFixed(value % 1 !== 0 ? 1 : 0)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F8FAFC]">
      {displayValue}
      <span className="text-[#EA580C]">{suffix}</span>
    </span>
  );
}

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-[#0B0908] overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#C2410C]/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Craft Story */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1714] border border-[#EA580C]/30 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-4"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Nossa Concepção Artesanal</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-tight mb-6"
            >
              O tempo como ingrediente. <br />
              <span className="italic text-[#EA580C]">A lenha como tempero.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
              className="space-y-4 text-[#F8FAFC]/80 text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                A <strong>Forno Nobile</strong> foi concebida com um compromisso essencial: honrar a verdadeira essência da pizza artesanal napolitana através do respeito absoluto ao tempo de maturação e à pureza dos ingredientes.
              </p>
              <p>
                Cada lote de massa passa por <strong>48 horas de fermentação lenta e controlada a frio</strong>. Essa etapa transforma a estrutura do trigo, originando uma pizza extremamente leve, de digestão suave, com bordas altas, aeradas e perfumadas pelo calor do forno a lenha.
              </p>
              <p>
                Trabalhamos com farinha de moagem especial, molho rústico de tomates selecionados e queijos frescos artesanais. Uma combinação dedicada ao prazer da mesa, seja no salão, na retirada ou na comodidade da entrega.
              </p>
            </motion.div>

            {/* Process Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10"
            >
              <div className="p-4 rounded-xl bg-[#14110F] border border-white/5">
                <Clock className="w-5 h-5 text-[#EA580C] mb-2" />
                <h4 className="font-semibold text-sm text-white mb-1">48h de Descanso</h4>
                <p className="text-xs text-[#F8FAFC]/65">Fermentação biológica lenta para máxima leveza.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#14110F] border border-white/5">
                <Flame className="w-5 h-5 text-[#EA580C] mb-2" />
                <h4 className="font-semibold text-sm text-white mb-1">Forno a 480°C</h4>
                <p className="text-xs text-[#F8FAFC]/65">Calor uniforme para cocção rápida em 90 segundos.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#14110F] border border-white/5">
                <UtensilsCrossed className="w-5 h-5 text-[#EA580C] mb-2" />
                <h4 className="font-semibold text-sm text-white mb-1">Abertura Manual</h4>
                <p className="text-xs text-[#F8FAFC]/65">Discos moldados à mão para preservar o ar da massa.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 aspect-[4/5] bg-[#171311]">
                <img
                  src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
                  alt="Abertura artesanal de massa de pizza napolitana com borda aerada"
                  className="w-full h-full object-cover object-center filter brightness-90 hover:brightness-100 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Embedded Quote Box */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15">
                  <Quote className="w-6 h-6 text-[#EA580C] mb-2 opacity-80" />
                  <p className="text-xs sm:text-sm italic text-white/90 leading-relaxed">
                    "A verdadeira pizza não tem pressa. O fogo apenas consagra o que a paciência da massa construiu durante horas de descanso a frio."
                  </p>
                  <p className="text-xs font-semibold text-[#EA580C] mt-2">
                    — Filosofia da Arte Bianca
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Metrics Grid (48h, 480°C, 90s, 100%) */}
        <div className="rounded-3xl bg-[#14110F] border border-white/10 p-8 sm:p-12 mb-24 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#EA580C] font-bold block mb-1">
              Diferenciais do Processo
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Precisão em Cada Etapa
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS_DATA.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center flex flex-col items-center justify-between"
              >
                <div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="font-semibold text-sm sm:text-base text-[#F8FAFC] mt-2">
                    {stat.label}
                  </p>
                </div>
                <p className="text-xs text-[#F8FAFC]/65 mt-2 max-w-[200px]">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Proof: Demonstrative Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#EA580C] font-bold block mb-1">
              Experiência do Cliente
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
              Exemplo de como suas avaliações podem aparecer
            </h3>
            <p className="text-xs sm:text-sm text-[#F8FAFC]/60">
              Espaço dedicado para exibir comentários e notas reais dos seus clientes no Google e redes sociais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS_DATA.map((review, i) => (
              <motion.div
                key={review.author + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#14110F] border border-white/10 hover:border-[#EA580C]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#EA580C]">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <h4 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                    "{review.highlight}"
                  </h4>

                  <p className="text-sm text-[#F8FAFC]/75 leading-relaxed font-normal mb-6">
                    {review.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="font-semibold text-sm text-white">{review.author}</p>
                  <p className="text-xs text-[#EA580C]">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
