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
  ArrowRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { CurrencyCode, PageType } from '../types';

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
    setActiveCategory
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
        p.tagline.toLowerCase().includes(searchInput.toLowerCase())
      ).slice(0, 5);

  const navItems: { label: string; page: PageType; badge?: string; categoryAction?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop All', page: 'shop' },
    { label: '2-Ply Heavy', page: 'shop', categoryAction: '2-ply-double', badge: 'Hot' },
    { label: '1-Ply Flannel', page: 'shop', categoryAction: '1-ply-flannel' },
    { label: 'Baby & Kids', page: 'baby', badge: 'Soft' },
    { label: 'B2B Wholesale', page: 'b2b' },
    { label: 'Our Mills & Heritage', page: 'about' },
    { label: 'Track Consignment', page: 'track' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (targetPage: PageType, categoryAction?: string) => {
    if (categoryAction) {
      setActiveCategory(categoryAction as any);
    } else if (targetPage === 'shop') {
      setActiveCategory('all');
    }
    setPage(targetPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#1C1A17] text-[#EDE7DE] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1 font-medium text-[#D9A76A]">
              <Truck className="w-3.5 h-3.5" /> Free Delivery Across All Pakistan
            </span>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <span className="hidden sm:inline text-neutral-300">
              Cash on Delivery (COD) Available • 100% Genuine Factory Direct
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              id="topbar-b2b-btn"
              onClick={() => handleNavClick('b2b')}
              className="hover:text-[#D9A76A] transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5" /> B2B Ordering
            </button>
            <span className="text-neutral-500">|</span>
            <a 
              href="tel:+92915278910" 
              className="hidden md:flex items-center gap-1 hover:text-[#D9A76A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A76A]" /> +92 91 527 8910
            </a>
            
            {/* Currency Picker */}
            <div className="relative">
              <button
                id="currency-toggle-btn"
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="flex items-center gap-1 font-medium hover:text-[#D9A76A] transition-colors px-1 py-0.5 rounded cursor-pointer"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isCurrencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-[#1C1A17] border border-[#3A352E] rounded-md shadow-xl py-1 z-50">
                  {(['PKR', 'USD', 'AED', 'SAR'] as CurrencyCode[]).map(curr => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setIsCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#2F2A23] cursor-pointer flex justify-between ${
                        currency === curr ? 'text-[#D9A76A] font-bold' : 'text-neutral-300'
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

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Branding */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#1C1A17] to-[#38332B] flex items-center justify-center text-[#D9A76A] shadow-md border border-[#8C6D46]/40 group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl tracking-tight">HBK</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-2xl tracking-wider text-[#1C1A17]">HBK</span>
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C6D46] border-l border-[#D9C8B4] pl-2">
                  Blankets
                </span>
              </div>
              <p className="text-[10px] text-[#7A7265] tracking-tight font-medium">
                PAKISTAN'S LARGEST BLANKET FACTORY
              </p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6 relative">
            <div className="relative w-full">
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search 2-Ply, Flannel, Baby Blankets, Korean Mink..."
                className="w-full bg-[#F0EBE1] text-sm text-[#1C1A17] placeholder-[#8A8174] pl-10 pr-4 py-2.5 rounded-full border border-[#DFD7C7] focus:outline-none focus:border-[#C28E5B] focus:bg-white transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-[#8A8174] absolute left-3.5 top-3.5" />
              {searchInput && (
                <button
                  onClick={() => setSearchInput('')}
                  className="absolute right-3 top-3 text-xs text-[#8A8174] hover:text-[#1C1A17] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Autocomplete Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-[#E8E1D5] py-2 z-50 overflow-hidden">
                <div className="px-3 py-1 text-[11px] font-semibold text-[#8C6D46] uppercase tracking-wider">
                  Matching Blankets
                </div>
                {searchResults.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      navigateToProduct(prod);
                      setSearchInput('');
                    }}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#FAF6F0] cursor-pointer transition-colors border-b border-[#F5EFE6] last:border-0"
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-md object-cover border border-[#E8E1D5]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#1C1A17] truncate">{prod.name}</p>
                      <p className="text-[11px] text-[#7A7265]">{prod.ply} • {prod.weightKg}kg</p>
                    </div>
                    <span className="text-xs font-bold text-[#8C6D46] whitespace-nowrap">
                      {formatPrice(prod.pricePKR)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons & Flair Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Blanket Finder Button */}
            <button
              id="blanket-finder-btn"
              onClick={() => setIsWarmthQuizOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F5EFE6] text-[#6E4F28] border border-[#DFCBB5] hover:bg-[#EBDDC8] transition-colors cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5 text-[#C26B38]" />
              <span>Warmth Finder</span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              id="mobile-search-toggle-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-full text-[#38332B] hover:bg-[#EDE7DE] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              id="wishlist-btn"
              onClick={() => handleNavClick('shop')}
              className="relative p-2 rounded-full text-[#38332B] hover:bg-[#EDE7DE] transition-colors cursor-pointer"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#A83232] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              id="cart-drawer-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#332E27] transition-all cursor-pointer shadow-md group"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#D9A76A]" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#C28E5B] text-white text-[9px] font-bold flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden sm:inline">
                {cartItemCount > 0 ? formatPrice(cartTotalPKR) : 'Cart'}
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1C1A17] hover:bg-[#EAE4D8] transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        {isSearchOpen && (
          <div className="lg:hidden py-3 border-t border-[#E8E1D5] animate-fadeIn">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search by blanket name, 2-Ply, baby, fleece..."
                className="w-full bg-[#F0EBE1] text-sm text-[#1C1A17] placeholder-[#8A8174] pl-10 pr-4 py-2 rounded-full border border-[#DFD7C7] focus:outline-none focus:border-[#C28E5B] focus:bg-white"
              />
              <Search className="w-4 h-4 text-[#8A8174] absolute left-3.5 top-3" />
            </div>

            {/* Mobile search results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white rounded-xl shadow-xl border border-[#E8E1D5] divide-y divide-[#F5EFE6] max-h-60 overflow-y-auto">
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
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#1C1A17] truncate">{prod.name}</p>
                      <p className="text-[10px] text-[#7A7265]">{prod.ply} • {formatPrice(prod.pricePKR)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Desktop Secondary Menu Row */}
        <nav className="hidden lg:flex items-center justify-between border-t border-[#EDE7DE] py-2.5 text-xs font-medium text-[#4D4539]">
          <div className="flex items-center space-x-6">
            {navItems.map(item => {
              const isActive = page === item.page && (!item.categoryAction);
              return (
                <button
                  key={item.label}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleNavClick(item.page, item.categoryAction)}
                  className={`relative py-1 tracking-wide hover:text-[#C28E5B] transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isActive ? 'text-[#1C1A17] font-bold' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                      item.badge === 'Hot' ? 'bg-[#A83232] text-white' : 'bg-[#D9A76A] text-[#1C1A17]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C28E5B] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-[#736858] text-[11px]">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C28E5B]" /> 180+ Embossed Designs
            </span>
            <span>•</span>
            <span className="font-medium text-[#1C1A17]">Faisalabad & Karachi Mills</span>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[115px] bottom-0 bg-white/95 backdrop-blur-md z-50 overflow-y-auto px-6 py-6 border-t border-[#E8E1D5] animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                setIsWarmthQuizOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#F7EFE3] to-[#F1E5D1] border border-[#DECDB7] text-[#6E4F28] font-bold text-sm"
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C26B38]" /> Find Your Ideal Blanket
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="py-2 border-b border-[#E8E1D5] space-y-1">
              <p className="text-[11px] font-bold tracking-wider uppercase text-[#8C6D46] px-2 mb-1">
                Collections & Pages
              </p>
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page, item.categoryAction)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between ${
                    page === item.page ? 'bg-[#F2ECE1] font-bold text-[#1C1A17]' : 'text-[#4A4235] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C28E5B] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Quick contact info in mobile drawer */}
            <div className="pt-2 text-xs text-[#6B6152] space-y-2">
              <p className="font-semibold text-[#1C1A17]">HBK Customer Support</p>
              <p>Hotline: +92 91 527 8910</p>
              <p>WhatsApp: +92 300 1234567</p>
              <p>Email: Itsupport@hbkblankets.com</p>
              <p className="text-[11px] text-[#8C6D46]">Head Office: G.T. Road, Nasir Pur, Peshawar</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
