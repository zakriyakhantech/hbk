import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  Gift, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    cartTotalPKR, 
    formatPrice,
    setIsCheckoutOpen,
    discountCode,
    discountPercent,
    applyDiscount,
    addToCart
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoMsg, setPromoMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [isGiftWrap, setIsGiftWrap] = useState(false);

  if (!isCartOpen) return null;

  // Free shipping threshold (HBK offers free shipping on all orders in Pakistan!)
  const freeShipping = true;
  const discountAmount = Math.round((cartTotalPKR * discountPercent) / 100);
  const giftWrapCost = isGiftWrap ? 300 : 0;
  const grandTotal = Math.max(0, cartTotalPKR - discountAmount + giftWrapCost);

  // Suggested add-on product (e.g. lightweight all season fleece)
  const upsellProduct = PRODUCTS.find(p => p.id === 'hbk-summer-cool-fleece') || PRODUCTS[1];

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyDiscount(promoInput);
    setPromoMsg({ text: res.message, ok: res.success });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#DECDB7]">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E8E1D5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8C6D46]" />
              <h2 className="font-serif font-bold text-lg text-[#1C1A17]">Your Blanket Bag</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F2ECE1] text-[#7A6B58]">
                {cart.reduce((c, i) => c + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#F2ECE1] text-[#7A7265] hover:text-[#1C1A17] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nationwide Free Shipping Alert Bar */}
          <div className="bg-[#1C1A17] text-[#EDE7DE] px-4 py-2.5 text-xs flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#D9A76A] shrink-0" />
            <p className="flex-1 text-[11px]">
              <strong className="text-[#D9A76A]">FREE Courier Shipping</strong> across all of Pakistan on this order!
            </p>
          </div>

          {/* Cart Items Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#8C6D46]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#1C1A17]">Your bag is empty</h3>
                <p className="text-xs text-[#7A7265] max-w-xs mx-auto">
                  Discover Pakistan's softest 2-Ply Korean mink and cozy 1-ply flannel blankets directly from our mill.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] transition-all cursor-pointer shadow-sm"
                >
                  Explore Winter Blankets
                </button>
              </div>
            ) : (
              <>
                <div className="divide-y divide-[#E8E1D5]">
                  {cart.map(item => (
                    <div 
                      key={`${item.product.id}-${item.selectedVariant.id}-${item.selectedSize}`}
                      className="py-4 flex gap-3.5 first:pt-0"
                    >
                      <img
                        src={item.selectedVariant.image || item.product.images[0]}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-20 h-24 rounded-lg object-cover border border-[#E8E1D5] shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-xs font-bold text-[#1C1A17] leading-snug line-clamp-2">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedVariant.id, item.selectedSize)}
                              className="text-[#998F82] hover:text-[#A83232] transition-colors p-1 cursor-pointer"
                              title="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#7A7265]">
                            <span className="inline-flex items-center gap-1">
                              <span 
                                className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block" 
                                style={{ backgroundColor: item.selectedVariant.colorHex }} 
                              />
                              {item.selectedVariant.colorName}
                            </span>
                            <span>•</span>
                            <span>{item.selectedSize.split(' ')[0]}</span>
                          </div>
                          <p className="text-[10px] text-[#8C6D46] font-medium mt-0.5">
                            {item.product.ply} ({item.product.weightKg}kg)
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F0EBE1]">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-[#DECDB7] rounded-md bg-white">
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.selectedVariant.id, item.selectedSize, item.quantity - 1)}
                              className="p-1 text-[#6E6455] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold text-[#1C1A17]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.selectedVariant.id, item.selectedSize, item.quantity + 1)}
                              className="p-1 text-[#6E6455] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-[#1C1A17]">
                            {formatPrice(item.product.pricePKR * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gift Wrap option */}
                <div className="p-3 bg-white rounded-xl border border-[#DECDB7] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Gift className="w-4 h-4 text-[#8C6D46]" />
                    <div>
                      <p className="text-xs font-semibold text-[#1C1A17]">HBK Luxury Bridal Gift Packing</p>
                      <p className="text-[10px] text-[#7A7265]">Includes satin ribbon, tote case & personalized card (+₨ 300)</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={isGiftWrap}
                    onChange={e => setIsGiftWrap(e.target.checked)}
                    className="w-4 h-4 rounded text-[#8C6D46] accent-[#8C6D46] cursor-pointer"
                  />
                </div>

                {/* Quick Upsell Addon */}
                {upsellProduct && !cart.some(i => i.product.id === upsellProduct.id) && (
                  <div className="p-3 bg-[#F4EFE6] rounded-xl border border-[#DECDB7] flex items-center justify-between gap-2">
                    <img
                      src={upsellProduct.images[0]}
                      alt={upsellProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded object-cover border border-[#DFCBB5]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-[#1C1A17] truncate">
                        Add {upsellProduct.name}
                      </p>
                      <p className="text-[10px] text-[#7A7265]">Light AC Fleece for {formatPrice(upsellProduct.pricePKR)}</p>
                    </div>
                    <button
                      onClick={() => addToCart(upsellProduct)}
                      className="px-2.5 py-1 text-[11px] font-bold bg-[#1C1A17] text-white rounded-md hover:bg-[#38332B] transition-colors cursor-pointer shrink-0"
                    >
                      + Add
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Checkout & Totals */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#DECDB7] bg-white space-y-3">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={e => setPromoInput(e.target.value)}
                    placeholder="Coupon (Try HBK10 or WINTER15)"
                    className="w-full text-xs bg-[#FAF8F5] border border-[#DECDB7] rounded-lg px-3 py-2 text-[#1C1A17] uppercase tracking-wider focus:outline-none focus:border-[#C28E5B]"
                  />
                  <Tag className="w-3.5 h-3.5 text-[#8C7D6B] absolute right-2.5 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-bold bg-[#F0EBE1] text-[#4A4135] rounded-lg hover:bg-[#DECDB7] transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoMsg && (
                <p className={`text-[11px] font-medium ${promoMsg.ok ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {promoMsg.text}
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5E5547] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1C1A17]">{formatPrice(cartTotalPKR)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({discountCode} - {discountPercent}%)</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                {isGiftWrap && (
                  <div className="flex justify-between">
                    <span>Luxury Gift Wrap</span>
                    <span>{formatPrice(300)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Shipping (Nationwide Pakistan)
                  </span>
                  <span className="text-emerald-700 font-bold uppercase text-[11px]">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1C1A17] pt-2 border-t border-[#E8E1D5]">
                  <span>Estimated Total</span>
                  <span className="text-base text-[#8C6D46]">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Main Checkout Button */}
              <button
                id="cart-drawer-checkout-btn"
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1C1A17] text-white font-bold text-sm hover:bg-[#332E27] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer group"
              >
                <span>Proceed to Checkout / COD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#7A7265] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7-Day Guarantee
                </span>
                <span>•</span>
                <span>Pay Cash When Delivered</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
