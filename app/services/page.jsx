// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import gsap from "gsap"
// import { FaCode, FaMobileAlt, FaRobot, FaCloud, FaPalette, FaShoppingCart, FaArrowRight } from "react-icons/fa"
// import ProcessFlow from "@/components/services/process-flow"

// const services = [
//   {
//     id: 1,
//     slug: "web-apps",
//     title: "Web Apps",
//     subtitle: "High-Performance Digital Solutions",
//     description:
//       "Enterprise-grade web applications built with cutting-edge technologies. SEO-optimized, lightning-fast, and designed for scale.",
//     icon: FaCode,
//     accentColor: "#F4A500",
//     image: "/modern-web-application-dashboard-with-analytics.jpg",
//     details: {
//       fullDescription:
//         "Build scalable, high-performance web applications with modern technologies. Our web apps are optimized for SEO, fast loading times, and exceptional user experiences.",
//       features: [
//         "Next.js & React expertise",
//         "SEO optimization",
//         "Performance tuning",
//         "Responsive design",
//         "API integration",
//         "Database optimization",
//       ],
//       technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis"],
//       process: [
//         "Discovery & Planning",
//         "Design & Prototyping",
//         "Development",
//         "Testing & QA",
//         "Deployment",
//         "Maintenance & Support",
//       ],
//       caseStudies: [
//         { title: "E-commerce Platform", result: "300% faster load times" },
//         { title: "SaaS Dashboard", result: "95 Lighthouse score" },
//         { title: "Content Portal", result: "1M+ monthly users" },
//       ],
//     },
//   },
//   {
//     id: 2,
//     slug: "mobile-apps",
//     title: "Mobile Apps",
//     subtitle: "Cross-Platform Excellence",
//     description:
//       "Native and cross-platform mobile applications delivering seamless experiences on iOS and Android with intuitive UX.",
//     icon: FaMobileAlt,
//     accentColor: "#F4A500",
//     image: "/mobile-app-interface-ios-android-design.jpg",
//     details: {
//       fullDescription:
//         "Create native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
//       features: [
//         "iOS & Android development",
//         "Cross-platform solutions",
//         "Native performance",
//         "Offline functionality",
//         "Push notifications",
//         "App store optimization",
//       ],
//       technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
//       process: [
//         "Requirements Analysis",
//         "UI/UX Design",
//         "Native Development",
//         "Integration & Testing",
//         "App Store Submission",
//         "Post-launch Support",
//       ],
//       caseStudies: [
//         { title: "Fitness Tracker", result: "500K+ downloads" },
//         { title: "Social App", result: "4.8 star rating" },
//         { title: "Banking App", result: "SOC 2 compliant" },
//       ],
//     },
//   },
//   {
//     id: 3,
//     slug: "ai-automation",
//     title: "AI & Automation",
//     subtitle: "Intelligent Workflow Solutions",
//     description:
//       "Leverage AI and automation to streamline operations, reduce costs, and unlock new business opportunities.",
//     icon: FaRobot,
//     accentColor: "#F4A500",
//     image: "/artificial-intelligence-machine-learning-neural-ne.jpg",
//     details: {
//       fullDescription:
//         "Leverage artificial intelligence and automation to streamline your business processes and improve efficiency.",
//       features: [
//         "AI model integration",
//         "Chatbot development",
//         "Workflow automation",
//         "Machine learning pipelines",
//         "Natural language processing",
//         "Computer vision solutions",
//       ],
//       technologies: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "Python"],
//       process: [
//         "Problem Definition",
//         "Data Collection",
//         "Model Training",
//         "Integration",
//         "Testing & Validation",
//         "Deployment & Monitoring",
//       ],
//       caseStudies: [
//         { title: "Customer Support Bot", result: "80% automation rate" },
//         { title: "Document Processing", result: "10x faster processing" },
//         { title: "Predictive Analytics", result: "92% accuracy" },
//       ],
//     },
//   },
//   {
//     id: 4,
//     slug: "cloud-devops",
//     title: "Cloud & DevOps",
//     subtitle: "Infrastructure Excellence",
//     description:
//       "Scalable cloud infrastructure with CI/CD pipelines, monitoring, and disaster recovery for 99.99% uptime.",
//     icon: FaCloud,
//     accentColor: "#F4A500",
//     image: "/cloud-infrastructure-server-architecture-devops.jpg",
//     details: {
//       fullDescription:
//         "Build robust cloud infrastructure with continuous integration, deployment, and comprehensive monitoring solutions.",
//       features: [
//         "Cloud architecture design",
//         "CI/CD pipeline setup",
//         "Infrastructure as Code",
//         "Container orchestration",
//         "Monitoring & logging",
//         "Disaster recovery",
//       ],
//       technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins"],
//       process: [
//         "Infrastructure Assessment",
//         "Architecture Design",
//         "Implementation",
//         "Automation Setup",
//         "Monitoring Configuration",
//         "Optimization & Scaling",
//       ],
//       caseStudies: [
//         { title: "Multi-region Deployment", result: "99.99% uptime" },
//         { title: "CI/CD Pipeline", result: "50% faster releases" },
//         { title: "Cost Optimization", result: "40% savings" },
//       ],
//     },
//   },
//   {
//     id: 5,
//     slug: "ui-ux-design",
//     title: "UI/UX Design",
//     subtitle: "User-Centered Design Strategy",
//     description:
//       "Beautiful, intuitive interfaces that drive conversions and delight users with thoughtful, research-backed design.",
//     icon: FaPalette,
//     accentColor: "#F4A500",
//     image: "/ui-ux-design-interface-wireframe-prototyping.jpg",
//     details: {
//       fullDescription:
//         "Create beautiful, intuitive user interfaces that drive conversions and delight users with thoughtful design.",
//       features: [
//         "User research & testing",
//         "Wireframing & prototyping",
//         "Visual design",
//         "Interaction design",
//         "Design systems",
//         "Accessibility compliance",
//       ],
//       technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow", "Storybook"],
//       process: ["User Research", "Wireframing", "Visual Design", "Prototyping", "User Testing", "Design Handoff"],
//       caseStudies: [
//         { title: "Redesign Project", result: "45% conversion increase" },
//         { title: "Design System", result: "60% faster development" },
//         { title: "Mobile Optimization", result: "3x engagement" },
//       ],
//     },
//   },
//   {
//     id: 6,
//     slug: "ecommerce",
//     title: "E-commerce",
//     subtitle: "Headless Commerce Platforms",
//     description:
//       "Powerful e-commerce solutions with flexible architecture, Stripe integration, and multi-currency support.",
//     icon: FaShoppingCart,
//     accentColor: "#F4A500",
//     image: "/ecommerce-online-store-shopping-cart-payment.jpg",
//     details: {
//       fullDescription:
//         "Build powerful e-commerce solutions with flexible, scalable architecture and seamless payment integration.",
//       features: [
//         "Headless commerce setup",
//         "Payment gateway integration",
//         "Inventory management",
//         "Order tracking",
//         "Customer analytics",
//         "Multi-currency support",
//       ],
//       technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Contentful", "Algolia"],
//       process: [
//         "Platform Selection",
//         "Store Setup",
//         "Product Integration",
//         "Payment Configuration",
//         "Testing & Launch",
//         "Growth Optimization",
//       ],
//       caseStudies: [
//         { title: "Fashion Store", result: "$2M+ annual revenue" },
//         { title: "Digital Products", result: "10K+ customers" },
//         { title: "Marketplace", result: "500+ sellers" },
//       ],
//     },
//   },
// ]

