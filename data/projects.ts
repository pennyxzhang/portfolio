export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tools: string[];
  tags: string[];
  year: string;
  behanceUrl: string;
  accentColor: string;
  overview: string;
  problem: string;
  outcome: string;
  client?: string;
  coverImage?: string;
  coverImagePosition?: string;
  thumbnailImage?: string;
  processImages?: string[];
  processBackground?: string;
  liveUrls?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "xag-australia",
    title: "XAG Australia",
    subtitle: "Web Experience Design · Hybrid Conversion System",
    description: "Designing a scalable web system that supports product discovery, pricing decisions, and sales conversion for a high-value agricultural drone brand.",
    role: "UX/UI Design, Information Architecture, Web Design",
    tools: ["Shopify", "Webflow"],
    tags: ["Web Design", "E-commerce", "Conversion"],
    year: "2024",
    behanceUrl: "",
    accentColor: "#0A0A0A",
    client: "XAG Australia",
    coverImage: "/images/XAG/XAG%20Australia_hero.png",
    thumbnailImage: "/images/XAG/XAG%20Australia_hero.png",
    processImages: [
      "/images/XAG/XAG%20Australia_1.png",
      "/images/XAG/XAG%20Australia_2.png",
      "/images/XAG/XAG%20Australia_3.png",
      "/images/XAG/XAG%20Australia_4.png",
      "/images/XAG/XAG%20Australia_5.png",
      "/images/XAG/XAG%20Australia_6.png",
    ],
    liveUrls: [
      { label: "xag-au.com", url: "https://xag-au.com" },
      { label: "shop.xag-au.com", url: "https://shop.xag-au.com" },
    ],
    overview:
      "XAG Australia sells high-value agricultural drone solutions. Purchasing is complex, involves multiple considerations, and rarely happens through a standard e-commerce flow. I redesigned the web experience to better support customers at every stage of their decision-making journey.",
    problem:
      "The existing website did not reflect how customers actually make decisions — complex product information, a non-linear purchase journey, and heavy reliance on offline sales meant the site was failing at conversion.",
    outcome:
      "The new web experience better aligns with how customers actually make decisions — improving clarity, reducing friction, and enabling more confident purchasing.",
  },
  {
    slug: "nectr-crm",
    title: "Nectr CRM System",
    subtitle: "Energy Retailer · CRM Redesign",
    client: "Nectr Energy",
    description:
      "Redesigned Nectr's internal CRM during a full brand refresh — modernising the experience for customer service agents without disrupting existing workflows.",
    role: "Lead UX Designer",
    tools: ["Adobe XD"],
    tags: ["CRM", "Enterprise UX", "Branding", "B2B"],
    year: "2023",
    behanceUrl: "https://www.behance.net/gallery/191473599/CRM-System-Energy-Retailer",
    accentColor: "#FFE000",
    coverImage: "/images/Nectr/nectr-cover.png",
    processImages: [
      "/images/Nectr/nectr-process-1.webp",
      "/images/Nectr/nectr-process-2.webp",
      "/images/Nectr/nectr-process-3.png",
      "/images/Nectr/nectr-process-4.png",
      "/images/Nectr/nectr-process-5.png",
      "/images/Nectr/nectr-process-6.webp",
      "/images/Nectr/nectr-process-7.webp",
      "/images/Nectr/nectr-process-8.png",
      "/images/Nectr/nectr-process-9.webp",
      "/images/Nectr/nectr-process-10.png",
      "/images/Nectr/nectr-process-11.png",
    ],
    overview:
      "Nectr is an Australian energy retailer undergoing a full brand refresh. As the lead UX designer, I was responsible for redesigning the internal CRM system to align with the new brand guidelines while dramatically improving usability for customer service teams.",
    problem:
      "The existing CRM was visually outdated and misaligned with the evolving Nectr brand. Customer service agents found it unintuitive, leading to slow resolution times and a frustrating daily workflow. The challenge was to modernise the experience without disrupting existing workflows.",
    outcome:
      "A fully redesigned CRM interface that adheres to Nectr's new brand system — cleaner information hierarchy, improved navigation patterns, and a consistent visual language that empowers agents to work faster and more confidently.",
  },
  {
    slug: "litter-assistant",
    title: "Litter Assistant",
    subtitle: "MADA Course · UX Research & Product Design",
    client: "MADA",
    description:
      "A research-led product design concept that turns litter care from a reactive chore into a proactive, sensor-driven experience for cat owners.",
    role: "Lead Product Designer",
    tools: ["Sketch", "C4D", "Adobe Illustrator"],
    tags: ["User Research", "Product Design", "MADA", "Consumer"],
    year: "2023",
    behanceUrl: "https://www.behance.net/gallery/190835667/Litter-Assistant",
    accentColor: "#0A0A0A",
    coverImage: "/images/Litter%20Assistant/New/Litter_Assistant_process_hero.png",
    processImages: [
      "/images/Litter%20Assistant/New/Litter_Assistant_process_1.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_2.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_3.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_4.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_5.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_6.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_7.png",
      "/images/Litter%20Assistant/New/Litter_Assistant_process_8.png",
    ],
    overview:
      "A MADA course project driven by genuine passion. As a cat owner, I approached litter management from the inside out — conducting deep user research to uncover the real frustrations behind an everyday task that is rarely talked about but universally experienced by pet owners.",
    problem:
      "Cat owners often deal with litter management as a chore with no smart solution that fits seamlessly into their lifestyle. The challenge was to understand the user's emotional and practical relationship with litter care, and design a product experience that feels considered and effortless.",
    outcome:
      "This solution shifts litter care from reactive cleaning to proactive maintenance. By turning invisible conditions into actionable signals, it improves consistency, reduces user effort, and enables early awareness of potential health issues.",
  },
  {
    slug: "ahrend-iot",
    title: "Ahrend IoT Furniture App",
    subtitle: "CHECK-IT Programme · IoT Smart Office",
    client: "Ahrend",
    description:
      "Designed the app connecting Ahrend's IoT smart furniture to its users — bridging physical environments and digital control for the modern workplace.",
    role: "Researcher & UI/UX Designer",
    tools: ["Sketch", "C4D", "Adobe Illustrator"],
    tags: ["IoT", "Mobile App", "International Collaboration", "Office"],
    year: "2022",
    behanceUrl: "https://www.behance.net/gallery/190835123/Ahrend",
    accentColor: "#0A0A0A",
    coverImage: "/images/Ahrend/Ahrend_hero.png",
    coverImagePosition: "right",
    thumbnailImage: "/images/Ahrend/Ahrend_1.png",
    processBackground: "#FAFBFC",
    processImages: [
      "/images/Ahrend/Ahrend_2.png",
      "/images/Ahrend/Ahrend_3.png",
      "/images/Ahrend/Ahrend_4.png",
      "/images/Ahrend/Ahrend_5.png",
      "/images/Ahrend/Ahrend_6.png",
      "/images/Ahrend/Ahrend_7.png",
      "/images/Ahrend/Ahrend_8.gif",
      "/images/Ahrend/Ahrend_9.gif",
      "/images/Ahrend/Ahrend_10.gif",
    ],
    overview:
      "An international collaboration between Chinese and Dutch students through the CHECK-IT programme at Xiamen University. Working with Ahrend — a leading Dutch office furniture brand — our team designed an app that brings IoT intelligence to the modern office environment.",
    problem:
      "Office workers often lack visibility and control over their physical workspace environment. Ahrend wanted to explore how their smart furniture could be managed through a connected app experience, creating a more personalised and efficient office life.",
    outcome:
      "A complete high-fidelity prototype of the Ahrend IoT app — covering onboarding, device pairing, environment control, and personalisation features — along with user flows and 3D visualisations of connected furniture interactions.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
