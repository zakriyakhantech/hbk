import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Factory,
  Globe2,
  Crown,
  Phone,
  MessageSquare
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutView: React.FC = () => {
  const { setPage } = useShop();
  const [activeStep, setActiveStep] = useState(0);

  const manufacturingSteps = [
    {
      step: '01',
      title: 'Fiber Selection & Carding',
      urdu: 'فائبر کارڈنگ',
      desc: 'High-grade virgin acrylic and polyester filaments are inspected for staple length, tensile elasticity, and natural luster before pneumatic carding aligns millions of fibers into uniform webs.'
    },
    {
      step: '02',
      title: 'Raschel High-Speed Warp Knitting',
      urdu: 'راشل ویونگ',
      desc: 'German Karl Mayer double-needle bed warp knitting machines interlock face and backing yarns simultaneously, creating the robust 2-ply foundation that prevents pile shedding.'
    },
    {
      step: '03',
      title: 'Rotary Dyeing & Anti-Static Bath',
      urdu: 'ڈائینگ اور اینٹی اسٹیٹک عمل',
      desc: 'Blanket rolls are treated in computerized pressurized jet dyeing autoclaves with Swiss reactive dyestuffs and anti-static conditioners to prevent winter shock cling.'
    },
    {
      step: '04',
      title: 'Precision Rotary Shearing & Brushing',
      urdu: 'شیرنگ اور برشنج',
      desc: 'Tungsten carbide spiral blades shear the pile to an exact millimeter tolerance, ensuring velvety uniformity across the entire 240cm width of the blanket.'
    },
    {
      step: '05',
      title: '3D Hydraulic Heat-Set Embossing',
      urdu: 'تھری ڈی ابھرے ہوئے ڈیزائن',
      desc: 'High-temperature chrome cylinders carve intricate floral, damask, and geometric relief patterns under 40 tons of hydraulic pressure, permanently locking the 3D depth into the acrylic memory.'
    },
    {
      step: '06',
      title: 'Ultrasonic Hemming & Satin Binding',
      urdu: 'الٹراسونک سلائی',
      desc: 'Edges are heat-fused ultrasonically to prevent fraying, then encased in 4-inch lustrous woven satin border binding with 4-needle lockstitching.'
    },
    {
      step: '07',
      title: 'Dual-Tunnel Needle & Metal Detection',
      urdu: 'میٹل ڈیٹیکٹر معائنہ',
      desc: 'Every single blanket passes through an industrial digital metal detector calibrated to 0.8mm ferrous particles to guarantee absolute child and adult safety.'
    },
    {
      step: '08',
      title: 'Vacuum Packaging & Barcode Tagging',
      urdu: 'ویکیوم پیکنگ',
      desc: 'Finished blankets are compressed into heavy-gauge reusable zippered carry bags with genuine HBK hologram warranty tags.'
    }
  ];

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      {/* Hero Header */}
      <section className="bg-[#1C1A17] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C28E5B]/20 border border-[#D9A76A]/40 text-[#D9A76A] text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Pioneers of Pakistani Blanket Industry</span>
          </span>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white leading-tight">
            Crafting Warmth, Heritage & Luxury For Over Three Decades
          </h1>

          <p className="text-sm font-medium text-[#D9C8B4]" dir="rtl">
            چیئرمین حاجی بہادر خان کا خواب: ہر پاکستانی گھر کے لیے عالمی معیار کا کمبل
          </p>

          <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
            From modest beginnings in Peshawar to establishing the country's most advanced composite blanket manufacturing complexes in Faisalabad and Karachi, HBK Blankets represents the pinnacle of Pakistani textile engineering.
          </p>
        </div>
      </section>

      {/* Chairman Vision & Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
              Chairman's Message
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17]">
              "A Blanket is More Than Wool; It is a Shield of Family Comfort."
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#5E5547] leading-relaxed">
              <p>
                When Chairman Haji Bahadur Khan laid the foundation stone of our enterprise, Pakistan relied almost entirely on imported acrylic blankets from China and Korea. His resolute commitment was simple yet historic: build an indigenous manufacturing powerhouse capable of exceeding international quality standards while making luxury winter bedding accessible to every Pakistani household.
              </p>
              <p>
                Today, HBK Blanket Industries operates over 50 acres of specialized production lines, employing thousands of skilled textile artisans and engineers across Faisalabad, Peshawar, and Karachi. We take immense pride in exporting our blankets across Central Asia, the Middle East, and beyond, carrying the green flag with pride.
              </p>
            </div>

            <div className="pt-2 border-t border-[#DFCBB5] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1C1A17] text-[#D9A76A] font-serif font-bold flex items-center justify-center text-lg">
                HBK
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-[#1C1A17]">Haji Bahadur Khan</p>
                <p className="text-xs text-[#7A7265]">Founder & Chairman, HBK Blanket Industries (Pvt) Ltd</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#DFCBB5]">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80"
                alt="HBK Mill Production"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-[#DFCBB5] hidden sm:block max-w-xs">
              <p className="text-xs font-bold text-[#1C1A17]">100% In-House Composite Mill</p>
              <p className="text-[11px] text-[#7A7265] mt-0.5">Spinning, Raschel weaving, dyeing, 3D hydraulic embossing & QC testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Directorate & Modern Mill Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1C1A17] via-[#2A231B] to-[#14120F] text-white rounded-3xl p-8 sm:p-12 border border-[#4D3F30] shadow-2xl space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3D3328] pb-6">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B57F]/20 border border-[#E5B57F]/40 text-[#E5B57F] text-xs font-bold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5 text-[#E5B57F]" />
                <span>Executive Board of Directors</span>
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
                Under the Visionary Leadership of CEO Mohibullah & Director Amir Khan Afridi
              </h2>
              <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                Guiding HBK Blanket Industries into a new era of automated manufacturing, Korean acrylic innovation, and international market leadership.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="text-[#E5B57F] font-serif font-black text-xl sm:text-2xl block">12,000+</span>
                <span className="text-[10px] text-[#A69C8E] uppercase tracking-wider">Daily Mill Output</span>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="text-[#E5B57F] font-serif font-black text-xl sm:text-2xl block">350+</span>
                <span className="text-[10px] text-[#A69C8E] uppercase tracking-wider">Dealer Network</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CEO Profile Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-[#D9A76A]/60 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C28E5B] to-[#E5B57F] text-black font-serif font-black text-2xl flex items-center justify-center shadow-lg">
                    M
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E5B57F] block">
                      Chief Executive Officer (CEO)
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white">Mohibullah</h3>
                    <p className="text-xs text-[#A69C8E]">HBK Blanket Industries (Pvt) Ltd</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase">
                  Executive
                </span>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed italic border-l-2 border-[#C28E5B] pl-4">
                "Our mission is to establish Pakistan as the undisputed global center for heavy winter blankets. We have completely modernized our Faisalabad spinning and Raschel weaving lines to rival the finest mills in Daegu and Osaka."
              </blockquote>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#E5B57F]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Karl Mayer High-Speed Double Bed Knitting Technology</span>
                </div>
                <div className="flex items-center gap-2 text-[#E5B57F]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strategic Expansion across Punjab & Sindh Markets</span>
                </div>
              </div>
            </div>

            {/* Director Profile Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-[#D9A76A]/60 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C28E5B] to-[#E5B57F] text-black font-serif font-black text-2xl flex items-center justify-center shadow-lg">
                    A
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E5B57F] block">
                      Managing Director
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white">Amir Khan Afridi</h3>
                    <p className="text-xs text-[#A69C8E]">Director of Operations & Procurement</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase">
                  Directorate
                </span>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed italic border-l-2 border-[#C28E5B] pl-4">
                "Quality begins with the fiber. We refuse to compromise on recycled synthetics — every HBK blanket contains 100% virgin Korean acrylic, tested for zero pile shedding and lifetime thermal performance."
              </blockquote>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-[#E5B57F]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Overseer of Kohinoor 8kg Royal Bridal Trousseau</span>
                </div>
                <div className="flex items-center gap-2 text-[#E5B57F]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>KPK & Central Asian Transit Trade Logistics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Executive Hotline Card */}
          <div className="bg-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C28E5B] text-black flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Direct Access to the Executive Office</p>
                <p className="text-[#A69C8E]">For large commercial tenders, export consignments, or bridal bulk orders.</p>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567?text=Hello%20CEO%20Mohibullah%20and%20Director%20Amir%20Khan%20Afridi%20Office,%20I%20have%20an%20inquiry%20regarding%20bulk%20blankets."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect with Director's Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Facilities Across Pakistan */}
      <section className="bg-[#FAF8F5] border-y border-[#DFCBB5] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
              Industrial Infrastructure
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17]">
              Three Strategic Hubs Powering Nationwide Warmth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D5] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2ECE1] text-[#8C6D46] flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1A17]">Faisalabad Mega Mill</h3>
              <p className="text-xs text-[#8C6D46] font-semibold">Manufacturing Capital of Pakistan</p>
              <p className="text-xs text-[#5E5547] leading-relaxed">
                Spanning 35 acres in Faisalabad's industrial hub. Houses 48 high-speed Raschel double-bed knitting lines, rotary shearing, and automated hydraulic embossing presses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D5] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2ECE1] text-[#8C6D46] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1A17]">Peshawar Headquarters</h3>
              <p className="text-xs text-[#8C6D46] font-semibold">Nasir Pur, Main G.T. Road</p>
              <p className="text-xs text-[#5E5547] leading-relaxed">
                The administrative and raw material trading headquarters. Direct distribution center serving Khyber Pakhtunkhwa, Islamabad, and Central Asian transit trade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D5] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2ECE1] text-[#8C6D46] flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1A17]">Karachi Finishing & Port</h3>
              <p className="text-xs text-[#8C6D46] font-semibold">SITE Area & Port Qasim Hub</p>
              <p className="text-xs text-[#5E5547] leading-relaxed">
                Specialized finishing plant and bonded customs warehouse for raw material imports and containerized ocean export shipments to Europe, Gulf, and Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 8-Step Manufacturing Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DFCBB5] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46]">
              Quality Assurance
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17] mt-1">
              The 8-Step Manufacturing Process
            </h2>
          </div>
          <p className="text-xs text-[#7A7265] max-w-sm">
            Click on any manufacturing milestone below to understand how an HBK blanket achieves its signature velvet durability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Step Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {manufacturingSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#1C1A17] text-white border-[#1C1A17] shadow-md'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#1C1A17] border-[#E8E1D5]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                    activeStep === idx ? 'bg-[#C28E5B] text-black' : 'bg-[#F2ECE1] text-[#7A7265]'
                  }`}>
                    {step.step}
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-sm">{step.title}</span>
                </div>
                <span className="text-xs opacity-70" dir="rtl">{step.urdu}</span>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DECDB7] p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#8C6D46] uppercase tracking-wider">
                  Stage {manufacturingSteps[activeStep].step} of 08
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800">
                  ISO 9001:2015 Certified
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-[#1C1A17]">
                {manufacturingSteps[activeStep].title}
              </h3>

              <p className="text-sm text-[#5E5547] leading-relaxed">
                {manufacturingSteps[activeStep].desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8C6D46]" />
                <span className="text-xs text-[#5E5547] font-medium">100% Quality Inspected before dispatch</span>
              </div>

              <button
                onClick={() => setPage('shop')}
                className="px-4 py-2 rounded-lg bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] cursor-pointer"
              >
                Shop Blankets
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