// export default function ServicesPage() {
//   const containerRef = useRef(null)
//   const titleRef = useRef(null)
//   const subtitleRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     gsap.from(titleRef.current, {
//       opacity: 0,
//       y: 40,
//       duration: 1,
//       ease: "power3.out",
//     })

//     gsap.from(subtitleRef.current, {
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       ease: "power3.out",
//       delay: 0.2,
//     })

//     gsap.from(cardsRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 0.8,
//       stagger: 0.12,
//       ease: "power3.out",
//       delay: 0.4,
//     })

//     cardsRef.current.forEach((card) => {
//       if (!card) return

//       card.addEventListener("mouseenter", () => {
//         gsap.to(card, {
//           y: -12,
//           boxShadow: "0 25px 50px rgba(244, 165, 0, 0.15)",
//           duration: 0.4,
//           ease: "power2.out",
//         })
//       })

//       card.addEventListener("mouseleave", () => {
//         gsap.to(card, {
//           y: 0,
//           boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//           duration: 0.4,
//           ease: "power2.out",
//         })
//       })
//     })
//   }, [])

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       {/* Hero Section */}
//       <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="max-w-6xl mx-auto">
//           <div ref={containerRef} className="text-center mb-20">
//             <h1
//               ref={titleRef}
//               className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight"
//             >
//               Our Services
//             </h1>
//             <p
//               ref={subtitleRef}
//               className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto text-balance leading-relaxed"
//             >
//               Comprehensive digital solutions tailored to transform your business. From web and mobile applications to
//               AI integration and cloud infrastructure, we deliver excellence across every service.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//             {services.map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <Link
//                   key={service.id}
//                   href={`/services/${service.slug}`}
//                   ref={(el) => {
//                     if (el) cardsRef.current[index] = el
//                   }}
//                 >
//                   <div className="group h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200 hover:border-amber-400 overflow-hidden relative">
//                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

