import { BranchLocation } from '../types';

export const BRANCHES: BranchLocation[] = [
  {
    id: 'faisalabad-mill',
    name: 'HBK Blanket Industries (Mega Manufacturing Plant)',
    type: 'Manufacturing Plant',
    city: 'Faisalabad',
    address: 'Plot 42-48, M-3 Industrial City, Sahianwala Interchange, Faisalabad, Punjab, Pakistan',
    phone: '+92 41 876 5432',
    email: 'factory@hbkblankets.com',
    hours: 'Monday – Saturday: 08:00 AM – 06:00 PM',
    coordinates: { lat: 31.5833, lng: 73.1333 },
    badge: 'Flagship 50-Acre Factory Complex'
  },
  {
    id: 'peshawar-head-office',
    name: 'HBK Blankets Head Office & Northern Logistics',
    type: 'Head Office',
    city: 'Peshawar',
    address: 'Near Nasir Pur Railway Crossing, Main G.T. Road, Peshawar, Khyber Pakhtunkhwa, Pakistan',
    phone: '+92 91 527 8910',
    email: 'Itsupport@hbkblankets.com',
    hours: 'Monday – Saturday: 09:00 AM – 07:00 PM',
    coordinates: { lat: 34.0151, lng: 71.5249 },
    badge: 'Founding Corporate HQ'
  },
  {
    id: 'karachi-mill',
    name: 'Al-Imdad Textile Mills & Port Export Division',
    type: 'Textile Mill',
    city: 'Karachi',
    address: 'Sector 16, Korangi Industrial Area & S.I.T.E. Hub, Karachi, Sindh, Pakistan',
    phone: '+92 21 350 6789',
    email: 'karachi.sales@hbkblankets.com',
    hours: 'Monday – Saturday: 09:00 AM – 06:00 PM',
    coordinates: { lat: 24.8607, lng: 67.0011 },
    badge: 'Finishing & Export Terminal'
  },
  {
    id: 'lahore-depot',
    name: 'HBK Wholesale Central Depot & Experience Center',
    type: 'Wholesale Depot',
    city: 'Lahore',
    address: 'HBK Plaza, Circular Road near Shah Alam Market, Lahore, Punjab, Pakistan',
    phone: '+92 42 376 4321',
    email: 'lahore@hbkblankets.com',
    hours: 'Monday – Saturday: 10:00 AM – 08:00 PM',
    coordinates: { lat: 31.582, lng: 74.329 },
    badge: 'Wholesale & B2B Distribution'
  },
  {
    id: 'multan-hub',
    name: 'HBK Southern Punjab Distribution Terminal',
    type: 'Regional Hub',
    city: 'Multan',
    address: 'Vehari Road Industrial Estate, Multan, Punjab, Pakistan',
    phone: '+92 61 654 3210',
    email: 'multan@hbkblankets.com',
    hours: 'Monday – Saturday: 09:00 AM – 06:00 PM',
    coordinates: { lat: 30.1575, lng: 71.5249 },
    badge: 'Express Regional Dispatch'
  }
];

export const MANUFACTURING_STEPS = [
  {
    step: 1,
    title: 'Raw Fiber Ingestion',
    desc: 'Ethically sourced, virgin Korean and Turkish acrylic microfibers are inspected for tensile elasticity and microscopic purity.',
    icon: 'Layers'
  },
  {
    step: 2,
    title: 'Carding & Parallel Combing',
    desc: 'High-speed spinning drums comb the fibers in parallel alignment to eliminate knots and create uniform loft.',
    icon: 'Sparkles'
  },
  {
    step: 3,
    title: 'High-Speed Raschel Weaving',
    desc: 'Heavy industrial multi-bar Raschel looms interlock warp and weft yarns, weaving dense, shed-free double-mesh bases.',
    icon: 'Cpu'
  },
  {
    step: 4,
    title: 'Thermal Pile Shearing & Polishing',
    desc: 'Heated rotary blades shave the fleece face to precise millimeter heights, followed by buffing for mirror-soft velvet texture.',
    icon: 'Scissors'
  },
  {
    step: 5,
    title: '3D Relief Jacquard Embossing',
    desc: 'Our proprietary hydraulic heat presses press signature Black Rose and Persian botanical designs deep into the pile.',
    icon: 'Feather'
  },
  {
    step: 6,
    title: 'Rotary Screen Printing & Steaming',
    desc: 'Non-toxic reactive eco-dyes are transferred with high pressure, followed by superheated steaming to chemically bond colors.',
    icon: 'Palette'
  },
  {
    step: 7,
    title: 'Ultrasonic Edge Binding & Inspection',
    desc: 'Reinforced 3-inch satin velvet piping is edge-sewn with double lock-stitches, followed by 100% manual needle detection.',
    icon: 'ShieldCheck'
  },
  {
    step: 8,
    title: 'Sterile Vacuum Packaging',
    desc: 'Each blanket is sealed inside heavy-duty, reusable zippered dust-proof tote bags ready for direct courier delivery.',
    icon: 'PackageCheck'
  }
];
