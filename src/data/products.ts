import { Product, Review } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'hbk-black-rose-2ply',
    name: 'Black Rose 2-Ply Luxury Double Bed Blanket',
    urduName: 'بلیک روز ۲-پلائی ڈبل بیڈ کمبل',
    tagline: 'Pakistan’s gold standard in heavyweight Korean-grade embossed winter warmth.',
    category: '2-ply-double',
    pricePKR: 8100,
    originalPricePKR: 9800,
    rating: 4.9,
    reviewCount: 248,
    ply: '2-Ply',
    weightKg: 5.2,
    dimensions: '200 x 240 cm (Double / Queen)',
    material: '100% High-Density Raschel Mink Acrylic with Soft Flannel Backing',
    warmthRating: 'Heavy Winter',
    togRating: 13.5,
    description: 'The legendary Black Rose 2-Ply blanket from HBK Blankets combines two thermally bonded layers of deep-pile Korean mink acrylic. Featuring our signature three-dimensional botanical emboss and piped velvet border, it locks in warmth effortlessly through freezing sub-zero winter nights without feeling stifling.',
    features: [
      'Dual-ply thermal sandwich construction keeps freezing drafts out',
      'Ultra-dense 850 GSM pile weight prevents shedding and pilling',
      '3D relief embossing retains its deep texture through repeated washes',
      'Silky microfiber satin edge-piping with reinforced double stitching',
      'Hypoallergenic and antistatic treatment certified for sensitive skin'
    ],
    careInstructions: [
      'Machine wash gentle cycle in cold water (below 30°C)',
      'Use mild liquid detergent; do not bleach or use chlorine',
      'Tumble dry low or line dry in shade away from direct sunlight',
      'Do not iron or dry clean'
    ],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'br-maroon',
        name: 'Royal Maroon Rose',
        colorHex: '#6B1724',
        colorName: 'Royal Maroon',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'br-navy',
        name: 'Midnight Navy Blue',
        colorHex: '#1E2B45',
        colorName: 'Midnight Navy',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'br-emerald',
        name: 'Imperial Emerald',
        colorHex: '#14382A',
        colorName: 'Imperial Emerald',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'br-camel',
        name: 'Desert Camel Gold',
        colorHex: '#B2824A',
        colorName: 'Camel Gold',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-glorious-1ply-flannel',
    name: 'Glorious 1-Ply Double Bed Flannel Blanket',
    urduName: 'گلوریس ۱-پلائی ڈبل فلالین کمبل',
    tagline: 'Feather-light cloud softness for transitioning seasons and mild winters.',
    category: '1-ply-flannel',
    pricePKR: 2800,
    originalPricePKR: 3500,
    rating: 4.8,
    reviewCount: 312,
    ply: '1-Ply',
    weightKg: 2.3,
    dimensions: '200 x 230 cm (Double)',
    material: '100% Super-Fine Brushed Micro-Flannel Fleece',
    warmthRating: 'Medium All-Season',
    togRating: 7.5,
    description: 'Our top-rated everyday blanket across Pakistani households. The Glorious 1-Ply Flannel blanket utilizes precision-brushed micro-flannel fibers that trap body warmth quickly without heaviness. Perfect for autumn, mild winters, or bedrooms with air conditioning.',
    features: [
      'Silky brushed micro-flannel with velvet touch on both sides',
      'Lightweight and packable—ideal for travel, guest rooms, and lounger throws',
      'Colorfast reactive dye technology resists fading over dozens of washes',
      'Wide lock-stitched edges ensure no unraveling or fraying',
      'Lint-free formulation prevents annoying fluff on bedsheets'
    ],
    careInstructions: [
      'Machine wash warm or cold on delicate cycle',
      'Air dry flat or tumble dry delicate low heat',
      'No fabric softener required—naturally remains plush'
    ],
    images: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'glo-charcoal',
        name: 'Smoky Charcoal Grey',
        colorHex: '#3D4148',
        colorName: 'Charcoal Grey',
        image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'glo-coffee',
        name: 'Mocha Coffee Brown',
        colorHex: '#4E3629',
        colorName: 'Mocha Coffee',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'glo-rose',
        name: 'Dusty Rose Pink',
        colorHex: '#BA808A',
        colorName: 'Dusty Rose',
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-sherpa-dream-2ply',
    name: 'Sherpa Dream 2-Ply Reversible Blanket',
    urduName: 'شیرپا ڈریم ۲-پلائی ریورسیبل کمبل',
    tagline: 'Velvety embossed mink face with thick curly faux lamb fleece underlay.',
    category: '2-ply-double',
    pricePKR: 7400,
    originalPricePKR: 8900,
    rating: 4.95,
    reviewCount: 189,
    ply: '2-Ply',
    weightKg: 4.6,
    dimensions: '200 x 240 cm (Double / Queen)',
    material: 'Micro-Mink Jacquard Front with 350 GSM Woolly Sherpa Reverse',
    warmthRating: 'Heavy Winter',
    togRating: 12.0,
    description: 'Experience genuine thermal luxury with the HBK Sherpa Dream. One side features buttery soft jacquard-embossed fleece, while the flip side is genuine heavyweight lamb-touch Sherpa fleece. Designed for severe cold in northern valleys and chilly winter nights across Punjab & KPK.',
    features: [
      'Reversible 2-in-1 design with plush velvet and warm sherpa fleece',
      'Deep heat containment ideal for cold bedrooms without gas heaters',
      'Non-shedding Turkish acrylic fiber blend',
      'Luxurious 3-inch mitered velvet border trim',
      'Delivered in heavy-duty zippered factory storage bag'
    ],
    careInstructions: [
      'Machine wash gentle in cold water',
      'Air dry recommended to preserve fluffy Sherpa texture',
      'Do not use fabric bleach'
    ],
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'sd-cream',
        name: 'Oatmeal & Ivory Sherpa',
        colorHex: '#D8CAB8',
        colorName: 'Oatmeal Cream',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'sd-slate',
        name: 'Deep Slate Blue & White',
        colorHex: '#2C3E50',
        colorName: 'Slate Navy',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'hbk-sultan-arctic-6kg',
    name: 'Sultan Imperial 6.2kg Arctic 2-Ply Blanket',
    urduName: 'سلطان امپیریل ۶.۲ کلو گرام آرکٹک کمبل',
    tagline: 'Our heaviest heavyweight masterpiece. Engineered for freezing climates.',
    category: '2-ply-double',
    pricePKR: 11500,
    originalPricePKR: 13900,
    rating: 5.0,
    reviewCount: 94,
    ply: '2-Ply',
    weightKg: 6.2,
    dimensions: '220 x 240 cm (King Size)',
    material: 'Virgin Korean-Standard Acrylic Microfiber (1100 GSM Density)',
    warmthRating: 'Arctic Ultra-Warm',
    togRating: 16.0,
    description: 'The Sultan Imperial is the undisputed heavyweight champion in the HBK factory line. Weighing over 6 kilograms with an unprecedented 1100 GSM double-ply thermal structure, it effortlessly withstands sub-zero mountain temperatures in Quetta, Murree, Swat, and Gilgit without requiring room heating.',
    features: [
      'Heaviest certified residential blanket in Pakistan (6.2 kg)',
      'Sublime dual-sided deep pile with Persian floral jacquard embossing',
      'Extra-large King Size drape covers high mattresses easily',
      'Hand-finished quadruple-threaded velvet edge casing',
      'Resistant to static build-up and nocturnal dust mites'
    ],
    careInstructions: [
      'Commercial capacity front-load washing machine or professional laundry',
      'Air dry flat under mild breeze',
      'Store in provided breathable storage tote during summer'
    ],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'sul-gold',
        name: 'Antique Gold & Amber',
        colorHex: '#C6923C',
        colorName: 'Antique Gold',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'sul-ruby',
        name: 'Imperial Ruby & Onyx',
        colorHex: '#521019',
        colorName: 'Imperial Ruby',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isNewArrival: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-shenko-flannel-1ply',
    name: 'Shenko Flannel 1-Ply Single & Double Blanket',
    urduName: 'شنکو فلالین ۱-پلائی نرم کمبل',
    tagline: 'Velvety smooth, ultra-durable, and wash-resistant daily favorite.',
    category: '1-ply-flannel',
    pricePKR: 2450,
    originalPricePKR: 3100,
    rating: 4.75,
    reviewCount: 167,
    ply: '1-Ply',
    weightKg: 1.85,
    dimensions: '160 x 220 cm (Single) & 200 x 230 cm (Double)',
    material: 'High-Luster Brushed Coral Flannel Microfiber',
    warmthRating: 'Medium All-Season',
    togRating: 6.8,
    description: 'Shenko represents HBK’s focus on resilient comfort at an honest factory price. Woven from ultra-fine filament threads and brushed with Japanese micro-rollers, Shenko flannel glides across the skin like silk while preserving gentle, ambient warmth.',
    features: [
      'Silky sheen that reflects ambient bedroom lighting elegantly',
      'Ultra-compact when folded—great for dorm rooms, hostel students, and road trips',
      'Pre-shrunk and anti-pill treated',
      'Available in soothing contemporary pastel and jewel tones'
    ],
    careInstructions: [
      'Machine wash gentle cold water',
      'Quick drying fabric—air dries in under 2 hours outdoors'
    ],
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'sh-teal',
        name: 'Vintage Teal Blue',
        colorHex: '#255866',
        colorName: 'Vintage Teal',
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'sh-lavender',
        name: 'Soft Lavender Mist',
        colorHex: '#8C7B9E',
        colorName: 'Lavender Mist',
        image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    inStock: true
  },
  {
    id: 'hbk-baby-cuddle-hooded',
    name: 'HBK Baby Cuddle Hooded Animal Sherpa Wrap',
    urduName: 'ایچ بی کے بے بی ہوڈڈ شیرپا کمبل',
    tagline: 'Safe, hypoallergenic warmth designed tenderly for newborn delicate skin.',
    category: 'baby-kids',
    pricePKR: 1850,
    originalPricePKR: 2400,
    rating: 4.96,
    reviewCount: 420,
    ply: '2-Ply',
    weightKg: 0.75,
    dimensions: '100 x 120 cm (Infant / Toddler)',
    material: 'OEKO-TEX Certified 100% Turkish Acrylic & Organic Sherpa Lining',
    warmthRating: 'Heavy Winter',
    togRating: 8.5,
    description: 'Crafted especially for precious newborns and toddlers, the HBK Baby Cuddle wrap features a comforting animal ear hood and ultra-gentle, non-irritating Turkish acrylic pile. Free from harmful dyes, heavy metals, or chemical softeners.',
    features: [
      'OEKO-TEX Standard 100 Class 1 (Baby Grade) certified',
      'Cute embroidered bear ears and snug wrap-around button flaps',
      'Double-sided thermal design prevents baby from catching cold after bath or outdoors',
      'Machine washable and remains baby-soft wash after wash',
      'Packaged in an elegant gift box with ribbon—ideal baby shower gift'
    ],
    careInstructions: [
      'Machine wash with baby-friendly detergent on gentle',
      'Tumble dry low or air dry in shade'
    ],
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'bc-bear-cream',
        name: 'Teddy Bear Ivory Cream',
        colorHex: '#EAE3D6',
        colorName: 'Ivory Cream',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'bc-bear-pink',
        name: 'Baby Blossom Pink',
        colorHex: '#F2D3D8',
        colorName: 'Baby Pink',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'bc-bear-blue',
        name: 'Sky Blue Slumber',
        colorHex: '#C5D8E8',
        colorName: 'Sky Blue',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-baby-turkish-acrylic',
    name: 'HBK Baby Heirloom Turkish Acrylic Crib Blanket',
    urduName: 'بے بی ہیرلوم ٹرکش ایکریلک کرب کمبل',
    tagline: 'Heritage Jacquard knit blanket with cloud-soft hand feel for cot and stroller.',
    category: 'baby-kids',
    pricePKR: 2150,
    originalPricePKR: 2750,
    rating: 4.88,
    reviewCount: 142,
    ply: '1-Ply',
    weightKg: 0.95,
    dimensions: '110 x 140 cm (Crib / Cot)',
    material: '100% Breathable Hypoallergenic Turkish Acrylic Micro-Knit',
    warmthRating: 'Medium All-Season',
    togRating: 5.5,
    description: 'Designed in collaboration with pediatric sleep consultants, this heirloom acrylic knit crib blanket ensures balanced temperature regulation, preventing overheating while guarding your infant against drafts.',
    features: [
      'Breathable micro-cellular knit prevents dangerous heat trapping',
      'Silky smooth Turkish acrylic that never scratches tender skin',
      'Heirloom cable-knit pattern with scallop knitted hem',
      'Durable construction withstands frequent nursery sanitizing washes'
    ],
    careInstructions: [
      'Machine wash cold with gentle detergent',
      'Lay flat to dry to maintain shape'
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'bta-sage',
        name: 'Nursery Mint Sage',
        colorHex: '#CAD7CD',
        colorName: 'Mint Sage',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'bta-butter',
        name: 'Warm Buttercream',
        colorHex: '#F6EBD5',
        colorName: 'Buttercream',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    inStock: true
  },
  {
    id: 'hbk-bridal-jacquard-bedspread-set',
    name: 'HBK Royal Jacquard 6-Piece Quilted Bridal Bedspread Set',
    urduName: 'شاہی جکوارڈ ۶ پیس برائیڈل بیڈ کور سیٹ',
    tagline: 'Complete bridal luxury ensemble with embossed bedspread, pillows & cushions.',
    category: 'bedspread-sets',
    pricePKR: 14500,
    originalPricePKR: 17800,
    rating: 4.98,
    reviewCount: 156,
    ply: 'Quilted / Multi-layer',
    weightKg: 5.8,
    dimensions: 'Bedspread: 240 x 260 cm, Pillow Covers: 50 x 75 cm (x2), Cushions: 40 x 40 cm (x2), Long Runner (x1)',
    material: 'Embossed Silk-Touch Velvet Jacquard with Hollow-Fiber Filling',
    warmthRating: 'Heavy Winter',
    togRating: 11.0,
    description: 'The pinnacle of Pakistani bedroom opulence. This 6-piece bridal ensemble features an oversized quilted bedspread intricately embossed with royal baroque motifs, matched with dual flange pillow shams, embroidered accent cushions, and a foot runner. Handcrafted at our Faisalabad master atelier.',
    features: [
      'Complete 6-piece master bedroom ensemble',
      'Multi-needle computerized diamond quilting prevents fiber shifting',
      'Deep shimmering luster with antique metallic weave accents',
      'Generous 240 x 260 cm drop suitable for 12-14 inch deep mattresses',
      'Supplied in luxury leather-trimmed bridal suitcase'
    ],
    careInstructions: [
      'Dry clean recommended for bridal embroidery or gentle cold wash in large tub',
      'Air dry flat, iron on reverse low synthetic setting'
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'brd-champagne',
        name: 'Royal Champagne Gold',
        colorHex: '#D4AF37',
        colorName: 'Champagne Gold',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'brd-burgundy',
        name: 'Mughal Velvet Burgundy',
        colorHex: '#641C25',
        colorName: 'Mughal Burgundy',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-summer-cool-fleece',
    name: 'HBK Breeze All-Season AC Polar Fleece Blanket',
    urduName: 'ایچ بی کے آل سیزن اے سی پولر فلیس کمبل',
    tagline: 'Lightweight, ultra-breathable companion for summer air-conditioned bedrooms.',
    category: 'summer-fleece',
    pricePKR: 1950,
    originalPricePKR: 2500,
    rating: 4.7,
    reviewCount: 204,
    ply: '1-Ply',
    weightKg: 1.4,
    dimensions: '160 x 220 cm (Single)',
    material: 'Breathable Anti-Sweat Micro-Polar Fleece (280 GSM)',
    warmthRating: 'Light Summer',
    togRating: 4.0,
    description: 'Specifically engineered for the Pakistani summer season where ceiling fans or air conditioners create a nighttime chill. The HBK Breeze fleece provides cozy protection without inducing perspiration.',
    features: [
      'Micro-porous structure breathes continuously to expel body moisture',
      'Featherweight 1.4kg construction feels like floating cloud',
      'Anti-static carbon micro-threads reduce annoying static cling',
      'Compact roll-up size fits into everyday backpacks and luggage'
    ],
    careInstructions: [
      'Standard machine wash cold or warm',
      'Dries in under 30 minutes in normal airflow'
    ],
    images: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'sm-olive',
        name: 'Cool Olive Green',
        colorHex: '#556B2F',
        colorName: 'Olive Green',
        image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'sm-steel',
        name: 'Steel Cloud Grey',
        colorHex: '#708090',
        colorName: 'Steel Grey',
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    inStock: true
  },
  {
    id: 'hbk-hotel-heavy-fleece',
    name: 'HBK Institutional & Hotel Heavy Polar Fleece (Pack of 5)',
    urduName: 'ہاسپٹل اور ہوٹل ہیوی پولر فلیس سیٹ',
    tagline: 'Heavy-duty industrial wash tested for hospitality, hostels, and hospitals.',
    category: 'institutional',
    pricePKR: 9200,
    originalPricePKR: 11500,
    rating: 4.85,
    reviewCount: 78,
    ply: '1-Ply',
    weightKg: 2.1,
    dimensions: '160 x 220 cm (Standard Single Bed)',
    material: 'High-Tensile Spun Polyester Fleece with Anti-Bacterial Treatment',
    warmthRating: 'Medium All-Season',
    togRating: 7.0,
    description: 'Trusted by over 300 hotels, medical centers, and educational dorms across Pakistan. Designed to endure high-temperature commercial laundries without pilling, shrinking, or losing its crisp texture.',
    features: [
      'Commercial grade anti-snag and anti-shrink weave',
      'Withstands 100+ industrial wash cycles at 60°C',
      'Flame-retardant standard compliant for institutional use',
      'Reinforced overcast overlocked border binding'
    ],
    careInstructions: [
      'Industrial or residential washing machine safe at high temps',
      'Fast spin drying compatible'
    ],
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'inst-tan',
        name: 'Hospitality Camel Khaki',
        colorHex: '#9E8569',
        colorName: 'Camel Khaki',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'inst-blue',
        name: 'Medical Hospital Blue',
        colorHex: '#3B6E8C',
        colorName: 'Hospital Blue',
        image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    inStock: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'hbk-black-rose-2ply',
    author: 'Tariq Mehmood',
    city: 'Islamabad',
    rating: 5,
    date: 'February 12, 2025',
    title: 'Outstanding winter warmth—no heater needed!',
    comment: 'I ordered the Black Rose 2-Ply Double Bed in Royal Maroon. The weight is substantial (over 5kg) and the embossed pattern looks even more regal in person. Islamabad gets quite chilly at night, but with this blanket we turned off our gas heater. Free delivery arrived in 3 days!',
    verifiedPurchase: true
  },
  {
    id: 'rev-2',
    productId: 'hbk-glorious-1ply-flannel',
    author: 'Ayesha Siddiqui',
    city: 'Karachi',
    rating: 5,
    date: 'January 28, 2025',
    title: 'Super soft and feather light for Karachi AC',
    comment: 'Glorious Flannel is exactly what I wanted for our bedroom AC. It is very soft on the skin and didn’t shed any lint after the first wash. HBK factory direct pricing is half of what shops in Clifton ask for.',
    verifiedPurchase: true
  },
  {
    id: 'rev-3',
    productId: 'hbk-sultan-arctic-6kg',
    author: 'Bilal Khan Kakar',
    city: 'Quetta',
    rating: 5,
    date: 'January 14, 2025',
    title: 'Survives Quetta -7°C sub-zero winter with ease',
    comment: 'The Sultan Imperial 6.2kg is unbelievable. Heavy, luxurious, and locks in heat within 2 minutes of tucking in. Worth every rupee for freezing winter regions.',
    verifiedPurchase: true
  },
  {
    id: 'rev-4',
    productId: 'hbk-baby-cuddle-hooded',
    author: 'Dr. Fatima Noor',
    city: 'Lahore',
    rating: 5,
    date: 'February 3, 2025',
    title: 'Gentlest fabric for our 3-month-old baby',
    comment: 'Bought this for my newborn daughter. The inner Sherpa is heavenly soft and does not cause any skin rash. The bear hood is adorable for winter photos. Very hygienic packaging!',
    verifiedPurchase: true
  },
  {
    id: 'rev-5',
    productId: 'hbk-sherpa-dream-2ply',
    author: 'Usman Ghani',
    city: 'Peshawar',
    rating: 5,
    date: 'December 20, 2024',
    title: 'Original HBK quality from Peshawar factory hub',
    comment: 'My family has used HBK blankets for over 15 years. Ordering online through their website was effortless with Cash On Delivery. Packing was sturdy and clean.',
    verifiedPurchase: true
  }
];

export const CURRENCIES = {
  PKR: { code: 'PKR', symbol: '₨', rateFromPKR: 1 },
  USD: { code: 'USD', symbol: '$', rateFromPKR: 0.0036 },
  AED: { code: 'AED', symbol: 'AED ', rateFromPKR: 0.0132 },
  SAR: { code: 'SAR', symbol: 'SAR ', rateFromPKR: 0.0135 }
};
