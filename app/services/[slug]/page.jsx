"use client"

import { useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";
import { FaCheck, FaArrowRight, FaStar, FaQuoteLeft} from "react-icons/fa"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const services = [
  // 1. Web Apps
  {
    id: 1,
    slug: "web-apps",
    title: "Web Apps",
    subtitle: "High-Performance Digital Solutions",
    description: "Build scalable, high-performance web applications optimized for SEO and speed.",
    icon: "FaCode",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760973982/webdev_wbehed.avif",
    details: {
      fullDescription:
        "Our web app development services deliver lightning-fast, secure, and scalable solutions. We specialize in Next.js, React, and modern architectures that ensure seamless performance and outstanding UX across all devices.",
      features: [
        "SEO-optimized and blazing fast",
        "Fully responsive design",
        "Next.js & React architecture",
        "API-first integrations",
        "Secure authentication systems",
        "Performance tuning & caching",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      process: ["Discovery", "Design", "Development", "Testing", "Deployment", "Maintenance"],
      caseStudies: [
        { title: "Analytics SaaS Platform", result: "95 Lighthouse score", metric: "Performance" },
        { title: "E-learning Portal", result: "1M+ active users", metric: "Scalability" },
        { title: "Corporate Website", result: "SEO traffic +220%", metric: "Growth" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "Top-Tier Performance",
          description: "Deliver apps with sub-second load times for a seamless user experience.",
        },
        {
          icon: "FaUsers",
          title: "Scalable & Secure",
          description: "Built to grow with your business, from MVP to enterprise scale.",
        },
        {
          icon: "FaLightbulb",
          title: "Future-Ready",
          description: "Using cutting-edge frameworks and cloud-native deployments.",
        },
      ],
      roi: [
        { metric: "Load Speed", value: "0.9s", description: "Optimized Lighthouse performance" },
        { metric: "Retention", value: "+160%", description: "Improved user engagement" },
        { metric: "Revenue Growth", value: "+200%", description: "SEO-driven traffic" },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc",
          content:
            "Our web app became a core growth engine for the company. The performance and SEO optimization are world-class.",
          rating: 5,
        },
        {
          name: "David Kim",
          role: "CTO, Growthify",
          content:
            "Exceptional experience—clean code, scalable design, and measurable results from day one.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Express", "REST/GraphQL", "Authentication"] },
        { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
        { category: "Deployment", items: ["Vercel", "AWS", "Docker", "CI/CD Pipelines"] },
      ],
    },
  },

  // 2. Shopify Stores
  {
    id: 2,
    slug: "shopify-stores",
    title: "Shopify Stores",
    subtitle: "Custom E-commerce Experiences",
    description: "Launch high-converting, beautifully designed Shopify stores tailored to your brand.",
    icon: "FaShopify",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760973884/shopify_20stores_1cb40842-dab6-4920-a234-4da36e79fc8a_mqwdfx.webp",
    details: {
      fullDescription:
        "We build stunning, conversion-focused Shopify stores that elevate your brand and boost sales. From custom themes to advanced integrations, we deliver stores that perform beautifully and sell effortlessly.",
      features: [
        "Custom Shopify theme design",
        "Speed optimization & SEO setup",
        "App integrations & automation",
        "Payment gateway configuration",
        "Conversion tracking & analytics",
        "Ongoing support & scaling",
      ],
      technologies: ["Shopify", "Liquid", "React", "Hydrogen", "Shopify Plus", "Stripe"],
      process: ["Strategy", "Design", "Development", "Testing", "Launch", "Optimization"],
      caseStudies: [
        { title: "Luxury Apparel Brand", result: "+180% sales growth", metric: "Revenue" },
        { title: "Beauty & Skincare Store", result: "3x conversion rate", metric: "Conversion" },
        { title: "Dropshipping Store", result: "Automated 90% of operations", metric: "Efficiency" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "Optimized for Sales",
          description: "Boost conversions with optimized UX and data-driven design.",
        },
        {
          icon: "FaUsers",
          title: "Custom Branding",
          description: "Tailored themes that perfectly reflect your brand’s identity.",
        },
        {
          icon: "FaLightbulb",
          title: "Seamless Integrations",
          description: "Connect CRMs, analytics, and marketing tools for maximum performance.",
        },
      ],
      roi: [
        { metric: "Sales Increase", value: "+180%", description: "After relaunch" },
        { metric: "Conversion Rate", value: "+250%", description: "Optimized checkout" },
        { metric: "Customer Retention", value: "+130%", description: "Personalized experience" },
      ],
      testimonials: [
        {
          name: "Jessica Wong",
          role: "Founder, Glowify",
          content:
            "They built a Shopify store that doubled our conversions. The attention to detail and speed were impressive.",
          rating: 5,
        },
        {
          name: "Ryan Patel",
          role: "CEO, LuxeCraft",
          content:
            "Our brand has never looked better online. Every pixel and interaction feels premium.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "Platform", items: ["Shopify", "Shopify Plus", "Hydrogen", "Liquid"] },
        { category: "Integrations", items: ["Klaviyo", "Meta Ads", "Google Analytics", "Hotjar"] },
        { category: "Payments", items: ["Stripe", "Shopify Payments", "PayPal"] },
        { category: "Automation", items: ["Shopify Flow", "Zapier", "Omnisend"] },
      ],
    },
  },

  // 3. WordPress Websites
  {
    id: 3,
    slug: "wordpress-websites",
    title: "WordPress Websites",
    subtitle: "Flexible & Manageable CMS Solutions",
    description: "Beautiful, SEO-ready WordPress websites with easy content control and performance optimization.",
    icon: "FaWordpress",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974034/what-is-wordpress_jgzhas.png",
    details: {
      fullDescription:
        "We craft stunning, high-performance WordPress websites tailored to your brand and goals. Whether corporate, blog, or portfolio — our sites are secure, scalable, and simple to manage.",
      features: [
        "Custom WordPress theme development",
        "SEO optimization & analytics setup",
        "WooCommerce store integration",
        "Speed & performance tuning",
        "Security hardening & backups",
        "Content training & support",
      ],
      technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL", "Yoast SEO"],
      process: ["Discovery", "Wireframing", "Development", "QA", "Launch", "Training"],
      caseStudies: [
        { title: "Corporate Website", result: "+200% organic traffic", metric: "SEO" },
        { title: "Portfolio Website", result: "3x more client inquiries", metric: "Leads" },
        { title: "News Portal", result: "200K+ readers monthly", metric: "Engagement" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "SEO-First Approach",
          description: "Rank faster with our structured data and keyword-optimized builds.",
        },
        {
          icon: "FaUsers",
          title: "Easy CMS Management",
          description: "Update your content with zero technical knowledge.",
        },
        {
          icon: "FaLightbulb",
          title: "Flexible Integrations",
          description: "From WooCommerce to CRMs, we integrate it all.",
        },
      ],
      roi: [
        { metric: "Traffic Growth", value: "+200%", description: "Within 3 months" },
        { metric: "Conversion Rate", value: "+130%", description: "After redesign" },
        { metric: "Maintenance Cost", value: "-50%", description: "Optimized hosting setup" },
      ],
      testimonials: [
        {
          name: "Ayesha Malik",
          role: "Founder, MediaSpark",
          content:
            "Our new WordPress website elevated our brand visibility and tripled our leads.",
          rating: 5,
        },
        {
          name: "John Edwards",
          role: "Editor, CityNews",
          content:
            "Super-fast and secure WordPress setup — perfect for our high-traffic portal.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "CMS", items: ["WordPress", "WooCommerce", "Elementor", "ACF"] },
        { category: "Optimization", items: ["WP Rocket", "Yoast SEO", "Cloudflare", "CDN"] },
        { category: "Backend", items: ["PHP", "MySQL", "REST API", "cPanel"] },
        { category: "Hosting", items: ["Kinsta", "WP Engine", "Hostinger"] },
      ],
    },
  },
  // 4. Digital Marketing
  {
    id: 4,
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Data-Driven Growth Strategies",
    description: "Maximize brand reach and ROI with targeted campaigns and analytics-driven strategies.",
    icon: "FaBullhorn",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974086/digital_markit_lgyoi3.avif",
    details: {
      fullDescription:
        "Our digital marketing solutions drive measurable growth across SEO, PPC, social media, and content marketing. We focus on strategy, execution, and continuous optimization to increase traffic, conversions, and brand awareness.",
      features: [
        "SEO & content marketing",
        "Paid media & PPC campaigns",
        "Social media management",
        "Email marketing & automation",
        "Conversion optimization",
        "Analytics & reporting",
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Ahrefs", "SEMRush", "Mailchimp"],
      process: ["Research & Audit", "Strategy & Planning", "Campaign Execution", "Optimization", "Reporting", "Scaling"],
      caseStudies: [
        { title: "E-commerce Campaign", result: "5x ROI", metric: "Revenue" },
        { title: "B2B Lead Gen", result: "300+ leads/month", metric: "Leads" },
        { title: "Social Growth", result: "10K+ followers in 3 months", metric: "Engagement" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "Targeted Traffic",
          description: "Reach high-intent users and maximize conversion opportunities.",
        },
        {
          icon: "FaUsers",
          title: "Brand Authority",
          description: "Build trust and credibility through strategic campaigns and content.",
        },
        {
          icon: "FaLightbulb",
          title: "Actionable Insights",
          description: "Data-driven decisions to optimize campaigns and ROI.",
        },
      ],
      roi: [
        { metric: "Lead Generation", value: "+300%", description: "Month-over-month growth" },
        { metric: "Revenue Growth", value: "5x", description: "Through targeted campaigns" },
        { metric: "Engagement", value: "+250%", description: "Across social platforms" },
      ],
      testimonials: [
        {
          name: "Olivia Martin",
          role: "CMO, RetailCorp",
          content: "Our digital campaigns brought measurable growth and exceeded all KPIs.",
          rating: 5,
        },
        {
          name: "Liam Harris",
          role: "Founder, StartupBoost",
          content: "The team drove lead generation and brand visibility beyond expectations.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "Analytics", items: ["Google Analytics", "Hotjar", "Mixpanel"] },
        { category: "SEO Tools", items: ["Ahrefs", "SEMRush", "Moz"] },
        { category: "PPC & Ads", items: ["Google Ads", "Facebook Ads", "LinkedIn Ads"] },
        { category: "Email Automation", items: ["Mailchimp", "HubSpot", "ActiveCampaign"] },
      ],
    },
  },

  // 5. Video Editing
  {
    id: 5,
    slug: "video-editing",
    title: "Video Editing",
    subtitle: "Captivating Storytelling Through Video",
    description: "Professional video editing services to bring your stories to life and engage audiences.",
    icon: "FaVideo",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974117/video_edit_imo9xk.avif",
    details: {
      fullDescription:
        "We transform raw footage into compelling videos for marketing, social media, corporate, or cinematic purposes. Our team combines creativity, storytelling, and technical expertise for maximum impact.",
      features: [
        "Professional editing & post-production",
        "Motion graphics & animation",
        "Color grading & correction",
        "Sound design & mixing",
        "Social media-ready formats",
        "Storyboarding & creative direction",
      ],
      technologies: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
      process: ["Concept & Script", "Storyboarding", "Editing", "Motion Graphics", "Color Grading", "Delivery"],
      caseStudies: [
        { title: "Brand Promo Video", result: "50% higher engagement", metric: "Views" },
        { title: "YouTube Series", result: "100K+ subscribers", metric: "Growth" },
        { title: "Product Launch", result: "30% conversion uplift", metric: "ROI" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "Engaging Content",
          description: "Captivate your audience with polished, professional storytelling.",
        },
        {
          icon: "FaUsers",
          title: "Multi-Platform Ready",
          description: "Videos optimized for social media, web, or broadcast channels.",
        },
        {
          icon: "FaLightbulb",
          title: "Creative Excellence",
          description: "Bring ideas to life with cinematic-quality editing and effects.",
        },
      ],
      roi: [
        { metric: "Engagement", value: "+50%", description: "Higher video interactions" },
        { metric: "Conversions", value: "+30%", description: "From video-driven campaigns" },
        { metric: "Brand Recall", value: "+200%", description: "Memorable storytelling" },
      ],
      testimonials: [
        {
          name: "Sophia Lee",
          role: "Marketing Director, VisualBrand",
          content: "The videos elevated our brand storytelling and delivered measurable engagement.",
          rating: 5,
        },
        {
          name: "Ethan Walker",
          role: "Founder, MediaVision",
          content: "Professional, creative, and fast. Our video campaigns never looked better.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "Editing", items: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"] },
        { category: "Motion Graphics", items: ["After Effects", "Cinema 4D", "Blender"] },
        { category: "Sound & Music", items: ["Audition", "Logic Pro", "Ableton"] },
        { category: "Collaboration", items: ["Frame.io", "Dropbox", "Google Drive"] },
      ],
    },
  },

  // 6. Graphic Designing
  {
    id: 6,
    slug: "graphic-designing",
    title: "Graphic Designing",
    subtitle: "Visual Identity & Brand Expression",
    description: "Transform ideas into visually stunning graphics that communicate your brand message.",
    icon: "FaPaintBrush",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974162/graphic_desing_znped3.avif",
    details: {
      fullDescription:
        "Our graphic design services create compelling visuals for digital, print, and social platforms. We focus on aesthetics, brand consistency, and audience impact to elevate your brand presence.",
      features: [
        "Brand identity & logo design",
        "Marketing collaterals & brochures",
        "Infographics & illustrations",
        "Social media graphics",
        "Packaging & product design",
        "Print & digital design",
      ],
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "CorelDRAW", "Canva"],
      process: ["Research", "Concept Design", "Iteration", "Finalization", "Delivery", "Support"],
      caseStudies: [
        { title: "Brand Re-Design", result: "40% more brand recognition", metric: "Awareness" },
        { title: "Marketing Campaigns", result: "+25% engagement", metric: "Engagement" },
        { title: "Product Packaging", result: "3x higher sales", metric: "Sales" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "Brand Impact",
          description: "Visually elevate your brand across all digital and offline channels.",
        },
        {
          icon: "FaUsers",
          title: "Consistent Identity",
          description: "Maintain cohesive brand visuals across all campaigns and products.",
        },
        {
          icon: "FaLightbulb",
          title: "Creative Excellence",
          description: "Combine design thinking and aesthetics to create memorable visuals.",
        },
      ],
      roi: [
        { metric: "Brand Awareness", value: "+40%", description: "Stronger market presence" },
        { metric: "Engagement", value: "+25%", description: "Higher social interaction" },
        { metric: "Sales Impact", value: "3x", description: "Through compelling design" },
      ],
      testimonials: [
        {
          name: "Nora Simmons",
          role: "CMO, BrandWorks",
          content: "The design team transformed our visual identity, boosting engagement and recognition.",
          rating: 5,
        },
        {
          name: "Daniel Cruz",
          role: "Founder, CreativeSpark",
          content: "Highly creative and professional. They deliver designs that truly resonate.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "Design Tools", items: ["Adobe Photoshop", "Illustrator", "Figma", "CorelDRAW"] },
        { category: "Prototyping", items: ["Figma", "InVision", "Adobe XD"] },
        { category: "Illustration", items: ["Procreate", "Adobe Illustrator", "Affinity Designer"] },
        { category: "Collaboration", items: ["Slack", "Dropbox", "Notion"] },
      ],
    },
  },

  // 7. SQA (Software Quality Assurance)
  {
    id: 7,
    slug: "software-quality-assurance",
    title: "Software QA & Testing",
    subtitle: "Reliability & Bug-Free Solutions",
    description: "Ensure high-quality, reliable software with automated and manual testing strategies.",
    icon: "FaCheckCircle",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974284/software-quality-assurance_xfradn.png",
    details: {
      fullDescription:
        "Our SQA services guarantee software stability, performance, and user satisfaction. We implement comprehensive manual and automated testing for web, mobile, and enterprise applications.",
      features: [
        "Functional & regression testing",
        "Performance & load testing",
        "Automation frameworks",
        "Cross-browser & device testing",
        "Security & penetration testing",
        "Continuous integration testing",
      ],
      technologies: ["Selenium", "Cypress", "Jest", "TestRail", "Postman", "JMeter"],
      process: ["Test Planning", "Test Design", "Execution", "Defect Tracking", "Automation", "Reporting"],
      caseStudies: [
        { title: "Enterprise SaaS", result: "99.9% uptime", metric: "Reliability" },
        { title: "Mobile App Testing", result: "100K+ active users bug-free", metric: "Quality" },
        { title: "E-commerce Platform", result: "0 critical bugs post-launch", metric: "Stability" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "Bug-Free Delivery",
          description: "Detect and fix issues before they affect your users.",
        },
        {
          icon: "FaUsers",
          title: "User Confidence",
          description: "Deliver applications that are secure, fast, and reliable.",
        },
        {
          icon: "FaLightbulb",
          title: "Optimized Performance",
          description: "Ensure smooth operations even under peak load conditions.",
        },
      ],
      roi: [
        { metric: "Bug Reduction", value: "90%", description: "Fewer post-launch issues" },
        { metric: "Release Speed", value: "2x Faster", description: "With automated testing" },
        { metric: "User Satisfaction", value: "+35%", description: "Improved product quality" },
      ],
      testimonials: [
        {
          name: "Sophia White",
          role: "QA Lead, FinTech Solutions",
          content: "Their testing ensured our platform launched without critical issues. Highly reliable team.",
          rating: 5,
        },
        {
          name: "Ethan Brooks",
          role: "CTO, CloudWorks",
          content: "Comprehensive QA coverage with clear reporting. Saved us weeks of potential debugging.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "Automation Tools", items: ["Selenium", "Cypress", "Jest", "Appium"] },
        { category: "Performance Testing", items: ["JMeter", "LoadRunner", "Gatling"] },
        { category: "API Testing", items: ["Postman", "Swagger", "REST Assured"] },
        { category: "Test Management", items: ["TestRail", "Jira", "Zephyr"] },
      ],
    },
  },

  // 8. Content Writing
  {
    id: 8,
    slug: "content-writing",
    title: "Content Writing",
    subtitle: "Engaging & SEO-Optimized Content",
    description: "Create compelling content that informs, converts, and ranks high on search engines.",
    icon: "FaPenNib",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974208/content_write_shxsdu.avif",
    details: {
      fullDescription:
        "Our content writing services deliver high-quality, engaging copy for websites, blogs, social media, and marketing campaigns. All content is SEO-optimized and aligned with your brand voice.",
      features: [
        "SEO-friendly blog posts & articles",
        "Website copywriting & landing pages",
        "Social media content & ad copy",
        "Technical & product writing",
        "Content strategy & planning",
        "Editing & proofreading",
      ],
      technologies: ["WordPress", "Ahrefs", "SEMRush", "Grammarly", "Hemingway Editor", "Google Docs"],
      process: ["Research", "Content Strategy", "Writing", "SEO Optimization", "Editing", "Publishing"],
      caseStudies: [
        { title: "Tech Blog Series", result: "+300% traffic", metric: "Organic Reach" },
        { title: "E-commerce Product Copy", result: "25% higher conversions", metric: "Sales" },
        { title: "Social Campaign", result: "10K+ engagements", metric: "Engagement" },
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "SEO-Optimized",
          description: "Boost organic visibility and attract high-intent traffic.",
        },
        {
          icon: "FaUsers",
          title: "Audience Engagement",
          description: "Content that captivates readers and drives interactions.",
        },
        {
          icon: "FaLightbulb",
          title: "Brand Consistency",
          description: "Maintain a consistent tone of voice across all platforms.",
        },
      ],
      roi: [
        { metric: "Organic Traffic", value: "+300%", description: "Through targeted content" },
        { metric: "Conversions", value: "+25%", description: "With persuasive copywriting" },
        { metric: "Engagement", value: "+150%", description: "Across social channels" },
      ],
      testimonials: [
        {
          name: "Mia Thompson",
          role: "Content Manager, EduTech",
          content: "The content strategy and writing significantly increased our organic traffic and engagement.",
          rating: 5,
        },
        {
          name: "Liam Johnson",
          role: "Founder, ShopEase",
          content: "Professional, creative, and SEO-focused writing that directly improved conversions.",
          rating: 5,
        },
      ],
      techStackDetails: [
        { category: "SEO & Research", items: ["Ahrefs", "SEMRush", "Google Keyword Planner"] },
        { category: "Writing Tools", items: ["Grammarly", "Hemingway Editor", "Google Docs"] },
        { category: "CMS", items: ["WordPress", "Shopify", "Webflow"] },
        { category: "Collaboration", items: ["Notion", "Trello", "Slack"] },
      ],
    },
  },
];

const iconMap = {
  FaTrophy,
  FaUsers,
  FaLightbulb,
};

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug
  const service = services.find((s) => s.slug === slug)

  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(contentRef.current?.children, {
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    })
  }, [])

  if (!service) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
            Back to Services
          </Link>
        </div>
      </main>
    )
  }

  return (
    <><Navbar/>
    <main ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full mb-4 border border-amber-500/30">
            <FaStar className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl text-balance leading-relaxed">
            {service.details.fullDescription}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            width={1280}
            height={720}
            className="w-full h-auto object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
        </div>
      </section>

      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Key Benefits Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Benefits</h2>
            <p className="text-base text-gray-600">Why choose our {service.title.toLowerCase()} service</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details.benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.icon]
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10 mb-4">
                    <BenefitIcon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ROI & Metrics Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">ROI & Metrics</h2>
            <p className="text-base text-gray-600">Measurable results from our {service.title.toLowerCase()} solutions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details.roi.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <p className="text-sm font-medium text-amber-600 mb-2">{item.metric}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Features</h2>
            <p className="text-base text-gray-600">Everything you need to succeed with {service.title.toLowerCase()}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-500/10">
                      <FaCheck className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                  <p className="font-medium text-gray-900 text-base">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Technology Stack</h2>
            <p className="text-base text-gray-600">Comprehensive breakdown of our technical expertise</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.details.techStackDetails.map((stack, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-amber-50 text-amber-700 rounded-md text-sm font-medium border border-amber-200 hover:bg-amber-100 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Technologies Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Technologies</h2>
            <p className="text-base text-gray-600">We use industry-leading technologies to deliver excellence</p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="my-4"
          >
            {service.details.technologies.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md text-center font-bold text-gray-900 text-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
                  {item}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Process Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Process</h2>
            <p className="text-base text-gray-600">A structured approach to delivering exceptional results</p>
          </div>
          <div className="space-y-4">
            {service.details.process.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold text-lg">
                  {index + 1}
                </div>
                <p className="text-base font-medium text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Case Studies & Results</h2>
            <p className="text-base text-gray-600">Real results from real projects</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details.caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-2 py-1 rounded-md mb-4 text-sm font-medium">
                  {study.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-xl font-bold text-amber-600 mb-2">{study.result}</p>
                <p className="text-sm text-gray-600">Achieved through strategic implementation and optimization</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Client Testimonials</h2>
            <p className="text-base text-gray-600">What our clients say about working with us</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.details.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <div className="mb-4">
                  <FaQuoteLeft className="w-5 h-5 text-amber-500/30 mb-2" />
                  <p className="text-gray-700 text-sm leading-relaxed italic">{testimonial.content}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto text-balance">
            Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}. Our team is ready to transform your vision into reality.
          </p>
          <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            Schedule a Consultation
            <FaArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </main>
    <Footer/>
    </>
  )
}