import React, { useState } from 'react';
import { 
  Building2, 
  Calculator, 
  TrendingUp, 
  Send, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  Download, 
  Truck,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const B2BView: React.FC = () => {
  const { formatPrice, showToast } = useShop();

  // Bulk Calculator State
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [cartonQty, setCartonQty] = useState(50); // number of blankets

  // RFQ Form State
  const [businessName, setBusinessName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [businessType, setBusinessType] = useState('Retail Store / Wholesaler');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // Bulk Discount calculation tiers
  let discountPct = 0.15; // default 15% for 20-50 pcs
  if (cartonQty >= 500) {
    discountPct = 0.35; // 35% container tier
  } else if (cartonQty >= 200) {
    discountPct = 0.28; // 28% master wholesale tier
  } else if (cartonQty >= 100) {
    discountPct = 0.22; // 22% bulk tier
  }

  const wholesaleUnitPrice = Math.round(currentProduct.pricePKR * (1 - discountPct));
  const totalWholesaleInvoice = wholesaleUnitPrice * cartonQty;
  const suggestedRetailTotal = currentProduct.pricePKR * cartonQty;
  const estimatedProfit = suggestedRetailTotal - totalWholesaleInvoice;

  const handleRFQSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPerson || !phone) return;

    setIsSubmitted(true);
    showToast('B2B Quotation Request sent directly to HBK Faisalabad Sales Desk!');

    // Format WhatsApp query
    const message = encodeURIComponent(
      `Hello HBK Blankets B2B Sales,\nI would like a wholesale quotation.\nCompany: ${businessName}\nContact: ${contactPerson}\nPhone: ${phone}\nCity: ${city}\nCategory: ${businessType}\nRequirement: ${cartonQty} units of ${currentProduct.name}\nNotes: ${notes}`
    );
    window.open(`https://wa.me/923001234567?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      {/* Header Banner */}
      <section className="bg-[#1C1A17] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C28E5B]/20 border border-[#D9A76A]/40 text-[#D9A76A] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Direct Mill Supply & Institutional Wholesale</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            HBK Wholesale, Dealership & Export Division
          </h1>

          <p className="text-sm font-semibold text-[#D9C8B4]" dir="rtl">
            براہ راست فیکٹری ریٹ پر تھوک سپلائی، ڈیلرشپ اور ادارہ جاتی خریداری
          </p>

          <p className="text-xs sm:text-sm text-[#D1C7BA] max-w-2xl leading-relaxed">
            Partner directly with Pakistan's largest blanket composite mill. We supply over 50,000 retail stores, hospitality chains, healthcare institutions, NGOs, and international container buyers across Central Asia and the GCC.
          </p>
        </div>
      </section>

      {/* Interactive Bulk Quantity & Profit Margin Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#DFCBB5] p-6 sm:p-10 shadow-lg space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0EBE1] pb-6">
            <div>
              <span className="text-xs font-bold text-[#8C6D46] uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="w-4 h-4" /> Live Wholesale Pricing & Margin Simulator
              </span>
              <h2 className="font-serif font-bold text-2xl text-[#1C1A17] mt-1">
                Calculate Your Commercial Margin
              </h2>
            </div>
            <div className="text-xs text-[#7A7265]">
              Real-time factory gate discount tiers based on purchase volume.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Calculator Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="text-xs font-bold text-[#1C1A17] block mb-1.5">
                  1. Select Blanket Model / Series
                </label>
                <select
                  value={selectedProductId}
                  onChange={e => setSelectedProductId(e.target.value)}
                  className="w-full text-xs font-semibold bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-3 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.ply} • {p.weightKg}kg • Retail: {formatPrice(p.pricePKR)})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-[#1C1A17] mb-1.5">
                  <span>2. Purchase Quantity:</span>
                  <span className="text-[#8C6D46] text-sm">{cartonQty} Blankets</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={1000}
                  step={10}
                  value={cartonQty}
                  onChange={e => setCartonQty(Number(e.target.value))}
                  className="w-full accent-[#C28E5B] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#7A7265] mt-1">
                  <span>20 pcs (Tier 1: 15% off)</span>
                  <span>100 pcs (Tier 2: 22% off)</span>
                  <span>500+ pcs (Mega: 35% off)</span>
                </div>
              </div>

              {/* Volume Presets */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[20, 50, 100, 250, 500, 1000].map(val => (
                  <button
                    key={val}
                    onClick={() => setCartonQty(val)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      cartonQty === val
                        ? 'bg-[#1C1A17] text-white border-[#1C1A17]'
                        : 'bg-[#FAF8F5] text-[#5E5547] border-[#DECDB7] hover:bg-white'
                    }`}
                  >
                    {val} pcs
                  </button>
                ))}
              </div>
            </div>

            {/* Results Display Panel (6 cols) */}
            <div className="lg:col-span-6 bg-[#1C1A17] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#D9A76A]">
                  Factory Gate Commercial Summary
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {(discountPct * 100).toFixed(0)}% Mill Wholesale Discount
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs text-[#D1C7BA]">
                  <span>Wholesale Price Per Blanket:</span>
                  <span className="font-bold text-white text-sm">{formatPrice(wholesaleUnitPrice)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#D1C7BA]">
                  <span>Suggested Retail MRP:</span>
                  <span className="text-[#A69C8E] line-through">{formatPrice(currentProduct.pricePKR)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#D1C7BA]">
                  <span>Total Wholesale Invoice:</span>
                  <span className="font-bold text-xl text-[#D9A76A]">{formatPrice(totalWholesaleInvoice)}</span>
                </div>
              </div>

              {/* Profit Highlight */}
              <div className="p-4 rounded-xl bg-[#29241E] border border-[#423A2E] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#A69C8E] block">
                    Your Expected Retail Profit
                  </span>
                  <span className="font-serif font-bold text-xl text-emerald-400">
                    +{formatPrice(estimatedProfit)}
                  </span>
                </div>
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>

              <p className="text-[11px] text-[#A69C8E]">
                *Terms: F.O.R. Faisalabad Mill or Karachi warehouse. Goods dispatch via approved commercial logistics (Bilalty) with transit insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official RFQ Quotation Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#8C6D46] uppercase tracking-widest">
              Commercial Sales Desk
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1A17]">
              Request Official Mill Quotation or Dealership Registration
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5547] leading-relaxed">
              Submit your company credentials and exact blanket quantities. Our wholesale desk in Faisalabad will provide a formal proforma invoice with verified delivery timelines within 2 hours.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#5E5547]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Priority factory allocation during peak November – January winter rush.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Custom woven satin labels, embroidery, and private-label packaging for chains.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Institutional fire-retardant (BS 5852) and antibacterial hospital finishing available.</span>
              </div>
            </div>

            {/* Android App Promotion */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DFCBB5] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1C1A17] text-[#D9A76A] flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#1C1A17]">HBK B2B Dealer Android App</h4>
                <p className="text-[11px] text-[#7A7265] mt-0.5">
                  Authorized dealers can view real-time factory stock, ledger balances, download VAT invoices, and track container dispatches.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DFCBB5] shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1C1A17]">Quotation Transmitted!</h3>
                <p className="text-xs text-[#5E5547] max-w-sm mx-auto">
                  Our B2B Corporate Desk has received your request. A representative will contact you shortly on WhatsApp.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-[#1C1A17] text-white text-xs font-bold cursor-pointer"
                >
                  Submit Another RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleRFQSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1">Company / Business Name</label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={e => setBusinessName(e.target.value)}
                      placeholder="e.g. Al-Madina Bedding Traders"
                      className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1">Contact Person</label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={e => setContactPerson(e.target.value)}
                      placeholder="e.g. Tariq Mahmood"
                      className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1A17] mb-1">City / Region</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      placeholder="e.g. Faisalabad / Peshawar / Karachi"
                      className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1C1A17] mb-1">Business Nature</label>
                  <select
                    value={businessType}
                    onChange={e => setBusinessType(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                  >
                    <option value="Retail Store / Wholesaler">Retail Store / Wholesaler</option>
                    <option value="Hotel / Resort / Hospitality">Hotel / Resort / Hospitality</option>
                    <option value="Hospital / Healthcare Group">Hospital / Healthcare Group</option>
                    <option value="Export / International Container Trader">Export / International Container Trader</option>
                    <option value="Government / NGO Welfare Relief">Government / NGO Welfare Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#1C1A17] mb-1">Specific Requirements / Sizes / Quantities</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Specify target ply, weights (e.g. 5kg double bed), custom branding requirements..."
                    className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#1C1A17] hover:bg-[#332E27] text-white font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#D9A76A]" />
                  <span>Send Quotation & Open WhatsApp Chat</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
