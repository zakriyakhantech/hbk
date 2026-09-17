import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Layers, 
  Wind, 
  ThermometerSnowflake, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

const FABRICS = [
  {
    id: 'korean-mink',
    name: 'Korean 3D Embossed Mink Acrylic',
    density: '850 GSM',
    warmthScore: 98,
    softnessScore: 96,
    breathability: 82,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    description: 'Our premier winter formulation. High-density Raschel weave acrylic fibers undergo rotary shearing and deep hydraulic 3D floral embossing. Provides a heavy, velvet-like drape that retains radiant body heat even in below-freezing nights.',
    signatureProduct: 'hbk-black-rose-2ply'
  },
  {
    id: 'brushed-flannel',
    name: 'Brushed Micro-Flannel Fleece',
    density: '320 GSM',
    warmthScore: 84,
    softnessScore: 99,
    breathability: 94,
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80',
    description: 'Precision-carded filaments brushed on both faces with Japanese micro-rollers. Yields an ultra-smooth glide across skin with zero prickle factor, making it the favorite for sensitive skin and year-round coziness.',
    signatureProduct: 'hbk-glorious-1ply-flannel'
  },
  {
    id: 'woolly-sherpa',
    name: 'Lamb-Touch Woolly Sherpa',
    density: '450 GSM',
    warmthScore: 95,
    softnessScore: 92,
    breathability: 86,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Inspired by alpine sheep fleece, this textured thermal reverse layer traps still air in millions of curly micro-pockets. Coupled with smooth micro-mink jacquard for reversible 2-in-1 adaptability.',
    signatureProduct: 'hbk-sherpa-dream-2ply'
  },
  {
    id: 'summer-fleece',
    name: 'Anti-Sweat Polar Micro-Fleece',
    density: '240 GSM',
    warmthScore: 65,
    softnessScore: 90,
    breathability: 98,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered specifically for Pakistani summer air conditioning. Continuous capillary micro-tubes wick perspiration away instantly while buffering against chilly fan and AC drafts.',
    signatureProduct: 'hbk-summer-cool-fleece'
  }
];

export const TextureViewerModal: React.FC = () => {
  const { 
    isTextureViewerOpen, 
    setIsTextureViewerOpen, 
    navigateToProduct 
  } = useShop();

  const [activeFabricId, setActiveFabricId] = useState('korean-mink');

  if (!isTextureViewerOpen) return null;

  const currentFabric = FABRICS.find(f => f.id === activeFabricId) || FABRICS[0];
  const linkedProduct = PRODUCTS.find(p => p.id === currentFabric.signatureProduct);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div 
        onClick={() => setIsTextureViewerOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#DFCBB5] z-10 animate-fadeIn">
        {/* Header */}
        <div className="bg-[#1C1A17] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C28E5B] text-black flex items-center justify-center">
              <Layers className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base">HBK Textile Lab & Texture Simulator</h3>
              <p className="text-[11px] text-[#C2AA8C]">Compare yarn density, softness meters, and weave structures</p>
            </div>
          </div>
          <button
            onClick={() => setIsTextureViewerOpen(false)}
            className="text-neutral-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fabric Switcher Tabs */}
        <div className="flex border-b border-[#DFCBB5] bg-[#F2ECE1] overflow-x-auto p-1.5 gap-1.5">
          {FABRICS.map(fabric => (
            <button
              key={fabric.id}
              onClick={() => setActiveFabricId(fabric.id)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFabricId === fabric.id
                  ? 'bg-white text-[#1C1A17] shadow-sm font-bold border border-[#DECDB7]'
                  : 'text-[#6E6455] hover:bg-white/50'
              }`}
            >
              {fabric.name.split(' ')[0]} {fabric.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Fabric Detail Canvas */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Zoomed texture image */}
          <div className="relative aspect-square rounded-xl overflow-hidden border border-[#DECDB7] shadow-md group">
            <img
              src={currentFabric.image}
              alt={currentFabric.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9A76A]">
                Micro-Weave Zoom Preview
              </span>
              <p className="text-xs font-semibold">{currentFabric.name}</p>
            </div>
          </div>

          {/* Performance Radar & Meters */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#8C6D46] uppercase tracking-wider">
                  Fabric Density: {currentFabric.density}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  OEKO-TEX Certified
                </span>
              </div>
              <h4 className="font-serif font-bold text-xl text-[#1C1A17] mt-1">
                {currentFabric.name}
              </h4>
              <p className="text-xs text-[#5E5547] mt-2 leading-relaxed">
                {currentFabric.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="space-y-2.5 pt-2">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#4A4235]">
                  <span className="flex items-center gap-1">
                    <ThermometerSnowflake className="w-3.5 h-3.5 text-[#C26B38]" /> Thermal Heat Retention
                  </span>
                  <span>{currentFabric.warmthScore}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E5DDCF] overflow-hidden">
                  <div 
                    className="h-full bg-[#C26B38] rounded-full transition-all duration-500" 
                    style={{ width: `${currentFabric.warmthScore}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#4A4235]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Tactile Cloud Softness
                  </span>
                  <span>{currentFabric.softnessScore}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E5DDCF] overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                    style={{ width: `${currentFabric.softnessScore}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#4A4235]">
                  <span className="flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5 text-blue-600" /> Breathable Micro-Airflow
                  </span>
                  <span>{currentFabric.breathability}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E5DDCF] overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                    style={{ width: `${currentFabric.breathability}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Linked Signature Blanket */}
            {linkedProduct && (
              <div className="pt-2 border-t border-[#DECDB7] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#7A7265] block">Featured In Blanket:</span>
                  <span className="text-xs font-bold text-[#1C1A17]">{linkedProduct.name}</span>
                </div>
                <button
                  onClick={() => {
                    setIsTextureViewerOpen(false);
                    navigateToProduct(linkedProduct);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#38332B] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
