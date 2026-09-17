import React, { useState } from 'react';
import { 
  Star, 
  Flame, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  ShoppingBag, 
  Heart, 
  Share2, 
  Sparkles, 
  Scale, 
  Layers, 
  Maximize2, 
  ChevronRight,
  MessageSquare,
  Plus,
  Minus,
  Download,
  FileJson,
  CheckCircle2
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { BlanketSize, ProductVariant, Review } from '../types';

export const ProductDetailView: React.FC = () => {
  const { 
    selectedProduct, 
    addToCart, 
    formatPrice, 
    toggleWishlist, 
    isInWishlist, 
    setPage, 
    setIsCheckoutOpen,
    navigateToProduct,
    showToast,
    getReviewsForProduct,
    addReview,
    exportReviewsJSON
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [selectedSize, setSelectedSize] = useState<BlanketSize>(
    product.category === 'baby-kids' 
      ? 'Baby / Crib (100 x 120 cm)' 
      : 'Double / Queen (200 x 240 cm)'
  );
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'care' | 'reviews'>('specs');
  const [deliveryCity, setDeliveryCity] = useState('Lahore');
  
  // Dynamic reviews from ShopContext (synced with public/reviews.json + local user submissions)
  const productReviews = getReviewsForProduct(product.id);
  
  // Review submission state
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewCity, setNewReviewCity] = useState('Islamabad');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  const inWish = isInWishlist(product.id);

  const availableSizes: BlanketSize[] = product.category === 'baby-kids'
    ? ['Baby / Crib (100 x 120 cm)']
    : [
        'Single (160 x 220 cm)',
        'Double / Queen (200 x 240 cm)',
        'King (220 x 240 cm)'
      ];

  const cityDeliveryTimes: Record<string, string> = {
    Lahore: '1 – 2 Business Days (Express Dispatch)',
    Faisalabad: 'Same Day / Next Day from Mill Hub',
    Islamabad: '2 Business Days',
    Rawalpindi: '2 Business Days',
    Peshawar: '1 – 2 Business Days (Via Nasir Pur Hub)',
    Karachi: '2 – 3 Business Days (Air Express)',
    Multan: '1 – 2 Business Days',
    Quetta: '3 – 4 Business Days',
    Gujranwala: '1 – 2 Business Days',
    Sialkot: '1 – 2 Business Days'
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, selectedSize, qty);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVariant, selectedSize, qty);
    setIsCheckoutOpen(true);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    addReview({
      productId: product.id,
      author: newReviewAuthor,
      city: newReviewCity,
      rating: newReviewRating,
      title: newReviewTitle || `${product.name} Review`,
      comment: newReviewComment,
    });

    setIsReviewSubmitted(true);
    setNewReviewTitle('');
    setNewReviewComment('');
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.isFeatured)).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs text-[#7A7265]">
        <button onClick={() => setPage('home')} className="hover:text-[#1C1A17] cursor-pointer">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => setPage('shop')} className="hover:text-[#1C1A17] cursor-pointer">Shop</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#8C6D46] font-medium capitalize">{product.category.replace('-', ' ')}</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#1C1A17] font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Multi-Angle Imagery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden bg-neutral-100 border border-[#DFCBB5] shadow-md group">
            <img
              src={selectedVariant.image || product.images[activeImgIdx] || product.images[0]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Top badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1C1A17] text-[#D9A76A] shadow-md">
                {product.ply} • {product.weightKg} kg
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#8C6D46] shadow-md backdrop-blur-xs flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#C26B38]" /> {product.togRating} TOG Warmth
              </span>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-colors shadow-md cursor-pointer ${
                inWish ? 'bg-rose-50 text-rose-600' : 'bg-white/90 text-[#7A7265] hover:text-[#1C1A17]'
              }`}
            >
              <Heart className={`w-5 h-5 ${inWish ? 'fill-rose-600' : ''}`} />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIdx(idx)}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  activeImgIdx === idx 
                    ? 'border-[#C28E5B] ring-2 ring-[#C28E5B]/20 scale-102' 
                    : 'border-transparent opacity-70 hover:opacity-100'
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

        {/* Right Column: Buying Configuration (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-[#8C7D6B] font-normal">({productReviews.length} verified reviews)</span>
                </div>
              </div>

              <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17] mt-1 leading-snug">
                {product.name}
              </h1>

              {product.urduName && (
                <p className="text-sm font-semibold text-[#8C6D46] mt-0.5" dir="rtl">
                  {product.urduName}
                </p>
              )}

              <p className="text-xs text-[#7A7265] mt-1 italic">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-white rounded-2xl border border-[#DFCBB5] flex items-baseline justify-between shadow-xs">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[#8C6D46]">
                  {formatPrice(product.pricePKR)}
                </span>
                {product.originalPricePKR && (
                  <span className="text-sm text-[#998F82] line-through ml-3">
                    {formatPrice(product.originalPricePKR)}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                100% Genuine Mill Direct
              </span>
            </div>

            {/* Color Swatch Selection */}
            <div>
              <label className="text-xs font-bold text-[#1C1A17] block mb-2">
                Color Option: <span className="font-semibold text-[#8C6D46]">{selectedVariant.colorName}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.variants.map(variant => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer relative flex items-center justify-center ${
                        isSelected 
                          ? 'border-[#C28E5B] ring-2 ring-[#C28E5B]/40 scale-110' 
                          : 'border-black/15 hover:scale-105'
                      }`}
                      style={{ backgroundColor: variant.colorHex }}
                      title={variant.colorName}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bed Size Selector */}
            <div>
              <label className="text-xs font-bold text-[#1C1A17] block mb-2">
                Select Bed Size:
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'border-[#8C6D46] bg-[#8C6D46] text-white font-bold shadow-xs'
                        : 'border-[#DFCBB5] bg-white text-[#4A4235] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Buy CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#DECDB7] rounded-xl bg-white px-2">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-2 text-sm font-bold text-[#6E6455] hover:text-black cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#1C1A17]">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-2 text-sm font-bold text-[#6E6455] hover:text-black cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  id="pdp-add-to-bag-btn"
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#1C1A17] text-white font-bold text-xs hover:bg-[#332E27] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D9A76A]" />
                  <span>Add To Bag</span>
                </button>
              </div>

              <button
                id="pdp-buy-now-btn"
                onClick={handleBuyNow}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C28E5B] hover:bg-[#A87444] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Instant Order with Cash On Delivery (COD)</span>
              </button>
            </div>

            {/* Live City Delivery Estimator */}
            <div className="p-4 bg-[#F2ECE1] rounded-2xl border border-[#DECDB7] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#1C1A17]">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#8C6D46]" /> Check Delivery to Your City:
                </span>
                <select
                  value={deliveryCity}
                  onChange={e => setDeliveryCity(e.target.value)}
                  className="bg-white border border-[#DFCBB5] rounded-lg px-2 py-1 text-xs text-[#1C1A17] font-semibold focus:outline-none"
                >
                  {Object.keys(cityDeliveryTimes).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-[#5E5547]">
                Estimated Arrival in <strong>{deliveryCity}</strong>: <span className="text-emerald-800 font-bold">{cityDeliveryTimes[deliveryCity] || '2 – 3 Days'}</span>. Shipping is <strong>100% FREE</strong> via Leopards / TCS.
              </p>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-4 border-t border-[#DFCBB5] grid grid-cols-2 gap-3 text-[11px] text-[#5E5547]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free Cash on Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
              <span>7-Day Factory Defect Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Specs, Care, Reviews */}
      <div className="border-t border-[#DECDB7] pt-8 space-y-6">
        <div className="flex border-b border-[#DFCBB5] gap-6">
          {[
            { id: 'specs', label: 'Technical Specifications & Craft' },
            { id: 'care', label: 'Washing & Care Instructions' },
            { id: 'reviews', label: `Customer Reviews (${productReviews.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-xs sm:text-sm font-bold transition-all cursor-pointer relative ${
                activeTab === tab.id
                  ? 'text-[#1C1A17]'
                  : 'text-[#8C7D6B] hover:text-[#1C1A17]'
              }`}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C28E5B]" />
              )}
            </button>
          ))}
        </div>

        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1C1A17]">
                Mill Engineering Details
              </h3>
              <p className="text-xs text-[#5E5547] leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[#1C1A17]">Key Highlights:</h4>
                <ul className="space-y-1.5 text-xs text-[#5E5547]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spec Table */}
            <div className="bg-white rounded-2xl border border-[#DECDB7] p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] border-b border-[#F0EBE1] pb-2">
                Certified Factory Specifications
              </h4>
              <div className="divide-y divide-[#F0EBE1] text-xs">
                <div className="py-2 flex justify-between">
                  <span className="text-[#7A7265]">Ply Construction</span>
                  <span className="font-bold text-[#1C1A17]">{product.ply}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#7A7265]">Total Product Weight</span>
                  <span className="font-bold text-[#1C1A17]">{product.weightKg} kg</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#7A7265]">Dimensions</span>
                  <span className="font-bold text-[#1C1A17]">{product.dimensions}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#7A7265]">Material Composition</span>
                  <span className="font-bold text-[#1C1A17]">{product.material}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#7A7265]">Warmth Level</span>
                  <span className="font-bold text-[#C26B38]">{product.warmthRating} ({product.togRating} TOG)</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#7A7265]">Embossing Technique</span>
                  <span className="font-bold text-[#1C1A17]">Hydraulic 3D Jacquard Heat-Set Relief</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'care' && (
          <div className="bg-white rounded-2xl border border-[#DECDB7] p-6 max-w-2xl animate-fadeIn space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#1C1A17]">
              HBK Blanket Care Guidelines
            </h3>
            <p className="text-xs text-[#7A7265]">
              Proper care ensures your HBK blanket retains its signature velvet luster and thermal thickness for over a decade.
            </p>
            <ul className="space-y-2 text-xs text-[#5E5547]">
              {product.careInstructions.map((inst, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8C6D46] shrink-0 mt-0.5" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Reviews Header Banner & JSON sync */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DECDB7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] px-2.5 py-0.5 rounded-full bg-[#F2ECE1] inline-flex items-center gap-1.5">
                    <FileJson className="w-3.5 h-3.5 text-[#8C6D46]" />
                    <span>public/reviews.json</span>
                  </span>
                  <span className="text-xs text-[#7A7265]">• {productReviews.length} Verified Reviews</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1C1A17]">
                  Customer Reviews & Verifications
                </h3>
                <p className="text-xs text-[#7A7265] max-w-lg">
                  Loaded live from <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#DECDB7] text-[#1C1A17]">/public/reviews.json</code> with instant local storage persistence for user reviews.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={exportReviewsJSON}
                  className="px-3.5 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F0EBE1] border border-[#DFCBB5] text-xs font-bold text-[#1C1A17] flex items-center gap-2 transition-colors cursor-pointer"
                  title="Download all reviews formatted as JSON"
                >
                  <Download className="w-3.5 h-3.5 text-[#8C6D46]" />
                  <span>Download reviews.json</span>
                </button>
              </div>
            </div>

            {/* Reviews list */}
            {productReviews.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-[#DECDB7] text-center space-y-2">
                <MessageSquare className="w-8 h-8 text-[#8C6D46] mx-auto opacity-60" />
                <h4 className="font-serif font-bold text-base text-[#1C1A17]">Be the first to review {product.name}</h4>
                <p className="text-xs text-[#7A7265]">Share your experience below to help fellow shoppers across Pakistan.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productReviews.map(rev => (
                  <div key={rev.id} className="bg-white p-5 rounded-2xl border border-[#DECDB7] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#7A7265]">{rev.date}</span>
                    </div>
                    <h4 className="font-bold text-xs text-[#1C1A17]">{rev.title}</h4>
                    <p className="text-xs text-[#5E5547] leading-relaxed">{rev.comment}</p>
                    <div className="text-[11px] pt-2 border-t border-[#F5EFE6] text-[#7A7265] flex justify-between items-center">
                      <span>{rev.author} ({rev.city})</span>
                      <span className="text-emerald-700 font-semibold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Verified Buyer</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Write a review form */}
            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#DECDB7] max-w-2xl space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base text-[#1C1A17]">
                  Add Your Verified Review for {product.name}
                </h3>
                <p className="text-[11px] text-[#7A7265]">
                  Your review will be saved, added to the live catalog, and exportable to <code className="bg-white/60 px-1 py-0.5 rounded">public/reviews.json</code>.
                </p>
              </div>

              {isReviewSubmitted ? (
                <div className="p-4 bg-white rounded-xl border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-800">
                    Thank you! Your verified review has been published and added to the store reviews.
                  </p>
                  <button
                    onClick={() => setIsReviewSubmitted(false)}
                    className="px-3 py-1.5 rounded-lg bg-[#1C1A17] text-white text-[11px] font-bold cursor-pointer"
                  >
                    Submit Another Review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#1C1A17] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={newReviewAuthor}
                        onChange={e => setNewReviewAuthor(e.target.value)}
                        placeholder="e.g. Asad Ullah Khan"
                        className="w-full bg-white border border-[#DECDB7] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#1C1A17] mb-1">City / Region</label>
                      <input
                        type="text"
                        required
                        value={newReviewCity}
                        onChange={e => setNewReviewCity(e.target.value)}
                        placeholder="e.g. Lahore, Karachi, Islamabad, Peshawar..."
                        className="w-full bg-white border border-[#DECDB7] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1.5">Rating & Satisfaction</label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-white border border-[#DECDB7] px-3 py-2 rounded-xl">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewReviewRating(star)}
                            className="p-0.5 hover:scale-110 transition-transform cursor-pointer"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= newReviewRating
                                  ? 'fill-amber-500 text-amber-500'
                                  : 'text-[#DECDB7]'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-xs text-[#5E5547] font-medium">
                        {newReviewRating === 5 && '⭐️ 5/5 - Outstanding Winter Warmth & Softness'}
                        {newReviewRating === 4 && '⭐️ 4/5 - Very Good Quality'}
                        {newReviewRating === 3 && '⭐️ 3/5 - Average'}
                        {newReviewRating === 2 && '⭐️ 2/5 - Below Expectation'}
                        {newReviewRating === 1 && '⭐️ 1/5 - Unsatisfied'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1">Review Headline</label>
                    <input
                      type="text"
                      required
                      value={newReviewTitle}
                      onChange={e => setNewReviewTitle(e.target.value)}
                      placeholder="e.g. Incredibly soft, heavy weight, and locks in heat quickly"
                      className="w-full bg-white border border-[#DECDB7] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1">Your Detailed Experience</label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewComment}
                      onChange={e => setNewReviewComment(e.target.value)}
                      placeholder="Describe the fabric feel, warmth level, packaging, and how it holds up during cold nights..."
                      className="w-full bg-white border border-[#DECDB7] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1C1A17] hover:bg-[#332E27] text-white font-bold transition-colors cursor-pointer shadow-sm flex items-center gap-2"
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Post Verified Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="pt-12 border-t border-[#DECDB7] space-y-6">
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1A17]">
          Customers Also Bought
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(rel => (
            <div
              key={rel.id}
              onClick={() => navigateToProduct(rel)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] p-3 space-y-2 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={rel.images[0]}
                  alt={rel.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif font-bold text-xs text-[#1C1A17] line-clamp-1 group-hover:text-[#8C6D46]">
                {rel.name}
              </h4>
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#8C6D46]">{formatPrice(rel.pricePKR)}</span>
                <span className="text-[10px] text-[#7A7265]">{rel.weightKg}kg</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
