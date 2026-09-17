import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Check, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Scale, 
  Maximize2 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BlanketSize, ProductVariant } from '../types';

export const QuickViewModal: React.FC = () => {
  const { 
    quickViewProduct, 
    closeQuickView, 
    addToCart, 
    formatPrice, 
    navigateToProduct,
    setIsCheckoutOpen 
  } = useShop();

  if (!quickViewProduct) return null;

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(quickViewProduct.variants[0]);
  const [selectedSize, setSelectedSize] = useState<BlanketSize>(
    quickViewProduct.category === 'baby-kids' 
      ? 'Baby / Crib (100 x 120 cm)' 
      : 'Double / Queen (200 x 240 cm)'
  );
  const [qty, setQty] = useState(1);

  const availableSizes: BlanketSize[] = quickViewProduct.category === 'baby-kids'
    ? ['Baby / Crib (100 x 120 cm)']
    : [
        'Single (160 x 220 cm)',
        'Double / Queen (200 x 240 cm)',
        'King (220 x 240 cm)'
      ];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedVariant, selectedSize, qty);
    closeQuickView();
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedVariant, selectedSize, qty);
    closeQuickView();
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        onClick={closeQuickView}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#DFCBB5] z-10 animate-fadeIn">
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#4A4235] hover:text-black hover:bg-white shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery */}
          <div className="p-6 bg-[#F2ECE1]/60 flex flex-col justify-between">
            <div className="aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden bg-neutral-200 border border-[#DFCBB5] relative shadow-inner">
              <img
                src={selectedVariant.image || quickViewProduct.images[activeImgIdx] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1C1A17] text-[#D9A76A]">
                {quickViewProduct.ply} • {quickViewProduct.weightKg}kg
              </span>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeImgIdx === idx ? 'border-[#C28E5B] ring-2 ring-[#C28E5B]/20' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Config & Buy */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              {/* Rating & Category */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8C6D46] uppercase tracking-wider">
                  {quickViewProduct.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-[#8C7D6B] font-normal">({quickViewProduct.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title & Urdu Name */}
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1A17] mt-1">
                {quickViewProduct.name}
              </h2>
              {quickViewProduct.urduName && (
                <p className="text-sm font-medium text-[#7A6B58] mt-0.5" dir="rtl">
                  {quickViewProduct.urduName}
                </p>
              )}

              {/* Price & Tagline */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#8C6D46]">
                  {formatPrice(quickViewProduct.pricePKR)}
                </span>
                {quickViewProduct.originalPricePKR && (
                  <span className="text-sm text-[#998F82] line-through">
                    {formatPrice(quickViewProduct.originalPricePKR)}
                  </span>
                )}
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Save {Math.round(((quickViewProduct.originalPricePKR! - quickViewProduct.pricePKR) / quickViewProduct.originalPricePKR!) * 100)}%
                </span>
              </div>

              <p className="text-xs text-[#5E5547] mt-2 line-clamp-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Badges / Specs row */}
              <div className="grid grid-cols-3 gap-2 mt-4 p-2.5 bg-[#F2ECE1] rounded-xl text-center text-xs text-[#4A4235]">
                <div>
                  <span className="text-[10px] text-[#7A7265] block">Warmth TOG</span>
                  <span className="font-bold flex items-center justify-center gap-1 mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-[#C26B38]" /> {quickViewProduct.togRating} TOG
                  </span>
                </div>
                <div className="border-x border-[#DFCBB5]">
                  <span className="text-[10px] text-[#7A7265] block">Weight</span>
                  <span className="font-bold flex items-center justify-center gap-1 mt-0.5">
                    <Scale className="w-3.5 h-3.5 text-[#8C6D46]" /> {quickViewProduct.weightKg} kg
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7A7265] block">Structure</span>
                  <span className="font-bold flex items-center justify-center gap-1 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-[#8C6D46]" /> {quickViewProduct.ply}
                  </span>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="mt-4">
                <label className="text-xs font-bold text-[#1C1A17] block mb-1.5">
                  Color / Pattern: <span className="font-normal text-[#7A6B58]">{selectedVariant.colorName}</span>
                </label>
                <div className="flex items-center gap-2">
                  {quickViewProduct.variants.map(variant => {
                    const isSelected = selectedVariant.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer relative flex items-center justify-center ${
                          isSelected ? 'border-[#C28E5B] ring-2 ring-[#C28E5B]/30 scale-110' : 'border-black/15 hover:scale-105'
                        }`}
                        style={{ backgroundColor: variant.colorHex }}
                        title={variant.colorName}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white drop-shadow-md" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-4">
                <label className="text-xs font-bold text-[#1C1A17] block mb-1.5">Select Bed Size:</label>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'border-[#8C6D46] bg-[#8C6D46] text-white shadow-xs'
                          : 'border-[#DFCBB5] bg-white text-[#4A4235] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Add to Cart & Buy Now */}
            <div className="space-y-3 pt-3 border-t border-[#DFCBB5]">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#DFCBB5] rounded-xl bg-white px-2">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-2 py-1.5 text-sm font-bold text-[#6E6455] hover:text-black cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#1C1A17]">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-2 py-1.5 text-sm font-bold text-[#6E6455] hover:text-black cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#1C1A17] text-white font-bold text-xs hover:bg-[#332E27] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D9A76A]" />
                  <span>Add To Bag</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3 px-5 rounded-xl bg-[#C28E5B] text-white font-bold text-xs hover:bg-[#A87444] transition-all cursor-pointer shadow-md"
                >
                  Order COD
                </button>
              </div>

              {/* View Full Product Link */}
              <div className="flex justify-between items-center text-[11px] text-[#7A7265] pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#8C6D46]" /> Free Express Dispatch
                </span>
                <button
                  onClick={() => {
                    closeQuickView();
                    navigateToProduct(quickViewProduct);
                  }}
                  className="font-bold text-[#8C6D46] hover:underline cursor-pointer"
                >
                  View Full Specs & Reviews →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
