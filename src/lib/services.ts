export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "rooftop-farm-design-build",
    name: "Rooftop Farm Design & Build",
    tagline: "Turn dead roof space into a productive farm.",
    description:
      "Feasibility studies, structural coordination and full design–build of productive rooftop farms — from 1,000 sq ft green roofs to 40,000 sq ft market farms.",
    longDescription: [
      "A rooftop is one of the most underused pieces of real estate in any city. We design lightweight growing systems, coordinate structural and waterproofing reviews, and manage the build from first drawing to first harvest.",
      "Every design starts with sun, wind and weight-load analysis, then layers in irrigation, drainage and crop selection so your roof starts paying you back in produce from year one.",
    ],
    features: [
      "Structural & weight-load feasibility study",
      "Waterproofing and drainage coordination",
      "Lightweight raised-bed and tray systems",
      "Automated drip and drip-line irrigation",
      "Crop planning tuned to your climate",
      "Full construction management",
    ],
    icon: "Building2",
    image: "/images/service-rooftop.jpg",
    priceFrom: "$12,000",
  },
  {
    slug: "community-garden-planning",
    name: "Community Garden Planning",
    tagline: "Gardens that bring neighborhoods to life.",
    description:
      "Site selection, layout, plot systems, funding guidance and launch support for community gardens — from 20 plots to multi-acre food forests.",
    longDescription: [
      "Great community gardens start long before the first shovel of soil. We help you pick the right site, test the soil, lay out accessible plots and design water systems that volunteers can actually maintain.",
      "We also write the grants, plan the launch day and mentor your garden committee through the first two seasons — the period when most community gardens either take root or fizzle out.",
    ],
    features: [
      "Site assessment & soil testing",
      "Plot layout and accessibility design",
      "Water access and tool storage plans",
      "Grant and funding application support",
      "Volunteer launch-day programming",
      "Ongoing mentorship package",
    ],
    icon: "Users",
    image: "/images/service-community.jpg",
    priceFrom: "$3,500",
  },
  {
    slug: "greenhouse-high-tunnel-installation",
    name: "Greenhouse & High-Tunnel Installation",
    tagline: "Extend your season by months, every year.",
    description:
      "Siting, specification, procurement and installation of greenhouses, high tunnels and hoop houses sized for market growers, schools and restaurants.",
    longDescription: [
      "A well-sited greenhouse or high tunnel can extend your growing season by four to six months — and more than double your marketable yield. We handle siting, orientation, engineering and construction so the structure survives wind, snow and decades of use.",
      "We pair every structure with the right environmental controls: ventilation, shade, heating and irrigation, sized to your crops and your budget rather than a one-size-fits-all package.",
    ],
    features: [
      "Site prep & orientation planning",
      "Gutter, snow & wind-load engineering",
      "Heating, ventilation & shade systems",
      "Benching, irrigation & fertigation",
      "Permit & zoning navigation",
      "Winter season-extension programs",
    ],
    icon: "Tent",
    image: "/images/service-greenhouse.jpg",
    priceFrom: "$8,500",
  },
  {
    slug: "hydroponic-aquaponic-consulting",
    name: "Hydroponic & Aquaponic Consulting",
    tagline: "Grow more with less water — a lot less.",
    description:
      "System selection, design, installation oversight and grower training for NFT, deep-water culture, drip and aquaponic systems — indoors or under glass.",
    longDescription: [
      "Soil-free growing can produce 5–10x the yield per square foot of field farming while using a fraction of the water. We help you choose between NFT, deep-water culture, drip and aquaponic systems — and size them honestly to your market, not to a brochure.",
      "Beyond the hardware, we design your nutrient and water chemistry programs, train your crew, and stay on call for the troubleshooting that separates thriving systems from expensive shelves.",
    ],
    features: [
      "System type & scale analysis",
      "Nutrient & water chemistry programs",
      "LED lighting & climate design",
      "Pest management without harsh chemicals",
      "Grower & staff training",
      "Yield benchmarking & troubleshooting",
    ],
    icon: "Droplets",
    image: "/images/service-hydroponic.jpg",
    priceFrom: "$4,200",
  },
  {
    slug: "soil-health-compost-programs",
    name: "Soil Health & Compost Programs",
    tagline: "Healthy soil is the whole game.",
    description:
      "Soil testing, amendment plans, no-till bed systems and on-site compost programs that turn urban waste streams into black gold.",
    longDescription: [
      "Every great urban farm is built on soil that is alive. We run lab tests, build custom amendment plans, and set up no-till bed systems that keep your soil loose, fertile and full of biology season after season.",
      "We also design on-site compost and worm-casting programs that recycle your farm's own waste — and can connect you with neighborhood food-waste streams that turn a disposal cost into a fertility asset.",
    ],
    features: [
      "Lab soil tests & custom amendment plans",
      "Compost site design & bins",
      "Worm casting (vermicompost) systems",
      "Cover cropping & no-till bed prep",
      "Food-waste collection partnerships",
      "Seasonal soil health monitoring",
    ],
    icon: "Leaf",
    image: "/images/service-soil.jpg",
    priceFrom: "$1,800",
  },
  {
    slug: "farm-to-table-partnerships",
    name: "Farm-to-Table Partnerships",
    tagline: "Connect your harvest with the kitchens that want it.",
    description:
      "We broker and manage supply relationships between urban farms and restaurants, grocers and food hubs — contracts, logistics and menu storytelling included.",
    longDescription: [
      "Growing the food is only half the job — selling it is where most urban farms stall. We build the relationships, negotiate the contracts and run the logistics that keep your harvest moving to chefs and grocers who value it.",
      "We also help you tell the story: provenance notes, farm visits and menu features that let restaurants charge a premium for food grown on their own city's rooftops.",
    ],
    features: [
      "Chef & buyer relationship building",
      "Harvest forecasting & order management",
      "Logistics & cold-chain coordination",
      "Menu & provenance storytelling",
      "Pricing & contract negotiation",
      "Food-safety & traceability systems",
    ],
    icon: "UtensilsCrossed",
    image: "/images/service-farmtable.jpg",
    priceFrom: "$2,900",
  },
  {
    slug: "urban-farm-operations-management",
    name: "Urban Farm Operations & Management",
    tagline: "We run the farm so you can run your business.",
    description:
      "Full or part-time operations management: planting calendars, staff training, harvest logistics, sales and financial reporting for working urban farms.",
    longDescription: [
      "Many of our clients are property owners, chefs and non-profits who want a farm without becoming full-time farmers. We manage the whole operation — planting calendars, crew training, irrigation maintenance, harvest logistics and sales.",
      "You get a farm that runs like a business: monthly yield reports, real budgets and a crew that shows up. Start with a few visits a month or hand us the whole operation — the choice is yours.",
    ],
    features: [
      "Seasonal planting & harvest calendars",
      "Staff hiring & crew training",
      "Irrigation & fertility maintenance",
      "Sales, CSA & market management",
      "Budgeting & yield reporting",
      "Monthly site visits & remote support",
    ],
    icon: "ClipboardCheck",
    image: "/images/service-ops.jpg",
    priceFrom: "$1,500/mo",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "downtown-harvest-rooftop",
    title: "Downtown Harvest — 12,000 sq ft Rooftop Farm",
    location: "Riverside Tower, Portland",
    category: "Rooftop Farm",
    summary:
      "A barren 1960s office-tower roof became one of the region's largest commercial rooftop farms, supplying the building's restaurant and a 200-member CSA.",
    details: [
      "Structural review confirmed the roof could carry a lightweight tray system with zero structural retrofit.",
      "Installed 240 raised beds, 2 miles of drip line and a 10,000-gallon rainwater catchment.",
      "First harvest 11 weeks after planting — 40+ crop varieties in year one.",
    ],
    image: "/images/project-downtown.jpg",
    stats: [
      { label: "Area", value: "12,000 sq ft" },
      { label: "Crops", value: "40+" },
      { label: "To first harvest", value: "11 wks" },
    ],
  },
  {
    slug: "greenway-elementary",
    title: "Greenway Elementary — Learning Garden & Greenhouse",
    location: "Greenway School District",
    category: "Community Garden",
    summary:
      "A 25-bed teaching garden and 500 sq ft greenhouse turned an unused schoolyard into an outdoor classroom for 320 students.",
    details: [
      "Laid out beds and paths for wheelchairs and strollers — every plot reachable by every student.",
      "Built a 500 sq ft greenhouse with a rainwater system and kid-height benches.",
      "Trained 14 teachers and ran a launch-day planting workshop for all 320 students.",
    ],
    image: "/images/project-school.jpg",
    stats: [
      { label: "Beds", value: "25" },
      { label: "Students", value: "320" },
      { label: "Greenhouse", value: "500 sq ft" },
    ],
  },
  {
    slug: "riverside-food-hub",
    title: "Riverside Food Hub — 60-Plot Community Garden Network",
    location: "Riverside Neighborhood",
    category: "Community Garden",
    summary:
      "A vacant city lot became a 60-plot community garden feeding 150 families, with a food-hub distribution point and weekly market.",
    details: [
      "Remediated and tested the soil, then built 60 accessible raised plots with shared water stations.",
      "Designed a food-hub distribution point that connects 8 neighborhood growers with a weekly market.",
      "Year one produced 4.5 tons of produce for 150 registered families.",
    ],
    image: "/images/project-community.jpg",
    stats: [
      { label: "Plots", value: "60" },
      { label: "Families", value: "150" },
      { label: "Year-1 yield", value: "4.5 tons" },
    ],
  },
  {
    slug: "skyfarm-restaurant-group",
    title: "SkyFarm — Hydroponic Containers for a Restaurant Group",
    location: "Downtown Food District",
    category: "Hydroponics",
    summary:
      "Two refurbished shipping containers grow 9,000 plants a year of salad greens and herbs for a four-restaurant group, using 92% less water than field farming.",
    details: [
      "Retrofitted two 40 ft shipping containers with LED lighting, NFT systems and climate control.",
      "Trained the group's sous chefs to manage harvests on a twice-weekly schedule.",
      "Greens travel 2 miles from container to plate — picked and served the same day.",
    ],
    image: "/images/project-foodhub.jpg",
    stats: [
      { label: "Plants/yr", value: "9,000" },
      { label: "Water saved", value: "92%" },
      { label: "Restaurants", value: "4" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "CityHarvest turned our bare office roof into a farm that feeds our café and 200 CSA members. They handled the structural engineers, the build and the first two seasons of crop planning. Genuinely turnkey.",
    name: "Elena Vasquez",
    role: "Property Director, Riverside Tower",
    rating: 5,
  },
  {
    quote:
      "Our school garden went from a dream to 25 beds and a greenhouse in one summer. The launch-day workshop with the kids was the best part — they are wonderful with children.",
    name: "Marcus Boyd",
    role: "Principal, Greenway Elementary",
    rating: 5,
  },
  {
    quote:
      "The hydroponic container system they designed pays for itself with what we save on salad greens. Ninety-two percent less water, year-round harvests, and the greens are the best in our group.",
    name: "Priya Nair",
    role: "Executive Chef, SkyFarm Group",
    rating: 5,
  },
  {
    quote:
      "They wrote our grant, laid out the plots and coached our volunteers through the first season. Two years in, our garden has a waiting list.",
    name: "Tom Whitfield",
    role: "Board Chair, Riverside Community Garden",
    rating: 5,
  },
  {
    quote:
      "As a new urban farmer I needed someone to run operations while I learned the craft. Their management package kept us profitable from season one.",
    name: "Aisha Cole",
    role: "Founder, BrightLeaf Farms",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How much does a rooftop farm cost?",
    answer:
      "Smaller installations start around $12,000; commercial rooftops typically run $25–$60 per square foot including structural review, irrigation and planting. After a site walkthrough we give you a firm written proposal.",
  },
  {
    question: "Do I need special permission to farm on my roof?",
    answer:
      "Usually yes, and we handle it for you — zoning, permits and structural engineer coordination are all part of our design–build service. Many cities offer density bonuses or tax abatements for green roofs, which we flag in your feasibility report.",
  },
  {
    question: "How much food can an urban farm actually grow?",
    answer:
      "A well-run 2,000 sq ft rooftop can produce 300–500 lbs of produce per month in peak season. With hydroponics, yields per square foot are typically 5–10x field farming.",
  },
  {
    question: "Can you take over operations of an existing farm?",
    answer:
      "Yes. Our operations management service covers planting calendars, crew training, irrigation maintenance and sales for working farms — from a few beds to several acres, part-time or full-time.",
  },
  {
    question: "Do you work with schools and non-profits?",
    answer:
      "We do, and we price accordingly. Community garden planning starts at $3,500, and we help non-profits find grants that cover our fees — we have written over $2M in successful applications.",
  },
  {
    question: "What do you need to get started?",
    answer:
      "Photos of your space, rough dimensions and your goals are enough for a first conversation. From there we schedule a site walkthrough — typically within a week — and you get a written proposal within days after.",
  },
];
