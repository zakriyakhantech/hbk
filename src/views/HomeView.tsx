import React, { useState } from 'react';
import { 
  Flame, 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Award, 
  Star, 
  Heart, 
  Eye, 
  ShoppingBag, 
  Layers, 
  Building2, 
  Check, 
  ChevronRight,
  Maximize2,
  FileJson,
  Download,
  MessageSquare
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { BlanketCategory, Product } from '../types';

export const HomeView: React.FC = () => {
  const { 
    setPage, 
    addToCart, 
    openQuickView, 
    navigateToProduct, 
    formatPrice, 
    toggleWishlist, 
    isInWishlist,
    setIsWarmthQuizOpen,
    setIsTextureViewerOpen,
    setActiveCategory,
    reviews,
    exportReviewsJSON
  } = useShop();

  const [activeTab, setActiveTab] = useState<BlanketCategory | 'featured'>('featured');
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  const heroSlides = [
    {
      badge: 'WINTER 2025/2026 MASTERPIECE',
      title: 'Supreme Warmth & Cloud-Like Softness',
      urdu: 'پاکستان کے سب سے بڑے کمبل کے کارخانے سے براہِ راست',
      subtitle: 'Engineered with double-ply Korean mink acrylic and 3D floral relief embossing. Locks out freezing drafts effortlessly.',
      tag: '5.2kg Heavy 2-Ply',
      ctaText: 'Shop Black Rose Series',
      category: '2-ply-double' as BlanketCategory,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=80'
    },
    {
      badge: 'EVERYDAY BESTSELLER',
      title: 'Glorious 1-Ply Flannel Collection',
      urdu: 'ہلکا، ریشمی اور انتہائی آرام دہ',
      subtitle: 'Silky micro-brushed filament fleece. Perfect for transitional weather, air-conditioned rooms, and cozy evening lounging.',
      tag: 'From ₨ 2,450',
      ctaText: 'Explore Flannel Blankets',
      category: '1-ply-flannel' as BlanketCategory,
      image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1600&q=80'
    },
    {
      badge: 'GENTLE COMFORT FOR NEWBORNS',
      title: 'HBK Baby & Nursery Cuddle Wraps',
      urdu: 'نومولود بچوں کے لیے محفوظ اور نرم ٹرکش ایکریلک',
      subtitle: 'OEKO-TEX Certified hypoallergenic Turkish acrylic with ultra-soft animal hood. Gentle on infant delicate skin.',
      tag: 'Gift Box Ready',
      ctaText: 'Discover Baby Collection',
      page: 'baby' as const,
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const currentSlide = heroSlides[heroSlideIdx];

  const filteredProducts = activeTab === 'featured'
    ? PRODUCTS.filter(p => p.isFeatured || p.isBestSeller)
    : PRODUCTS.filter(p => p.category === activeTab);

  const categoriesCards = [
    {
      id: '2-ply-double',
      title: '2-Ply Heavy Winter',
      urdu: 'ڈبل پلائی ونٹر',
      desc: 'Heavy 4.5kg – 6.2kg Korean mink embossed blankets for severe winter cold.',
      badge: 'Top Seller',
      count: '8 Designs',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '1-ply-flannel',
      title: '1-Ply Flannel Fleece',
      urdu: 'فلالین کمبل',
      desc: 'Lightweight brushed micro-fleece for autumn, spring, and guest rooms.',
      badge: 'Value Pack',
      count: '6 Colors',
      image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'baby-kids',
      title: 'Baby & Kids Wraps',
      urdu: 'بے بی کمبل',
      desc: 'Hypoallergenic Turkish acrylic baby wraps with cute hood and nursery pastels.',
      badge: 'Gentle Care',
      count: 'Newborn to 5Y',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'bedspread-sets',
      title: 'Bridal Bedspread Sets',
      urdu: 'برائیڈل سیٹ',
      desc: 'Quilted 6-piece royal jacquard ensembles with pillow shams and runner.',
      badge: 'Luxury Gift',
      count: '6-Piece Ensembles',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden bg-[#1C1A17] text-white">
        <div className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center">
          {/* Background Image with Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141210] via-[#1C1A17]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C28E5B]/20 border border-[#D9A76A]/40 text-[#D9A76A] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentSlide.badge}</span>
                <span className="text-white/40">•</span>
                <span>{currentSlide.tag}</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                  {currentSlide.title}
                </h1>
                <p className="text-sm sm:text-base text-[#D9C8B4] font-medium" dir="rtl">
                  {currentSlide.urdu}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D1C7BA] leading-relaxed max-w-xl">
                {currentSlide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={() => {
                    if (currentSlide.page) {
                      setPage(currentSlide.page);
                    } else if (currentSlide.category) {
                      setActiveCategory(currentSlide.category);
                      setPage('shop');
                    } else {
                      setPage('shop');
                    }
                  }}
                  className="px-6 py-3.5 rounded-xl bg-[#C28E5B] hover:bg-[#A87444] text-white text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2.5 shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-finder-cta"
                  onClick={() => setIsWarmthQuizOpen(true)}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-colors flex items-center gap-2 cursor-pointer backdrop-blur-xs"
                >
                  <Flame className="w-4 h-4 text-[#D9A76A]" />
                  <span>Warmth TOG Quiz</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap gap-4 sm:gap-6 text-xs text-[#C2AA8C]">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#D9A76A]" />
                  <span>Free Shipping All Pakistan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D9A76A]" />
                  <span>Cash on Delivery (COD)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D9A76A]" />
                  <span>Faisalabad Mill Direct</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlideIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  heroSlideIdx === idx ? 'w-8 bg-[#C28E5B]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick Warmth Finder Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F2ECE1] via-[#EAE1D2] to-[#F5EFE6] border border-[#DFCBB5] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C28E5B] text-white flex items-center justify-center shrink-0 shadow-md">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#8C6D46] uppercase">
                Interactive Buying Guide
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1C1A17] mt-0.5">
                Not sure which blanket fits your room climate?
              </h3>
              <p className="text-xs text-[#5E5547] mt-1 max-w-xl">
                Take our 30-second Warmth TOG Quiz. Whether you're in sub-zero Quetta or air-conditioned Karachi, our factory algorithm recommends the exact weight and ply.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsTextureViewerOpen(true)}
              className="px-4 py-2.5 rounded-xl border border-[#DECDB7] bg-white text-xs font-bold text-[#4A4235] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#8C6D46]" /> Compare Fabrics
            </button>

            <button
              onClick={() => setIsWarmthQuizOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Start Blanket Matcher</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Collections Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
              Factory Categories
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17] mt-1">
              Explore Our Signature Blanket Lines
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveCategory('all');
              setPage('shop');
            }}
            className="text-xs font-bold text-[#8C6D46] hover:text-[#1C1A17] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All 180+ Designs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesCards.map(cat => (
            <div
              key={cat.id}
              onClick={() => {
                if (cat.id === 'baby-kids') {
                  setPage('baby');
                } else {
                  setActiveCategory(cat.id as BlanketCategory);
                  setPage('shop');
                }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1C1A17]/80 text-[#D9A76A] backdrop-blur-xs">
                  {cat.badge}
                </span>
                <span className="absolute bottom-3 left-3 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                  {cat.count}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-base text-[#1C1A17] group-hover:text-[#8C6D46] transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-[#7A6B58] font-medium" dir="rtl">{cat.urdu}</span>
                  </div>
                  <p className="text-xs text-[#5E5547] mt-1 line-clamp-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-xs font-bold text-[#8C6D46]">
                  <span>Explore Series</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products with Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-[#E8E1D5] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
              Curated Catalog
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17] mt-1">
              Pakistan's Most Loved Blankets
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'featured', label: 'Bestsellers' },
              { id: '2-ply-double', label: '2-Ply Heavy' },
              { id: '1-ply-flannel', label: '1-Ply Flannel' },
              { id: 'baby-kids', label: 'Baby & Kids' },
              { id: 'bedspread-sets', label: 'Bridal Sets' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1C1A17] text-white shadow-xs'
                    : 'bg-[#F2ECE1] text-[#5E5547] hover:bg-[#EAE2D5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map(prod => {
            const inWish = isInWishlist(prod.id);
            return (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#F7F4EE]">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => navigateToProduct(prod)}
                  />

                  {/* Top Left Ply/Weight Badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1C1A17] text-[#D9A76A]">
                      {prod.ply}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/90 text-[#1C1A17] shadow-xs backdrop-blur-xs">
                      {prod.weightKg} kg
                    </span>
                  </div>

                  {/* Top Right Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(prod.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer shadow-xs ${
                      inWish 
                        ? 'bg-rose-50 text-rose-600' 
                        : 'bg-white/80 text-[#7A7265] hover:text-[#1C1A17] hover:bg-white'
                    }`}
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${inWish ? 'fill-rose-600' : ''}`} />
                  </button>

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openQuickView(prod)}
                      className="flex-1 py-2 px-3 rounded-xl bg-white/95 hover:bg-white text-[#1C1A17] text-xs font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer backdrop-blur-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                    <button
                      onClick={() => addToCart(prod)}
                      className="p-2 rounded-xl bg-[#C28E5B] hover:bg-[#A87444] text-white shadow-md cursor-pointer"
                      title="Add to Bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Rating & Warmth */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{prod.rating}</span>
                        <span className="text-[#8C7D6B] font-normal">({prod.reviewCount})</span>
                      </div>
                      <span className="font-semibold text-[#8C6D46] flex items-center gap-0.5">
                        <Flame className="w-3 h-3 text-[#C26B38]" /> {prod.togRating} TOG
                      </span>
                    </div>

                    <h3 
                      onClick={() => navigateToProduct(prod)}
                      className="font-serif font-bold text-sm text-[#1C1A17] hover:text-[#8C6D46] transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {prod.name}
                    </h3>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {prod.variants.map(v => (
                        <span
                          key={v.id}
                          className="w-2.5 h-2.5 rounded-full border border-black/15"
                          style={{ backgroundColor: v.colorHex }}
                          title={v.colorName}
                        />
                      ))}
                      <span className="text-[10px] text-[#7A7265] ml-1">
                        {prod.variants.length} color{prod.variants.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Price & Add */}
                  <div className="pt-2 border-t border-[#F5EFE6] flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-[#8C6D46]">
                        {formatPrice(prod.pricePKR)}
                      </span>
                      {prod.originalPricePKR && (
                        <span className="text-[11px] text-[#998F82] line-through block">
                          {formatPrice(prod.originalPricePKR)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(prod)}
                      className="px-3 py-1.5 rounded-lg bg-[#1C1A17] hover:bg-[#332E27] text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => {
              setActiveCategory('all');
              setPage('shop');
            }}
            className="px-8 py-3.5 rounded-xl border border-[#DECDB7] bg-white hover:bg-[#F2ECE1] text-xs font-bold text-[#1C1A17] transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
          >
            <span>Browse Complete Winter & All-Season Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* The HBK Factory & Heritage Story Section */}
      <section className="bg-[#1C1A17] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C28E5B]/20 border border-[#D9A76A]/30 text-[#D9A76A] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>HBK Blanket Industries • Faisalabad & Peshawar</span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
                Pakistan's First & Largest Integrated Blanket Mill
              </h2>

              <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                Founded by Chairman Haji Bahadur Khan, HBK is the only manufacturer in Pakistan producing luxury blankets from virgin polymer fibers to finished ultrasonic-hemmed products completely in-house.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#26221D] border border-[#3A342B]">
                  <span className="font-serif font-bold text-2xl text-[#D9A76A] block">2.8M+</span>
                  <span className="text-[11px] text-[#A69C8E]">Blankets Crafted Yearly</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#26221D] border border-[#3A342B]">
                  <span className="font-serif font-bold text-2xl text-[#D9A76A] block">180+</span>
                  <span className="text-[11px] text-[#A69C8E]">Signature 3D Relief Dies</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#26221D] border border-[#3A342B] col-span-2 sm:col-span-1">
                  <span className="font-serif font-bold text-2xl text-[#D9A76A] block">50,000+</span>
                  <span className="text-[11px] text-[#A69C8E]">Retail Dealers Across PK</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setPage('about')}
                  className="px-5 py-2.5 rounded-xl bg-[#C28E5B] hover:bg-[#A87444] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Explore Factory Tour
                </button>
                <button
                  onClick={() => setPage('b2b')}
                  className="px-5 py-2.5 rounded-xl bg-[#29241E] hover:bg-[#383229] text-[#D9A76A] border border-[#423A2E] text-xs font-bold transition-colors cursor-pointer"
                >
                  Wholesale & Institutional
                </button>
              </div>
            </div>

            {/* Factory Visuals Collage */}
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#3D352B] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80"
                  alt="HBK Factory Loom"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#26221D] border border-[#4A4032] p-4 rounded-xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-xs font-bold text-[#D9A76A]">Al-Imdad Textile Finishing (Karachi)</p>
                <p className="text-[11px] text-[#A69C8E] mt-1">High-temperature steam washing, drying & laser-controlled ultrasonic border edging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Customer Reviews Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46] inline-flex items-center gap-1.5">
              <FileJson className="w-3.5 h-3.5" />
              <span>Public Reviews Database ({reviews.length} Verified Entries)</span>
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17]">
              Trusted in Over 1.5 Million Pakistani Homes
            </h2>
            <p className="text-xs text-[#7A7265]">
              Real buyer experiences from Lahore, Karachi, Islamabad, Quetta, and across the country.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={exportReviewsJSON}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#DFCBB5] hover:bg-[#FAF8F5] text-xs font-bold text-[#1C1A17] flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
              title="Download reviews formatted in JSON"
            >
              <Download className="w-3.5 h-3.5 text-[#8C6D46]" />
              <span>Download reviews.json</span>
            </button>
            <button
              onClick={() => {
                navigateToProduct(PRODUCTS[0]);
              }}
              className="px-4 py-2 rounded-xl bg-[#1C1A17] hover:bg-[#332E27] text-white text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D9A76A]" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map(rev => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#E8E1D5] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold px-2 py-0.5 rounded-full bg-emerald-50">
                    Verified Buyer
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1C1A17]">
                  "{rev.title}"
                </h4>
                <p className="text-xs text-[#5E5547] leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#1C1A17]">{rev.author}</p>
                  <p className="text-[11px] text-[#8C6D46]">{rev.city}, Pakistan</p>
                </div>
                <span className="text-[10px] text-[#998F82]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B / Wholesale Callout Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1A17] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-[#3A332A] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl z-10">
            <span className="text-xs font-bold text-[#D9A76A] uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> B2B Ordering & Institutional Supply
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Are you a Retailer, Hotel, Hospital, or Exporter?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
              Order bulk cartons directly from our factory with volume wholesale pricing, ledger tracking, credit terms, and custom OEM branding.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 z-10">
            <button
              onClick={() => setPage('b2b')}
              className="px-6 py-3.5 rounded-xl bg-[#C28E5B] hover:bg-[#A87444] text-white text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Instant Wholesale Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
