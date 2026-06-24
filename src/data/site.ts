export interface WebsiteProject {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export function getLatestWebsite(): WebsiteProject {
  return websites[websites.length - 1];
}

export const websites: WebsiteProject[] = [
  {
    id: "dentist-lab",
    title: "Dentist Lab",
    description:
      "A polished business website for a dental laboratory — clean layout, trust-focused design, and seamless client experience.",
    url: "https://dentistlab.odoo.com",
    tags: ["Odoo", "Business", "Healthcare"],
  },
  {
    id: "sparkle-home-cleaning",
    title: "Sparkle Home Cleaning",
    description:
      "A professional cleaning services website with transparent pricing, before/after showcases, and conversion-focused booking flows.",
    url: "https://sparklehomecleaning.vercel.app/",
    tags: ["Landing Page", "Business", "Services"],
  },
];

export const clientLogos = [
  "Nike",
  "Adobe",
  "Shopify",
  "Notion",
  "OpenAI",
  "HubSpot",
  "Canva",
  "Tesla",
];

export const testimonials = [
  {
    name: "Akash",
    text: "Harish delivered a website that looks cinematic and converts. Our bounce rate dropped immediately.",
    avatar: "A",
  },
  {
    name: "Prachi",
    text: "Fast turnaround, unlimited revisions, and a final product that feels premium. Highly recommend.",
    avatar: "P",
  },
  {
    name: "Satwik",
    text: "The vibe-coded aesthetic is exactly what our brand needed. Clients keep complimenting the site.",
    avatar: "S",
  },
  {
    name: "Vishal Dake",
    text: "Harish built a stellar portfolio landing page that helped us close high-ticket clients. Truly game-changing.",
    avatar: "V",
  },
  {
    name: "Dhruvil Patel",
    text: "Highly recommend Harish for premium, high-converting landing pages. The animations and speed are unmatched.",
    avatar: "D",
  },
  {
    name: "Riya",
    text: "From concept to launch in days. Professional, responsive, and obsessed with detail.",
    avatar: "R",
  },
  {
    name: "Vikram",
    text: "Best investment we made for our online presence. The site speaks for itself.",
    avatar: "V",
  },
  {
    name: "Neha",
    text: "Smooth process, clear communication, and a portfolio-worthy result every time.",
    avatar: "N",
  },
];

export const services = [
  {
    title: "Professional Website Design",
    description:
      "Cinematic, conversion-focused websites that make your brand impossible to ignore.",
    icon: "layout",
  },
  {
    title: "Local Web Development",
    description:
      "Fast, reliable builds tailored for local businesses ready to dominate their market.",
    icon: "code",
  },
  {
    title: "Web Designs",
    description:
      "Custom visual systems, landing pages, and marketing sites with premium polish.",
    icon: "palette",
  },
];

export const faqs = [
  {
    question: "How long does a project take?",
    answer: "3–4 Days",
  },
  {
    question: "How many revisions are included?",
    answer: "Unlimited",
  },
  {
    question: "What are your pricing models?",
    answer: "Contact for This",
  },
];

export const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Years Experience", value: 4, suffix: "+" },
];
