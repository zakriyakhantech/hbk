import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  ArrowRight, 
  Star,
  Gift
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const BabyCollectionView: React.FC = () => {
  const { navigateToProduct, addToCart, formatPrice } = useShop();

  const babyProducts = PRODUCTS.filter(p => p.category === 'baby-kids');

  return (
    <div className="space-y-12 pb-16 animate-fadeIn">
      {/* Hero Banner for Baby */}
      <section className="bg-gradient-to-r from-[#F7EFE5] via-[#EFE5D7] to-[#F5ECE2] py-14 border-b border-[#DFCBB5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46] px-3 py-1 rounded-full bg-white/80 border border-[#DFCBB5] inline-block">
                Hypoallergenic Nursery Comfort
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#1C1A17] leading-tight">
                HBK Baby & Toddler Heirloom Wraps
              </h1>
              <p className="text-sm font-semibold text-[#8C6D46]" dir="rtl">
                نومولود اور ننھے بچوں کے لیے خالص ٹرکش ایکریلک اور شیرپا کمبل
              </p>
              <p className="text-xs sm:text-sm text-[#5E5547] leading-relaxed max-w-xl">
                Woven from certified OEKO-TEX Standard 100 Class-1 Turkish acrylic and organic lamb-touch Sherpa fleece. Completely free from harmful chemicals, heavy metals, and irritants for newborn delicate skin.
              </p>

              {/* Safety Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white/80 rounded-xl border border-[#DFCBB5] text-xs space-y-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <p className="font-bold text-[#1C1A17]">0% Skin Itch</p>
                  <p className="text-[10px] text-[#7A7265]">Zero prickle factor</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-[#DFCBB5] text-xs space-y-1">
                  <Gift className="w-4 h-4 text-[#8C6D46]" />
                  <p className="font-bold text-[#1C1A17]">Gift Box Packaging</p>
                  <p className="text-[10px] text-[#7A7265]">Includes satin ribbon</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-[#DFCBB5] text-xs space-y-1 col-span-2 sm:col-span-1">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <p className="font-bold text-[#1C1A17]">Machine Washable</p>
                  <p className="text-[10px] text-[#7A7265]">Remains soft 50+ washes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#DECDB7]">
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80"
                  alt="HBK Baby Blanket"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-[#DFCBB5] pb-4">
          <h2 className="font-serif font-bold text-2xl text-[#1C1A17]">
            Available Nursery Collections
          </h2>
          <p className="text-xs text-[#7A7265] mt-1">
            Free nationwide delivery across all Pakistani towns and cities via Leopards / TCS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {babyProducts.map(prod => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div 
                className="relative aspect-square overflow-hidden bg-[#FAF8F5] cursor-pointer"
                onClick={() => navigateToProduct(prod)}
              >
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1C1A17] text-[#D9A76A]">
                  Newborn Safe
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#8C6D46] font-semibold">{prod.dimensions}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>
                  <h3 
                    onClick={() => navigateToProduct(prod)}
                    className="font-serif font-bold text-base text-[#1C1A17] hover:text-[#8C6D46] transition-colors cursor-pointer"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#5E5547] mt-1 line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-[#8C6D46]">
                      {formatPrice(prod.pricePKR)}
                    </span>
                    {prod.originalPricePKR && (
                      <span className="text-xs text-[#998F82] line-through ml-2">
                        {formatPrice(prod.originalPricePKR)}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(prod)}
                      className="px-3.5 py-2 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] transition-colors cursor-pointer"
                    >
                      Add To Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pediatrician Guidance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DECDB7] rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#1C1A17]">1. Thermal Regulation</h4>
            <p className="text-xs text-[#5E5547] leading-relaxed">
              Infants under 12 months cannot regulate body temperature easily. Our 5.5 to 8.5 TOG blankets insulate without inducing sweating.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#1C1A17]">2. Hypoallergenic Dyes</h4>
            <p className="text-xs text-[#5E5547] leading-relaxed">
              Dyed with AZO-free reactive colors compliant with strict European infant standards. Safe if baby chews on fabric corners.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#1C1A17]">3. Easy Nursery Care</h4>
            <p className="text-xs text-[#5E5547] leading-relaxed">
              Withstands frequent sanitizer and hot water cycle washing. Machine dryable without shrinkage or stiffness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
