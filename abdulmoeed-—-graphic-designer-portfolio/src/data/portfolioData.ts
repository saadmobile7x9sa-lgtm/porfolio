import { ProjectItem, ServiceItem, TestimonialItem, SkillItem } from '../types.ts';

export const ASSETS = {
  avatar: '/src/assets/images/boy_avatar_pngtree_style_1793210687463.jpg',
  avatarCreative: '/src/assets/images/abdulmoeed_3d_avatar_1793210160845.jpg',
  luxuryPackaging: '/src/assets/images/luxury_packaging_mockup_1793210176043.jpg',
  editorialPoster: '/src/assets/images/editorial_poster_mockup_1793210176395.jpg',
  brandIdentity: '/src/assets/images/brand_identity_system_1793210177080.jpg',
  beveragePackaging: '/src/assets/images/beverage_packaging_mockup_1793210177608.jpg',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aethel-skincare',
    title: 'AETHEL Skincare',
    client: 'Aethel Botanical Labs',
    location: 'Copenhagen, Denmark',
    year: '2025',
    category: 'Packaging',
    heroImage: ASSETS.luxuryPackaging,
    shortDescription: 'Tactile minimalist packaging architecture and apothecary branding for organic botanical oils.',
    fullStory: 'Aethel required an austere yet profoundly tactile brand presence to stand out in luxury organic apothecary retailers. We engineered a restrained identity system built around blind-debossed recycled stone paper boxes, matte charcoal UV-coated dropper bottles, and clinical serif typography balanced with strict geometric information hierarchy.',
    deliverables: [
      'Primary Glass Bottle Silk-Screen',
      'Debossed Outer Rigid Box Packaging',
      'Custom Botanical Monogram System',
      'Comprehensive Brand Guidelines (48p)'
    ],
    palette: ['#121212', '#EDEAE3', '#FF3B1D', '#8C8880'],
    typography: 'Syne Display · Basel Sans Regular',
    featured: true,
    stat: '+340%',
    statLabel: 'Retail stockist sell-through in first quarter'
  },
  {
    id: 'kinetic-robotics',
    title: 'KINETIC Systems',
    client: 'Kinetic Motion Corp',
    location: 'San Francisco, USA',
    year: '2024',
    category: 'Brand Identity',
    heroImage: ASSETS.brandIdentity,
    shortDescription: 'Precision visual identity, custom monogram, and luxury tactile stationery suite for advanced robotics.',
    fullStory: 'Kinetic constructs next-generation cinematic camera motion rigs. Our challenge was translating high-torque mechanical engineering into a razor-sharp, human-friendly visual language. We built an angular "K" logomark derived from servo motor angles, matched with charcoal duplexed business cards and custom vermilion wax seals for investor documents.',
    deliverables: [
      'Dynamic Geometric Logomark Suite',
      'Foil-Stamped Stationery & Envelopes',
      'Product Hardware Decals & Badges',
      'Digital Design System & Guidelines'
    ],
    palette: ['#0E0E0F', '#C2B59B', '#FF3B1D', '#F4F4F6'],
    typography: 'Archivo Condensed · JetBrains Mono',
    featured: true,
    stat: 'Series A',
    statLabel: '$14M funding secured post-rebrand'
  },
  {
    id: 'zurich-modernism',
    title: 'ZÜRICH: Modernism & Chaos',
    client: 'Kunsthaus Exhibition Series',
    location: 'Zürich, Switzerland',
    year: '2024',
    category: 'Editorial & Poster',
    heroImage: ASSETS.editorialPoster,
    shortDescription: 'Deconstructed Swiss International Style exhibition posters exploring typographic tension and order.',
    fullStory: 'Commissioned for a curated retrospective on 20th-century Swiss brutalism, this poster collection confronts the strict 12-column mathematical grid with intentional typographic collisions. Screen-printed by hand using high-density carbon ink and pure vermilion pigment on 280gsm uncoated raw paper stock.',
    deliverables: [
      'A0 Screen-Printed Gallery Posters',
      'Exhibition Catalog & Editorial Layout',
      'Kinetic Digital Type Teasers',
      'Gallery Wayfinding & Vinyl Decals'
    ],
    palette: ['#0A0A0A', '#FAF8F3', '#FF3B1D'],
    typography: 'Neue Haas Grotesk Bold · Akzidenz-Grotesk',
    featured: true,
    stat: '100% Sold Out',
    statLabel: 'Limited edition print run of 500 copies'
  },
  {
    id: 'solstice-beverages',
    title: 'AURORA & NEBULA Craft Soda',
    client: 'Solstice Botanical Brews',
    location: 'Melbourne, Australia',
    year: '2025',
    category: 'Packaging',
    heroImage: ASSETS.beveragePackaging,
    shortDescription: 'Vibrant geometric vector packaging system engineered for shelf dominance in specialty food halls.',
    fullStory: 'Solstice wanted their wild fermented sodas to feel like miniature modern art pieces in consumers hands. We established a modular graphic canvas using rhythmic interlocking arcs, intense color contrasts, and crisp tactile matte varnish over brushed aluminum and amber glass bottles.',
    deliverables: [
      '4 Can & Bottle Label Wrap Die-lines',
      'Custom Geometric Motif Library',
      'Cardboard 4-Pack Carrier Packaging',
      'Point-of-Sale Acrylic Display Stands'
    ],
    palette: ['#FF3B1D', '#1D2A68', '#FFA900', '#0E443B'],
    typography: 'Bricolage Grotesque · Plus Jakarta Sans',
    featured: true,
    stat: '38 Global',
    statLabel: 'Specialty cafe stockists onboarded'
  },
  {
    id: 'supernova-publishing',
    title: 'SUPERNOVA Issue 04',
    client: 'Supernova Creative Press',
    location: 'London, UK',
    year: '2025',
    category: 'Editorial & Poster',
    heroImage: ASSETS.editorialPoster,
    shortDescription: 'Avant-garde arts publication featuring radical typographic spreads and experimental foldouts.',
    fullStory: 'An editorial monograph dedicated to contemporary visual culture. We abandoned conventional margins to create dynamic visual breathing rooms, pairing oversized headline ligature treatments with micro-annotations and French-folded center spreads.',
    deliverables: [
      '184-Page Editorial Master Layout',
      'Screen-Printed Dust Jacket & Monograph',
      'Editorial Typography Pairing Rules',
      'Digital Reader Web Experience'
    ],
    palette: ['#141414', '#F6F3EE', '#FF3B1D'],
    typography: 'Syne · JetBrains Mono',
    featured: false,
    stat: '4,200',
    statLabel: 'Subscribers across 22 countries'
  },
  {
    id: 'monolith-atelier',
    title: 'MONOLITH Architecture Atelier',
    client: 'Monolith Practice',
    location: 'Berlin, Germany',
    year: '2024',
    category: 'Brand Identity',
    heroImage: ASSETS.brandIdentity,
    shortDescription: 'Monolithic identity and physical collateral for a brutalist architecture practice.',
    fullStory: 'Architects require an identity that honors spatial mass and structural honesty. We developed a typographic brand mark using extreme heavy geometric stems, blind embossing on concrete-toned cotton paper, and a laser-etched stainless steel scale ruler.',
    deliverables: [
      'Architectural Monogram & Wordmark',
      'Heavyweight Cotton Business Cards',
      'Project Submission Dossier Template',
      'Branded Stainless Steel Tools'
    ],
    palette: ['#18181A', '#DFDCD5', '#FF3B1D'],
    typography: 'Plus Jakarta Sans Bold · Space Mono',
    featured: false,
    stat: '100%',
    statLabel: 'Unanimous partner adoption'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Brand Identity & Systems',
    tagline: 'Distinctive visual DNA engineered to scale across touchpoints.',
    description: 'From initial strategic discovery and bespoke logomarks to modular typography guidelines, color architecture, and tactile physical collateral. I build cohesive visual systems that position brands ahead of industry peers.',
    deliverables: [
      'Strategic visual positioning',
      'Custom logomarks & dynamic monograms',
      'Comprehensive brand guidelines (PDF & Figma)',
      'Typography pairing & color palette logic',
      'Stationery, cards & corporate suites'
    ],
    tools: ['Adobe Illustrator', 'Figma', 'InDesign']
  },
  {
    number: '02',
    title: 'Packaging & Physical Goods',
    tagline: 'Shelf-commanding tactile experiences from die-line to press check.',
    description: 'Transforming products into objects of desire. I craft structural packaging die-lines, foil stamping, tactile embossing, bottle label systems, and custom box architecture that drive retail purchase decisions.',
    deliverables: [
      'Production-ready structural die-lines',
      'Cosmetics, beverage & luxury product labels',
      'Specialty finish specs (Foil, Spot UV, Emboss)',
      'High-fidelity 3D photorealistic mockups',
      'Print house press check supervision'
    ],
    tools: ['Illustrator', 'Dimension / C4D', 'Photoshop']
  },
  {
    number: '03',
    title: 'Editorial & Poster Typography',
    tagline: 'Experimental layouts and unapologetic typographic expression.',
    description: 'Bridging the mathematical discipline of Swiss modernism with contemporary visual culture. Posters, exhibition catalogs, vinyl records, book covers, and editorial spreads that turn text into visual sculpture.',
    deliverables: [
      'Exhibition & cultural event posters',
      'Editorial magazines & publication grids',
      'Album art & vinyl sleeve packaging',
      'Typographic art direction & custom ligatures',
      'Large format print pre-press files'
    ],
    tools: ['InDesign', 'Photoshop', 'FontForge']
  },
  {
    number: '04',
    title: 'Digital Art Direction & Social',
    tagline: 'High-impact visual campaigns and consistent motion graphics.',
    description: 'Extending brand identities into the kinetic digital sphere. Cohesive social design systems, product launch campaign kits, animated banners, and digital marketing assets that stop the infinite scroll.',
    deliverables: [
      'Product launch campaign visual kits',
      'Modular social media templates (Figma)',
      'Short-form kinetic typographic teasers',
      'Digital advertising & billboard collateral',
      'Art direction guidelines for photography'
    ],
    tools: ['Figma', 'After Effects', 'Photoshop']
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'Adobe Illustrator', category: 'Software', level: 'Mastery (98%)', description: 'Complex vector geometry, custom typography, print die-lines, and scalable identity systems.' },
  { name: 'Adobe Photoshop', category: 'Software', level: 'Mastery (95%)', description: 'Advanced image retouching, commercial product mockups, textures, and composite art.' },
  { name: 'Adobe InDesign', category: 'Software', level: 'Advanced (92%)', description: 'Multi-page editorial publications, master grids, typography style sheets, and print prep.' },
  { name: 'Figma', category: 'Software', level: 'Advanced (90%)', description: 'Interactive design systems, digital brand asset delivery, and cross-team collaboration.' },
  { name: 'After Effects & Motion', category: 'Software', level: 'Proficient (85%)', description: 'Kinetic typography, brand reveal stings, and animated campaign assets.' },
  { name: 'Cinema 4D / 3D Staging', category: 'Software', level: 'Proficient (82%)', description: '3D packaging staging, lighting, camera angles, and material rendering.' },
  { name: 'Swiss & Modernist Typography', category: 'Discipline', level: 'Core Expertise', description: 'Grid discipline, optical kerning, typographic hierarchy, and bespoke ligatures.' },
  { name: 'Print Production & Pre-Press', category: 'Production', level: 'Industry Standard', description: 'CMYK color separation, Pantone matching, die-lines, bleed, and foil/varnish plates.' },
  { name: 'Tactile Packaging Architecture', category: 'Discipline', level: 'Core Expertise', description: 'Rigid boxes, bottle wraps, label substrates, sustainability considerations.' },
  { name: 'Brand Strategy & Voice', category: 'Discipline', level: 'Strategic', description: 'Audience alignment, competitive visual auditing, and brand attribute mapping.' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Abdulmoeed possessed an uncanny ability to translate our abstract botanical research into physical packaging that customers literally refuse to throw away. Our retail sell-through jumped 340% within 90 days.",
    author: "Elena Lindqvist",
    role: "Founder & Creative Director",
    company: "Aethel Botanical Labs",
    project: "AETHEL Skincare Identity & Packaging",
    impact: "+340% retail sell-through"
  },
  {
    quote: "In the robotics space, most branding looks either cold or childish. Abdulmoeed crafted a brand identity system with such poise and architectural weight that our Series A investors singled out our pitch decks for praise.",
    author: "Marcus Chen",
    role: "Co-Founder & Chief Product Officer",
    company: "Kinetic Robotics",
    project: "KINETIC Motion Identity & Collateral",
    impact: "$14M Series A round"
  },
  {
    quote: "Working with Abdulmoeed is a breath of fresh air. His Swiss poster designs for our Zürich exhibition became instant collectors items. He understands typography on a structural, near-architectural level.",
    author: "Fabian Vögel",
    role: "Head Curator",
    company: "Kunsthaus Zürich Art Series",
    project: "ZÜRICH Modernism Poster Exhibition",
    impact: "Sold out limited edition run"
  }
];

export const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '45+', label: 'Visual Identities' },
  { value: '120+', label: 'Posters & Packaging' },
  { value: '99%', label: 'Client Approval' }
];
