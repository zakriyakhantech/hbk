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
  },
  {
    id: 'hbk-kohinoor-bridal-8kg',
    name: 'HBK Kohinoor Bridal Velvet 8.0kg 2-Ply Trousseau',
    urduName: 'کوہِ نور برائیڈل مخمل ۸.۰ کلو گرام ۲-پلائی کمبل',
    tagline: 'The ultimate royal wedding heirloom. 8kg of hand-sculpted Korean velvet mink.',
    category: 'bridal-trousseau',
    pricePKR: 13800,
    originalPricePKR: 16500,
    rating: 5.0,
    reviewCount: 98,
    ply: '2-Ply',
    weightKg: 8.0,
    dimensions: '220 x 240 cm (King Luxury)',
    material: '100% Virgin Korean Acrylic (1450 GSM Double Layer) with Heavy Zari Border Trim',
    warmthRating: 'Arctic Ultra-Warm',
    togRating: 17.5,
    description: 'Regarded as the crowning jewel of HBK manufacturing, the Kohinoor Bridal Velvet blanket is woven specifically for grand Pakistani weddings, winter trousseaus, and generational family gifting. Weighing an immense 8.0 kilograms with ultra-dense Korean Raschel fleece, it carries ornate 3D floral bas-relief embossing and a regal metallic gold Zari edge trim.',
    features: [
      'Pakistan’s heaviest bridal trousseau blanket at 8.0 kg net weight',
      'Dual-ply thermal sandwich construction with deep 3D floral relief embossing',
      'Handcrafted heavy golden Zari embroidered border casing',
      '10-Year anti-pilling, anti-shedding & thermal integrity mill guarantee',
      'Delivered in luxury velvet embroidered bridal suitcase with lock'
    ],
    careInstructions: [
      'Professional dry cleaning recommended for bridal embellishments',
      'Spot clean with mild wool shampoo if needed',
      'Store in provided velvet suitcase with lavender sachet'
    ],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'koh-maroon-gold',
        name: 'Royal Maroon with Antique Zari',
        colorHex: '#5C131F',
        colorName: 'Mughal Maroon',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'koh-emerald-gold',
        name: 'Regal Emerald with Golden Brocade',
        colorHex: '#0D3823',
        colorName: 'Regal Emerald',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'koh-ivory-champagne',
        name: 'Champagne Ivory Pearl',
        colorHex: '#EAE1CE',
        colorName: 'Champagne Ivory',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    isNewArrival: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-chinar-leaf-2ply-5-5kg',
    name: 'HBK Royal Chinar 2-Ply 5.5kg Embossed Mink Blanket',
    urduName: 'رائل چنار ۲-پلائی ۵.۵ کلو کورین منک کمبل',
    tagline: 'Deep 3D leaf embossing with dual-thermal insulation for freezing sub-zero nights.',
    category: '2-ply-double',
    pricePKR: 8800,
    originalPricePKR: 10600,
    rating: 4.94,
    reviewCount: 210,
    ply: '2-Ply',
    weightKg: 5.5,
    dimensions: '200 x 240 cm (Double / Queen)',
    material: 'Double-Layer Raschel Embossed Korean Acrylic with Anti-Static Shield',
    warmthRating: 'Heavy Winter',
    togRating: 14.0,
    description: 'Inspired by the majestic autumn Chinar trees of northern valleys, this 5.5kg double-ply blanket features sculpted bas-relief leaves that feel silky smooth to the touch. The dense Korean Dralon microfibers create a warm microclimate within minutes.',
    features: [
      'Sculpted 3D Chinar leaf relief pattern engineered through heated embossing cylinders',
      'Dual-ply thermal core locks in body heat throughout freezing winter nights',
      'Antistatic treatment resists winter electrostatic crackles and pet hair',
      'Wide mitered velvet edge binding with heavy-duty twin needle stitching'
    ],
    careInstructions: [
      'Machine wash gentle in cold water (below 30°C)',
      'Tumble dry low or air dry in shade',
      'Do not iron or dry clean'
    ],
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'chin-amber',
        name: 'Chinar Autumn Amber & Rust',
        colorHex: '#9E472A',
        colorName: 'Autumn Amber',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'chin-navy',
        name: 'Deep Sapphire Midnight',
        colorHex: '#1B2A47',
        colorName: 'Midnight Navy',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-al-makkah-jacquard-6kg',
    name: 'HBK Al-Makkah Heavy Jacquard 6.0kg 2-Ply Blanket',
    urduName: 'المکہ ہیوی جکوارڈ ۶.۰ کلو ۲-پلائی کمبل',
    tagline: 'Sacred arabesque patterns and deep thermal retention woven at Faisalabad Mill.',
    category: '2-ply-double',
    pricePKR: 10200,
    originalPricePKR: 12400,
    rating: 4.97,
    reviewCount: 178,
    ply: '2-Ply',
    weightKg: 6.0,
    dimensions: '220 x 240 cm (King Size)',
    material: '100% Thermal Raschel Dralon Acrylic with Silk Velvet Edge Binding',
    warmthRating: 'Arctic Ultra-Warm',
    togRating: 15.5,
    description: 'The Al-Makkah series by HBK Blankets is widely celebrated across Pakistan for its grand sacred geometric borders and luxurious 6.0kg King drape. Designed for large double and King-sized master beds, giving unmatched warmth and serene bedroom elegance.',
    features: [
      'Grand 220 x 240 cm King drape covers thick 14-inch mattresses',
      'Pure virgin Dralon acrylic fibers certified hypoallergenic',
      'Rich two-tone jacquard relief weave with anti-pill guarantee',
      'Supplied in reinforced HBK gold-stamped presentation carrying bag'
    ],
    careInstructions: [
      'Machine wash gentle in cold water with mild detergent',
      'Air dry flat or line dry away from direct scorching sunlight'
    ],
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'mak-gold-black',
        name: 'Arabian Black & Gold Arabesque',
        colorHex: '#26221C',
        colorName: 'Black & Gold',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'mak-sapphire',
        name: 'Royal Sapphire & Cream',
        colorHex: '#1D3557',
        colorName: 'Sapphire Blue',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isFeatured: true,
    inStock: true
  },
  {
    id: 'hbk-cloudtouch-micromink-throw',
    name: 'HBK CloudTouch Zero-Gravity 1-Ply Micromink Throw',
    urduName: 'کلاؤڈ ٹچ زیرو گریوٹی ۱-پلائی مائکرو منک کمبل',
    tagline: 'Silky smooth sofa & AC throw blanket with featherweight luxury drape.',
    category: '1-ply-flannel',
    pricePKR: 3200,
    originalPricePKR: 4000,
    rating: 4.88,
    reviewCount: 134,
    ply: '1-Ply',
    weightKg: 1.95,
    dimensions: '180 x 220 cm (Generous Throw / Single)',
    material: 'Super-Soft High-Luster Micro-Mink Velvet Fleece (380 GSM)',
    warmthRating: 'Medium All-Season',
    togRating: 7.2,
    description: 'Designed for modern urban apartments and air-conditioned living rooms, the CloudTouch throw delivers instant buttery tactile sensation. Ideal for lounging on couches, reading sessions, or as an elegant bed runner.',
    features: [
      'Ultra-dense micro-velvet fibers with zero static electricity buildup',
      'Feather-soft drape with zero shedding or microfiber lint',
      'Breathable all-season comfort for AC bedrooms from March to October',
      'Contemporary minimalist solid tones that complement modern home decor'
    ],
    careInstructions: [
      'Machine wash gentle in cold water',
      'Quick drying fabric—ready to use in under an hour'
    ],
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'ct-pearl',
        name: 'Pearl Oyster White',
        colorHex: '#EAE6DF',
        colorName: 'Pearl White',
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'ct-slate',
        name: 'Dove Slate Grey',
        colorHex: '#606670',
        colorName: 'Slate Grey',
        image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'hbk-little-angels-swaddle',
    name: 'HBK Little Angels Sherpa & Pure Cotton Newborn Swaddle',
    urduName: 'لٹل اینجلز پیور کاٹن و شیرپا بے بی سوئڈل',
    tagline: 'Pediatrician-approved zip cocoon swaddle with breathable Turkish fleece lining.',
    category: 'baby-kids',
    pricePKR: 2250,
    originalPricePKR: 2900,
    rating: 4.98,
    reviewCount: 310,
    ply: '2-Ply',
    weightKg: 0.65,
    dimensions: '85 x 90 cm (Newborn to 12 Months)',
    material: '100% Organic Combed Cotton Shell with Ultra-Plush Hypoallergenic Sherpa Lining',
    warmthRating: 'Heavy Winter',
    togRating: 7.0,
    description: 'Protect your infant against cold drafts with the HBK Little Angels Swaddle Cocoon. The interior features cloud-soft, unbleached Turkish Sherpa fleece, while the outer shell is woven from 100% breathable organic Pakistani cotton.',
    features: [
      'Two-way smooth safety zipper for effortless late-night diaper changes without undressing',
      'Comfort-wrap wings mimic the natural feeling of a mother’s embrace',
      'Zero synthetic dyes, nickel-free zippers, and OEKO-TEX Standard 100 Class 1 certified',
      'Includes matching bear-ear infant bonnet and cotton gift bag'
    ],
    careInstructions: [
      'Machine wash cold on gentle cycle with mild baby detergent',
      'Tumble dry low or air dry in mild sunlight'
    ],
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'la-cloud',
        name: 'Milky Cloud White',
        colorHex: '#F7F4EE',
        colorName: 'Cloud White',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'la-blush',
        name: 'Sweet Peaches & Cream',
        colorHex: '#FAD9D0',
        colorName: 'Blush Peach',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isBestSeller: true,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'hbk-royal-crest-8piece-bridal',
    name: 'HBK Imperial Crest 8-Piece Embroidered Master Bridal Quilt Suite',
    urduName: 'امپیریل کرسٹ ۸ پیس ایمبرائیڈرڈ ماسٹر برائیڈل کوئلٹ سیٹ',
    tagline: 'The ultimate royal Pakistani bridal trousseau package with 8 handcrafted master pieces.',
    category: 'bridal-trousseau',
    pricePKR: 18500,
    originalPricePKR: 22500,
    rating: 5.0,
    reviewCount: 82,
    ply: 'Quilted / Multi-layer',
    weightKg: 7.5,
    dimensions: 'Master Quilt: 250 x 270 cm, Sheet: 240 x 260 cm, 4 Pillow Shams, 2 Bolsters',
    material: 'Embossed Silk Velvet with Zari Threadwork, 400 GSM Microfiber Poly-Down Filling',
    warmthRating: 'Arctic Ultra-Warm',
    togRating: 14.5,
    description: 'The master pride of HBK’s Faisalabad atelier. This grand 8-piece royal suite includes a heavy embossed bridal quilt, silk-touch fitted sheet, four matching flange pillow shams, and two filled bolster cushions. Designed to make the wedding bedroom look like a Mughal palace suite.',
    features: [
      'Comprehensive 8-piece master trousseau collection',
      'Intricate computer-guided multi-needle baroque quilting',
      'Supple silk-touch velvet surface with antique metallic gold thread highlights',
      'Ultra-durable anti-shift filling maintains loft for over a decade',
      'Shipped in a custom wooden-frame luxury bridal trunk with brass latches'
    ],
    careInstructions: [
      'Dry clean recommended to preserve royal embroidery and metallic highlights',
      'Store in provided protective trunk with cedar balls'
    ],
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ],
    variants: [
      {
        id: 'rc-wine',
        name: 'Sultanate Crimson Wine',
        colorHex: '#4F111D',
        colorName: 'Crimson Wine',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      },
      {
        id: 'rc-gold',
        name: 'Mughal Antique Gold',
        colorHex: '#C59A3F',
        colorName: 'Antique Gold',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        inStock: true
      }
    ],
    isFeatured: true,
    isNewArrival: true,
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
