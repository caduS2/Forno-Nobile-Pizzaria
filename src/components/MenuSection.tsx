import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Sparkles, Flame, Eye, ShoppingBag, X, MessageCircle } from 'lucide-react';
import { MenuItem, CategoryId } from '../types';
import { MENU_CATEGORIES, PIZZA_ITEMS } from '../data/pizzas';
import { getWhatsAppUrl } from '../data/config';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onDirectOrder: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('destaques');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const filteredItems = PIZZA_ITEMS.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const handleOrderWhatsApp = (item: MenuItem) => {
    const message = `Olá, Forno Nobile! Gostaria de pedir: *${item.name}* (${item.formattedPrice}).`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const getCategoryLabel = (id: CategoryId) => {
    switch (id) {
      case 'destaques': return 'Destaque';
      case 'classicas': return 'Clássica';
      case 'especiais': return 'Especial';
      case 'doces': return 'Doce';
      case 'bebidas': return 'Bebida';
      default: return 'Cardápio';
    }
  };

  return (
    <section id="cardapio" className="relative py-24 lg:py-32 bg-[#0E0C0A] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#C2410C]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1613] border border-[#EA580C]/30 text-xs uppercase tracking-widest text-[#EA580C] font-semibold mb-4"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Cardápio Artesanal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-tight"
          >
            Pizzas Napolitanas & <br className="hidden sm:inline" />
            <span className="italic text-[#EA580C]">Receitas Especiais</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="mt-4 text-[#F8FAFC]/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Massas abertas manualmente, molho de tomates selecionados e forneamento veloz a 480°C. Escolha seu sabor e peça diretamente via WhatsApp.
          </motion.p>
        </div>

        {/* Category Filter Tabs: Destaques, Clássicas, Especiais, Doces, Bebidas */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 sm:mb-16 no-scrollbar gap-2.5">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C] flex items-center gap-2 ${
                  isActive
                    ? 'text-white bg-[#EA580C] shadow-lg shadow-[#EA580C]/30 font-semibold'
                    : 'text-[#F8FAFC]/75 bg-[#171412] hover:bg-[#201A16] border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid for Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            const isAdded = !!addedItemIds[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: 'easeOut' }}
                className="group relative rounded-2xl bg-[#14110F] border border-white/10 hover:border-[#EA580C]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#EA580C]/15 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Image Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1916]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/75 backdrop-blur-md text-[#FED7AA] border border-[#EA580C]/30">
                      {item.badge || getCategoryLabel(item.category)}
                    </span>

                    {item.chefChoice && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#EA580C] text-white shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Chef
                      </span>
                    )}
                  </div>

                  {/* Quick Preview Hover Button */}
                  <button
                    onClick={() => setSelectedItem(item)}
                    aria-label={`Ver ingredientes de ${item.name}`}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white/90 hover:text-[#EA580C] hover:bg-black border border-white/15 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category pill & Title & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#EA580C] font-semibold block mb-0.5">
                          {getCategoryLabel(item.category)}
                        </span>
                        <h3 className="font-display text-xl font-bold text-[#F8FAFC] group-hover:text-[#EA580C] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-display font-bold text-lg text-[#EA580C] whitespace-nowrap mt-1">
                        {item.formattedPrice}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-[#F8FAFC]/75 text-sm leading-relaxed line-clamp-2 mb-4 font-normal">
                      {item.description}
                    </p>

                    {/* Ingredients Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6 min-h-[26px]">
                      {item.ingredients.slice(0, 3).map((ing, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#1F1A16] border border-white/5 text-[11px] text-[#F8FAFC]/65"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-[#EA580C] font-medium self-center">
                          +{item.ingredients.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/5 grid grid-cols-12 gap-2.5">
                    {/* Add to multi-item bag button */}
                    <button
                      onClick={() => handleAdd(item)}
                      aria-label={`Adicionar ${item.name} à sacola`}
                      className={`col-span-4 py-2.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all duration-300 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#1E1916] hover:bg-[#28221D] text-[#F8FAFC] border border-white/10 hover:border-white/25'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Adicionado</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#EA580C]" />
                          <span>Sacola</span>
                        </>
                      )}
                    </button>

                    {/* Direct WhatsApp Order Button */}
                    <button
                      onClick={() => handleOrderWhatsApp(item)}
                      className="col-span-8 py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#EA580C] hover:bg-[#C2410C] text-white flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md shadow-[#EA580C]/20 hover:shadow-[#EA580C]/40 cursor-pointer focus:outline-none"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Pedir pelo WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-[#151210] border border-white/15 overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full bg-[#1A1613]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151210] to-transparent" />
                <button
                  onClick={() => setSelectedItem(null)}
                  aria-label="Fechar detalhes"
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#EA580C] border border-white/20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                {selectedItem.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#EA580C] text-white">
                    {selectedItem.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold block">
                      {getCategoryLabel(selectedItem.category)}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {selectedItem.name}
                    </h3>
                  </div>
                  <span className="font-display text-2xl font-bold text-[#EA580C]">
                    {selectedItem.formattedPrice}
                  </span>
                </div>

                <p className="text-sm text-[#F8FAFC]/80 leading-relaxed mb-6 font-normal">
                  {selectedItem.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-[#EA580C] font-bold mb-2">
                    Ingredientes Selecionados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-[#201A16] border border-white/10 text-xs text-[#F8FAFC]/80"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      handleAdd(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="w-full py-3.5 rounded-xl bg-[#221C18] hover:bg-[#2C241F] text-white font-semibold text-sm border border-white/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#EA580C]" />
                    <span>Adicionar à Sacola</span>
                  </button>

                  <button
                    onClick={() => {
                      handleOrderWhatsApp(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#EA580C]/25 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir pelo WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
