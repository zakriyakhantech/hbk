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
  ShieldCheck,
  Award,
  Factory,
  Mail,
  UserCheck
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
    setIsTextureViewerOpen
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when mobile menu or leadership modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isLeadershipModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isLeadershipModalOpen]);

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

  const quickPills: { id: BlanketCategory | 'quiz' | 'b2b' | 'track' | 'leadership'; label: string; icon?: React.ReactNode; badge?: string }[] = [
    { id: 'all', label: 'All Blankets', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'bridal-trousseau', label: 'Bridal Trousseau (Jahez)', icon: <Crown className="w-3.5 h-3.5 text-amber-600" />, badge: '8kg Royal' },
    { id: '2-ply-double', label: '2-Ply Heavyweight', icon: <Sparkles className="w-3.5 h-3.5 text-[#C28E5B]" />, badge: 'Best Seller' },
    { id: '1-ply-flannel', label: '1-Ply Soft Flannel' },
    { id: 'baby-kids', label: 'Baby & Nursery', icon: <Baby className="w-3.5 h-3.5 text-pink-600" /> },
    { id: 'bedspread-sets', label: 'Bedspread Sets', icon: <Bed className="w-3.5 h-3.5" /> },
    { id: 'leadership', label: 'CEO & Director', icon: <Crown className="w-3.5 h-3.5 text-amber-500" />, badge: 'Executive' },
    { id: 'quiz', label: 'Warmth Finder', icon: <Flame className="w-3.5 h-3.5 text-orange-500" /> },
    { id: 'track', label: 'Track Consignment', icon: <Truck className="w-3.5 h-3.5 text-emerald-600" /> },
    { id: 'b2b', label: 'B2B Mill Direct', icon: <Building2 className="w-3.5 h-3.5 text-[#8C6D46]" /> }
  ];

  const desktopNavLinks: { label: string; page: PageType; categoryAction?: BlanketCategory; badge?: string; icon?: React.ReactNode; isLeadershipTrigger?: boolean }[] = [
    { label: 'Home', page: 'home', icon: <Home className="w-3.5 h-3.5" /> },
    { label: 'All Blankets', page: 'shop', categoryAction: 'all', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Bridal Trousseau (8kg)', page: 'shop', categoryAction: 'bridal-trousseau', badge: 'Royal Jahez', icon: <Crown className="w-3.5 h-3.5 text-amber-500" /> },
    { label: '2-Ply Heavy Winter', page: 'shop', categoryAction: '2-ply-double', badge: '5kg+ Mink', icon: <Sparkles className="w-3.5 h-3.5 text-[#C28E5B]" /> },
    { label: '1-Ply Cozy Flannel', page: 'shop', categoryAction: '1-ply-flannel' },
    { label: 'Baby & Kids', page: 'baby', badge: 'New' },
    { label: 'B2B Wholesale', page: 'b2b', badge: 'Mill Direct' },
    { label: 'Our Mills', page: 'about', icon: <Factory className="w-3.5 h-3.5" /> },
    { label: 'Track Order', page: 'track', icon: <Truck className="w-3.5 h-3.5 text-emerald-600" /> },
    { label: 'Executive Board', page: 'about', isLeadershipTrigger: true, badge: 'CEO & Director', icon: <Crown className="w-3.5 h-3.5 text-[#E5B57F]" /> }
  ];

  const handlePillClick = (item: typeof quickPills[0]) => {
    if (item.id === 'leadership') {
      setIsLeadershipModalOpen(true);
      return;
    }
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

  const handleNavClick = (targetPage: PageType, categoryAction?: BlanketCategory, isLeadershipTrigger?: boolean) => {
    if (isLeadershipTrigger) {
      setIsLeadershipModalOpen(true);
      setIsMobileMenuOpen(false);
      return;
    }
    if (categoryAction) {
      setActiveCategory(categoryAction);
    } else if (targetPage === 'shop') {
      setActiveCategory('all');
    }
    setPage(targetPage);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Primary Sticky Header: z-[60] guarantees it NEVER hides below page content or banners */}
      <header className="sticky top-0 z-[60] w-full bg-white border-b border-[#DFCBB5] shadow-xs transition-all">
        
        {/* Tier 1: Executive Leadership & Trust Top Ribbon */}
        <div className="bg-[#0E0D0A] text-[#EDE7DE] text-[11px] py-1.5 px-3 sm:px-6 border-b border-[#2D2419]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            
            {/* Left: Free delivery & COD status */}
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-flex items-center gap-1 font-bold text-[#F3C472]">
                <Truck className="w-3.5 h-3.5 text-[#F3C472] shrink-0" />
                <span>FREE Home Delivery</span>
              </span>
              <span className="text-[#695F52] hidden sm:inline">•</span>
              <span className="hidden sm:inline text-neutral-300 truncate">
                Lahore, Karachi, Islamabad, Peshawar, Quetta & 350+ Cities
              </span>
              <span className="text-[#695F52] hidden md:inline">•</span>
              <span className="hidden md:inline font-semibold text-emerald-400">
                Cash on Delivery (COD)
              </span>
            </div>

            {/* Center/Executive Highlight: CEO Mohibullah & Director Amir Khan Afridi */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsLeadershipModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#2B1F14] to-[#1C140D] border border-[#B8860B]/60 text-[#F5D08A] hover:text-white hover:border-[#F0C27B] text-[10px] sm:text-[11px] font-bold tracking-wide transition-all shadow-xs cursor-pointer group"
                title="View HBK Executive Leadership Profile"
              >
                <Crown className="w-3 h-3 text-[#F3C472] group-hover:rotate-12 transition-transform" />
                <span className="hidden xs:inline">Executive Board:</span>
                <span className="text-white font-extrabold group-hover:text-[#F5D08A] transition-colors">CEO Mohibullah</span>
                <span className="text-[#8C7D6B]">•</span>
                <span className="text-white font-extrabold group-hover:text-[#F5D08A] transition-colors">Director Amir Khan Afridi</span>
                <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#C58B38] text-black font-extrabold ml-1 hidden sm:inline">
                  Profiles
                </span>
              </button>
            </div>

            {/* Right: Currency & WhatsApp */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/923001234567?text=Hello%20HBK%20Blankets,%20I%20want%20to%20inquire%20about%20blankets."
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex items-center gap-1 text-[#EDE7DE] hover:text-[#F3C472] transition-colors font-medium"
              >
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span>WhatsApp: +92 300 1234567</span>
              </a>

              <span className="text-[#4E4438] hidden lg:inline">|</span>

              {/* Currency Selector */}
              <div className="relative">
                <button
                  id="currency-toggle-btn"
                  onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                  className="flex items-center gap-1 font-bold text-[#EDE7DE] hover:text-[#F3C472] transition-colors px-1 py-0.5 rounded cursor-pointer"
                >
                  <span className="text-[#F3C472]">{currency}</span>
                  <ChevronDown className="w-3 h-3 text-[#B3A694]" />
                </button>

                {isCurrencyDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-32 bg-[#1C1A17] border border-[#3E372E] rounded-xl shadow-2xl py-1 z-[70]">
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

        {/* Tier 2: Main Brand & Action Center Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-3 sm:gap-6">
            
            {/* Brand Logo & Founder Heritage */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group select-none shrink-0"
              title="HBK Blankets - Haji Bahadur Khan Textile Mills"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#18140E] via-[#2A1D11] to-[#15110B] flex items-center justify-center text-[#F3C472] shadow-md border border-[#B8860B]/60 group-hover:scale-105 transition-transform">
                <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-[#F3C472]">HBK</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-xl sm:text-2xl tracking-wide text-[#181512]">HBK</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-extrabold text-[#996F37] border-l border-[#DECDB7] pl-1.5">
                    Blankets
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-[#7A7265] font-semibold tracking-tight">
                  <span className="uppercase text-[#996F37] font-bold">Haji Bahadur Khan Mills</span>
                  <span className="hidden sm:inline text-[#C2AA8C]">•</span>
                  <span className="hidden sm:inline text-[#574E41]">Est. 1994</span>
                </div>
              </div>
            </div>

            {/* Center: Search Bar with Autocomplete */}
            <div className="hidden md:flex flex-1 max-w-md lg:max-w-lg mx-2 relative">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  placeholder="Search 2-Ply, Kohinoor Bridal 8kg, Flannel, Baby..."
                  className="w-full bg-[#F8F5EE] text-xs text-[#181512] placeholder-[#8A8174] pl-10 pr-16 py-2.5 rounded-full border border-[#DFD7C7] focus:outline-none focus:border-[#C58B38] focus:bg-white focus:ring-2 focus:ring-[#C58B38]/20 transition-all shadow-inner"
                />
                <Search className="w-4 h-4 text-[#8A8174] absolute left-3.5 top-3" />
                {searchInput && (
                  <button
                    onClick={() => setSearchInput('')}
                    className="absolute right-3 top-2.5 text-xs text-[#8A8174] hover:text-[#181512] cursor-pointer font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#DECDB7] py-2 z-[70] overflow-hidden animate-fadeIn">
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
                      className="flex items-center gap-3 px-3.5 py-2 hover:bg-[#FAF6F0] cursor-pointer transition-colors"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-lg object-cover border border-[#E8E1D5] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-bold text-[#181512] truncate">{prod.name}</p>
                          <span className="text-xs font-bold text-[#C58B38] shrink-0">
                            {formatPrice(prod.pricePKR)}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#7A7265] truncate">{prod.ply} • {prod.tagline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Action Suite */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Executive Directorate Button (Prominently Highlighted) */}
              <button
                onClick={() => setIsLeadershipModalOpen(true)}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-[#14120E] text-[#F3C472] border border-[#B8860B]/60 hover:bg-[#251E16] transition-all cursor-pointer shadow-xs"
                title="HBK Board: CEO Mohibullah & Director Amir Khan Afridi"
              >
                <Crown className="w-3.5 h-3.5 text-[#F3C472]" />
                <span>CEO & Director</span>
              </button>

              {/* Warmth Finder Button */}
              <button
                onClick={() => setIsWarmthQuizOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-[#F5EFE4] text-[#8C5D23] border border-[#DFCBB5] hover:bg-[#EBDFCE] transition-all cursor-pointer shadow-xs"
                title="Interactive Warmth TOG Calculator"
              >
                <Flame className="w-3.5 h-3.5 text-[#D16D34] fill-[#D16D34]" />
                <span className="hidden lg:inline">Warmth Finder</span>
              </button>

              {/* Mobile Search Trigger */}
              <button
                id="mobile-search-toggle-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 rounded-full text-[#38332B] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
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
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-[#14120E] text-[#FAF8F5] hover:bg-[#251E16] transition-all cursor-pointer shadow-md group"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#F3C472]" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#C58B38] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col text-left leading-none">
                  <span className="text-[10px] text-neutral-400 font-medium">Cart</span>
                  <span className="text-xs font-bold text-[#F3C472]">
                    {cartItemCount > 0 ? formatPrice(cartTotalPKR) : '₨ 0'}
                  </span>
                </div>
              </button>

              {/* Mobile Drawer Trigger */}
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

          {/* Mobile Expandable Search */}
          {isSearchOpen && (
            <div className="md:hidden py-3 border-t border-[#E8E1D5] animate-fadeIn">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  placeholder="Search 2-Ply, Bridal, Flannel, Baby, Sherpa..."
                  className="w-full bg-[#FAF6F0] text-xs text-[#1C1A17] placeholder-[#8A8174] pl-10 pr-14 py-2.5 rounded-full border border-[#DFD7C7] focus:outline-none focus:border-[#C28E5B] focus:bg-white"
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

        {/* Tier 3: Full Desktop Category & Executive Portal Navigation Bar (Always Visible on Desktop!) */}
        <div className="hidden lg:block w-full bg-white border-t border-[#EDE4D6] shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <nav className="flex items-center space-x-1 py-1">
              {desktopNavLinks.map(link => {
                const isActive = 
                  !link.isLeadershipTrigger &&
                  page === link.page && 
                  (!link.categoryAction || activeCategory === link.categoryAction);

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.page, link.categoryAction, link.isLeadershipTrigger)}
                    className={`relative px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      link.isLeadershipTrigger
                        ? 'text-[#C28E5B] hover:text-[#966736] hover:bg-[#FDF9F3]'
                        : isActive
                          ? 'text-[#1C1A17] bg-[#FAF4EB] shadow-2xs'
                          : 'text-[#4A4235] hover:text-[#1C1A17] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase ${
                        link.isLeadershipTrigger
                          ? 'bg-[#E5B57F] text-[#1C1A17]'
                          : link.badge.includes('Royal')
                            ? 'bg-gradient-to-r from-[#D9A76A] to-[#B37E46] text-white shadow-2xs'
                            : 'bg-[#EDE3D3] text-[#7A6B58]'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C28E5B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 text-xs text-[#7A6E5D]">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Virgin Korean Acrylic</span>
              </span>
              <span className="text-[#DECDB7]">•</span>
              <button
                onClick={() => setIsTextureViewerOpen(true)}
                className="text-[#8C6D46] hover:text-[#1C1A17] font-bold cursor-pointer"
              >
                Fabric Texture Lab
              </button>
            </div>
          </div>
        </div>

        {/* Tier 4: Quick Category Chips Sub-Bar (Responsive, 1-tap horizontal access) */}
        <div className="w-full bg-[#F7F3EB] border-t border-[#E8DFC9] py-2 px-3 sm:px-6 overflow-x-auto scrollbar-none">
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
                    pill.id === 'leadership'
                      ? 'bg-gradient-to-r from-[#241C13] to-[#15110B] text-[#F3C472] border border-[#B8860B]/60 hover:border-[#F0C27B]'
                      : isSelected
                        ? 'bg-[#181512] text-[#FAF8F5] shadow-xs'
                        : 'bg-white text-[#4A4235] border border-[#DECDB7] hover:border-[#996F37] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {pill.icon}
                  <span>{pill.label}</span>
                  {pill.badge && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                      pill.id === 'leadership'
                        ? 'bg-[#C58B38] text-black font-extrabold'
                        : isSelected 
                          ? 'bg-[#C58B38] text-white' 
                          : 'bg-[#EDE3D2] text-[#996F37]'
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

      {/* Full-Screen Mobile Drawer: z-[80] keeps it safely above the header */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[80] flex animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content Panel */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-slideRight">
            
            {/* Top Section */}
            <div>
              {/* Drawer Header */}
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

              {/* EXECUTIVE LEADERSHIP HIGHLIGHT CARD (Requested Feature) */}
              <div className="p-3 bg-gradient-to-br from-[#1C1A17] via-[#2A231B] to-[#14120F] text-white border-b border-[#473B2E] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#E5B57F]">
                    <Crown className="w-3 h-3 text-[#E5B57F]" />
                    <span>Executive Directorate</span>
                  </span>
                  <button
                    onClick={() => {
                      setIsLeadershipModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-[10px] text-[#D9A76A] font-bold underline cursor-pointer"
                  >
                    View Dossier
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-[9px] uppercase font-bold text-[#D9A76A] block">CEO</span>
                    <p className="font-bold text-white text-xs">Mohibullah</p>
                    <p className="text-[10px] text-[#B8A896]">Chief Executive Officer</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-[9px] uppercase font-bold text-[#D9A76A] block">Director</span>
                    <p className="font-bold text-white text-xs">Amir Khan Afridi</p>
                    <p className="text-[10px] text-[#B8A896]">Managing Director</p>
                  </div>
                </div>

                <p className="text-[10px] text-[#A69C8E] leading-tight">
                  Guaranteed 100% Virgin Acrylic & Direct Factory Dispatch from Faisalabad & Peshawar.
                </p>
              </div>

              {/* Warmth Finder Banner */}
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
                {desktopNavLinks.map(item => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.page, item.categoryAction, item.isLeadershipTrigger)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      !item.isLeadershipTrigger && page === item.page && (!item.categoryAction || activeCategory === item.categoryAction)
                        ? 'bg-[#1C1A17] text-white shadow-xs'
                        : 'text-[#3E372E] hover:bg-[#FAF6F0]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        item.isLeadershipTrigger ? 'bg-[#E5B57F] text-black font-extrabold' : 'bg-[#C28E5B] text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Footer & Direct Help */}
            <div className="p-4 border-t border-[#E8E1D5] bg-[#FAF8F5] space-y-3">
              <div className="flex items-start gap-2.5 p-2.5 bg-white rounded-xl border border-[#DECDB7]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#4A4235]">
                  <p className="font-bold text-[#1C1A17]">100% Genuine Factory Direct</p>
                  <p className="text-[10px] text-[#7A7265]">Under CEO Mohibullah & Dir. Amir Khan Afridi</p>
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
            </div>
          </div>
        </div>
      )}

      {/* DEDICATED EXECUTIVE LEADERSHIP DOSSIER MODAL (CEO Mohibullah & Director Amir Khan Afridi) */}
      {isLeadershipModalOpen && (
        <div className="fixed inset-0 z-[110] overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-fadeIn">
          {/* Backdrop */}
          <div 
            onClick={() => setIsLeadershipModalOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <div className="relative bg-[#FAF8F5] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#DFCBB5] z-10 space-y-6 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#141210] via-[#241E18] to-[#141210] text-white p-6 sm:p-8 relative">
              <button
                onClick={() => setIsLeadershipModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5B57F]/20 border border-[#E5B57F]/40 text-[#E5B57F] text-xs font-bold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5 text-[#E5B57F]" />
                  <span>HBK Blanket Industries (Pvt) Ltd • Executive Directorate</span>
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  Visionary Mill Leadership
                </h2>
                <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                  Steering Pakistan’s largest integrated blanket manufacturing composite from Peshawar and Faisalabad to global export standards.
                </p>
              </div>
            </div>

            {/* Leadership Profiles */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* CEO Profile */}
                <div className="p-5 rounded-2xl bg-white border-2 border-[#E8DCCB] shadow-xs space-y-3 relative overflow-hidden group hover:border-[#C28E5B] transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A17] text-[#E5B57F] flex items-center justify-center font-serif font-black text-xl shadow-md border border-[#96764D]/50">
                    M
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C28E5B] block">
                      Chief Executive Officer (CEO)
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#1C1A17]">Mohibullah</h3>
                    <p className="text-xs text-[#7A7265] mt-0.5">Chief Executive Officer, HBK Blanket Industries</p>
                  </div>
                  <p className="text-xs text-[#5E5547] leading-relaxed">
                    Spearheading technology modernization and the transition to computerized German Karl Mayer double-needle Raschel knitting machines. Under his tenure, HBK has scaled production capacity to over 12,000 blankets per day.
                  </p>
                  <div className="pt-2 border-t border-[#F2ECE1] flex items-center gap-2 text-[11px] text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Focus: Industrial Automation & Quality Benchmarks</span>
                  </div>
                </div>

                {/* Director Profile */}
                <div className="p-5 rounded-2xl bg-white border-2 border-[#E8DCCB] shadow-xs space-y-3 relative overflow-hidden group hover:border-[#C28E5B] transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A17] text-[#E5B57F] flex items-center justify-center font-serif font-black text-xl shadow-md border border-[#96764D]/50">
                    A
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C28E5B] block">
                      Managing Director
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#1C1A17]">Amir Khan Afridi</h3>
                    <p className="text-xs text-[#7A7265] mt-0.5">Director of Operations & Global Procurement</p>
                  </div>
                  <p className="text-xs text-[#5E5547] leading-relaxed">
                    Directing international raw material contracts, 100% virgin Korean acrylic imports, and the flagship Kohinoor 8kg Royal Bridal Trousseau series. He leads HBK's nationwide dealership network across all four provinces.
                  </p>
                  <div className="pt-2 border-t border-[#F2ECE1] flex items-center gap-2 text-[11px] text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Focus: Raw Materials, Bridal Luxury & Distribution</span>
                  </div>
                </div>
              </div>

              {/* Founder Legacy Tribute */}
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#DECDB7] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1C1A17] text-[#D9A76A] flex items-center justify-center font-serif font-bold text-base shrink-0">
                  HBK
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm text-[#1C1A17]">Haji Bahadur Khan</span>
                    <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#E5B57F]/30 text-[#8C6D46] font-bold uppercase">
                      Founder & Chairman Emeritus
                    </span>
                  </div>
                  <p className="text-[#6B6152] leading-relaxed">
                    Founded in 1994 with the historic mission of building Pakistan's first fully self-reliant acrylic blanket industry, liberating our markets from costly foreign imports.
                  </p>
                </div>
              </div>

              {/* Personal Guarantee & Action */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1C1A17] to-[#2B231A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <p className="font-serif font-bold text-sm text-[#E5B57F]">
                    "Our Family's Personal Seal on Every Blanket"
                  </p>
                  <p className="text-[11px] text-[#D1C7BA]">
                    Every HBK blanket is backed by our direct 10-Year anti-shedding & thermal retention warranty.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://wa.me/923001234567?text=Hello%20CEO%20Mohibullah%20and%20Director%20Amir%20Khan%20Afridi%20Office,%20I%20have%20an%20executive%20inquiry."
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-[#20BA5A] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Executive WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsLeadershipModalOpen(false);
                      setPage('about');
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors cursor-pointer"
                  >
                    Visit Mill Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flagship Mobile Bottom Navigation Bar: z-40 */}
      <nav 
        id="mobile-bottom-nav"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/98 backdrop-blur-md border-t border-[#DECDB7] px-2 py-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] flex items-center justify-around"
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
          onClick={() => setIsLeadershipModalOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-[10px] font-semibold text-[#C28E5B] hover:text-[#1C1A17] transition-colors cursor-pointer"
        >
          <Crown className="w-5 h-5 text-[#C28E5B]" />
          <span>Leadership</span>
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
