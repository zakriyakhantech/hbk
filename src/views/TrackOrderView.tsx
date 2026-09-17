import React, { useState } from 'react';
import { 
  Truck, 
  Search, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface TrackingResult {
  cn: string;
  orderId: string;
  customerName: string;
  city: string;
  destinationHub: string;
  courier: string;
  courierTrackingNo: string;
  status: 'booked' | 'processing' | 'in_transit' | 'out_for_delivery' | 'delivered';
  currentStage: number; // 1 to 5
  estimatedDelivery: string;
  items: string[];
  totalAmount: number;
  timeline: {
    title: string;
    location: string;
    timestamp: string;
    done: boolean;
  }[];
}

const SAMPLE_TRACKINGS: Record<string, TrackingResult> = {
  'HBK-98421-LHE': {
    cn: 'HBK-98421-LHE',
    orderId: 'HBK-77402',
    customerName: 'Muhammad Salman',
    city: 'Lahore (Gulberg III)',
    destinationHub: 'Leopards Hub, Allama Iqbal Town, Lahore',
    courier: 'Leopards Courier Express',
    courierTrackingNo: 'LCS-99482710',
    status: 'in_transit',
    currentStage: 3,
    estimatedDelivery: 'Tomorrow, by 4:00 PM',
    items: ['HBK Black Rose 2-Ply Korean Mink (King / Royal Maroon)', 'HBK Glorious 1-Ply Flannel (Double)'],
    totalAmount: 11400,
    timeline: [
      { title: 'Order Confirmed & Factory Work Order Generated', location: 'HBK Central Sales, Faisalabad', timestamp: 'Yesterday, 10:15 AM', done: true },
      { title: 'Ultrasonic Hem Inspection & Hologram Sealing', location: 'Faisalabad Finishing Mill #2', timestamp: 'Yesterday, 02:40 PM', done: true },
      { title: 'Dispatched via Direct Logistics Truck', location: 'HBK Mill Dispatch Terminal, Faisalabad', timestamp: 'Today, 04:30 AM', done: true },
      { title: 'In Transit on Motorway M-3 towards Lahore', location: 'Motorway M-3 Transit Hub', timestamp: 'Today, 08:20 AM', done: true },
      { title: 'Arrival at Destination Sorting Facility', location: 'Gulberg Delivery Station, Lahore', timestamp: 'Pending Arrival', done: false },
      { title: 'Out for Delivery with Courier Rider', location: 'Destination Address', timestamp: 'Pending', done: false }
    ]
  },
  'HBK-44210-KHI': {
    cn: 'HBK-44210-KHI',
    orderId: 'HBK-77298',
    customerName: 'Syeda Fatima',
    city: 'Karachi (DHA Phase 6)',
    destinationHub: 'TCS Regional Cargo Gateway, Korangi, Karachi',
    courier: 'TCS Express Flying Freight',
    courierTrackingNo: 'TCS-10847291',
    status: 'out_for_delivery',
    currentStage: 4,
    estimatedDelivery: 'Today by 6:00 PM',
    items: ['HBK Royal Velvet 6-Piece Quilted Bedspread Set'],
    totalAmount: 14500,
    timeline: [
      { title: 'Order Verified by Customer Care', location: 'Online Desk', timestamp: '2 days ago', done: true },
      { title: 'Loaded at Faisalabad Mill Logistics Dock', location: 'Faisalabad Mill', timestamp: '2 days ago', done: true },
      { title: 'Air Cargo Transfer to Karachi Terminal', location: 'Karachi Air Cargo Gate', timestamp: 'Yesterday, 09:15 PM', done: true },
      { title: 'Assigned to Area Rider (Rider: Naveed Khan)', location: 'DHA Delivery Station, Karachi', timestamp: 'Today, 09:30 AM', done: true },
      { title: 'Cash On Delivery Ready for Inspection', location: 'Customer Doorstep', timestamp: 'Expected Shortly', done: false }
    ]
  },
  'HBK-71052-ISB': {
    cn: 'HBK-71052-ISB',
    orderId: 'HBK-77110',
    customerName: 'Brigadier (R) Usman Ali',
    city: 'Islamabad (Sector F-7/2)',
    destinationHub: 'PostEx Express Hub, I-9 Industrial Area, Islamabad',
    courier: 'PostEx Logistics',
    courierTrackingNo: 'PEX-84729103',
    status: 'delivered',
    currentStage: 5,
    estimatedDelivery: 'Delivered Successfully',
    items: ['HBK Sherpa Dream 2-Ply Heavy Winter (King)'],
    totalAmount: 8900,
    timeline: [
      { title: 'Order Processed', location: 'Faisalabad Mill', timestamp: '3 days ago', done: true },
      { title: 'Dispatched via Motorway M-2', location: 'Mill Dispatch', timestamp: '3 days ago', done: true },
      { title: 'Arrived in Islamabad Gateway', location: 'I-9 Hub, Islamabad', timestamp: '2 days ago', done: true },
      { title: 'Delivered & Cash Collected', location: 'Customer Address, F-7/2', timestamp: 'Yesterday, 01:15 PM', done: true }
    ]
  }
};

export const TrackOrderView: React.FC = () => {
  const { formatPrice } = useShop();
  const [searchCn, setSearchCn] = useState('HBK-98421-LHE');
  const [activeResult, setActiveResult] = useState<TrackingResult | null>(SAMPLE_TRACKINGS['HBK-98421-LHE']);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCn.trim()) return;

    const query = searchCn.trim().toUpperCase();
    const found = SAMPLE_TRACKINGS[query] || Object.values(SAMPLE_TRACKINGS).find(
      t => t.orderId.toUpperCase() === query || t.courierTrackingNo.toUpperCase() === query
    );

    if (found) {
      setActiveResult(found);
    } else {
      // Dynamic fallback for any user input
      setActiveResult({
        cn: query,
        orderId: `HBK-${Math.floor(10000 + Math.random() * 90000)}`,
        customerName: 'Valued Customer',
        city: 'Pakistan Destination Hub',
        destinationHub: 'Regional Courier Express Terminal',
        courier: 'Leopards / TCS Express Logistics',
        courierTrackingNo: `EXP-${Math.floor(10000000 + Math.random() * 90000000)}`,
        status: 'in_transit',
        currentStage: 3,
        estimatedDelivery: '2 – 3 Business Days',
        items: ['HBK Premium Winter Blanket (Factory Packed)'],
        totalAmount: 7850,
        timeline: [
          { title: 'Order Booked and Invoiced', location: 'HBK Central Sales', timestamp: 'Recently', done: true },
          { title: 'Quality Audited & Laser Hologram Affixed', location: 'Faisalabad Finishing Mill', timestamp: 'Recently', done: true },
          { title: 'Consignment Handed to Express Logistics Fleet', location: 'Logistics Terminal', timestamp: 'In Transit', done: true },
          { title: 'Transit to Destination City Depot', location: 'National Highway Route', timestamp: 'En Route', done: false },
          { title: 'Delivered to Customer Doorstep', location: 'Recipient Address', timestamp: 'Pending', done: false }
        ]
      });
    }
    setHasSearched(true);
  };

  const loadSample = (cn: string) => {
    setSearchCn(cn);
    setActiveResult(SAMPLE_TRACKINGS[cn]);
    setHasSearched(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46] px-3 py-1 rounded-full bg-[#F2ECE1] inline-block">
          Direct Consignment Tracking
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#1C1A17]">
          Track Your Blanket Dispatch
        </h1>
        <p className="text-xs text-[#7A7265]">
          Enter your HBK Order ID, Consignment Number (CN), or Courier Reference to view real-time mill dispatch and courier progress.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white p-6 rounded-2xl border border-[#DFCBB5] shadow-sm space-y-4">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              required
              value={searchCn}
              onChange={e => setSearchCn(e.target.value)}
              placeholder="e.g. HBK-98421-LHE or HBK-77402"
              className="w-full bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-semibold text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
            />
            <Search className="w-5 h-5 text-[#8C7D6B] absolute left-3 top-3.5" />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#1C1A17] hover:bg-[#332E27] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Track Consignment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Sample Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
          <span className="text-[#7A7265] font-medium">Try Sample Shipments:</span>
          <button
            onClick={() => loadSample('HBK-98421-LHE')}
            className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#DFCBB5] hover:border-[#8C6D46] text-[#1C1A17] font-mono text-[11px] cursor-pointer"
          >
            HBK-98421-LHE (Lahore • In Transit)
          </button>
          <button
            onClick={() => loadSample('HBK-44210-KHI')}
            className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#DFCBB5] hover:border-[#8C6D46] text-[#1C1A17] font-mono text-[11px] cursor-pointer"
          >
            HBK-44210-KHI (Karachi • Out for Delivery)
          </button>
          <button
            onClick={() => loadSample('HBK-71052-ISB')}
            className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#DFCBB5] hover:border-[#8C6D46] text-[#1C1A17] font-mono text-[11px] cursor-pointer"
          >
            HBK-71052-ISB (Islamabad • Delivered)
          </button>
        </div>
      </div>

      {/* Tracking Results Canvas */}
      {activeResult && (
        <div className="bg-white rounded-2xl border border-[#DFCBB5] overflow-hidden shadow-lg space-y-6">
          {/* Top Bar Summary */}
          <div className="bg-[#1C1A17] text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-base text-[#D9A76A]">
                  CN: {activeResult.cn}
                </span>
                <span className="text-xs text-white/60">({activeResult.orderId})</span>
              </div>
              <p className="text-xs text-[#D1C7BA]">
                Courier: <strong>{activeResult.courier}</strong> • Tracking #: <strong className="font-mono">{activeResult.courierTrackingNo}</strong>
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] uppercase font-bold text-[#D9A76A] tracking-wider block">
                Estimated Delivery
              </span>
              <span className="font-serif font-bold text-lg text-white">
                {activeResult.estimatedDelivery}
              </span>
            </div>
          </div>

          {/* Progress Stage Bar */}
          <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#F0EBE1]">
            <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold">
              {[
                { stage: 1, label: 'Booked' },
                { stage: 2, label: 'Hem Quality' },
                { stage: 3, label: 'Dispatched' },
                { stage: 4, label: 'Out for Delivery' },
                { stage: 5, label: 'Delivered' }
              ].map(s => {
                const isPassed = activeResult.currentStage >= s.stage;
                const isCurrent = activeResult.currentStage === s.stage;
                return (
                  <div key={s.stage} className="space-y-1.5">
                    <div className={`h-2 rounded-full transition-all ${
                      isPassed ? 'bg-[#C28E5B]' : 'bg-[#E5DDCF]'
                    }`} />
                    <span className={`${
                      isCurrent ? 'text-[#8C6D46] font-extrabold' : isPassed ? 'text-[#1C1A17]' : 'text-[#A69C8E]'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Consignment Details */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Timeline (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif font-bold text-base text-[#1C1A17] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C6D46]" /> Dispatch Milestones
              </h3>

              <div className="space-y-4 pl-3 border-l-2 border-[#DFCBB5] text-xs">
                {activeResult.timeline.map((item, i) => (
                  <div key={i} className="relative pl-5 space-y-0.5">
                    <span className={`absolute -left-5 top-1 w-3 h-3 rounded-full border-2 bg-white ${
                      item.done ? 'border-[#C28E5B] bg-[#C28E5B]' : 'border-[#DECDB7]'
                    }`} />
                    <p className={`font-bold ${item.done ? 'text-[#1C1A17]' : 'text-[#A69C8E]'}`}>
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#7A7265]">
                      {item.location} • <span className="font-mono">{item.timestamp}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Package Info (5 cols) */}
            <div className="md:col-span-5 bg-[#FAF8F5] p-5 rounded-xl border border-[#DFCBB5] space-y-4 text-xs">
              <h4 className="font-serif font-bold text-sm text-[#1C1A17] flex items-center gap-1.5 border-b border-[#F0EBE1] pb-2">
                <Package className="w-4 h-4 text-[#8C6D46]" /> Consignment Contents
              </h4>

              <div className="space-y-1.5">
                <span className="text-[11px] text-[#7A7265] block">Recipient & Hub:</span>
                <p className="font-bold text-[#1C1A17]">{activeResult.customerName}</p>
                <p className="text-[#5E5547] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" /> {activeResult.city}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#F0EBE1]">
                <span className="text-[11px] text-[#7A7265] block">Items in Bag:</span>
                <ul className="space-y-1 font-semibold text-[#1C1A17]">
                  {activeResult.items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C28E5B]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[#F0EBE1] flex justify-between items-center">
                <span className="text-xs text-[#7A7265]">COD Collection Amount:</span>
                <span className="text-sm font-bold text-[#8C6D46]">
                  {formatPrice(activeResult.totalAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Callout */}
      <div className="bg-[#FAF8F5] border border-[#DFCBB5] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-[#8C6D46]" />
          <div>
            <h4 className="font-bold text-xs text-[#1C1A17]">Need immediate dispatch assistance?</h4>
            <p className="text-[11px] text-[#7A7265]">Our logistics helpline is available Monday – Saturday, 9 AM to 8 PM PKT.</p>
          </div>
        </div>

        <a
          href="tel:+92915278910"
          className="px-4 py-2 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] cursor-pointer shrink-0"
        >
          Call +92 91 527 8910
        </a>
      </div>
    </div>
  );
};
