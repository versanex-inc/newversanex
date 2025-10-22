
"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import {FaCode,FaUsers,FaLightbulb, FaTrophy } from "react-icons/fa"

import { FaMobileAlt, FaRobot, FaCloud, FaPalette, FaShoppingCart, FaArrowRight } from "react-icons/fa"
import ProcessFlow from "@/components/services/process-flow"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const services = [
  {
    id: 1,
    slug: "web-apps",
    title: "Web Apps",
    subtitle: "Scalable. Secure. Lightning-Fast.",
    description: "Custom-built web applications engineered for performance, scalability, and growth.",
    icon: "FaCode",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760973982/webdev_wbehed.avif",
    details: {
      fullDescription:
        "We design and develop robust, high-performance web applications that empower businesses to scale effortlessly. From SaaS dashboards to enterprise portals, our web apps combine cutting-edge technology, beautiful design, and seamless user experience.",
      features: [
        "Custom full-stack development",
        "API-first architecture",
        "Next.js + React optimization",
        "Responsive and accessible design",
        "Advanced caching & CDN setup",
        "SEO and performance optimization",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      process: [
        "Discovery & Strategy",
        "Wireframing & Design",
        "Development & Integration",
        "Testing & QA",
        "Launch & Optimization",
        "Maintenance & Support",
      ],
      benefits: [
        {
          icon: "FaTrophy",
          title: "High-Performance Architecture",
          description: "Deliver blazing-fast experiences with optimized rendering and server-side caching.",
        },
        {
          icon: "FaUsers",
          title: "Future-Ready Scalability",
          description: "Built to scale with your business—no performance bottlenecks or downtime.",
        },
        {
          icon: "FaLightbulb",
          title: "Optimized for Growth",
          description: "SEO and conversion-optimized from day one to help your business thrive online.",
        },
      ],
      roi: [
        { metric: "Faster Load Time", value: "98%", description: "Compared to legacy systems" },
        { metric: "Engagement Boost", value: "+175%", description: "Average client increase" },
        { metric: "Conversion Growth", value: "+40%", description: "Post-launch performance" },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc.",
          content:
            "VersaNex transformed our product vision into a powerful web app that scaled effortlessly. Performance and UX are world-class.",
          rating: 5,
        },
      ],
    },
  },
  {
    id: 2,
    slug: "shopify-stores",
    title: "Shopify Stores",
    subtitle: "Sell Smarter. Scale Faster.",
    description: "High-converting Shopify stores tailored for brand growth and seamless customer experience.",
    icon: "FaShoppingBag",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760973884/shopify_20stores_1cb40842-dab6-4920-a234-4da36e79fc8a_mqwdfx.webp",
    details: {
      fullDescription:
        "Launch or upgrade your Shopify store with our proven eCommerce design and conversion strategy. From sleek product pages to optimized checkout experiences, we help you attract, engage, and convert visitors into loyal customers.",
      features: [
        "Custom Shopify theme development",
        "Store setup & product migration",
        "App integration & automation",
        "Conversion optimization",
        "Payment gateway setup",
        "Post-launch maintenance",
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "Hydrogen", "Stripe", "Klaviyo"],
      benefits: [
        {
          icon: "FaRocket",
          title: "Sales-Focused Design",
          description: "Crafted to maximize conversion rates and average order value.",
        },
        {
          icon: "FaCogs",
          title: "Fully Managed Setup",
          description: "We handle everything from configuration to automation.",
        },
        {
          icon: "FaHeart",
          title: "Customer-Centric Experience",
          description: "Beautifully designed stores that users love shopping on.",
        },
      ],
      roi: [
        { metric: "Conversion Rate", value: "+38%", description: "After redesign" },
        { metric: "Revenue Growth", value: "+120%", description: "First 6 months" },
        { metric: "Bounce Rate", value: "-45%", description: "Improved customer retention" },
      ],
      testimonials: [
        {
          name: "Rachel Evans",
          role: "Founder, GlowHaus",
          content:
            "Our new Shopify store doubled our online sales in just three months. The design and checkout flow are flawless.",
          rating: 5,
        },
      ],
    },
  },
  {
    id: 3,
    slug: "wordpress-websites",
    title: "WordPress Websites",
    subtitle: "Custom, Fast, and SEO-Ready.",
    description: "Beautifully crafted WordPress websites that load fast, rank high, and convert better.",
    icon: "FaWordpress",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974034/what-is-wordpress_jgzhas.png",
    details: {
      fullDescription:
        "We design modern, performance-driven WordPress websites tailored to your brand and goals. From business sites to content-heavy platforms, we combine elegant UI with a powerful backend for complete control.",
      features: [
        "Custom WordPress theme & plugin development",
        "SEO optimization",
        "Performance & security tuning",
        "WooCommerce integration",
        "CMS training & support",
      ],
      technologies: ["WordPress", "PHP", "Elementor", "WooCommerce", "Yoast SEO"],
      benefits: [
        {
          icon: "FaTachometerAlt",
          title: "Lightning Performance",
          description: "Fast-loading, mobile-optimized pages built to impress search engines and users alike.",
        },
        {
          icon: "FaShieldAlt",
          title: "Secure by Design",
          description: "We implement enterprise-level protection and daily backups.",
        },
        {
          icon: "FaMagic",
          title: "Custom Freedom",
          description: "Every site is uniquely crafted — no cookie-cutter templates here.",
        },
      ],
      roi: [
        { metric: "SEO Ranking", value: "Top 3", description: "Average Google position" },
        { metric: "Website Speed", value: "95+", description: "Lighthouse score" },
        { metric: "Conversion Increase", value: "+50%", description: "Optimized funnels" },
      ],
    },
  },
  {
    id: 4,
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Reach. Engage. Convert.",
    description: "ROI-driven marketing campaigns that grow your traffic, leads, and brand visibility.",
    icon: "FaBullhorn",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974086/digital_markit_lgyoi3.avif",
    details: {
      fullDescription:
        "From SEO and PPC to social media and content strategy — our digital marketing experts craft data-driven campaigns that attract, engage, and convert. We focus on measurable growth, not vanity metrics.",
      features: [
        "SEO & content optimization",
        "Social media strategy",
        "Paid ads (Meta, Google, TikTok)",
        "Email automation",
        "Analytics & reporting",
      ],
      technologies: ["Google Ads", "Meta Business Suite", "Ahrefs", "HubSpot", "Mailchimp"],
      benefits: [
        {
          icon: "FaChartLine",
          title: "Data-Driven Growth",
          description: "We measure every click, impression, and conversion for clear ROI insights.",
        },
        {
          icon: "FaUsers",
          title: "Audience-Centric Strategy",
          description: "Target the right people with personalized campaigns that convert.",
        },
        {
          icon: "FaBullseye",
          title: "Result-Oriented Approach",
          description: "Transparent analytics with measurable business outcomes.",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "video-editing",
    title: "Video Editing",
    subtitle: "Engage Visually. Inspire Emotion.",
    description: "Professional editing that transforms raw footage into stunning visual stories.",
    icon: "FaVideo",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974117/video_edit_imo9xk.avif",
    details: {
      fullDescription:
        "Bring your brand stories to life with cinematic video editing that engages and converts. From corporate promos to social reels, we create visuals that captivate and communicate your message with impact.",
      features: [
        "Cinematic editing & color grading",
        "Motion graphics & animation",
        "Sound design & mixing",
        "Social media format optimization",
      ],
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    },
  },
  {
    id: 6,
    slug: "graphic-designing",
    title: "Graphic Designing",
    subtitle: "Design That Speaks. Brands That Stand Out.",
    description: "Creative design solutions that communicate your brand’s vision beautifully.",
    icon: "FaPenNib",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974162/graphic_desing_znped3.avif",
    details: {
      fullDescription:
        "Our design team crafts visuals that capture attention and express your brand story. From logo creation to full identity systems, we design for impact, emotion, and memorability.",
      features: [
        "Brand identity design",
        "Social media graphics",
        "Marketing collateral",
        "Packaging & print design",
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Canva"],
    },
  },
  {
    id: 7,
    slug: "software-quality-assurance",
    title: "Software Quality Assurance",
    subtitle: "Zero Bugs. Maximum Reliability.",
    description: "Comprehensive QA and testing solutions for flawless, high-performing software.",
    icon: "FaCheckCircle",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974284/software-quality-assurance_xfradn.png",
    details: {
      fullDescription:
        "We ensure every line of code performs flawlessly. Our QA experts run functional, performance, and security testing to guarantee product excellence before launch.",
      features: [
        "Manual & automated testing",
        "Performance benchmarking",
        "Security audits",
        "Regression & UAT testing",
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Postman", "JMeter"],
    },
  },
  {
    id: 8,
    slug: "content-writing",
    title: "Content Writing",
    subtitle: "Words That Convert. Stories That Connect.",
    description: "Strategic, SEO-rich content crafted to engage your audience and drive action.",
    icon: "FaPenFancy",
    accentColor: "#F4A500",
    image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974208/content_write_shxsdu.avif",
    details: {
      fullDescription:
        "From website copy to blogs and ad campaigns, our content team crafts persuasive narratives that build trust, enhance SEO, and drive measurable engagement.",
      features: [
        "SEO blog writing",
        "Website & landing page copy",
        "Email campaigns",
        "Brand storytelling",
      ],
      technologies: ["Grammarly", "SurferSEO", "Notion", "Google Docs"],
    },
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title and subtitle
            gsap.fromTo(
              titleRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
            gsap.fromTo(
              subtitleRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
            )

            // Animate cards
            gsap.fromTo(
              cardsRef.current,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.4, ease: "power3.out" }
            )

            // Card hover effect
            cardsRef.current.forEach((card) => {
              if (!card) return
              card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(244, 165, 0, 0.15)",
                  duration: 0.4,
                  ease: "power2.out",
                })
              })
              card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                  y: 0,
                  scale: 1,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                  duration: 0.4,
                  ease: "power2.out",
                })
              })
            })

            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center" ref={containerRef}>
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Our Services
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions tailored to transform your business. From web and mobile applications to AI integration and cloud infrastructure, we deliver excellence across every service.
          </p>

          {/* Service Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="group h-full bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200 hover:border-amber-400 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-amber-600 mb-3 md:mb-4">{service.subtitle}</p>

                   
                    <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">{service.description}</p>

              
                    <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div> */}

          {/* Service Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
  {services.map((service, index) => {
    const IconComponent = service.icon;
    return (
      <Link
        key={service.id}
        href={`/services/${service.slug}`}
        ref={(el) => (cardsRef.current[index] = el)}
      >
        <div className="group h-full bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200 hover:border-amber-400 relative overflow-hidden flex flex-col">
          
          {/* Top Image */}
          <div className="w-full h-40 md:h-48 mb-4 rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Icon */}
          {/* <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div> */}

          {/* Title & Subtitle */}
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm md:text-base font-semibold text-amber-600 mb-3 md:mb-4">{service.subtitle}</p>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">{service.description}</p>

          {/* CTA */}
          <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300 mt-auto">
            <span>Explore Service</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          {/* Hover top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    );
  })}
</div>

        </div>
      </section>

      <ProcessFlow />

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your goals and drive growth.
          </p>
          <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Today
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
    <Footer/></>
  )
}
