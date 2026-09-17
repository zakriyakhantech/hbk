import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Banknote, 
  Phone, 
  Printer, 
  ArrowRight,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const PAKISTAN_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Peshawar',
  'Multan',
  'Quetta',
  'Gujranwala',
  'Sialkot',
  'Abbottabad',
  'Swat',
  'Mardan',
  'Bahawalpur',
  'Sargodha',
  'Sukkur',
  'Hyderabad',
  'Mirpur (AJK)',
  'Gilgit',
  'Muzaffarabad'
];

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartTotalPKR, 
    formatPrice, 
    discountPercent, 
    discountCode,
    clearCart,
    setPage 
  } = useShop();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Lahore',
    province: 'Punjab',
    paymentMethod: 'cod', // cod | bank | easypaisa
    specialInstructions: ''
  });

  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    date: string;
    totalPKR: number;
  } | null>(null);

  if (!isCheckoutOpen) return null;

  const discountAmount = Math.round((cartTotalPKR * discountPercent) / 100);
  const grandTotal = Math.max(0, cartTotalPKR - discountAmount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please complete your name, phone number, and address');
      return;
    }

    const orderId = `HBK-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      date: new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' }),
      totalPKR: grandTotal
    };

    setConfirmedOrder(newOrder);
    setStep('success');

    // Confetti celebration!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Clear active cart
    clearCart();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        onClick={() => {
          if (step !== 'success') setIsCheckoutOpen(false);
        }}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#DFCBB5] z-10 animate-fadeIn my-8">
        {/* Header */}
        <div className="bg-[#1C1A17] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C28E5B] text-black font-serif font-black flex items-center justify-center text-sm">
              HBK
            </div>
            <div>
              <h3 className="font-serif font-bold text-base tracking-wide">
                {step === 'form' ? 'HBK Blankets Express Checkout' : 'Order Confirmed!'}
              </h3>
              <p className="text-[11px] text-[#C2AA8C]">Direct Mill Fulfillment • Free Nationwide Delivery</p>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="text-neutral-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            {/* Quick order summary banner */}
            <div className="bg-[#F2ECE1] p-4 rounded-xl flex items-center justify-between border border-[#DECDB7]">
              <div>
                <p className="text-xs text-[#7A6B58]">Ordering from HBK Blankets Mill:</p>
                <p className="text-sm font-bold text-[#1C1A17]">
                  {cart.length} item(s) • Total: <span className="text-[#8C6D46]">{formatPrice(grandTotal)}</span>
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> FREE DELIVERY
              </span>
            </div>

            {/* Customer Details */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] flex items-center gap-1.5 border-b border-[#DFCBB5] pb-1.5">
                <MapPin className="w-4 h-4" /> 1. Shipping & Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1C1A17] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1A17] mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300-1234567"
                    className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1A17] mb-1">Email (Optional, for digital receipt)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. yourname@example.com"
                  className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1A17] mb-1">Complete Delivery Address *</label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House / Flat #, Street, Mohallah, Sector, Landmark"
                  className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1C1A17] mb-1">Destination City *</label>
                  <select
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                  >
                    {PAKISTAN_CITIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1A17] mb-1">Province *</label>
                  <select
                    value={formData.province}
                    onChange={e => setFormData({ ...formData, province: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                  >
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa (KPK)</option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Islamabad Capital Territory">Islamabad (ICT)</option>
                    <option value="Azad Kashmir">Azad Kashmir</option>
                    <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D46] flex items-center gap-1.5 border-b border-[#DFCBB5] pb-1.5">
                <CreditCard className="w-4 h-4" /> 2. Payment Option
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Cash on Delivery */}
                <label 
                  className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod' 
                      ? 'border-[#8C6D46] bg-white ring-2 ring-[#8C6D46]/20' 
                      : 'border-[#DECDB7] bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Banknote className="w-5 h-5 text-emerald-700" />
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#8C6D46]"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-bold text-[#1C1A17]">Cash on Delivery (COD)</p>
                    <p className="text-[10px] text-[#7A7265]">Pay courier at doorstep</p>
                  </div>
                </label>

                {/* Direct Bank Transfer */}
                <label 
                  className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'bank' 
                      ? 'border-[#8C6D46] bg-white ring-2 ring-[#8C6D46]/20' 
                      : 'border-[#DECDB7] bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-5 h-5 text-blue-700" />
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                      className="accent-[#8C6D46]"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-bold text-[#1C1A17]">Direct Bank Wire</p>
                    <p className="text-[10px] text-[#7A7265]">Meezan / HBL / Habib Metro</p>
                  </div>
                </label>

                {/* JazzCash / EasyPaisa */}
                <label 
                  className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === 'easypaisa' 
                      ? 'border-[#8C6D46] bg-white ring-2 ring-[#8C6D46]/20' 
                      : 'border-[#DECDB7] bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'easypaisa'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'easypaisa' })}
                      className="accent-[#8C6D46]"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-bold text-[#1C1A17]">JazzCash / EasyPaisa</p>
                    <p className="text-[10px] text-[#7A7265]">Instant mobile wallet</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Delivery Instructions */}
            <div>
              <label className="block text-xs font-bold text-[#1C1A17] mb-1">
                Order Notes / Delivery Time Preference (Optional)
              </label>
              <input
                type="text"
                value={formData.specialInstructions}
                onChange={e => setFormData({ ...formData, specialInstructions: e.target.value })}
                placeholder="e.g. Please deliver after 3:00 PM or call before arriving"
                className="w-full text-xs bg-white border border-[#DECDB7] rounded-lg p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
              />
            </div>

            {/* Confirm Button */}
            <div className="pt-2 border-t border-[#DFCBB5] space-y-2">
              <button
                type="submit"
                id="place-order-btn"
                className="w-full py-3.5 px-6 rounded-xl bg-[#1C1A17] text-white font-bold text-sm hover:bg-[#332E27] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Confirm Order ({formatPrice(grandTotal)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-[#7A7265]">
                By confirming, your order will be reserved directly from HBK Blanket Industries and dispatched within 24 hours.
              </p>
            </div>
          </form>
        ) : (
          /* Step 2: Order Confirmation & Invoice */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold tracking-widest text-[#8C6D46] uppercase">
                Alhamdulillah! Order Placed Successfully
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#1C1A17] mt-1">
                Consignment #{confirmedOrder?.orderId}
              </h3>
              <p className="text-xs text-[#7A7265] mt-1">
                Thank you for choosing HBK Blankets, {formData.fullName}. A confirmation SMS has been prepared for {formData.phone}.
              </p>
            </div>

            {/* Printable summary box */}
            <div className="bg-white border border-[#DECDB7] rounded-xl p-4 text-left text-xs space-y-3 shadow-xs">
              <div className="flex justify-between border-b border-[#F0EBE1] pb-2 font-semibold">
                <span>Shipment Route:</span>
                <span className="text-[#1C1A17]">Faisalabad Mill → {formData.city}, {formData.province}</span>
              </div>
              <div className="flex justify-between border-b border-[#F0EBE1] pb-2">
                <span className="text-[#7A7265]">Payment Mode:</span>
                <span className="font-bold text-[#1C1A17] uppercase">{formData.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-b border-[#F0EBE1] pb-2">
                <span className="text-[#7A7265]">Estimated Arrival:</span>
                <span className="font-bold text-emerald-800">2 – 4 Business Days</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-1">
                <span>Total Payable at Doorstep:</span>
                <span className="text-base text-[#8C6D46]">{formatPrice(confirmedOrder?.totalPKR || 0)}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl border border-[#DECDB7] bg-white text-xs font-bold text-[#4A4235] hover:bg-[#F2ECE1] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" /> Print / Save Invoice
              </button>

              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setPage('track');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Truck className="w-4 h-4 text-[#D9A76A]" /> Track This Consignment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
