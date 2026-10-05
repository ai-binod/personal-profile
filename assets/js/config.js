/**
 * ====================================================================
 * Binod Sthapit - AI Marketing Expert Portfolio
 * Central Configuration File
 * ====================================================================
 * Edit your details below. Changes in this file will automatically
 * update throughout the website wherever dynamic configuration is used.
 */

const SITE_CONFIG = {
  // Personal & Business Identity
  personal: {
    name: "Binod Sthapit",
    brandName: "Binod Sthapit",
    professionalTitle: "AI Marketing Expert",
    location: "Kathmandu, Nepal",
    email: "mail@binodsthapit.com.np",
    phone: "+977 9812345678",
    whatsapp: "+977 9812345678",
    
    // Brand Logo path (used in header navbar)
    logo: "assets/images/logo.png",
    // Brand Logo for dark background (used in footer)
    logoFooter: "assets/images/logo-footer.png",
    
    // Headshot / Profile photo path
    headshot: "assets/images/headshot.jpg",
    
    // Primary Consultation Booking Link (Google Calendar appointment scheduling)
    bookingUrl: "https://calendar.app.google/n4R95r7LdRjVfTHD9",

    // Social Profile Links
    // Leave empty ("") if not active. Inactive profiles will be omitted cleanly
    // rather than linking to broken or "#" placeholders.
    socialProfiles: {
      linkedin: "",   // e.g., "https://linkedin.com/in/binodsthapit"
      twitter: "",    // e.g., "https://x.com/binodsthapit"
      facebook: "",   // e.g., "https://facebook.com/binodsthapit"
      instagram: "",  // e.g., "https://instagram.com/binodsthapit"
      youtube: ""     // e.g., "https://youtube.com/@binodsthapit"
    }
  },

  // Core Positioning & Brand Messaging
  copy: {
    headline: "Scale Your Business with AI-Driven Digital Marketing Solutions",
    supportingMessage: "I help small and medium business owners attract the right customers, generate more leads, and increase sales through practical AI tools and proven digital marketing strategies.",
    primaryCtaText: "Book a Free Consultation Call",
    consultationOfferExplanation: "During your free consultation, I’ll analyze your business and create a customized digital marketing plan you can start implementing immediately."
  },

  // Contact Form Submission Integration
  // To receive contact form inquiries directly to your email, supply your endpoint below.
  // Recommended options:
  // 1. Formspree: "https://formspree.io/f/YOUR_FORM_ID"
  // 2. Web3Forms: "https://api.web3forms.com/submit" (include your access key in contact.html)
  // If left empty (""), the contact page will operate in honest local validation mode with clear instructions.
  contactForm: {
    endpoint: "", // e.g. "https://formspree.io/f/xvgowkze"
    receiverEmail: "mail@binodsthapit.com.np"
  },

  // Services Catalog
  services: [
    {
      id: "ai-marketing-strategy",
      title: "AI-Powered Digital Marketing Strategy",
      shortDescription: "Tailored strategic roadmaps integrating modern AI tools with proven digital channels for sustainable business growth.",
      challenges: "Unclear marketing direction, wasted advertising spend, disconnected tools, and slow campaign execution.",
      deliverables: [
        "Comprehensive market and competitor AI analysis",
        "Target customer persona profiling",
        "Channel-by-channel digital growth roadmap",
        "KPI measurement and tracking framework"
      ],
      benefits: "Clarity on where to spend marketing budget, reduced operational guesswork, and faster execution cycles."
    },
    {
      id: "social-media-content",
      title: "Social Media Marketing & Content Creation",
      shortDescription: "High-impact social media strategies powered by AI workflow tools to maintain consistent, brand-aligned presence.",
      challenges: "Irregular posting schedules, content burnout, low organic engagement, and limited team bandwidth.",
      deliverables: [
        "Monthly content calendar and thematic pillars",
        "AI-assisted copywriting and graphic asset workflows",
        "Audience engagement guidelines",
        "Performance reporting and trend insights"
      ],
      benefits: "Consistent brand visibility, saved content production hours, and stronger connection with target buyers."
    },
    {
      id: "seo-ai-content",
      title: "Search Engine Optimization & AI-Assisted Content Marketing",
      shortDescription: "Modern SEO practices combined with AI-assisted research to rank for high-intent search terms that drive buyers.",
      challenges: "Poor search rankings, invisible website traffic, expensive reliance solely on paid ads.",
      deliverables: [
        "Technical and on-page SEO audit",
        "High-intent keyword and search intent research",
        "AI-assisted topic clustering and editorial briefs",
        "Internal linking and schema markup setup"
      ],
      benefits: "Long-term organic traffic acquisition, lower customer acquisition costs, and higher domain authority."
    },
    {
      id: "paid-ads-management",
      title: "Paid Advertising Campaign Management",
      shortDescription: "Targeted advertising across Google, Meta, and LinkedIn with continuous testing and algorithmic optimization.",
      challenges: "Ad budget burning without qualified leads, high cost-per-click, poor ad copy testing.",
      deliverables: [
        "Campaign architecture and conversion tracking setup",
        "AI-assisted multi-variant ad copywriting and creatives",
        "Audience segmentation and retargeting funnels",
        "Weekly budget optimization and transparent reporting"
      ],
      benefits: "Predictable lead flow, lower cost per lead, and direct visibility into advertising return."
    },
    {
      id: "email-marketing-automation",
      title: "Email Marketing & Marketing Automation",
      shortDescription: "Automated nurturing sequences and customer journeys that turn cold inquiries into paying, repeat clients.",
      challenges: "Leads slipping through cracks, manual follow-ups that get delayed, low list engagement.",
      deliverables: [
        "Lead magnet onboarding sequences",
        "Automated multi-step nurture drip campaigns",
        "Customer segmentation and behavioral triggers",
        "Newsletter templates and hygiene management"
      ],
      benefits: "Automated revenue generation, zero missed lead follow-ups, and higher customer lifetime value."
    },
    {
      id: "lead-gen-cro",
      title: "Lead Generation & Conversion Optimization",
      shortDescription: "Transform website visitors into qualified appointments and sales through data-driven landing page optimization.",
      challenges: "High website traffic with few leads, confusing landing pages, high checkout or form abandonment.",
      deliverables: [
        "User journey friction audit and heatmap analysis",
        "High-converting landing page structure and copy",
        "Optimized inquiry forms and booking flows",
        "A/B testing implementation plan"
      ],
      benefits: "Higher percentage of visitors taking action, maximizing return on existing traffic."
    },
    {
      id: "ai-tools-consulting",
      title: "AI Tools Consulting & Implementation",
      shortDescription: "Practical guidance selecting, training, and deploying AI software into your business's day-to-day marketing workflows.",
      challenges: "Overwhelmed by AI hype, team not knowing which tools to use, fears of wasted software subscriptions.",
      deliverables: [
        "Marketing tech-stack audit and opportunity report",
        "Vetted AI tool selection (copy, image, CRM, automation)",
        "Custom prompt libraries tailored to your brand voice",
        "Team hands-on walkthroughs and SOP documentation"
      ],
      benefits: "Immediate efficiency gains, internal team empowerment, and avoidance of unnecessary tool costs."
    }
  ]
};

// Expose globally for both browser scripts and modules
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
