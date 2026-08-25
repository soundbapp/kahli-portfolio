export const SITE = {
  name: "Kahli Abdu",
  initials: "KA",
  email: "annasabdu109@gmail.com",
  location: "Dallas",
  eyebrow: "COLLECTION '26",
  description:
    "Founder and builder spanning broadcast production, AI engineering, and creative direction — shipping live products with a documented production track record behind every claim.",
  roles: ["Producer", "Creative", "Fullstack", "Founder"] as const,
  socials: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kahliabdu" },
    { label: "Dribbble", href: "#" },
    { label: "GitHub", href: "#" },
  ],
}

export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"

export const PROJECTS = [
  {
    title: "Africa Economic Forum",
    subtitle: "Conference packaging",
    description:
      "High-level convening of global policymakers and business leaders at GW — raw conference source cut into finished, platform-ready packages for VOA Africa.",
    href: "https://www.voaafrica.com/a/leaders-convene-at-gw-to-discuss-economic-strategies-for-africa/7592568.html",
    image: "/explorations/01-africa-economic-forum.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Chris Fenton Interview",
    subtitle: "Interview package",
    description:
      "One-on-one conversation with Hollywood executive Chris Fenton — sit-down source shaped into a timed, branded interview package.",
    href: "https://www.voaafrica.com/a/feeding-the-dragon-hollywood-executive-chris-fenton-s-experiences-and-insights-on-dealing-with-china-in-the-entertainment-industry-/7327959.html",
    image: "/explorations/02-chris-fenton-interview.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Frame of Hope",
    subtitle: "Documentary",
    description:
      "Trailblazer — longform documentary storytelling produced for national broadcast.",
    href: "https://www.youtube.com/watch?v=1S7_ira6fAo&t=15s",
    image: "/thumbs/frame-of-hope.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Motion Explainers",
    subtitle: "Broadcast & motion",
    description:
      "Policy and civic explainers — the end of the American penny, global tariffs — motion design finished for national audiences.",
    href: "https://www.youtube.com/watch?v=45YwevkKuD8",
    image: "/thumbs/penny.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
]

export const JOURNAL = [
  {
    title: "Building multi-agent AI that survives production",
    image: "/journal/01-multi-agent.jpg",
    readTime: "6 min",
    date: "2025",
    href: "https://decodebars.com",
  },
  {
    title: "From broadcast floors to shipping SaaS solo",
    image: "/journal/02-broadcast-saas.jpg",
    readTime: "5 min",
    date: "2024",
    href: "https://mockmapr.com",
  },
  {
    title: "Two patents, one game — design meets invention",
    image: "/journal/03-patents-game.jpg",
    readTime: "4 min",
    date: "Nov 2024",
    href: "https://patents.google.com/patent/USD1051685S1",
  },
  {
    title: "Databricks-accredited GenAI architecture & governance",
    image: "/journal/04-databricks-genai.jpg",
    readTime: "3 min",
    date: "2025",
    href: "#resume",
  },
]

export const EXPLORATIONS = [
  {
    title: "Africa Economic Forum",
    image: "/explorations/01-africa-economic-forum.jpg",
    href: "https://www.voaafrica.com/a/leaders-convene-at-gw-to-discuss-economic-strategies-for-africa/7592568.html",
  },
  {
    title: "Chris Fenton Interview",
    image: "/explorations/02-chris-fenton-interview.jpg",
    href: "https://www.voaafrica.com/a/feeding-the-dragon-hollywood-executive-chris-fenton-s-experiences-and-insights-on-dealing-with-china-in-the-entertainment-industry-/7327959.html",
  },
  {
    title: "Kenya UBI Story",
    image: "/explorations/03-kenya-ubi-kogutu.jpg",
    href: "https://www.voaafrica.com/a/filmmakers-document-the-impact-of-kenya-s-universal-basic-income-in-kogutu-/7300206.html",
  },
  {
    title: "Fashion on Wheels",
    image: "/explorations/04-fashion-on-wheels.jpg",
    href: "https://www.voaafrica.com/a/new-york-based-entrepreneur-turns-barber-shop-into-trendy-fashion-store-on-wheels/7902678.html",
  },
  {
    title: "End of the Penny",
    image: "/thumbs/penny.jpg",
    href: "https://www.youtube.com/watch?v=45YwevkKuD8",
  },
  {
    title: "Global Tariffs Motion",
    image: "/thumbs/tariffs.jpg",
    href: "https://www.youtube.com/watch?v=I78isOXAzO4",
  },
]

export const STATS = [
  { value: "17+", label: "Years Experience" },
  { value: "5+", label: "Live Products" },
  { value: "2", label: "U.S. Patents" },
]
