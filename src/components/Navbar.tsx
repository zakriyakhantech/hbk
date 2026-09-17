import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Flame, 
  Truck, 
  Phone, 
  Building2, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  Home,
  Layers,
  Crown,
  Baby,
  Bed,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { BlanketCategory, CurrencyCode, PageType } from '../types';

export const Navbar: React.FC = () => {
  const { 
    page, 
    setPage, 
    cartItemCount, 
    cartTotalPKR, 
    setIsCartOpen, 
    wishlist, 
    currency, 
    setCurrency, 
    formatPrice, 
    setIsWarmthQuizOpen, 
    navigateToProduct, 
    activeCategory, 
    setActiveCategory,
    setSearchQuery
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const searchResults = searchInput.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        (p.urduName && p.urduName.includes(searchInput)) ||
        p.material.toLowerCase().includes(searchInput.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchInput.toLowerCase()) ||
        p.category.toLowerCase().includes(searchInput.toLowerCase())
      ).slice(0, 5);

  const quickPills: { id: BlanketCategory | 'quiz' | 'b2b' | 'track'; label: string; icon?: React.ReactNode; badge?: string }[] = [
    { id: 'all', label: 'All Blankets', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'bridal-trousseau', label: 'Bridal Trousseau (Jahez)', icon: <Crown className="w-3.5 h-3.5 text-amber-600" />, badge: '8kg' },
    { id: '2-ply-double', label: '2-Ply Heavyweight', icon: <Sparkles className="w-3.5 h-3.5 text-[#C28E5B]" />, badge: 'Best Seller' },
    { id: '1-ply-flannel', label: '1-Ply Soft Flannel' },
    { id: 'baby-kids', label: 'Baby & Nursery', icon: <Baby className="w-3.5 h-3.5 text-pink-600" /> },
    { id: 'bedspread-sets', label: 'Bedspread Sets', icon: <Bed className="w-3.5 h-3.5" /> },
    { id: 'quiz', label: 'Warmth TOG Quiz', icon: <Flame className="w-3.5 h-3.5 text-orange-500" /> },
    { id: 'track', label: 'Track Order', icon: <Truck className="w-3.5 h-3.5 text-emerald-600" /> },
    { id: 'b2b', label: 'B2B Mill Direct', icon: <Building2 className="w-3.5 h-3.5 text-[#8C6D46]" /> }
  ];

  const navMenuItems: { label: string; page: PageType; categoryAction?: BlanketCategory; badge?: string; icon?: React.ReactNode }[] = [
    { label: 'Home', page: 'home', icon: <Home className="w-4 h-4" /> },
    { label: 'Shop All Blankets', page: 'shop', categoryAction: 'all', icon: <Layers className="w-4 h-4" /> },
    { label: 'Bridal Trousseau & Jahez', page: 'shop', categoryAction: 'bridal-trousseau', badge: 'Royal 8kg', icon: <Crown className="w-4 h-4 text-amber-600" /> },
    { label: '2-Ply Heavyweight Mink', page: 'shop', categoryAction: '2-ply-double', badge: '5kg+ Hot', icon: <Sparkles className="w-4 h-4 text-[#C28E5B]" /> },
    { label: '1-Ply Cozy Flannel', page: 'shop', categoryAction: '1-ply-flannel', icon: <Layers className="w-4 h-4" /> },
    { label: 'Baby & Toddler Wraps', page: 'baby', badge: 'Safe', icon: <Baby className="w-4 h-4 text-pink-600" /> },
    { label: 'B2B Wholesale & Dealerships', page: 'b2b', badge: 'Mill Price', icon: <Building2 className="w-4 h-4 text-[#8C6D46]" /> },
    { label: 'Faisalabad & Peshawar Mills', page: 'about', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Track Consignment (CN)', page: 'track', icon: <Truck className="w-4 h-4 text-emerald-600" /> },
    { label: 'Contact & Support', page: 'contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const handlePillClick = (item: typeof quickPills[0]) => {
    if (item.id === 'quiz') {
      setIsWarmthQuizOpen(true);
      return;
    }
    if (item.id === 'b2b') {
      setPage('b2b');
      return;
    }
    if (item.id === 'track') {
      setPage('track');
      return;
    }
    setActiveCategory(item.id as BlanketCategory);
    setPage('shop');
  };

  const handleNavClick = (targetPage: PageType, categoryAction?: BlanketCategory) => {
    if (categoryAction) {
      setActiveCategory(categoryAction);
    } else if (targetPage === 'shop') {
      setActiveCategory('all');
    }
    setPage(targetPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E1D5] shadow-xs transition-all">
        {/* Top Ticker / Trust Announcement Bar */}
        <div className="bg-[#1C1A17] text-[#EDE7DE] text-[11px] py-1.5 px-3 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-flex items-center gap-1 font-semibold text-[#E5B57F]">
                <Truck className="w-3.5 h-3.5 text-[#E5B57F] shrink-0" />
                <span>FREE Home Delivery</span>
              </span>
              <span className="text-[#8C7D6B] hidden sm:inline">•</span>
              <span className="hidden sm:inline text-neutral-300 truncate">
                Lahore, Karachi, Islamabad, Peshawar, Quetta & 350+ Pakistani Cities
              </span>
              <span className="text-[#8C7D6B] hidden md:inline">•</span>
              <span className="hidden md:inline font-medium text-emerald-400">
                Pay with Cash on Delivery (COD)
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/923001234567?text=Hello%20HBK%20Blankets,%20I%20want%20to%20order%20or%20inquire%20about%20blankets."
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[#EDE7DE] hover:text-[#E5B57F] transition-colors font-medium"
              >
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span>WhatsApp: +92 300 1234567</span>
              </a>

              <span className="text-[#4E4438] hidden sm:inline">|</span>

              {/* Currency Picker */}
              <div className="relative">
                <button
                  id="currency-toggle-btn"
                  onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                  className="flex items-center gap-1 font-bold text-[#EDE7DE] hover:text-[#E5B57F] transition-colors px-1 py-0.5 rounded cursor-pointer"
                >
                  <span className="text-[#E5B57F]">{currency}</span>
                  <ChevronDown className="w-3 h-3 text-[#B3A694]" />
                </button>

                {isCurrencyDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-32 bg-[#1C1A17] border border-[#3E372E] rounded-xl shadow-2xl py-1 z-50">
                    {(['PKR', 'USD', 'AED', 'SAR'] as CurrencyCode[]).map(curr => (
                      <button
                        key={curr}
                        onClick={() => {
                          setCurrency(curr);
                          setIsCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#2F2A23] cursor-pointer flex items-center justify-between ${
                          currency === curr ? 'text-[#E5B57F] font-bold' : 'text-neutral-300'
                        }`}
                      >
                        <span>{curr}</span>
                        <span className="text-[10px] text-neutral-400">
                          {curr === 'PKR' ? '₨' : curr === 'USD' ? '$' : curr}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
            
            {/* Left: Brand Identity / HBK Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group select-none shrink-0"
              title="HBK Blankets - Haji Bahadur Khan Textile Mills"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#1C1A17] via-[#2F2921] to-[#1C1A17] flex items-center justify-center text-[#E5B57F] shadow-md border border-[#96764D]/50 group-hover:scale-105 transition-transform">
                <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-[#E5B57F]">HBK</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-xl sm:text-2xl tracking-wide text-[#1C1A17]">HBK</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-extrabold text-[#8C6D46] border-l border-[#DECDB7] pl-1.5">
                    Blankets
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-[#7A7265] tracking-tight font-semibold uppercase hidden xs:block">
                  Haji Bahadur Khan Mills • Since 1994
                </p>
              </div>
            </div>

            {/* Middle: Desktop Search Bar with Live Instant Autocomplete */}
            <div className="hidden lg:flex flex-1 max-w-lg mx-4 relative">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  placeholder="Search 2-Ply, Bridal Trousseau 8kg, Flannel, Baby Blankets..."
                  className="w-full bg-[#F4EFE6] text-xs text-[#1C1A17] placeholder-[#8A8174] pl-10 pr-16 py-2.5 rounded-full border border-[#DFD7C7] focus:outline-none focus:border-[#C28E5B] focus:bg-white focus:ring-2 focus:ring-[#C28E5B]/20 transition-all shadow-inner"
                />
                <Search className="w-4 h-4 text-[#8A8174] absolute left-3.5 top-3" />
                {searchInput && (
                  <button
                    onClick={() => setSearchInput('')}
                    className="absolute right-3 top-2.5 text-xs text-[#8A8174] hover:text-[#1C1A17] cursor-pointer font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#DECDB7] py-2 z-50 overflow-hidden animate-fadeIn">
                  <div className="px-3.5 py-1 text-[10px] font-bold text-[#8C6D46] uppercase tracking-wider flex items-center justify-between border-b border-[#F5EFE6]">
                    <span>Matching Products ({searchResults.length})</span>
                    <span className="text-[#8C7D6B] font-normal">Click to view details</span>
                  </div>
                  {searchResults.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        navigateToProduct(prod);
                        setSearchInput('');
                      }}
                      className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-[#FAF6F0] cursor-pointer transition-colors border-b border-[#F5EFE6] last:border-0"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-lg object-cover border border-[#DECDB7] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#1C1A17] truncate">{prod.name}</p>
                        <p className="text-[11px] text-[#7A7265]">{prod.ply} • {prod.weightKg}kg • {prod.warmthRating}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#8C6D46] block">
                          {formatPrice(prod.pricePKR)}
                        </span>
                        {prod.originalPricePKR && (
                          <span className="text-[10px] text-neutral-400 line-through">
                            {formatPrice(prod.originalPricePKR)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Actions, Warmth Finder, Cart, Menu Button */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Warmth Finder Button */}
              <button
                id="blanket-finder-btn"
                onClick={() => setIsWarmthQuizOpen(true)}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-[#F4EFE6] text-[#7A5626] border border-[#DFCBB5] hover:bg-[#EADBCE] transition-all cursor-pointer shadow-xs"
                title="Interactive Warmth TOG Calculator"
              >
                <Flame className="w-3.5 h-3.5 text-[#D16D34] fill-[#D16D34]" />
                <span>Warmth Finder</span>
              </button>

              {/* Mobile Search Trigger */}
              <button
                id="mobile-search-toggle-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden p-2 rounded-full text-[#38332B] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
                aria-label="Search blankets"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                id="wishlist-btn"
                onClick={() => {
                  setActiveCategory('all');
                  setPage('shop');
                }}
                className="relative p-2 rounded-full text-[#38332B] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
                title="Saved Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#A83232] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button */}
              <button
                id="cart-drawer-toggle-btn"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#332E27] transition-all cursor-pointer shadow-md group"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#E5B57F]" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#C28E5B] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col text-left leading-none">
                  <span className="text-[10px] text-neutral-400 font-medium">Cart</span>
                  <span className="text-xs font-bold text-[#E5B57F]">
                    {cartItemCount > 0 ? formatPrice(cartTotalPKR) : '₨ 0'}
                  </span>
                </div>
              </button>

              {/* Hamburger Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-[#1C1A17] hover:bg-[#F2ECE1] transition-colors cursor-pointer border border-[#DECDB7]/70"
                aria-label="Open full menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Expandable Search on Mobile */}
          {isSearchOpen && (
            <div className="lg:hidden py-3 border-t border-[#E8E1D5] animate-fadeIn">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  placeholder="Search 2-Ply, Bridal, Flannel, Baby, Sherpa..."
                  className="w-full bg-[#F4EFE6] text-xs text-[#1C1A17] placeholder-[#8A8174] pl-10 pr-14 py-2.5 rounded-full border border-[#DFD7C7] focus:outline-none focus:border-[#C28E5B] focus:bg-white"
                />
                <Search className="w-4 h-4 text-[#8A8174] absolute left-3.5 top-3" />
                {searchInput && (
                  <button
                    onClick={() => setSearchInput('')}
                    className="absolute right-3 top-2.5 text-xs text-[#8A8174] hover:text-[#1C1A17] cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Mobile Autocomplete Results */}
              {searchResults.length > 0 && (
                <div className="mt-2 bg-white rounded-2xl shadow-xl border border-[#DECDB7] divide-y divide-[#F5EFE6] max-h-64 overflow-y-auto">
                  {searchResults.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        navigateToProduct(prod);
                        setSearchInput('');
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center gap-3 p-2.5 hover:bg-[#FAF6F0]"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#1C1A17] truncate">{prod.name}</p>
                        <p className="text-[10px] text-[#7A7265]">{prod.ply} • {formatPrice(prod.pricePKR)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Category Pills Sub-Bar (Horizontal Scrollable on all devices) */}
        <div className="w-full bg-[#FAF6F0]/90 border-t border-[#EAE3D5] py-2 px-3 sm:px-6 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 whitespace-nowrap min-w-max">
            {quickPills.map(pill => {
              const isSelected = 
                (page === 'shop' && activeCategory === pill.id) ||
                (page === 'baby' && pill.id === 'baby-kids') ||
                (page === 'b2b' && pill.id === 'b2b') ||
                (page === 'track' && pill.id === 'track');

              return (
                <button
                  key={pill.id}
                  onClick={() => handlePillClick(pill)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1C1A17] text-[#FAF8F5] shadow-xs'
                      : 'bg-white text-[#4A4235] border border-[#DECDB7] hover:border-[#8C6D46] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {pill.icon}
                  <span>{pill.label}</span>
                  {pill.badge && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                      isSelected 
                        ? 'bg-[#C28E5B] text-white' 
                        : 'bg-[#F0E6D8] text-[#8C6D46]'
                    }`}>
                      {pill.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Enhanced Full-Screen Mobile Drawer (Never cuts off, smooth slide-in, body lock) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content Panel */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-slideRight">
            
            {/* Drawer Header */}
            <div>
              <div className="p-4 bg-[#1C1A17] text-white flex items-center justify-between border-b border-[#3E372E]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2E2820] to-[#1C1A17] flex items-center justify-center text-[#E5B57F] border border-[#96764D]/50 font-serif font-black text-base">
                    HBK
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FAF8F5]">HBK Blankets</h3>
                    <p className="text-[10px] text-[#C28E5B] font-medium">Haji Bahadur Khan Mills Direct</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Warmth Finder CTA Banner in drawer */}
              <div className="p-3 bg-[#FAF6F0] border-b border-[#DECDB7]">
                <button
                  onClick={() => {
                    setIsWarmthQuizOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#F7EFE3] to-[#F1E5D1] border border-[#DFCBB5] text-[#6E4F28] font-bold text-xs shadow-xs cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#D16D34] fill-[#D16D34]" />
                    <span>Find Your Ideal Warmth TOG</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Navigation Menu List */}
              <div className="p-3 space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D46] px-3 py-1.5">
                  Blanket Collections & Portals
                </p>
                {navMenuItems.map(item => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.page, item.categoryAction)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      page === item.page && (!item.categoryAction || activeCategory === item.categoryAction)
                        ? 'bg-[#1C1A17] text-white shadow-xs'
                        : 'text-[#3E372E] hover:bg-[#FAF6F0]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#C28E5B] text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Footer & Direct Help */}
            <div className="p-4 border-t border-[#E8E1D5] bg-[#FAF8F5] space-y-3">
              {/* Mill authenticity badge */}
              <div className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-[#DECDB7]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#4A4235]">
                  <p className="font-bold text-[#1C1A17]">100% Genuine Factory Direct</p>
                  <p className="text-[10px] text-[#7A7265]">ISO 9001 & OEKO-TEX Standard 100 Certified</p>
                </div>
              </div>

              {/* Quick Contact buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+92915278910"
                  className="py-2 px-3 rounded-xl bg-[#1C1A17] hover:bg-[#332E27] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5B57F]" />
                  <span>Call Mill</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-[#8C7D6B]">
                Peshawar & Faisalabad Mills • All Pakistan COD
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Flagship Mobile Bottom Navigation Bar (Gold Standard for Pakistani E-Commerce) */}
      <nav 
        id="mobile-bottom-nav"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#DECDB7] px-2 py-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] flex items-center justify-around"
      >
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
            page === 'home' ? 'text-[#1C1A17] font-bold' : 'text-[#7A7265] hover:text-[#1C1A17]'
          }`}
        >
          <Home className={`w-5 h-5 ${page === 'home' ? 'text-[#C28E5B]' : 'text-[#8A8174]'}`} />
          <span>Home</span>
        </button>

        <button
          onClick={() => {
            setActiveCategory('all');
            handleNavClick('shop');
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
            page === 'shop' ? 'text-[#1C1A17] font-bold' : 'text-[#7A7265] hover:text-[#1C1A17]'
          }`}
        >
          <Layers className={`w-5 h-5 ${page === 'shop' ? 'text-[#C28E5B]' : 'text-[#8A8174]'}`} />
          <span>Catalog</span>
        </button>

        <button
          onClick={() => setIsWarmthQuizOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-[10px] font-semibold text-[#6E4F28] hover:text-[#1C1A17] transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 -mt-3.5 rounded-full bg-gradient-to-tr from-[#1C1A17] to-[#8C6D46] text-[#E5B57F] flex items-center justify-center shadow-md border-2 border-white">
            <Flame className="w-4 h-4 fill-[#E5B57F] text-[#E5B57F]" />
          </div>
          <span>Warmth</span>
        </button>

        <button
          onClick={() => handleNavClick('track')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
            page === 'track' ? 'text-[#1C1A17] font-bold' : 'text-[#7A7265] hover:text-[#1C1A17]'
          }`}
        >
          <Truck className={`w-5 h-5 ${page === 'track' ? 'text-[#C28E5B]' : 'text-[#8A8174]'}`} />
          <span>Track</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-[10px] font-semibold text-[#7A7265] hover:text-[#1C1A17] transition-colors cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#1C1A17]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#C28E5B] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                {cartItemCount}
              </span>
            )}
          </div>
          <span className="font-bold text-[#1C1A17]">
            {cartItemCount > 0 ? formatPrice(cartTotalPKR) : 'Cart'}
          </span>
        </button>
      </nav>
    </>
  );
};
