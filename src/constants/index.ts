// Site configuration constants
export const SITE_CONFIG = {
  name: 'Airmana',
  tagline: 'Breathe. Move. Connect. Transform.',
  description: 'Transform your mind, body & spirit at Airmana Bundaberg – holistic fitness, breathwork, meditation & dance classes to help you feel alive again',
  url: 'https://airmana.com.au',
  contact: {
    phone: '+61 413 428 182',
    email: 'info@airmana.com.au',
    address: '8 Electra Street, Bundaberg, Australia',
    mapUrl: 'https://maps.app.goo.gl/WxHD3qw6mBxAAYoW8'
  },
  social: {
    instagram: 'https://www.instagram.com/airmana_/?hl=en',
    facebook: 'https://www.facebook.com/airmanaenergy/'
  },
  booking: {
    url: 'https://passm8.com/airmana#upcoming-classes'
  }
} as const;

// Color scheme
export const COLORS = {
  primary: '#2c2e4d',
  accent: '#f05091',
  logoText: '#E9BDC7'
} as const;

// Services data
export const SERVICES = [
  {
    title: "Group Fitness",
    icon: "Zap",
    image: "/images/Group Fitness.webp",
    description: "Strength, conditioning, and movement training that builds both physical power and mental resilience.",
    benefits: ["Functional strength training", "Metabolic conditioning", "Movement mobility", "Community support"],
    cta: "Start Your Fitness Journey!"
  },
  {
    title: "Breathwork",
    icon: "Heart",
    image: "/images/breathwork.webp",
    description: "Guided breathing sessions for nervous system regulation, energy activation, and deep healing.",
    benefits: ["Stress & anxiety relief", "Enhanced energy levels", "Nervous system regulation", "Emotional release"],
    cta: "Experience Breathwork"
  },
  {
    title: "Martial Arts",
    icon: "Users",
    image: "/images/pauldancecop.webp",
    description: "Boxing and capoeira training that builds power, speed, and control.",
    benefits: ["Creative expression", "Emotional freedom", "Body confidence", "Community connection"],
    cta: "Move Your Soul"
  }
] as const;

// Schedule data
export const SCHEDULE = [
  { day: "Monday", classes: ["5:00am Group Fitness", "7:00am"] },
  { day: "Tuesday", classes: ["7:00am Group Fitness", "10:00am Group Fitness"] },
  { day: "Wednesday", classes: ["5:00am Group Fitness", "7:00am Group Fitness"] },
  { day: "Thursday", classes: ["5:00am Group Fitness", "6:00am Group Fitness", "7:00am Group Fitness"] },
  { day: "Friday", classes: ["6:00am Group Fitness", "7:00am Group Fitness", "10:00am Group Fitness"] },
] as const;