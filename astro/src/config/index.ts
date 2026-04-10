import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jennette Tweddle – Product Designer",
  author: "Jennette Tweddle",
  description:
    "Product Designed based in Toronto, Canada. I design experience that have impact.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jennette Tweddle",
    specialty: "Product Designer",
    summary:
      "Product Designed based in Toronto, Canada. I design experience that have impact",
    email: "jennette.tweddle@gmail.com",
  },
  experience: [
    {
      company: "Jobber",
      position: "Senior Product Designer",
      startDate: "October 2025",
      endDate: "Current",
      summary: [
        "Point 1",
        "Point 2",
        "Point 3"
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Jennette, a seasoned product designer who build 0-1 products in dynamic start-up environments. I thrive in collaboration and I am passionate about turning ideas into meaningful, scalable solutions. I lead design initiatives that blend creativity with strategic insight, delivering products with measurable value to consumers and businesses.`,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
