import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  X, 
  Star, 
  Flame, 
  ShoppingBag, 
  Eye, 
  Heart, 
  Grid3X3, 
  Grid2X2, 
  List, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { BlanketCategory, Product, WarmthRating } from '../types';

export const ShopView: React.FC = () => {
  const { 
    activeCategory, 
    setActiveCategory, 
    formatPrice, 
    addToCart, 
    openQuickView, 
    navigateToProduct,
    toggleWishlist,
    isInWishlist,
    searchQuery,
    setSearchQuery
  } = useShop();

  const [selectedPly, setSelectedPly] = useState<string>('all');
  const [selectedWarmth, setSelectedWarmth] = useState<string>('all');
  const [selectedWeight, setSelectedWeight] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(16000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'warmth'>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');

  const categories: { id: BlanketCategory; label: string }[] = [
    { id: 'all', label: 'All Blankets & Bedding' },
    { id: 'bridal-trousseau', label: '👑 Bridal Trousseau & Jahez' },
    { id: '2-ply-double', label: '2-Ply Heavy Double Bed' },
    { id: '1-ply-flannel', label: '1-Ply Cozy Flannel' },
    { id: 'baby-kids', label: 'Baby & Kids Wraps' },
    { id: 'bedspread-sets', label: 'Bridal Bedspread Sets' },
    { id: 'summer-fleece', label: 'Summer AC Fleece' },
    { id: 'institutional', label: 'Hotel & Hospital Packs' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      // Ply filter
      if (selectedPly !== 'all' && p.ply !== selectedPly) {
        return false;
      }
      // Warmth filter
      if (selectedWarmth !== 'all' && p.warmthRating !== selectedWarmth) {
        return false;
      }
      // Weight filter
      if (selectedWeight === 'under-2' && p.weightKg >= 2) return false;
      if (selectedWeight === '2-to-4' && (p.weightKg < 2 || p.weightKg > 4)) return false;
      if (selectedWeight === '4-to-6' && (p.weightKg < 4 || p.weightKg > 6)) return false;
      if (selectedWeight === 'over-6' && p.weightKg < 6) return false;

      // Price filter
      if (p.pricePKR > maxPrice) return false;

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchUrdu = p.urduName && p.urduName.includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchMat = p.material.toLowerCase().includes(q);
        if (!matchName && !matchUrdu && !matchDesc && !matchMat) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePKR - b.pricePKR;
      if (sortBy === 'price-desc') return b.pricePKR - a.pricePKR;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'warmth') return b.togRating - a.togRating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeCategory, selectedPly, selectedWarmth, selectedWeight, maxPrice, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setActiveCategory('all');
    setSelectedPly('all');
    setSelectedWarmth('all');
    setSelectedWeight('all');
    setMaxPrice(16000);
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    activeCategory !== 'all' || 
    selectedPly !== 'all' || 
    selectedWarmth !== 'all' || 
    selectedWeight !== 'all' || 
    maxPrice < 16000 ||
    searchQuery !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="border-b border-[#E8E1D5] pb-6 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
              HBK Blankets Catalog
            </span>
            <h1 className="font-serif font-bold text-2xl sm:text-4xl text-[#1C1A17] mt-1">
              {activeCategory === 'all' 
                ? 'All Blankets & Bedding Collections' 
                : categories.find(c => c.id === activeCategory)?.label}
            </h1>
            <p className="text-xs text-[#7A7265] mt-1">
              Direct factory pricing with free shipping to all cities in Pakistan. 100% genuine factory direct.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by name, weight, 2-ply..."
              className="w-full text-xs bg-white border border-[#DFCBB5] rounded-xl pl-9 pr-3 py-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B] shadow-inner"
            />
            <Search className="w-4 h-4 text-[#8C7D6B] absolute left-3 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-xs text-[#8C7D6B] hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar & Products */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-6">
          <div className="p-5 bg-white rounded-2xl border border-[#E8E1D5] shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1C1A17] flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#8C6D46]" /> Filter Catalog
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] font-bold text-rose-600 hover:underline cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Category selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1C1A17] block">Collection</label>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#F2ECE1] font-bold text-[#1C1A17]'
                        : 'text-[#5E5547] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ply Count */}
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <label className="text-xs font-bold text-[#1C1A17] block">Ply Count</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All' },
                  { id: '1-Ply', label: '1-Ply' },
                  { id: '2-Ply', label: '2-Ply' },
                  { id: 'Quilted / Multi-layer', label: 'Quilted' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPly(p.id)}
                    className={`px-3 py-1 text-xs rounded-lg border transition-colors cursor-pointer ${
                      selectedPly === p.id
                        ? 'border-[#8C6D46] bg-[#8C6D46] text-white font-bold'
                        : 'border-[#DFCBB5] bg-white text-[#5E5547] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Warmth Rating */}
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <label className="text-xs font-bold text-[#1C1A17] block">Warmth Rating</label>
              <div className="space-y-1">
                {[
                  { id: 'all', label: 'All Warmth Levels' },
                  { id: 'Light Summer', label: 'Light Summer / AC' },
                  { id: 'Medium All-Season', label: 'Medium All-Season' },
                  { id: 'Heavy Winter', label: 'Heavy Winter' },
                  { id: 'Arctic Ultra-Warm', label: 'Arctic Ultra-Warm (6kg+)' }
                ].map(w => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWarmth(w.id)}
                    className={`w-full text-left px-2.5 py-1 rounded-md text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      selectedWarmth === w.id
                        ? 'bg-[#F2ECE1] font-bold text-[#1C1A17]'
                        : 'text-[#5E5547] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{w.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Filter */}
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <label className="text-xs font-bold text-[#1C1A17] block">Blanket Weight</label>
              <div className="space-y-1">
                {[
                  { id: 'all', label: 'Any Weight' },
                  { id: 'under-2', label: 'Under 2 kg (Light)' },
                  { id: '2-to-4', label: '2 kg – 4 kg (Balanced)' },
                  { id: '4-to-6', label: '4 kg – 6 kg (Heavy)' },
                  { id: 'over-6', label: 'Over 6 kg (Extra Heavy)' }
                ].map(wt => (
                  <button
                    key={wt.id}
                    onClick={() => setSelectedWeight(wt.id)}
                    className={`w-full text-left px-2.5 py-1 rounded-md text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      selectedWeight === wt.id
                        ? 'bg-[#F2ECE1] font-bold text-[#1C1A17]'
                        : 'text-[#5E5547] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{wt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Max Price Range Slider */}
            <div className="space-y-2 pt-2 border-t border-[#F0EBE1]">
              <div className="flex justify-between text-xs font-bold text-[#1C1A17]">
                <span>Max Price:</span>
                <span className="text-[#8C6D46]">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={2000}
                max={16000}
                step={500}
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#8C6D46] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8C7D6B]">
                <span>₨ 2,000</span>
                <span>₨ 16,000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Catalog Grid */}
        <main className="lg:col-span-3 space-y-6">
          {/* Controls Bar: Sort, View Layout, Mobile Filter Trigger */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E8E1D5] shadow-xs flex flex-wrap items-center justify-between gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden px-3 py-1.5 rounded-lg border border-[#DFCBB5] text-xs font-bold flex items-center gap-1.5 text-[#1C1A17] cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters ? '• Active' : ''}</span>
            </button>

            {/* Showing Count */}
            <span className="text-xs font-medium text-[#7A7265]">
              Showing <strong className="text-[#1C1A17]">{filteredProducts.length}</strong> authentic products
            </span>

            {/* Right: Sort & Layout */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[#7A7265] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="bg-[#FAF8F5] border border-[#DECDB7] rounded-lg px-2.5 py-1.5 text-xs text-[#1C1A17] font-medium focus:outline-none focus:border-[#C28E5B] cursor-pointer"
                >
                  <option value="featured">Featured & Best Selling</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="warmth">Warmth Rating (TOG)</option>
                </select>
              </div>

              {/* Grid / List switch */}
              <div className="hidden sm:flex items-center border border-[#DECDB7] rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewLayout('grid')}
                  className={`p-1.5 cursor-pointer ${
                    viewLayout === 'grid' ? 'bg-[#1C1A17] text-white' : 'text-[#7A7265] hover:bg-[#F2ECE1]'
                  }`}
                  title="Grid View"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewLayout('list')}
                  className={`p-1.5 cursor-pointer ${
                    viewLayout === 'list' ? 'bg-[#1C1A17] text-white' : 'text-[#7A7265] hover:bg-[#F2ECE1]'
                  }`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filter Sheet */}
          {isMobileFiltersOpen && (
            <div className="lg:hidden p-4 bg-white rounded-2xl border border-[#DFCBB5] space-y-4 animate-fadeIn">
              <div className="flex justify-between items-center border-b border-[#F0EBE1] pb-2">
                <span className="text-xs font-bold text-[#1C1A17]">Refine Catalog</span>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="text-xs text-[#7A7265] hover:text-black cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1C1A17] block mb-1">Collection</label>
                <select
                  value={activeCategory}
                  onChange={e => setActiveCategory(e.target.value as any)}
                  className="w-full text-xs p-2 rounded-lg border border-[#DECDB7]"
                >
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#1C1A17] block mb-1">Ply</label>
                  <select
                    value={selectedPly}
                    onChange={e => setSelectedPly(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-[#DECDB7]"
                  >
                    <option value="all">All Ply</option>
                    <option value="1-Ply">1-Ply</option>
                    <option value="2-Ply">2-Ply</option>
                    <option value="Quilted / Multi-layer">Quilted</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#1C1A17] block mb-1">Warmth</label>
                  <select
                    value={selectedWarmth}
                    onChange={e => setSelectedWarmth(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-[#DECDB7]"
                  >
                    <option value="all">All Warmth</option>
                    <option value="Light Summer">Light Summer</option>
                    <option value="Medium All-Season">Medium All-Season</option>
                    <option value="Heavy Winter">Heavy Winter</option>
                    <option value="Arctic Ultra-Warm">Arctic</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results Grid / List */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E1D5] p-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#8C6D46]">
                <Search className="w-8 h-8 opacity-40" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1A17]">No blankets match your criteria</h3>
              <p className="text-xs text-[#7A7265] max-w-sm mx-auto">
                Try loosening your filters or clearing your search term to view our full collection of 180+ designs.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-5 py-2 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewLayout === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(prod => {
                const inWish = isInWishlist(prod.id);
                return (
                  <div
                    key={prod.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#F7F4EE]">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => navigateToProduct(prod)}
                      />

                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1C1A17] text-[#D9A76A]">
                          {prod.ply}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/90 text-[#1C1A17] shadow-xs backdrop-blur-xs">
                          {prod.weightKg} kg
                        </span>
                      </div>

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

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
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
                          className="px-3.5 py-1.5 rounded-lg bg-[#1C1A17] hover:bg-[#332E27] text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredProducts.map(prod => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] p-4 flex flex-col sm:flex-row gap-4 items-center justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 rounded-xl object-cover border border-[#E8E1D5] shrink-0 cursor-pointer"
                      onClick={() => navigateToProduct(prod)}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1C1A17] text-[#D9A76A]">
                          {prod.ply}
                        </span>
                        <span className="text-[10px] text-[#7A7265]">{prod.weightKg} kg</span>
                        <span className="text-[10px] text-[#8C6D46] font-semibold">{prod.togRating} TOG</span>
                      </div>
                      <h3
                        onClick={() => navigateToProduct(prod)}
                        className="font-serif font-bold text-base text-[#1C1A17] hover:text-[#8C6D46] cursor-pointer"
                      >
                        {prod.name}
                      </h3>
                      <p className="text-xs text-[#7A7265] line-clamp-1">{prod.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-[#F0EBE1]">
                    <div className="text-right">
                      <span className="text-base font-bold text-[#8C6D46] block">
                        {formatPrice(prod.pricePKR)}
                      </span>
                      {prod.originalPricePKR && (
                        <span className="text-[11px] text-[#998F82] line-through block">
                          {formatPrice(prod.originalPricePKR)}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => openQuickView(prod)}
                        className="p-2.5 rounded-xl border border-[#DECDB7] hover:bg-[#FAF8F5] text-[#1C1A17] cursor-pointer"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => addToCart(prod)}
                        className="px-4 py-2.5 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] cursor-pointer shadow-sm"
                      >
                        Add To Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
