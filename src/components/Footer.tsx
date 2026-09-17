import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Heart,
  Flame,
  Layers
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PageType } from '../types';

export const Footer: React.FC = () => {
  const { setPage, setActiveCategory, setIsWarmthQuizOpen, setIsTextureViewerOpen } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  const handleNav = (targetPage: PageType, categoryAction?: string) => {
    if (categoryAction) {
      setActiveCategory(categoryAction as any);
    } else if (targetPage === 'shop') {
      setActiveCategory('all');
    }
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141210] text-[#E8E1D5] pt-16 pb-12 border-t border-[#292520]">
      {/* Top Value Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#292520]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1D1A16] border border-[#332E27]">
            <Truck className="w-6 h-6 text-[#D9A76A] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Free Nationwide Shipping</h4>
              <p className="text-[11px] text-[#A69C8E] mt-0.5">Free courier delivery across every city and village in Pakistan.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1D1A16] border border-[#332E27]">
            <ShieldCheck className="w-6 h-6 text-[#D9A76A] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Cash on Delivery (COD)</h4>
              <p className="text-[11px] text-[#A69C8E] mt-0.5">Inspect and pay in cash when the courier hands over your package.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1D1A16] border border-[#332E27]">
            <Award className="w-6 h-6 text-[#D9A76A] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">100% Genuine Mill Direct</h4>
              <p className="text-[11px] text-[#A69C8E] mt-0.5">Crafted at HBK Blanket Industries Faisalabad & Karachi finishing mills.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1D1A16] border border-[#332E27]">
            <RotateCcw className="w-6 h-6 text-[#D9A76A] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Factory Quality Guarantee</h4>
              <p className="text-[11px] text-[#A69C8E] mt-0.5">Guaranteed defect-free replacement within 7 days of delivery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C28E5B] text-black font-serif font-black flex items-center justify-center text-lg shadow-md">
                HBK
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-wider text-white">HBK Blankets</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C2AA8C]">Blanket Industries Pakistan</p>
              </div>
            </div>

            <p className="text-xs text-[#A69C8E] leading-relaxed max-w-sm">
              Founded under the legacy of Chairman Haji Bahadur Khan, and driven by the visionary direction of <strong className="text-white">CEO Mohibullah</strong> and <strong className="text-white">Director Amir Khan Afridi</strong>, HBK Blankets is Pakistan's premier blanket manufacturing powerhouse. Operating world-class Raschel knitting mills in Faisalabad, spinning facilities in Peshawar, and global export operations in Karachi.
            </p>

            <div className="space-y-1.5 text-xs text-[#C2AA8C] pt-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9A76A] shrink-0" />
                <span>Head Office: Main G.T. Road, Nasir Pur, Peshawar</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D9A76A] shrink-0" />
                <span>Customer Care: +92 91 527 8910 / +92 41 876 5432</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D9A76A] shrink-0" />
                <span>Support: Itsupport@hbkblankets.com</span>
              </p>
            </div>

            {/* Interactive Flair Buttons in footer */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setIsWarmthQuizOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#24201A] hover:bg-[#332E27] text-xs text-[#D9A76A] border border-[#3D352B] flex items-center gap-1.5 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-[#C26B38]" /> Warmth Selector
              </button>
              <button
                onClick={() => setIsTextureViewerOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#24201A] hover:bg-[#332E27] text-xs text-[#D9A76A] border border-[#3D352B] flex items-center gap-1.5 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#D9A76A]" /> Fabric Texture Lab
              </button>
            </div>
          </div>

          {/* Blanket Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Collections</h4>
            <ul className="space-y-2 text-xs text-[#A69C8E]">
              <li>
                <button 
                  onClick={() => handleNav('shop', '2-ply-double')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  2-Ply Heavy Double Bed (5kg+)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('shop', '1-ply-flannel')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  1-Ply Glorious Flannel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('shop', '2-ply-double')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Black Rose Luxury Series
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('shop', '2-ply-double')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sherpa Dream Reversible
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('baby')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Baby Wraps & Nursery Sets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('shop', 'bedspread-sets')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Royal Bridal Bedspread Sets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('shop', 'summer-fleece')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Summer AC Polar Fleece
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Pages & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">HBK Services</h4>
            <ul className="space-y-2 text-xs text-[#A69C8E]">
              <li>
                <button 
                  onClick={() => handleNav('b2b')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold text-[#D9A76A]"
                >
                  <Building2 className="w-3.5 h-3.5" /> B2B Wholesale & Dealership
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('track')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Truck className="w-3.5 h-3.5" /> Track Consignment (CN)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  12-Step Manufacturing Tour
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Chairman's Heritage & Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Faisalabad Mill & Branch Locator
                </button>
              </li>
              <li>
                <a 
                  href="https://play.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors inline-block"
                >
                  HBK B2B Android App (Google Play)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Club */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Join HBK Warmth Club</h4>
            <p className="text-xs text-[#A69C8E]">
              Get early access to annual winter stock arrivals and an instant <strong>₨ 500 discount voucher</strong>.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#1D2B1F] border border-[#2B4B2F] text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Shukriya! Use code <strong>HBK10</strong> for 10% off at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full text-xs bg-[#1F1C18] border border-[#38332B] rounded-xl px-3 py-2.5 text-white placeholder-[#7A7265] focus:outline-none focus:border-[#C28E5B]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C28E5B] hover:bg-[#A87444] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Subscribe & Claim Voucher</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#7A7265]">
              Cash on Delivery (COD) supported across Sindh, Punjab, KPK, Balochistan, Gilgit & AJK.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#292520] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7265] gap-4">
        <p>© {new Date().getFullYear()} HBK Blanket Industries (Pvt) Ltd. All Rights Reserved. Made with pride in Pakistan 🇵🇰</p>
        <div className="flex items-center space-x-4 text-[11px]">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
          <span>•</span>
          <span>No-Return Quality Policy</span>
          <span>•</span>
          <span>B2B Portal</span>
        </div>
      </div>
    </footer>
  );
};
