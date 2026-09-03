import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_CONFIG, getWhatsAppUrl } from '../data/config';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'retirada' | 'delivery'>('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 12 : 0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    let itemsText = cart
      .map(
        (ci) =>
          `• ${ci.quantity}x *${ci.item.name}* - R$ ${(ci.item.price * ci.quantity).toFixed(2).replace('.', ',')}`
      )
      .join('\n');

    const message =
      `🍕 *NOVO PEDIDO - FORNO NOBILE PIZZARIA* 🍕\n\n` +
      `*Itens Escolhidos:*\n${itemsText}\n\n` +
      `• *Modalidade:* ${orderType === 'delivery' ? 'Entrega Delivery' : 'Retirada no Forno (Balcão)'}\n` +
      `• *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n` +
      (orderType === 'delivery' ? `• *Taxa de Entrega estimada:* R$ 12,00\n` : '') +
      `• *Total Estimado:* R$ ${total.toFixed(2).replace('.', ',')}\n\n` +
      `*Dados do Cliente:*\n` +
      `• *Nome:* ${customerName || 'Cliente'}\n` +
      (orderType === 'delivery' && deliveryAddress ? `• *Endereço de Entrega:* ${deliveryAddress}\n` : '') +
      (notes ? `• *Observações:* ${notes}\n` : '') +
      `\nOlá! Gostaria de confirmar a disponibilidade e o tempo estimado deste pedido.`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#130F0D] border-l border-white/10 h-full shadow-2xl flex flex-col justify-between z-10 text-white"
          >
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white leading-none">
                    Sua Sacola
                  </h3>
                  <span className="text-xs text-[#F8FAFC]/60">
                    {cart.reduce((s, i) => s + i.quantity, 0)} {cart.length === 1 ? 'item' : 'itens'} selecionados
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar sacola"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-white/60">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/40">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    Sua sacola está vazia
                  </h4>
                  <p className="text-xs text-[#F8FAFC]/60 max-w-xs mb-6">
                    Explore nossas pizzas de fermentação lenta no cardápio e monte seu pedido.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-semibold transition-colors"
                  >
                    Ver Cardápio
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs text-white/60">
                    <span>Itens Selecionados</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-400 hover:text-red-300 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Limpar</span>
                    </button>
                  </div>

                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="p-3.5 rounded-xl bg-[#1A1613] border border-white/5 flex items-center justify-between gap-3"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm text-white truncate">
                          {cartItem.item.name}
                        </h5>
                        <p className="text-xs text-[#EA580C] font-semibold mt-0.5">
                          R$ {(cartItem.item.price * cartItem.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] flex items-center justify-center text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Order Options Form */}
                  <form onSubmit={handleSendWhatsAppOrder} className="pt-4 border-t border-white/10 space-y-4">
                    {/* Modalidade */}
                    <div>
                      <label className="block text-xs font-semibold text-white/75 uppercase tracking-wider mb-2">
                        Modalidade do Pedido
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType('delivery')}
                          className={`py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            orderType === 'delivery'
                              ? 'bg-[#EA580C] text-white shadow-md'
                              : 'bg-[#1C1815] text-white/70 hover:bg-[#251F1B] border border-white/5'
                          }`}
                        >
                          Entrega Delivery (+R$ 12)
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('retirada')}
                          className={`py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            orderType === 'retirada'
                              ? 'bg-[#EA580C] text-white shadow-md'
                              : 'bg-[#1C1815] text-white/70 hover:bg-[#251F1B] border border-white/5'
                          }`}
                        >
                          Retirada no Forno (Grátis)
                        </button>
                      </div>
                    </div>

                    {/* Nome do Cliente */}
                    <div>
                      <label className="block text-xs font-semibold text-white/75 uppercase tracking-wider mb-1.5">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ex: Mariana Silveira"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1815] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>

                    {/* Endereço de Entrega (se delivery) */}
                    {orderType === 'delivery' && (
                      <div>
                        <label className="block text-xs font-semibold text-white/75 uppercase tracking-wider mb-1.5">
                          Endereço para Entrega
                        </label>
                        <input
                          type="text"
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="Rua, número, apto e bairro"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1815] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#EA580C]"
                        />
                      </div>
                    )}

                    {/* Observações */}
                    <div>
                      <label className="block text-xs font-semibold text-white/75 uppercase tracking-wider mb-1.5">
                        Observações (Opcional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ex: sem cebola, ponto da massa bem assada..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1815] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#EA580C]"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Drawer Footer Checkout */}
            {cart.length > 0 && (
              <div className="p-5 sm:p-6 bg-[#171311] border-t border-white/10 space-y-4">
                <div className="space-y-1.5 text-xs text-[#F8FAFC]/75">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">
                      R$ {subtotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Taxa de Entrega</span>
                      <span className="text-white font-semibold">R$ 12,00</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                    <span>Total Estimado</span>
                    <span className="font-display text-xl text-[#EA580C]">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm transition-all shadow-lg shadow-[#EA580C]/30 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Concluir Pedido no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-[#F8FAFC]/50">
                  O pedido é enviado diretamente para a nossa equipe no WhatsApp: {RESTAURANT_CONFIG.phoneDisplay}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
