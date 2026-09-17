import React, { useState } from 'react';
import { 
  X, 
  Flame, 
  Thermometer, 
  Scale, 
  Sparkles, 
  ArrowRight, 
  ShoppingBag, 
  Check 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const WarmthCalculatorModal: React.FC = () => {
  const { 
    isWarmthQuizOpen, 
    setIsWarmthQuizOpen, 
    addToCart, 
    formatPrice,
    navigateToProduct 
  } = useShop();

  const [climate, setClimate] = useState<'arctic' | 'cold' | 'mild' | 'summer'>('cold');
  const [weightPref, setWeightPref] = useState<'heavy' | 'medium' | 'light'>('medium');
  const [bedSize, setBedSize] = useState<'double' | 'single' | 'baby'>('double');
  const [result, setResult] = useState<Product | null>(null);

  if (!isWarmthQuizOpen) return null;

  const calculateRecommendation = () => {
    let match: Product | undefined;

    if (bedSize === 'baby') {
      match = PRODUCTS.find(p => p.id === 'hbk-baby-cuddle-hooded') || PRODUCTS[5];
    } else if (climate === 'arctic' || weightPref === 'heavy') {
      match = PRODUCTS.find(p => p.id === 'hbk-sultan-arctic-6kg') || PRODUCTS.find(p => p.id === 'hbk-black-rose-2ply');
    } else if (climate === 'cold' || weightPref === 'medium') {
      match = PRODUCTS.find(p => p.id === 'hbk-black-rose-2ply') || PRODUCTS.find(p => p.id === 'hbk-sherpa-dream-2ply');
    } else if (climate === 'summer') {
      match = PRODUCTS.find(p => p.id === 'hbk-summer-cool-fleece');
    } else {
      match = PRODUCTS.find(p => p.id === 'hbk-glorious-1ply-flannel');
    }

    setResult(match || PRODUCTS[0]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div 
        onClick={() => setIsWarmthQuizOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#DFCBB5] z-10 animate-fadeIn">
        {/* Header */}
        <div className="bg-[#1C1A17] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D9A76A] text-black flex items-center justify-center">
              <Flame className="w-5 h-5 text-[#8C4A19]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base">HBK Blanket & Warmth Matcher</h3>
              <p className="text-[11px] text-[#C2AA8C]">Find your mathematically ideal blanket TOG rating</p>
            </div>
          </div>
          <button
            onClick={() => setIsWarmthQuizOpen(false)}
            className="text-neutral-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {!result ? (
            <div className="space-y-5">
              {/* Question 1: Climate */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] block mb-2 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4" /> 1. Where will you use the blanket?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'arctic', label: 'Severe Sub-Zero (0°C to -10°C)', sub: 'Quetta, Murree, Swat, Gilgit' },
                    { id: 'cold', label: 'Crisp Chilly Winter (5°C to 15°C)', sub: 'Islamabad, Lahore, Peshawar' },
                    { id: 'mild', label: 'Mild Winter (15°C to 20°C)', sub: 'Karachi, Hyderabad, Coastal' },
                    { id: 'summer', label: 'AC Room / Summer (20°C+)', sub: 'Nighttime air conditioning' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setClimate(opt.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        climate === opt.id
                          ? 'border-[#8C6D46] bg-white ring-2 ring-[#8C6D46]/20'
                          : 'border-[#DECDB7] bg-[#FAF8F5] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#1C1A17] block">{opt.label}</span>
                      <span className="text-[10px] text-[#7A7265] block mt-0.5">{opt.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Weight Preference */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] block mb-2 flex items-center gap-1.5">
                  <Scale className="w-4 h-4" /> 2. Blanket Weight Sensation
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'heavy', label: 'Deep Hug', sub: 'Heavier (5kg – 6.2kg)' },
                    { id: 'medium', label: 'Balanced', sub: 'Medium (3.5kg – 4.5kg)' },
                    { id: 'light', label: 'Featherlight', sub: 'Light (1.5kg – 2.5kg)' }
                  ].map(w => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setWeightPref(w.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        weightPref === w.id
                          ? 'border-[#8C6D46] bg-white ring-2 ring-[#8C6D46]/20'
                          : 'border-[#DECDB7] bg-[#FAF8F5] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#1C1A17] block">{w.label}</span>
                      <span className="text-[10px] text-[#7A7265] block mt-0.5">{w.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Bed Size */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] block mb-2">
                  3. Bed Size Needed
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'double', label: 'Double / Queen' },
                    { id: 'single', label: 'Single Bed' },
                    { id: 'baby', label: 'Baby / Crib' }
                  ].map(b => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBedSize(b.id as any)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        bedSize === b.id
                          ? 'border-[#8C6D46] bg-[#8C6D46] text-white font-bold'
                          : 'border-[#DECDB7] bg-white text-[#4A4235] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateRecommendation}
                className="w-full py-3.5 rounded-xl bg-[#1C1A17] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#332E27] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Reveal My Recommended Blanket</span>
                <Sparkles className="w-4 h-4 text-[#D9A76A]" />
              </button>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-5 animate-fadeIn">
              <div className="text-center">
                <span className="text-xs font-bold text-[#8C6D46] uppercase tracking-widest">
                  Our Factory Recommendation
                </span>
                <h4 className="font-serif font-bold text-xl text-[#1C1A17] mt-1">
                  {result.name}
                </h4>
                <p className="text-xs text-[#7A7265] mt-1">{result.tagline}</p>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-[#DFCBB5]">
                <img
                  src={result.images[0]}
                  alt={result.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-28 rounded-xl object-cover border border-[#DECDB7] shrink-0"
                />
                <div className="flex-1 text-xs space-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#F2ECE1] text-[#8C6D46] font-bold text-[10px]">
                        {result.ply}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold text-[10px]">
                        {result.togRating} TOG Warmth
                      </span>
                      <span className="text-[10px] text-[#7A7265]">{result.weightKg} kg</span>
                    </div>
                    <p className="text-xs text-[#5E5547] mt-2 line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                  <div className="text-sm font-bold text-[#8C6D46]">
                    Factory Price: {formatPrice(result.pricePKR)}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setResult(null)}
                  className="px-4 py-3 rounded-xl border border-[#DECDB7] text-xs font-bold text-[#4A4235] hover:bg-[#F2ECE1] cursor-pointer"
                >
                  Recalculate
                </button>
                <button
                  onClick={() => {
                    addToCart(result);
                    setIsWarmthQuizOpen(false);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D9A76A]" />
                  <span>Add To Bag</span>
                </button>
                <button
                  onClick={() => {
                    setIsWarmthQuizOpen(false);
                    navigateToProduct(result);
                  }}
                  className="px-4 py-3 rounded-xl bg-[#C28E5B] text-white text-xs font-bold hover:bg-[#A87444] cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
