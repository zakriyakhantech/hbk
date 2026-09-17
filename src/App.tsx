import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { WarmthCalculatorModal } from './components/WarmthCalculatorModal';
import { TextureViewerModal } from './components/TextureViewerModal';

// Views
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { ProductDetailView } from './views/ProductDetailView';
import { BabyCollectionView } from './views/BabyCollectionView';
import { AboutView } from './views/AboutView';
import { B2BView } from './views/B2BView';
import { TrackOrderView } from './views/TrackOrderView';
import { ContactView } from './views/ContactView';

// Floating Widgets
import { Flame, MessageSquare, Layers } from 'lucide-react';

const AppContent: React.FC = () => {
  const { 
    page, 
    setIsWarmthQuizOpen, 
    setIsTextureViewerOpen 
  } = useShop();

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomeView />;
      case 'shop':
        return <ShopView />;
      case 'product':
        return <ProductDetailView />;
      case 'baby':
        return <BabyCollectionView />;
      case 'about':
        return <AboutView />;
      case 'b2b':
        return <B2BView />;
      case 'track':
        return <TrackOrderView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1A17] selection:bg-[#DECDB7] selection:text-[#1C1A17]">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Dynamic View Body */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <CheckoutModal />
      <WarmthCalculatorModal />
      <TextureViewerModal />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Fabric Simulator Quick Trigger */}
        <button
          onClick={() => setIsTextureViewerOpen(true)}
          className="px-3.5 py-2 rounded-full bg-[#1C1A17] text-white text-xs font-bold shadow-lg hover:shadow-xl hover:bg-[#332E27] flex items-center gap-1.5 transition-all cursor-pointer border border-[#3D352B]"
          title="Fabric & Texture Comparator"
        >
          <Layers className="w-4 h-4 text-[#D9A76A]" />
          <span className="hidden sm:inline">Fabric Lab</span>
        </button>

        {/* Warmth Quiz Quick Trigger */}
        <button
          onClick={() => setIsWarmthQuizOpen(true)}
          className="px-3.5 py-2 rounded-full bg-[#C28E5B] text-white text-xs font-bold shadow-lg hover:shadow-xl hover:bg-[#A87444] flex items-center gap-1.5 transition-all cursor-pointer"
          title="Find your TOG Warmth"
        >
          <Flame className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Warmth TOG Quiz</span>
        </button>

        {/* WhatsApp Direct Chat Help */}
        <a
          href="https://wa.me/923001234567?text=Hello%20HBK%20Blankets%20Support,%20I%20have%20an%20inquiry%20regarding%20your%20blankets."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
          title="Chat with Customer Support on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
