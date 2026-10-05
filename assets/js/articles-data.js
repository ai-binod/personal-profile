/**
 * ====================================================================
 * Binod Sthapit - Articles Data Store
 * ====================================================================
 * Contains metadata and details for all published articles.
 * Add new articles to this array or edit existing items.
 */

const BLOG_ARTICLES = [
  {
    id: "7-ai-tools-every-small-business-owner-should-use-in-2026",
    title: "7 AI Tools Every Small Business Owner Should Use in 2026",
    slug: "article-7-ai-tools-every-small-business-owner-should-use-in-2026.html",
    markdownSource: "articles/7-ai-tools-every-small-business-owner-should-use-in-2026.md",
    category: "AI Strategy",
    date: "2026-10-02",
    formattedDate: "October 2, 2026",
    readTime: "6 min read",
    author: "Binod Sthapit",
    isStarterContent: false,
    excerpt: "Artificial intelligence is no longer reserved for Fortune 500 tech giants. Here are the 7 battle-tested AI tools that allow SME owners to automate marketing, close more sales, and save 15+ hours weekly.",
    tags: ["AI Strategy", "AI Tools", "Small Business", "Automation", "Productivity"]
  },
  {
    id: "how-to-get-more-customers-from-facebook-and-instagram",
    title: "How to Get More Customers from Facebook & Instagram Without Wasting Money on Ads",
    slug: "article-how-to-get-more-customers-from-facebook-and-instagram.html",
    markdownSource: "articles/how-to-get-more-customers-from-facebook-and-instagram.md",
    category: "Content & Social",
    date: "2026-10-02",
    formattedDate: "October 2, 2026",
    readTime: "5 min read",
    author: "Binod Sthapit",
    isStarterContent: false,
    excerpt: "Tired of clicking 'Boost Post' only to watch your budget evaporate? Learn the proven direct-response framework that turns social media scrollers into paying in-store and online clients with high-converting DM funnels.",
    tags: ["Content & Social", "Social Media", "Meta Ads", "Lead Generation", "Direct Response"]
  },
  {
    id: "how-small-businesses-can-get-started-with-ai-marketing",
    title: "How Small Businesses Can Get Started with AI Marketing",
    slug: "article-small-business-ai.html",
    markdownSource: "articles/small-business-ai-marketing.md",
    category: "AI Strategy",
    date: "2026-10-02",
    formattedDate: "October 2, 2026",
    readTime: "5 min read",
    author: "Binod Sthapit",
    isStarterContent: true,
    excerpt: "A practical, non-technical roadmap for small business owners looking to leverage artificial intelligence in their marketing without getting lost in hype or complex tools.",
    tags: ["AI Strategy", "Small Business", "Workflows", "Productivity"]
  },
  {
    id: "how-to-build-a-digital-marketing-plan-for-your-business",
    title: "How to Build a Digital Marketing Plan for Your Business",
    slug: "article-digital-marketing-plan.html",
    markdownSource: "articles/digital-marketing-plan-guide.md",
    category: "Digital Planning",
    date: "2026-10-02",
    formattedDate: "October 2, 2026",
    readTime: "6 min read",
    author: "Binod Sthapit",
    isStarterContent: true,
    excerpt: "A structured, pragmatic guide to creating an actionable digital marketing plan that aligns your channels, messaging, and budget with genuine business growth.",
    tags: ["Digital Planning", "Lead Generation", "Strategy", "ROI"]
  },
  {
    id: "using-ai-to-save-time-on-social-media-content",
    title: "Using AI to Save Time on Social Media Content",
    slug: "article-ai-social-media.html",
    markdownSource: "articles/ai-social-media-content.md",
    category: "Content & Social",
    date: "2026-10-02",
    formattedDate: "October 2, 2026",
    readTime: "5 min read",
    author: "Binod Sthapit",
    isStarterContent: true,
    excerpt: "How small businesses can reclaim hours each week by using AI for content ideation, structuring, and repurposing while maintaining an authentic brand voice.",
    tags: ["Content & Social", "Automation", "Social Media", "Brand Voice"]
  }
];

if (typeof window !== "undefined") {
  window.BLOG_ARTICLES = BLOG_ARTICLES;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = BLOG_ARTICLES;
}
