import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Send, MessageSquare, ChevronDown, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { FAQS } from '../data/pizzas';
import { RESTAURANT_CONFIG, getWhatsAppUrl } from '../data/config';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    whatsapp: '',
    tipoAtendimento: 'Reserva de Mesa',
    data: '',
    horario: '19:30',
    pessoas: '2 pessoas',
    observacoes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `🍕 *SOLICITAÇÃO DE ATENDIMENTO - FORNO NOBILE* 🍕\n\n` +
      `• *Nome:* ${formData.nome || 'Cliente'}\n` +
      `• *WhatsApp:* ${formData.whatsapp || '(11) 99999-0000'}\n` +
      `• *Tipo de Atendimento:* ${formData.tipoAtendimento}\n` +
      `• *Data:* ${formData.data || 'A definir / Imediato'}\n` +
      `• *Horário:* ${formData.horario}\n` +
      `• *Número de Pessoas:* ${formData.pessoas}\n` +
      `• *Observações:* ${formData.observacoes || 'Nenhuma'}\n\n` +
      `Aguardo confirmação da equipe. Obrigado!`;

    const whatsappUrl = getWhatsAppUrl(message);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 600);
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-[#0B0908] overflow-hidden">
      {/* Warm Ambient Glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#EA580C]/12 rounded-full blur-[160px] pointer-events-none"
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Atendimento & Reservas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-tight"
          >
            Fale Conosco para <br />
            <span className="italic text-[#EA580C]">Reservas & Pedidos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="mt-4 text-[#F8FAFC]/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Preencha os dados para preparar seu contato diretamente no WhatsApp da Forno Nobile. Atendimento rápido e sem burocracia.
          </motion.p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-3xl bg-[#14110F] border border-white/10 p-6 sm:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Nome & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-nome" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="form-nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Gabriel Santos"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1815] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-whatsapp" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                    WhatsApp para Retorno *
                  </label>
                  <input
                    id="form-whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 99999-0000"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1815] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Tipo de Atendimento */}
              <div>
                <label htmlFor="form-tipo" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                  Tipo de Atendimento *
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['Reserva de Mesa', 'Pedido para Retirada', 'Pedido para Delivery'] as const).map((tipo) => {
                    const isSelected = formData.tipoAtendimento === tipo;
                    return (
                      <button
                        key={tipo}
                        type="button"
                        onClick={() => setFormData({ ...formData, tipoAtendimento: tipo })}
                        className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer text-center ${
                          isSelected
                            ? 'bg-[#EA580C] text-white shadow-md'
                            : 'bg-[#1D1815] text-[#F8FAFC]/75 hover:bg-[#251F1B] border border-white/5'
                        }`}
                      >
                        {tipo}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Data, Horário e Número de Pessoas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="form-data" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                    Data Desejada
                  </label>
                  <input
                    id="form-data"
                    type="date"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1815] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-horario" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                    Horário
                  </label>
                  <select
                    id="form-horario"
                    value={formData.horario}
                    onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1815] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EA580C] transition-colors"
                  >
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-pessoas" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                    Número de Pessoas
                  </label>
                  <select
                    id="form-pessoas"
                    value={formData.pessoas}
                    onChange={(e) => setFormData({ ...formData, pessoas: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1D1815] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EA580C] transition-colors"
                  >
                    <option value="1 a 2 pessoas">1 a 2 pessoas</option>
                    <option value="3 a 4 pessoas">3 a 4 pessoas</option>
                    <option value="5 a 8 pessoas">5 a 8 pessoas</option>
                    <option value="9+ pessoas (grupo)">9+ pessoas (grupo)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Observações */}
              <div>
                <label htmlFor="form-observacoes" className="block text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider mb-2">
                  Observações
                </label>
                <textarea
                  id="form-observacoes"
                  rows={3}
                  value={formData.observacoes}
                  onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                  placeholder="Ex: Preferência por mesa no salão interno, itens específicos que deseja adiantar ou dúvidas..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1D1815] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="btn-submit-contato"
                disabled={submitted}
                className="w-full py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] disabled:bg-emerald-600 text-white font-semibold text-base transition-all duration-300 shadow-xl shadow-[#EA580C]/25 hover:shadow-[#EA580C]/40 flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Preparando mensagem no WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem via WhatsApp</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[#F8FAFC]/50">
                O envio formata sua mensagem e abre diretamente o WhatsApp da Forno Nobile.
              </p>
            </form>
          </motion.div>

          {/* Right: Direct Contact Points & FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#14110F] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold">
                    Central de Atendimento
                  </span>
                  <a
                    href={`tel:${RESTAURANT_CONFIG.phoneRaw}`}
                    className="block font-display text-xl font-bold text-white hover:text-[#EA580C] transition-colors"
                  >
                    {RESTAURANT_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#F8FAFC]/60 mt-0.5">
                    Atendimento telefônico ou via WhatsApp
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#14110F] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#201A16] border border-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold">
                    Endereço
                  </span>
                  <p className="font-semibold text-sm text-white">
                    {RESTAURANT_CONFIG.address.street}
                  </p>
                  <p className="text-xs text-[#F8FAFC]/60">
                    {RESTAURANT_CONFIG.address.district}, {RESTAURANT_CONFIG.address.city} - {RESTAURANT_CONFIG.address.state}
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14110F] border border-white/10">
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>Dúvidas Frequentes</span>
              </h3>

              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-white/5 bg-[#1B1613] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#F8FAFC] hover:text-[#EA580C] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#EA580C] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <p className="p-4 pt-0 text-xs text-[#F8FAFC]/75 leading-relaxed font-normal">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
