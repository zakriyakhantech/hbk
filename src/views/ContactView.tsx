import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  Globe2,
  ExternalLink
} from 'lucide-react';
import { BRANCHES } from '../data/branches';
import { useShop } from '../context/ShopContext';

export const ContactView: React.FC = () => {
  const { showToast } = useShop();

  const [selectedBranchId, setSelectedBranchId] = useState(BRANCHES[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Order & Delivery Tracking');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const activeBranch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    setIsSent(true);
    showToast('Your message has been received by HBK Customer Support!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D46] px-3 py-1 rounded-full bg-[#F2ECE1] inline-block">
          Nationwide Reach
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#1C1A17]">
          Connect with HBK Blankets
        </h1>
        <p className="text-xs sm:text-sm text-[#7A7265]">
          Whether you have an order question, want to visit our Faisalabad production mill, or need wholesale dealership terms, our team is at your service.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-[#DFCBB5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#8C6D46] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-sm text-[#1C1A17]">Customer Care Lines</h3>
          <p className="text-xs text-[#5E5547]">+92 91 527 8910</p>
          <p className="text-xs text-[#5E5547]">+92 41 876 5432</p>
          <p className="text-[10px] text-[#8C7D6B]">Mon – Sat: 9:00 AM – 8:00 PM</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#DFCBB5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#8C6D46] flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-sm text-[#1C1A17]">Official WhatsApp</h3>
          <p className="text-xs text-[#5E5547]">+92 300 1234567</p>
          <p className="text-[11px] text-[#7A7265]">Instant replies for orders, photo verification & video calls</p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-bold text-emerald-700 hover:underline flex items-center gap-1 pt-1"
          >
            <span>Open WhatsApp Chat</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#DFCBB5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#8C6D46] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-sm text-[#1C1A17]">Email Inquiries</h3>
          <p className="text-xs text-[#5E5547]">Itsupport@hbkblankets.com</p>
          <p className="text-xs text-[#5E5547]">sales@hbkblankets.com</p>
          <p className="text-[10px] text-[#8C7D6B]">Average reply within 4 hours</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#DFCBB5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#8C6D46] flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-sm text-[#1C1A17]">Headquarters</h3>
          <p className="text-xs text-[#5E5547]">Main G.T. Road, Nasir Pur</p>
          <p className="text-xs text-[#5E5547]">Peshawar, Khyber Pakhtunkhwa</p>
          <p className="text-[10px] text-[#8C7D6B]">Pakistan</p>
        </div>
      </div>

      {/* Branch Locator & Map Simulation */}
      <div className="space-y-6">
        <div className="border-b border-[#DFCBB5] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif font-bold text-2xl text-[#1C1A17]">
              Factory Mills & Regional Distribution Branches
            </h2>
            <p className="text-xs text-[#7A7265] mt-0.5">
              Select a facility to view address, phone, direct manager contact, and operating hours.
            </p>
          </div>
        </div>

        {/* Branch Buttons */}
        <div className="flex flex-wrap gap-2">
          {BRANCHES.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(b.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedBranchId === b.id
                  ? 'bg-[#1C1A17] text-white shadow-md'
                  : 'bg-white border border-[#DFCBB5] text-[#5E5547] hover:bg-[#FAF8F5]'
              }`}
            >
              {b.city} ({b.type})
            </button>
          ))}
        </div>

        {/* Branch Details Card */}
        <div className="bg-white rounded-2xl border border-[#DFCBB5] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F2ECE1] text-[#8C6D46]">
                {activeBranch.type}
              </span>
              <span className="text-xs text-[#7A7265]">• {activeBranch.city} Hub</span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-[#1C1A17]">
              {activeBranch.name}
            </h3>

            <div className="space-y-2.5 text-xs text-[#5E5547] pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                <span>{activeBranch.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>{activeBranch.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>{activeBranch.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>{activeBranch.hours}</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${activeBranch.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C1A17] text-white text-xs font-bold hover:bg-[#332E27] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {activeBranch.city} Branch</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Mock */}
          <div className="lg:col-span-6 relative aspect-16/9 rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#DFCBB5] flex items-center justify-center p-6 text-center">
            <div className="space-y-2 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#C28E5B] text-black mx-auto flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <p className="font-serif font-bold text-sm text-[#1C1A17]">{activeBranch.name}</p>
              <p className="text-[11px] text-[#7A7265]">{activeBranch.address}</p>
              <span className="text-[10px] font-bold text-[#8C6D46] bg-[#F2ECE1] px-2.5 py-1 rounded-full inline-block">
                Coordinates: 31.4504° N, 73.1350° E
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Send Us a Message Form */}
      <div className="bg-[#FAF8F5] rounded-2xl border border-[#DFCBB5] p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h3 className="font-serif font-bold text-2xl text-[#1C1A17]">Send Direct Message</h3>
          <p className="text-xs text-[#7A7265]">
            Our support desk will get back to you via WhatsApp or Email within 4 hours.
          </p>
        </div>

        {isSent ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#1C1A17]">Message Received!</h4>
            <p className="text-xs text-[#5E5547] max-w-sm mx-auto">
              Shukriya {name}! A representative has been assigned to your ticket and will contact you shortly.
            </p>
            <button
              onClick={() => setIsSent(false)}
              className="px-4 py-2 rounded-xl bg-[#1C1A17] text-white text-xs font-bold cursor-pointer"
            >
              Send Another Query
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1C1A17] mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Hammad Khan"
                  className="w-full bg-white border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1C1A17] mb-1">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="e.g. +92 300 9876543"
                  className="w-full bg-white border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1C1A17] mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="e.g. hammad@example.com"
                  className="w-full bg-white border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1C1A17] mb-1">Inquiry Purpose</label>
                <select
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full bg-white border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
                >
                  <option value="Order & Delivery Tracking">Order & Delivery Tracking</option>
                  <option value="Wholesale & Dealership Registration">Wholesale & Dealership Registration</option>
                  <option value="Product Advice / Warmth TOG">Product Advice / Warmth TOG</option>
                  <option value="Export & Container Pricing">Export & Container Pricing</option>
                  <option value="Quality Concern or Replacement">Quality Concern or Replacement</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#1C1A17] mb-1">Your Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="How can we assist you with our blankets today?"
                className="w-full bg-white border border-[#DFCBB5] rounded-xl p-2.5 text-[#1C1A17] focus:outline-none focus:border-[#C28E5B]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#1C1A17] hover:bg-[#332E27] text-white font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 text-[#D9A76A]" />
              <span>Submit Message to Support</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