//                     {/* Icon with enhanced styling */}
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>

//                     {/* Title and Subtitle */}
//                     <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-sm font-semibold text-amber-600 mb-4">{service.subtitle}</p>

//                     {/* Description */}
//                     <p className="text-slate-600 mb-8 leading-relaxed text-base">{service.description}</p>

//                     {/* CTA with enhanced styling */}
//                     <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
//                       <span>Explore Service</span>
//                       <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                     </div>
//                   </div>
//                 </Link>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       <ProcessFlow />

//       {/* Bottom CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
//           <p className="text-lg text-slate-300 mb-10 text-balance">
//             Let's discuss how our services can help you achieve your goals and drive growth.
//           </p>
//           <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//             Get Started Today
//             <FaArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </section>
//     </main>
//   )
// }





















"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import {FaCode,FaUsers,FaLightbulb, FaTrophy } from "react-icons/fa"

import { FaMobileAlt, FaRobot, FaCloud, FaPalette, FaShoppingCart, FaArrowRight } from "react-icons/fa"
import ProcessFlow from "@/components/services/process-flow"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// const services = [
//   {
//     id: 1,
//     slug: "web-apps",
//     title: "Web Apps",
//     subtitle: "High-Performance Digital Solutions",
//     description: "High-performance, SEO-friendly Next.js apps.",
//     icon: "FaCode",
//     accentColor: "#F4A500",
//     image: "/modern-web-application-dashboard-with-analytics.jpg",
//     details: {
//       fullDescription:
//         "Build scalable, high-performance web applications with modern technologies. Our web apps are optimized for SEO, fast loading times, and exceptional user experiences.",
//       features: [
//         "Next.js & React expertise",
//         "SEO optimization",
//         "Performance tuning",
//         "Responsive design",
//         "API integration",
//         "Database optimization",
//       ],
//       technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis"],
//       process: [
//         "Discovery & Planning",
//         "Design & Prototyping",
//         "Development",
//         "Testing & QA",
//         "Deployment",
//         "Maintenance & Support",
//       ],
//       caseStudies: [
//         { title: "E-commerce Platform", result: "300% faster load times", metric: "Performance" },
//         { title: "SaaS Dashboard", result: "95 Lighthouse score", metric: "Quality" },
//         { title: "Content Portal", result: "1M+ monthly users", metric: "Scale" },
//       ],
//       benefits: [
//         {
//           icon: FaTrophy,
//           title: "Industry-Leading Performance",
//           description: "Achieve 95+ Lighthouse scores with optimized code splitting and lazy loading strategies.",
//         },
//         {
//           icon: FaUsers,
//           title: "Scalable Architecture",
//           description: "Handle millions of concurrent users with our robust, cloud-native infrastructure.",
//         },
//         {
//           icon: FaLightbulb,
//           title: "SEO Excellence",
//           description: "Rank higher on search engines with server-side rendering and structured data optimization.",
//         },
//       ],
//       roi: [
//         { metric: "Avg. Revenue Increase", value: "250%", description: "Within first 12 months" },
//         { metric: "User Engagement", value: "+180%", description: "Improved retention rates" },
//         { metric: "Development Speed", value: "3x Faster", description: "Compared to traditional methods" },
//       ],
//       testimonials: [
//         {
//           name: "Sarah Johnson",
//           role: "CEO, TechStart Inc",
//           content:
//             "The web app transformed our business. We went from 0 to $5M ARR in just 18 months. The team's expertise was invaluable.",
//           rating: 5,
//         },
//         {
//           name: "Michael Chen",
//           role: "Product Manager, DataFlow",
//           content:
//             "Outstanding performance optimization. Our app now loads in under 1 second. Customer satisfaction increased dramatically.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         {
//           category: "Frontend",
//           items: ["Next.js 14+", "React 18+", "TypeScript", "Tailwind CSS", "Framer Motion"],
//         },
//         {
//           category: "Backend",
//           items: ["Node.js", "Express/Fastify", "GraphQL/REST", "Authentication", "API Design"],
//         },
//         {
//           category: "Database",
//           items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Data Optimization"],
//         },
//         {
//           category: "DevOps",
//           items: ["Docker", "Kubernetes", "CI/CD", "AWS/GCP", "Monitoring & Logging"],
//         },
//       ],
//     },
//   },
//   {
//     id: 2,
//     slug: "mobile-apps",
//     title: "Mobile Apps",
//     subtitle: "Cross-Platform Excellence",
//     description: "Cross-platform apps with smooth UX.",
//     icon: "FaMobileAlt",
//     accentColor: "#F4A500",
//     image: "/mobile-app-interface-ios-android-design.jpg",
//     details: {
//       fullDescription:
//         "Create native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
//       features: [
//         "iOS & Android development",
//         "Cross-platform solutions",
//         "Native performance",
//         "Offline functionality",
//         "Push notifications",
//         "App store optimization",
//       ],
//       technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
//       process: [
//         "Requirements Analysis",
//         "UI/UX Design",
//         "Native Development",
//         "Integration & Testing",
//         "App Store Submission",
//         "Post-launch Support",
//       ],
//       caseStudies: [
//         { title: "Fitness Tracker", result: "500K+ downloads", metric: "Downloads" },
//         { title: "Social App", result: "4.8 star rating", metric: "Rating" },
//         { title: "Banking App", result: "SOC 2 compliant", metric: "Security" },
//       ],
//       benefits: [
//         {
//           icon: FaTrophy,
//           title: "Native Performance",
//           description: "Deliver app-like experiences with native performance on both iOS and Android platforms.",
//         },
//         {
//           icon: FaUsers,
//           title: "Massive User Base",
//           description: "Reach millions of users across both major mobile platforms with a single codebase.",
//         },
//         {
//           icon: FaLightbulb,
//           title: "Offline Capabilities",
//           description: "Enable seamless offline functionality with intelligent data synchronization.",
//         },
//       ],
//       roi: [
//         { metric: "Time to Market", value: "50% Faster", description: "Cross-platform development" },
//         { metric: "User Retention", value: "+220%", description: "Improved engagement metrics" },
//         { metric: "Development Cost", value: "40% Savings", description: "Vs. native development" },
//       ],
//       testimonials: [
//         {
//           name: "Emma Rodriguez",
//           role: "Founder, FitLife App",
//           content:
//             "Our fitness app reached 500K downloads in 6 months. The team's expertise in mobile development was exceptional.",
//           rating: 5,
//         },
//         {
//           name: "David Park",
//           role: "CTO, SocialConnect",
//           content:
//             "The cross-platform approach saved us months of development time. Quality is outstanding across both platforms.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         {
//           category: "Mobile Frameworks",
//           items: ["React Native", "Flutter", "Swift", "Kotlin", "Native Modules"],
//         },
//         {
//           category: "State Management",
//           items: ["Redux", "MobX", "Provider", "Riverpod", "Context API"],
//         },
//         {
//           category: "Backend Integration",
//           items: ["Firebase", "REST APIs", "GraphQL", "WebSockets", "Real-time Sync"],
//         },
//         {
//           category: "Testing & QA",
//           items: ["Jest", "Detox", "XCTest", "Espresso", "Performance Testing"],
//         },
//       ],
//     },
//   },
//   {
//     id: 3,
//     slug: "ai-automation",
//     title: "AI & Automation",
//     subtitle: "Intelligent Workflow Solutions",
//     description: "Integrations, agents, and workflow automation.",
//     icon: "FaRobot",
//     accentColor: "#F4A500",
//     image: "/artificial-intelligence-machine-learning-neural-ne.jpg",
//     details: {
//       fullDescription:
//         "Leverage artificial intelligence and automation to streamline your business processes and improve efficiency.",
//       features: [
//         "AI model integration",
//         "Chatbot development",
//         "Workflow automation",
//         "Machine learning pipelines",
//         "Natural language processing",
//         "Computer vision solutions",
//       ],
//       technologies: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "Python"],
//       process: [
//         "Problem Definition",
//         "Data Collection",
//         "Model Training",
//         "Integration",
//         "Testing & Validation",
//         "Deployment & Monitoring",
//       ],
//       caseStudies: [
//         { title: "Customer Support Bot", result: "80% automation rate", metric: "Efficiency" },
//         { title: "Document Processing", result: "10x faster processing", metric: "Speed" },
//         { title: "Predictive Analytics", result: "92% accuracy", metric: "Accuracy" },
//       ],
//       benefits: [
//         {
//           icon: FaTrophy,
//           title: "Intelligent Automation",
//           description: "Automate complex workflows with AI-powered decision making and learning capabilities.",
//         },
//         {
//           icon: FaUsers,
//           title: "24/7 Customer Support",
//           description: "Deploy intelligent chatbots that handle customer inquiries round the clock.",
//         },
//         {
//           icon: FaLightbulb,
//           title: "Data-Driven Insights",
//           description: "Unlock actionable insights from your data with advanced machine learning models.",
//         },
//       ],
//       roi: [
//         { metric: "Cost Reduction", value: "65%", description: "Operational expenses" },
//         { metric: "Processing Speed", value: "10x Faster", description: "Automated workflows" },
//         { metric: "Accuracy", value: "99.2%", description: "AI model performance" },
//       ],
//       testimonials: [
//         {
//           name: "James Wilson",
//           role: "Operations Director, LogisticsPro",
//           content:
//             "The AI automation solution reduced our operational costs by 65%. It's been a game-changer for our business.",
//           rating: 5,
//         },
//         {
//           name: "Lisa Anderson",
//           role: "VP Product, CustomerFirst",
//           content:
//             "Our support team can now focus on complex issues. The chatbot handles 80% of inquiries automatically.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         {
//           category: "AI/ML Frameworks",
//           items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM"],
//         },
//         {
//           category: "LLM Integration",
//           items: ["OpenAI GPT", "Claude", "Llama", "LangChain", "Vector Databases"],
//         },
//         {
//           category: "Data Processing",
//           items: ["Pandas", "NumPy", "Apache Spark", "Airflow", "ETL Pipelines"],
//         },
//         {
//           category: "Deployment",
//           items: ["TensorFlow Serving", "MLflow", "Docker", "Kubernetes", "Model Monitoring"],
//         },
//       ],
//     },
//   },
//   {
//     id: 4,
//     slug: "cloud-devops",
//     title: "Cloud & DevOps",
//     subtitle: "Infrastructure Excellence",
//     description: "Scalable infra, CI/CD, and observability.",
//     icon: "FaCloud",
//     accentColor: "#F4A500",
//     image: "/cloud-infrastructure-server-architecture-devops.jpg",
//     details: {
//       fullDescription:
//         "Build robust cloud infrastructure with continuous integration, deployment, and comprehensive monitoring solutions.",
//       features: [
//         "Cloud architecture design",
//         "CI/CD pipeline setup",
//         "Infrastructure as Code",
//         "Container orchestration",
//         "Monitoring & logging",
//         "Disaster recovery",
//       ],
//       technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins"],
//       process: [
//         "Infrastructure Assessment",
//         "Architecture Design",
//         "Implementation",
//         "Automation Setup",
//         "Monitoring Configuration",
//         "Optimization & Scaling",
//       ],
//       caseStudies: [
//         { title: "Multi-region Deployment", result: "99.99% uptime", metric: "Reliability" },
//         { title: "CI/CD Pipeline", result: "50% faster releases", metric: "Velocity" },
//         { title: "Cost Optimization", result: "40% savings", metric: "Efficiency" },
//       ],
//       benefits: [
//         {
//           icon: FaTrophy,
//           title: "Enterprise Reliability",
//           description: "Achieve 99.99% uptime with multi-region deployment and automatic failover.",
//         },
//         {
//           icon: FaUsers,
//           title: "Rapid Deployment",
//           description: "Deploy updates in minutes with fully automated CI/CD pipelines.",
//         },
//         {
//           icon: FaLightbulb,
//           title: "Cost Optimization",
//           description: "Reduce infrastructure costs by 40% with intelligent resource management.",
//         },
//       ],
//       roi: [
//         { metric: "Uptime", value: "99.99%", description: "Enterprise-grade reliability" },
//         { metric: "Deployment Speed", value: "50% Faster", description: "Automated pipelines" },
//         { metric: "Cost Savings", value: "40%", description: "Infrastructure optimization" },
//       ],
//       testimonials: [
//         {
//           name: "Robert Martinez",
//           role: "CTO, ScaleUp Tech",
//           content:
//             "Our infrastructure is now bulletproof. 99.99% uptime and we can deploy 10x faster. Highly recommended.",
//           rating: 5,
//         },
//         {
//           name: "Jennifer Lee",
//           role: "DevOps Lead, CloudFirst",
//           content:
//             "The DevOps transformation was seamless. Our team productivity increased significantly with the new pipelines.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         {
//           category: "Cloud Platforms",
//           items: ["AWS", "Google Cloud", "Azure", "Multi-cloud", "Hybrid Cloud"],
//         },
//         {
//           category: "Container Orchestration",
//           items: ["Kubernetes", "Docker Swarm", "ECS", "GKE", "AKS"],
//         },
//         {
//           category: "Infrastructure as Code",
//           items: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "CDK"],
//         },
//         {
//           category: "Monitoring & Observability",
//           items: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"],
//         },
//       ],
//     },
//   },
//   {
//     id: 5,
//     slug: "ui-ux-design",
//     title: "UI/UX Design",
//     subtitle: "User-Centered Design Strategy",
//     description: "Human-centered, conversion-focused design.",
//     icon: "FaPalette",
//     accentColor: "#F4A500",
//     image: "/ui-ux-design-interface-wireframe-prototyping.jpg",
//     details: {
//       fullDescription:
//         "Create beautiful, intuitive user interfaces that drive conversions and delight users with thoughtful design.",
//       features: [
//         "User research & testing",
//         "Wireframing & prototyping",
//         "Visual design",
//         "Interaction design",
//         "Design systems",
//         "Accessibility compliance",
//       ],
//       technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow", "Storybook"],
//       process: ["User Research", "Wireframing", "Visual Design", "Prototyping", "User Testing", "Design Handoff"],
//       caseStudies: [
//         { title: "Redesign Project", result: "45% conversion increase", metric: "Conversions" },
//         { title: "Design System", result: "60% faster development", metric: "Productivity" },
//         { title: "Mobile Optimization", result: "3x engagement", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: FaTrophy,
//           title: "Conversion Optimization",
//           description: "Increase conversions by 45% with data-driven design decisions and A/B testing.",
//         },
//         {
//           icon: FaUsers,
//           title: "User Delight",
//           description: "Create memorable experiences that keep users coming back for more.",
//         },
//         {
//           icon: FaLightbulb,
//           title: "Design Systems",
//           description: "Build scalable design systems that accelerate development by 60%.",
//         },
//       ],
//       roi: [
//         { metric: "Conversion Rate", value: "+45%", description: "Improved user experience" },
//         { metric: "Development Speed", value: "60% Faster", description: "Design system benefits" },
//         { metric: "User Engagement", value: "+300%", description: "Enhanced interactions" },
//       ],
//       testimonials: [
//         {
//           name: "Amanda Foster",
//           role: "Marketing Director, GrowthCo",
//           content: "The redesign increased our conversions by 45%. The design team understood our users perfectly.",
//           rating: 5,
//         },
//         {
//           name: "Thomas Brown",
//           role: "Product Lead, InnovateLabs",
//           content:
//             "The design system saved us months of development time. Quality and consistency improved dramatically.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         {
//           category: "Design Tools",
//           items: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow"],
//         },
//         {
//           category: "Prototyping",
//           items: ["Framer Motion", "Principle", "Proto.io", "InVision", "Marvel"],
//         },
//         {
//           category: "User Research",
//           items: ["UserTesting", "Hotjar", "Mixpanel", "Amplitude", "Fullstory"],
//         },
//         {
//           category: "Design Systems",
//           items: ["Storybook", "Zeroheight", "Supernova", "Zeplin", "Abstract"],
//         },
//       ],
//     },
//   },
//   {
//     id: 6,
//     slug: "ecommerce",
//     title: "E-commerce",
//     subtitle: "Headless Commerce Platforms",
//     description: "Headless storefronts with Stripe.",
//     icon: "FaShoppingCart",
//     accentColor: "#F4A500",
//     image: "/ecommerce-online-store-shopping-cart-payment.jpg",
//     details: {
//       fullDescription:
//         "Build powerful e-commerce solutions with flexible, scalable architecture and seamless payment integration.",
//       features: [
//         "Headless commerce setup",
//         "Payment gateway integration",
//         "Inventory management",
//         "Order tracking",
//         "Customer analytics",
//         "Multi-currency support",
//       ],
//       technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Contentful", "Algolia"],
//       process: [
//         "Platform Selection",
//         "Store Setup",
//         "Product Integration",
//         "Payment Configuration",
//         "Testing & Launch",
//         "Growth Optimization",
//       ],
//       caseStudies: [
//         { title: "Fashion Store", result: "$2M+ annual revenue", metric: "Revenue" },
//         { title: "Digital Products", result: "10K+ customers", metric: "Customers" },
//         { title: "Marketplace", result: "500+ sellers", metric: "Scale" },
//       ],
//       benefits: [
//         {
//           icon: FaTrophy,
//           title: "Revenue Growth",
//           description: "Achieve $2M+ annual revenue with optimized checkout and conversion funnels.",
//         },
//         {
//           icon: FaUsers,
//           title: "Scalable Platform",
//           description: "Support thousands of concurrent shoppers with enterprise-grade infrastructure.",
//         },
//         {
//           icon: FaLightbulb,
//           title: "Flexible Architecture",
//           description: "Headless commerce enables omnichannel selling across web, mobile, and social.",
//         },
//       ],
//       roi: [
//         { metric: "Revenue", value: "$2M+", description: "Annual revenue potential" },
//         { metric: "Conversion Rate", value: "+35%", description: "Optimized checkout" },
//         { metric: "Customer Lifetime Value", value: "+150%", description: "Retention strategies" },
//       ],
//       testimonials: [
//         {
//           name: "Victoria Chen",
//           role: "Founder, FashionHub",
//           content:
//             "Our e-commerce platform generated $2M in revenue in the first year. The team's expertise was invaluable.",
//           rating: 5,
//         },
//         {
//           name: "Marcus Johnson",
//           role: "CEO, DigitalGoods",
//           content:
//             "The headless commerce setup gave us incredible flexibility. We can now sell on any channel seamlessly.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         {
//           category: "Commerce Platforms",
//           items: ["Shopify", "WooCommerce", "BigCommerce", "Medusa", "Saleor"],
//         },
//         {
//           category: "Payment Processing",
//           items: ["Stripe", "PayPal", "Square", "Adyen", "Razorpay"],
//         },
//         {
//           category: "Content Management",
//           items: ["Contentful", "Sanity", "Strapi", "Shopify Headless", "Commerce Layer"],
//         },
//         {
//           category: "Search & Analytics",
//           items: ["Algolia", "Elasticsearch", "Google Analytics", "Mixpanel", "Segment"],
//         },
//       ],
//     },
//   },
// ]
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
