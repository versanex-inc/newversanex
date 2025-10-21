// "use client"

// import { useEffect, useRef, useState } from "react"
// import { useParams } from "next/navigation"
// import Link from "next/link"
// import gsap from "gsap"
// import { FaArrowLeft, FaCheck, FaArrowRight, FaStar, FaQuoteLeft, FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa"
// import HorizontalScroller from "@/components/services/horizontal-scroller"

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

// export default function ServiceDetailPage() {
//   const params = useParams()
//   const slug = params.slug
//   const service = services.find((s) => s.slug === slug)

//   const containerRef = useRef(null)
//   const headerRef = useRef(null)
//   const contentRef = useRef(null)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     setIsLoading(false)

//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     })

//     gsap.from(contentRef.current?.children, {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "power3.out",
//       delay: 0.3,
//     })
//   }, [])

//   if (!service) {
//     return (
//       <main className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h1>
//           <Link href="/services" className="text-amber-600 hover:text-amber-700 font-semibold">
//             Back to Services
//           </Link>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <main ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       {/* Back Button */}
//       <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <Link
//             href="/services"
//             className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
//           >
//             <FaArrowLeft className="w-4 h-4" />
//             Back to Services
//           </Link>
//         </div>
//       </div>

//       <div
//         ref={headerRef}
//         className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
//       >
//         {/* Accent element */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full mb-6 border border-amber-500/30">
//             <FaStar className="w-4 h-4" />
//             <span className="text-sm font-semibold">Premium Service</span>
//           </div>
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
//             {service.title}
//           </h1>
//           <p className="text-xl text-slate-300 max-w-3xl text-balance leading-relaxed">
//             {service.details.fullDescription}
//           </p>
//         </div>
//       </div>

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//           <img
//             src={service.image || "/placeholder.svg"}
//             alt={service.title}
//             className="w-full h-auto object-cover"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
//         </div>
//       </section>

//       <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Benefits</h2>
//             <p className="text-lg text-slate-600">Why choose our {service.title.toLowerCase()} service</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {service.details.benefits.map((benefit, index) => {
//               const BenefitIcon = benefit.icon
//               return (
//                 <div
//                   key={index}
//                   className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors mb-6">
//                     <BenefitIcon className="w-7 h-7 text-amber-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
//                   <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </section>

//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">ROI & Metrics</h2>
//             <p className="text-lg text-slate-600">
//               Measurable results from our {service.title.toLowerCase()} solutions
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {service.details.roi.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200 hover:shadow-lg transition-all duration-300"
//               >
//                 <p className="text-sm font-semibold text-amber-600 mb-2">{item.metric}</p>
//                 <p className="text-4xl font-bold text-slate-900 mb-2">{item.value}</p>
//                 <p className="text-slate-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Features Section */}
//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
//             <p className="text-lg text-slate-600">Everything you need to succeed with {service.title.toLowerCase()}</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
//                       <FaCheck className="w-5 h-5 text-amber-600" />
//                     </div>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-slate-900 text-lg">{feature}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Stack</h2>
//             <p className="text-lg text-slate-600">Comprehensive breakdown of our technical expertise</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {service.details.techStackDetails.map((stack, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
//               >
//                 <h3 className="text-xl font-bold text-slate-900 mb-6">{stack.category}</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {stack.items.map((item, itemIndex) => (
//                     <span
//                       key={itemIndex}
//                       className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-semibold border border-amber-200 hover:bg-amber-100 transition-colors"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Technologies Section */}
//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Technologies</h2>
//             <p className="text-lg text-slate-600">We use industry-leading technologies to deliver excellence</p>
//           </div>
//           <HorizontalScroller items={service.details.technologies} />
//         </section>

//         {/* Process Section */}
//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
//             <p className="text-lg text-slate-600">A structured approach to delivering exceptional results</p>
//           </div>
//           <div className="space-y-4">
//             {service.details.process.map((step, index) => (
//               <div
//                 key={index}
//                 className="group flex items-center gap-6 p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
//                   {index + 1}
//                 </div>
//                 <div className="flex-grow">
//                   <p className="text-xl font-semibold text-slate-900">{step}</p>
//                 </div>
//                 {index < service.details.process.length - 1 && (
//                   <FaArrowRight className="w-5 h-5 text-slate-300 hidden sm:block group-hover:text-amber-500 transition-colors" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Case Studies Section */}
//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Case Studies & Results</h2>
//             <p className="text-lg text-slate-600">Real results from real projects</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {service.details.caseStudies.map((study, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full mb-6 border border-amber-500/20">
//                   <span className="text-xs font-semibold">{study.metric}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
//                   {study.title}
//                 </h3>
//                 <p className="text-3xl font-bold text-amber-600 mb-2">{study.result}</p>
//                 <p className="text-sm text-slate-600">Achieved through strategic implementation and optimization</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
//             <p className="text-lg text-slate-600">What our clients say about working with us</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {service.details.testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex gap-1 mb-6">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className="w-5 h-5 text-amber-400" />
//                   ))}
//                 </div>
//                 <div className="mb-6">
//                   <FaQuoteLeft className="w-6 h-6 text-amber-500/30 mb-4" />
//                   <p className="text-slate-700 leading-relaxed italic">{testimonial.content}</p>
//                 </div>
//                 <div className="border-t border-slate-200 pt-6">
//                   <p className="font-bold text-slate-900">{testimonial.name}</p>
//                   <p className="text-sm text-slate-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 sm:p-16 text-white text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto text-balance">
//             Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}. Our team is ready
//             to transform your vision into reality.
//           </p>
//           <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//             Schedule a Consultation
//             <FaArrowRight className="w-4 h-4" />
//           </button>
//         </section>
//       </div>
//     </main>
//   )
// }



















// "use client"

// import { useEffect, useRef, useState } from "react"
// import { useParams } from "next/navigation"
// import Link from "next/link"
// import gsap from "gsap"
// import { FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";
// // import { FaArrowLeft, FaCheck, FaArrowRight, FaStar, FaQuoteLeft, FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa"
// import { FaCheck, FaArrowRight, FaStar, FaQuoteLeft} from "react-icons/fa"
// import HorizontalScroller from "@/components/services/horizontal-scroller"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// const services = [
//   // 1. Web Apps
//   {
//     id: 1,
//     slug: "web-apps",
//     title: "Web Apps",
//     subtitle: "High-Performance Digital Solutions",
//     description: "Build scalable, high-performance web applications optimized for SEO and speed.",
//     icon: "FaCode",
//     accentColor: "#F4A500",
//     image: "/modern-web-application-dashboard-with-analytics.jpg",
//     details: {
//       fullDescription:
//         "Our web app development services deliver lightning-fast, secure, and scalable solutions. We specialize in Next.js, React, and modern architectures that ensure seamless performance and outstanding UX across all devices.",
//       features: [
//         "SEO-optimized and blazing fast",
//         "Fully responsive design",
//         "Next.js & React architecture",
//         "API-first integrations",
//         "Secure authentication systems",
//         "Performance tuning & caching",
//       ],
//       technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
//       process: ["Discovery", "Design", "Development", "Testing", "Deployment", "Maintenance"],
//       caseStudies: [
//         { title: "Analytics SaaS Platform", result: "95 Lighthouse score", metric: "Performance" },
//         { title: "E-learning Portal", result: "1M+ active users", metric: "Scalability" },
//         { title: "Corporate Website", result: "SEO traffic +220%", metric: "Growth" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Top-Tier Performance",
//           description: "Deliver apps with sub-second load times for a seamless user experience.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Scalable & Secure",
//           description: "Built to grow with your business, from MVP to enterprise scale.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Future-Ready",
//           description: "Using cutting-edge frameworks and cloud-native deployments.",
//         },
//       ],
//       roi: [
//         { metric: "Load Speed", value: "0.9s", description: "Optimized Lighthouse performance" },
//         { metric: "Retention", value: "+160%", description: "Improved user engagement" },
//         { metric: "Revenue Growth", value: "+200%", description: "SEO-driven traffic" },
//       ],
//       testimonials: [
//         {
//           name: "Sarah Johnson",
//           role: "CEO, TechStart Inc",
//           content:
//             "Our web app became a core growth engine for the company. The performance and SEO optimization are world-class.",
//           rating: 5,
//         },
//         {
//           name: "David Kim",
//           role: "CTO, Growthify",
//           content:
//             "Exceptional experience—clean code, scalable design, and measurable results from day one.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
//         { category: "Backend", items: ["Node.js", "Express", "REST/GraphQL", "Authentication"] },
//         { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
//         { category: "Deployment", items: ["Vercel", "AWS", "Docker", "CI/CD Pipelines"] },
//       ],
//     },
//   },

//   // 2. Shopify Stores
//   {
//     id: 2,
//     slug: "shopify-stores",
//     title: "Shopify Stores",
//     subtitle: "Custom E-commerce Experiences",
//     description: "Launch high-converting, beautifully designed Shopify stores tailored to your brand.",
//     icon: "FaShopify",
//     accentColor: "#F4A500",
//     image: "/shopify-storefront-design-ecommerce.jpg",
//     details: {
//       fullDescription:
//         "We build stunning, conversion-focused Shopify stores that elevate your brand and boost sales. From custom themes to advanced integrations, we deliver stores that perform beautifully and sell effortlessly.",
//       features: [
//         "Custom Shopify theme design",
//         "Speed optimization & SEO setup",
//         "App integrations & automation",
//         "Payment gateway configuration",
//         "Conversion tracking & analytics",
//         "Ongoing support & scaling",
//       ],
//       technologies: ["Shopify", "Liquid", "React", "Hydrogen", "Shopify Plus", "Stripe"],
//       process: ["Strategy", "Design", "Development", "Testing", "Launch", "Optimization"],
//       caseStudies: [
//         { title: "Luxury Apparel Brand", result: "+180% sales growth", metric: "Revenue" },
//         { title: "Beauty & Skincare Store", result: "3x conversion rate", metric: "Conversion" },
//         { title: "Dropshipping Store", result: "Automated 90% of operations", metric: "Efficiency" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Optimized for Sales",
//           description: "Boost conversions with optimized UX and data-driven design.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Custom Branding",
//           description: "Tailored themes that perfectly reflect your brand’s identity.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Seamless Integrations",
//           description: "Connect CRMs, analytics, and marketing tools for maximum performance.",
//         },
//       ],
//       roi: [
//         { metric: "Sales Increase", value: "+180%", description: "After relaunch" },
//         { metric: "Conversion Rate", value: "+250%", description: "Optimized checkout" },
//         { metric: "Customer Retention", value: "+130%", description: "Personalized experience" },
//       ],
//       testimonials: [
//         {
//           name: "Jessica Wong",
//           role: "Founder, Glowify",
//           content:
//             "They built a Shopify store that doubled our conversions. The attention to detail and speed were impressive.",
//           rating: 5,
//         },
//         {
//           name: "Ryan Patel",
//           role: "CEO, LuxeCraft",
//           content:
//             "Our brand has never looked better online. Every pixel and interaction feels premium.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Platform", items: ["Shopify", "Shopify Plus", "Hydrogen", "Liquid"] },
//         { category: "Integrations", items: ["Klaviyo", "Meta Ads", "Google Analytics", "Hotjar"] },
//         { category: "Payments", items: ["Stripe", "Shopify Payments", "PayPal"] },
//         { category: "Automation", items: ["Shopify Flow", "Zapier", "Omnisend"] },
//       ],
//     },
//   },

//   // 3. WordPress Websites
//   {
//     id: 3,
//     slug: "wordpress-websites",
//     title: "WordPress Websites",
//     subtitle: "Flexible & Manageable CMS Solutions",
//     description: "Beautiful, SEO-ready WordPress websites with easy content control and performance optimization.",
//     icon: "FaWordpress",
//     accentColor: "#F4A500",
//     image: "/wordpress-website-design-agency-cms.jpg",
//     details: {
//       fullDescription:
//         "We craft stunning, high-performance WordPress websites tailored to your brand and goals. Whether corporate, blog, or portfolio — our sites are secure, scalable, and simple to manage.",
//       features: [
//         "Custom WordPress theme development",
//         "SEO optimization & analytics setup",
//         "WooCommerce store integration",
//         "Speed & performance tuning",
//         "Security hardening & backups",
//         "Content training & support",
//       ],
//       technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL", "Yoast SEO"],
//       process: ["Discovery", "Wireframing", "Development", "QA", "Launch", "Training"],
//       caseStudies: [
//         { title: "Corporate Website", result: "+200% organic traffic", metric: "SEO" },
//         { title: "Portfolio Website", result: "3x more client inquiries", metric: "Leads" },
//         { title: "News Portal", result: "200K+ readers monthly", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "SEO-First Approach",
//           description: "Rank faster with our structured data and keyword-optimized builds.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Easy CMS Management",
//           description: "Update your content with zero technical knowledge.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Flexible Integrations",
//           description: "From WooCommerce to CRMs, we integrate it all.",
//         },
//       ],
//       roi: [
//         { metric: "Traffic Growth", value: "+200%", description: "Within 3 months" },
//         { metric: "Conversion Rate", value: "+130%", description: "After redesign" },
//         { metric: "Maintenance Cost", value: "-50%", description: "Optimized hosting setup" },
//       ],
//       testimonials: [
//         {
//           name: "Ayesha Malik",
//           role: "Founder, MediaSpark",
//           content:
//             "Our new WordPress website elevated our brand visibility and tripled our leads.",
//           rating: 5,
//         },
//         {
//           name: "John Edwards",
//           role: "Editor, CityNews",
//           content:
//             "Super-fast and secure WordPress setup — perfect for our high-traffic portal.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "CMS", items: ["WordPress", "WooCommerce", "Elementor", "ACF"] },
//         { category: "Optimization", items: ["WP Rocket", "Yoast SEO", "Cloudflare", "CDN"] },
//         { category: "Backend", items: ["PHP", "MySQL", "REST API", "cPanel"] },
//         { category: "Hosting", items: ["Kinsta", "WP Engine", "Hostinger"] },
//       ],
//     },
//   },
//   // 4. Digital Marketing
//   {
//     id: 4,
//     slug: "digital-marketing",
//     title: "Digital Marketing",
//     subtitle: "Data-Driven Growth Strategies",
//     description: "Maximize brand reach and ROI with targeted campaigns and analytics-driven strategies.",
//     icon: "FaBullhorn",
//     accentColor: "#F4A500",
//     image: "/digital-marketing-strategy-analytics.jpg",
//     details: {
//       fullDescription:
//         "Our digital marketing solutions drive measurable growth across SEO, PPC, social media, and content marketing. We focus on strategy, execution, and continuous optimization to increase traffic, conversions, and brand awareness.",
//       features: [
//         "SEO & content marketing",
//         "Paid media & PPC campaigns",
//         "Social media management",
//         "Email marketing & automation",
//         "Conversion optimization",
//         "Analytics & reporting",
//       ],
//       technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Ahrefs", "SEMRush", "Mailchimp"],
//       process: ["Research & Audit", "Strategy & Planning", "Campaign Execution", "Optimization", "Reporting", "Scaling"],
//       caseStudies: [
//         { title: "E-commerce Campaign", result: "5x ROI", metric: "Revenue" },
//         { title: "B2B Lead Gen", result: "300+ leads/month", metric: "Leads" },
//         { title: "Social Growth", result: "10K+ followers in 3 months", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Targeted Traffic",
//           description: "Reach high-intent users and maximize conversion opportunities.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Brand Authority",
//           description: "Build trust and credibility through strategic campaigns and content.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Actionable Insights",
//           description: "Data-driven decisions to optimize campaigns and ROI.",
//         },
//       ],
//       roi: [
//         { metric: "Lead Generation", value: "+300%", description: "Month-over-month growth" },
//         { metric: "Revenue Growth", value: "5x", description: "Through targeted campaigns" },
//         { metric: "Engagement", value: "+250%", description: "Across social platforms" },
//       ],
//       testimonials: [
//         {
//           name: "Olivia Martin",
//           role: "CMO, RetailCorp",
//           content: "Our digital campaigns brought measurable growth and exceeded all KPIs.",
//           rating: 5,
//         },
//         {
//           name: "Liam Harris",
//           role: "Founder, StartupBoost",
//           content: "The team drove lead generation and brand visibility beyond expectations.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Analytics", items: ["Google Analytics", "Hotjar", "Mixpanel"] },
//         { category: "SEO Tools", items: ["Ahrefs", "SEMRush", "Moz"] },
//         { category: "PPC & Ads", items: ["Google Ads", "Facebook Ads", "LinkedIn Ads"] },
//         { category: "Email Automation", items: ["Mailchimp", "HubSpot", "ActiveCampaign"] },
//       ],
//     },
//   },

//   // 5. Video Editing
//   {
//     id: 5,
//     slug: "video-editing",
//     title: "Video Editing",
//     subtitle: "Captivating Storytelling Through Video",
//     description: "Professional video editing services to bring your stories to life and engage audiences.",
//     icon: "FaVideo",
//     accentColor: "#F4A500",
//     image: "/professional-video-editing-studio.jpg",
//     details: {
//       fullDescription:
//         "We transform raw footage into compelling videos for marketing, social media, corporate, or cinematic purposes. Our team combines creativity, storytelling, and technical expertise for maximum impact.",
//       features: [
//         "Professional editing & post-production",
//         "Motion graphics & animation",
//         "Color grading & correction",
//         "Sound design & mixing",
//         "Social media-ready formats",
//         "Storyboarding & creative direction",
//       ],
//       technologies: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
//       process: ["Concept & Script", "Storyboarding", "Editing", "Motion Graphics", "Color Grading", "Delivery"],
//       caseStudies: [
//         { title: "Brand Promo Video", result: "50% higher engagement", metric: "Views" },
//         { title: "YouTube Series", result: "100K+ subscribers", metric: "Growth" },
//         { title: "Product Launch", result: "30% conversion uplift", metric: "ROI" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Engaging Content",
//           description: "Captivate your audience with polished, professional storytelling.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Multi-Platform Ready",
//           description: "Videos optimized for social media, web, or broadcast channels.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Creative Excellence",
//           description: "Bring ideas to life with cinematic-quality editing and effects.",
//         },
//       ],
//       roi: [
//         { metric: "Engagement", value: "+50%", description: "Higher video interactions" },
//         { metric: "Conversions", value: "+30%", description: "From video-driven campaigns" },
//         { metric: "Brand Recall", value: "+200%", description: "Memorable storytelling" },
//       ],
//       testimonials: [
//         {
//           name: "Sophia Lee",
//           role: "Marketing Director, VisualBrand",
//           content: "The videos elevated our brand storytelling and delivered measurable engagement.",
//           rating: 5,
//         },
//         {
//           name: "Ethan Walker",
//           role: "Founder, MediaVision",
//           content: "Professional, creative, and fast. Our video campaigns never looked better.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Editing", items: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"] },
//         { category: "Motion Graphics", items: ["After Effects", "Cinema 4D", "Blender"] },
//         { category: "Sound & Music", items: ["Audition", "Logic Pro", "Ableton"] },
//         { category: "Collaboration", items: ["Frame.io", "Dropbox", "Google Drive"] },
//       ],
//     },
//   },

//   // 6. Graphic Designing
//   {
//     id: 6,
//     slug: "graphic-designing",
//     title: "Graphic Designing",
//     subtitle: "Visual Identity & Brand Expression",
//     description: "Transform ideas into visually stunning graphics that communicate your brand message.",
//     icon: "FaPaintBrush",
//     accentColor: "#F4A500",
//     image: "/graphic-design-creative-studio.jpg",
//     details: {
//       fullDescription:
//         "Our graphic design services create compelling visuals for digital, print, and social platforms. We focus on aesthetics, brand consistency, and audience impact to elevate your brand presence.",
//       features: [
//         "Brand identity & logo design",
//         "Marketing collaterals & brochures",
//         "Infographics & illustrations",
//         "Social media graphics",
//         "Packaging & product design",
//         "Print & digital design",
//       ],
//       technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "CorelDRAW", "Canva"],
//       process: ["Research", "Concept Design", "Iteration", "Finalization", "Delivery", "Support"],
//       caseStudies: [
//         { title: "Brand Re-Design", result: "40% more brand recognition", metric: "Awareness" },
//         { title: "Marketing Campaigns", result: "+25% engagement", metric: "Engagement" },
//         { title: "Product Packaging", result: "3x higher sales", metric: "Sales" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Brand Impact",
//           description: "Visually elevate your brand across all digital and offline channels.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Consistent Identity",
//           description: "Maintain cohesive brand visuals across all campaigns and products.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Creative Excellence",
//           description: "Combine design thinking and aesthetics to create memorable visuals.",
//         },
//       ],
//       roi: [
//         { metric: "Brand Awareness", value: "+40%", description: "Stronger market presence" },
//         { metric: "Engagement", value: "+25%", description: "Higher social interaction" },
//         { metric: "Sales Impact", value: "3x", description: "Through compelling design" },
//       ],
//       testimonials: [
//         {
//           name: "Nora Simmons",
//           role: "CMO, BrandWorks",
//           content: "The design team transformed our visual identity, boosting engagement and recognition.",
//           rating: 5,
//         },
//         {
//           name: "Daniel Cruz",
//           role: "Founder, CreativeSpark",
//           content: "Highly creative and professional. They deliver designs that truly resonate.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Design Tools", items: ["Adobe Photoshop", "Illustrator", "Figma", "CorelDRAW"] },
//         { category: "Prototyping", items: ["Figma", "InVision", "Adobe XD"] },
//         { category: "Illustration", items: ["Procreate", "Adobe Illustrator", "Affinity Designer"] },
//         { category: "Collaboration", items: ["Slack", "Dropbox", "Notion"] },
//       ],
//     },
//   },

//   // 7. SQA (Software Quality Assurance)
//   {
//     id: 7,
//     slug: "sqa",
//     title: "Software QA & Testing",
//     subtitle: "Reliability & Bug-Free Solutions",
//     description: "Ensure high-quality, reliable software with automated and manual testing strategies.",
//     icon: "FaCheckCircle",
//     accentColor: "#F4A500",
//     image: "/software-testing-quality-assurance.jpg",
//     details: {
//       fullDescription:
//         "Our SQA services guarantee software stability, performance, and user satisfaction. We implement comprehensive manual and automated testing for web, mobile, and enterprise applications.",
//       features: [
//         "Functional & regression testing",
//         "Performance & load testing",
//         "Automation frameworks",
//         "Cross-browser & device testing",
//         "Security & penetration testing",
//         "Continuous integration testing",
//       ],
//       technologies: ["Selenium", "Cypress", "Jest", "TestRail", "Postman", "JMeter"],
//       process: ["Test Planning", "Test Design", "Execution", "Defect Tracking", "Automation", "Reporting"],
//       caseStudies: [
//         { title: "Enterprise SaaS", result: "99.9% uptime", metric: "Reliability" },
//         { title: "Mobile App Testing", result: "100K+ active users bug-free", metric: "Quality" },
//         { title: "E-commerce Platform", result: "0 critical bugs post-launch", metric: "Stability" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Bug-Free Delivery",
//           description: "Detect and fix issues before they affect your users.",
//         },
//         {
//           icon: "FaUsers",
//           title: "User Confidence",
//           description: "Deliver applications that are secure, fast, and reliable.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Optimized Performance",
//           description: "Ensure smooth operations even under peak load conditions.",
//         },
//       ],
//       roi: [
//         { metric: "Bug Reduction", value: "90%", description: "Fewer post-launch issues" },
//         { metric: "Release Speed", value: "2x Faster", description: "With automated testing" },
//         { metric: "User Satisfaction", value: "+35%", description: "Improved product quality" },
//       ],
//       testimonials: [
//         {
//           name: "Sophia White",
//           role: "QA Lead, FinTech Solutions",
//           content: "Their testing ensured our platform launched without critical issues. Highly reliable team.",
//           rating: 5,
//         },
//         {
//           name: "Ethan Brooks",
//           role: "CTO, CloudWorks",
//           content: "Comprehensive QA coverage with clear reporting. Saved us weeks of potential debugging.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Automation Tools", items: ["Selenium", "Cypress", "Jest", "Appium"] },
//         { category: "Performance Testing", items: ["JMeter", "LoadRunner", "Gatling"] },
//         { category: "API Testing", items: ["Postman", "Swagger", "REST Assured"] },
//         { category: "Test Management", items: ["TestRail", "Jira", "Zephyr"] },
//       ],
//     },
//   },

//   // 8. Content Writing
//   {
//     id: 8,
//     slug: "content-writing",
//     title: "Content Writing",
//     subtitle: "Engaging & SEO-Optimized Content",
//     description: "Create compelling content that informs, converts, and ranks high on search engines.",
//     icon: "FaPenNib",
//     accentColor: "#F4A500",
//     image: "/content-writing-digital-marketing.jpg",
//     details: {
//       fullDescription:
//         "Our content writing services deliver high-quality, engaging copy for websites, blogs, social media, and marketing campaigns. All content is SEO-optimized and aligned with your brand voice.",
//       features: [
//         "SEO-friendly blog posts & articles",
//         "Website copywriting & landing pages",
//         "Social media content & ad copy",
//         "Technical & product writing",
//         "Content strategy & planning",
//         "Editing & proofreading",
//       ],
//       technologies: ["WordPress", "Ahrefs", "SEMRush", "Grammarly", "Hemingway Editor", "Google Docs"],
//       process: ["Research", "Content Strategy", "Writing", "SEO Optimization", "Editing", "Publishing"],
//       caseStudies: [
//         { title: "Tech Blog Series", result: "+300% traffic", metric: "Organic Reach" },
//         { title: "E-commerce Product Copy", result: "25% higher conversions", metric: "Sales" },
//         { title: "Social Campaign", result: "10K+ engagements", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "SEO-Optimized",
//           description: "Boost organic visibility and attract high-intent traffic.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Audience Engagement",
//           description: "Content that captivates readers and drives interactions.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Brand Consistency",
//           description: "Maintain a consistent tone of voice across all platforms.",
//         },
//       ],
//       roi: [
//         { metric: "Organic Traffic", value: "+300%", description: "Through targeted content" },
//         { metric: "Conversions", value: "+25%", description: "With persuasive copywriting" },
//         { metric: "Engagement", value: "+150%", description: "Across social channels" },
//       ],
//       testimonials: [
//         {
//           name: "Mia Thompson",
//           role: "Content Manager, EduTech",
//           content: "The content strategy and writing significantly increased our organic traffic and engagement.",
//           rating: 5,
//         },
//         {
//           name: "Liam Johnson",
//           role: "Founder, ShopEase",
//           content: "Professional, creative, and SEO-focused writing that directly improved conversions.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "SEO & Research", items: ["Ahrefs", "SEMRush", "Google Keyword Planner"] },
//         { category: "Writing Tools", items: ["Grammarly", "Hemingway Editor", "Google Docs"] },
//         { category: "CMS", items: ["WordPress", "Shopify", "Webflow"] },
//         { category: "Collaboration", items: ["Notion", "Trello", "Slack"] },
//       ],
//     },
//   },
// ];


// export default function ServiceDetailPage() {
//   const params = useParams()
//   const slug = params.slug
//   const service = services.find((s) => s.slug === slug)

//   const containerRef = useRef(null)
//   const headerRef = useRef(null)
//   const contentRef = useRef(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   useEffect(() => {
//     setIsLoading(false)

//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     })

//     gsap.from(contentRef.current?.children, {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "power3.out",
//       delay: 0.3,
//     })
//   }, [])

//   if (!service) {
//     return (
//       <main className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
//           <Link href="/services" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
//             Back to Services
//           </Link>
//         </div>
//       </main>
//     )
//   }
  
//   if (!mounted) return null; // prevent initial incorrect render


//   return (
//     <><Navbar/>
//     <main ref={containerRef} className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div
//         ref={headerRef}
//         className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
//       >
//         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full mb-4 border border-amber-500/30">
//             <FaStar className="w-4 h-4" />
//             <span className="text-sm font-medium">Premium Service</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
//             {service.title}
//           </h1>
//           <p className="text-lg text-gray-300 max-w-2xl text-balance leading-relaxed">
//             {service.details.fullDescription}
//           </p>
//         </div>
//       </div>

//       {/* Image Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
//           <img
//             src={service.image || "/placeholder.svg"}
//             alt={service.title}
//             className="w-full h-64 sm:h-80 object-cover object-center"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
//         </div>
//       </section>

//       <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
//         {/* Key Benefits Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Benefits</h2>
//             <p className="text-base text-gray-600">Why choose our {service.title.toLowerCase()} service</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.benefits.map((benefit, index) => {
//               const BenefitIcon = benefit.icon
//               return (
//                 <div
//                   key={index}
//                   className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10 mb-4">
//                     <BenefitIcon className="w-6 h-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </section>

//         {/* ROI & Metrics Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">ROI & Metrics</h2>
//             <p className="text-base text-gray-600">Measurable results from our {service.title.toLowerCase()} solutions</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.roi.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
//               >
//                 <p className="text-sm font-medium text-amber-600 mb-2">{item.metric}</p>
//                 <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Features Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Features</h2>
//             <p className="text-base text-gray-600">Everything you need to succeed with {service.title.toLowerCase()}</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-500/10">
//                       <FaCheck className="w-5 h-5 text-amber-600" />
//                     </div>
//                   </div>
//                   <p className="font-medium text-gray-900 text-base">{feature}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Technology Stack Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Technology Stack</h2>
//             <p className="text-base text-gray-600">Comprehensive breakdown of our technical expertise</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {service.details.techStackDetails.map((stack, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{stack.category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {stack.items.map((item, itemIndex) => (
//                     <span
//                       key={itemIndex}
//                       className="px-3 py-1 bg-amber-50 text-amber-700 rounded-md text-sm font-medium border border-amber-200 hover:bg-amber-100 transition-colors"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Core Technologies Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Technologies</h2>
//             <p className="text-base text-gray-600">We use industry-leading technologies to deliver excellence</p>
//           </div>
//           <HorizontalScroller items={service.details.technologies} />
//         </section>

//         {/* Process Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Process</h2>
//             <p className="text-base text-gray-600">A structured approach to delivering exceptional results</p>
//           </div>
//           <div className="space-y-4">
//             {service.details.process.map((step, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold text-lg">
//                   {index + 1}
//                 </div>
//                 <p className="text-base font-medium text-gray-900">{step}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Case Studies Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Case Studies & Results</h2>
//             <p className="text-base text-gray-600">Real results from real projects</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.caseStudies.map((study, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-2 py-1 rounded-md mb-4 text-sm font-medium">
//                   {study.metric}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
//                 <p className="text-xl font-bold text-amber-600 mb-2">{study.result}</p>
//                 <p className="text-sm text-gray-600">Achieved through strategic implementation and optimization</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Client Testimonials</h2>
//             <p className="text-base text-gray-600">What our clients say about working with us</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {service.details.testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className="w-4 h-4 text-amber-400" />
//                   ))}
//                 </div>
//                 <div className="mb-4">
//                   <FaQuoteLeft className="w-5 h-5 text-amber-500/30 mb-2" />
//                   <p className="text-gray-700 text-sm leading-relaxed italic">{testimonial.content}</p>
//                 </div>
//                 <div className="border-t border-gray-200 pt-4">
//                   <p className="font-medium text-gray-900">{testimonial.name}</p>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto text-balance">
//             Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}. Our team is ready to transform your vision into reality.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
//             Schedule a Consultation
//             <FaArrowRight className="w-4 h-4" />
//           </button>
//         </section>
//       </div>
//     </main>
//     <Footer/>
//     </>
//   )
// }

















// "use client"

// import { useEffect, useRef } from "react"
// import { useParams } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"
// import gsap from "gsap"
// import { FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";
// import { FaCheck, FaArrowRight, FaStar, FaQuoteLeft} from "react-icons/fa"
// import HorizontalScroller from "@/components/services/horizontal-scroller"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// const services = [
//   // 1. Web Apps
//   {
//     id: 1,
//     slug: "web-apps",
//     title: "Web Apps",
//     subtitle: "High-Performance Digital Solutions",
//     description: "Build scalable, high-performance web applications optimized for SEO and speed.",
//     icon: "FaCode",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760973982/webdev_wbehed.avif",
//     details: {
//       fullDescription:
//         "Our web app development services deliver lightning-fast, secure, and scalable solutions. We specialize in Next.js, React, and modern architectures that ensure seamless performance and outstanding UX across all devices.",
//       features: [
//         "SEO-optimized and blazing fast",
//         "Fully responsive design",
//         "Next.js & React architecture",
//         "API-first integrations",
//         "Secure authentication systems",
//         "Performance tuning & caching",
//       ],
//       technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
//       process: ["Discovery", "Design", "Development", "Testing", "Deployment", "Maintenance"],
//       caseStudies: [
//         { title: "Analytics SaaS Platform", result: "95 Lighthouse score", metric: "Performance" },
//         { title: "E-learning Portal", result: "1M+ active users", metric: "Scalability" },
//         { title: "Corporate Website", result: "SEO traffic +220%", metric: "Growth" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Top-Tier Performance",
//           description: "Deliver apps with sub-second load times for a seamless user experience.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Scalable & Secure",
//           description: "Built to grow with your business, from MVP to enterprise scale.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Future-Ready",
//           description: "Using cutting-edge frameworks and cloud-native deployments.",
//         },
//       ],
//       roi: [
//         { metric: "Load Speed", value: "0.9s", description: "Optimized Lighthouse performance" },
//         { metric: "Retention", value: "+160%", description: "Improved user engagement" },
//         { metric: "Revenue Growth", value: "+200%", description: "SEO-driven traffic" },
//       ],
//       testimonials: [
//         {
//           name: "Sarah Johnson",
//           role: "CEO, TechStart Inc",
//           content:
//             "Our web app became a core growth engine for the company. The performance and SEO optimization are world-class.",
//           rating: 5,
//         },
//         {
//           name: "David Kim",
//           role: "CTO, Growthify",
//           content:
//             "Exceptional experience—clean code, scalable design, and measurable results from day one.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
//         { category: "Backend", items: ["Node.js", "Express", "REST/GraphQL", "Authentication"] },
//         { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
//         { category: "Deployment", items: ["Vercel", "AWS", "Docker", "CI/CD Pipelines"] },
//       ],
//     },
//   },

//   // 2. Shopify Stores
//   {
//     id: 2,
//     slug: "shopify-stores",
//     title: "Shopify Stores",
//     subtitle: "Custom E-commerce Experiences",
//     description: "Launch high-converting, beautifully designed Shopify stores tailored to your brand.",
//     icon: "FaShopify",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760973884/shopify_20stores_1cb40842-dab6-4920-a234-4da36e79fc8a_mqwdfx.webp",
//     details: {
//       fullDescription:
//         "We build stunning, conversion-focused Shopify stores that elevate your brand and boost sales. From custom themes to advanced integrations, we deliver stores that perform beautifully and sell effortlessly.",
//       features: [
//         "Custom Shopify theme design",
//         "Speed optimization & SEO setup",
//         "App integrations & automation",
//         "Payment gateway configuration",
//         "Conversion tracking & analytics",
//         "Ongoing support & scaling",
//       ],
//       technologies: ["Shopify", "Liquid", "React", "Hydrogen", "Shopify Plus", "Stripe"],
//       process: ["Strategy", "Design", "Development", "Testing", "Launch", "Optimization"],
//       caseStudies: [
//         { title: "Luxury Apparel Brand", result: "+180% sales growth", metric: "Revenue" },
//         { title: "Beauty & Skincare Store", result: "3x conversion rate", metric: "Conversion" },
//         { title: "Dropshipping Store", result: "Automated 90% of operations", metric: "Efficiency" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Optimized for Sales",
//           description: "Boost conversions with optimized UX and data-driven design.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Custom Branding",
//           description: "Tailored themes that perfectly reflect your brand’s identity.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Seamless Integrations",
//           description: "Connect CRMs, analytics, and marketing tools for maximum performance.",
//         },
//       ],
//       roi: [
//         { metric: "Sales Increase", value: "+180%", description: "After relaunch" },
//         { metric: "Conversion Rate", value: "+250%", description: "Optimized checkout" },
//         { metric: "Customer Retention", value: "+130%", description: "Personalized experience" },
//       ],
//       testimonials: [
//         {
//           name: "Jessica Wong",
//           role: "Founder, Glowify",
//           content:
//             "They built a Shopify store that doubled our conversions. The attention to detail and speed were impressive.",
//           rating: 5,
//         },
//         {
//           name: "Ryan Patel",
//           role: "CEO, LuxeCraft",
//           content:
//             "Our brand has never looked better online. Every pixel and interaction feels premium.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Platform", items: ["Shopify", "Shopify Plus", "Hydrogen", "Liquid"] },
//         { category: "Integrations", items: ["Klaviyo", "Meta Ads", "Google Analytics", "Hotjar"] },
//         { category: "Payments", items: ["Stripe", "Shopify Payments", "PayPal"] },
//         { category: "Automation", items: ["Shopify Flow", "Zapier", "Omnisend"] },
//       ],
//     },
//   },

//   // 3. WordPress Websites
//   {
//     id: 3,
//     slug: "wordpress-websites",
//     title: "WordPress Websites",
//     subtitle: "Flexible & Manageable CMS Solutions",
//     description: "Beautiful, SEO-ready WordPress websites with easy content control and performance optimization.",
//     icon: "FaWordpress",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974034/what-is-wordpress_jgzhas.png",
//     details: {
//       fullDescription:
//         "We craft stunning, high-performance WordPress websites tailored to your brand and goals. Whether corporate, blog, or portfolio — our sites are secure, scalable, and simple to manage.",
//       features: [
//         "Custom WordPress theme development",
//         "SEO optimization & analytics setup",
//         "WooCommerce store integration",
//         "Speed & performance tuning",
//         "Security hardening & backups",
//         "Content training & support",
//       ],
//       technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL", "Yoast SEO"],
//       process: ["Discovery", "Wireframing", "Development", "QA", "Launch", "Training"],
//       caseStudies: [
//         { title: "Corporate Website", result: "+200% organic traffic", metric: "SEO" },
//         { title: "Portfolio Website", result: "3x more client inquiries", metric: "Leads" },
//         { title: "News Portal", result: "200K+ readers monthly", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "SEO-First Approach",
//           description: "Rank faster with our structured data and keyword-optimized builds.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Easy CMS Management",
//           description: "Update your content with zero technical knowledge.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Flexible Integrations",
//           description: "From WooCommerce to CRMs, we integrate it all.",
//         },
//       ],
//       roi: [
//         { metric: "Traffic Growth", value: "+200%", description: "Within 3 months" },
//         { metric: "Conversion Rate", value: "+130%", description: "After redesign" },
//         { metric: "Maintenance Cost", value: "-50%", description: "Optimized hosting setup" },
//       ],
//       testimonials: [
//         {
//           name: "Ayesha Malik",
//           role: "Founder, MediaSpark",
//           content:
//             "Our new WordPress website elevated our brand visibility and tripled our leads.",
//           rating: 5,
//         },
//         {
//           name: "John Edwards",
//           role: "Editor, CityNews",
//           content:
//             "Super-fast and secure WordPress setup — perfect for our high-traffic portal.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "CMS", items: ["WordPress", "WooCommerce", "Elementor", "ACF"] },
//         { category: "Optimization", items: ["WP Rocket", "Yoast SEO", "Cloudflare", "CDN"] },
//         { category: "Backend", items: ["PHP", "MySQL", "REST API", "cPanel"] },
//         { category: "Hosting", items: ["Kinsta", "WP Engine", "Hostinger"] },
//       ],
//     },
//   },
//   // 4. Digital Marketing
//   {
//     id: 4,
//     slug: "digital-marketing",
//     title: "Digital Marketing",
//     subtitle: "Data-Driven Growth Strategies",
//     description: "Maximize brand reach and ROI with targeted campaigns and analytics-driven strategies.",
//     icon: "FaBullhorn",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974086/digital_markit_lgyoi3.avif",
//     details: {
//       fullDescription:
//         "Our digital marketing solutions drive measurable growth across SEO, PPC, social media, and content marketing. We focus on strategy, execution, and continuous optimization to increase traffic, conversions, and brand awareness.",
//       features: [
//         "SEO & content marketing",
//         "Paid media & PPC campaigns",
//         "Social media management",
//         "Email marketing & automation",
//         "Conversion optimization",
//         "Analytics & reporting",
//       ],
//       technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Ahrefs", "SEMRush", "Mailchimp"],
//       process: ["Research & Audit", "Strategy & Planning", "Campaign Execution", "Optimization", "Reporting", "Scaling"],
//       caseStudies: [
//         { title: "E-commerce Campaign", result: "5x ROI", metric: "Revenue" },
//         { title: "B2B Lead Gen", result: "300+ leads/month", metric: "Leads" },
//         { title: "Social Growth", result: "10K+ followers in 3 months", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Targeted Traffic",
//           description: "Reach high-intent users and maximize conversion opportunities.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Brand Authority",
//           description: "Build trust and credibility through strategic campaigns and content.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Actionable Insights",
//           description: "Data-driven decisions to optimize campaigns and ROI.",
//         },
//       ],
//       roi: [
//         { metric: "Lead Generation", value: "+300%", description: "Month-over-month growth" },
//         { metric: "Revenue Growth", value: "5x", description: "Through targeted campaigns" },
//         { metric: "Engagement", value: "+250%", description: "Across social platforms" },
//       ],
//       testimonials: [
//         {
//           name: "Olivia Martin",
//           role: "CMO, RetailCorp",
//           content: "Our digital campaigns brought measurable growth and exceeded all KPIs.",
//           rating: 5,
//         },
//         {
//           name: "Liam Harris",
//           role: "Founder, StartupBoost",
//           content: "The team drove lead generation and brand visibility beyond expectations.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Analytics", items: ["Google Analytics", "Hotjar", "Mixpanel"] },
//         { category: "SEO Tools", items: ["Ahrefs", "SEMRush", "Moz"] },
//         { category: "PPC & Ads", items: ["Google Ads", "Facebook Ads", "LinkedIn Ads"] },
//         { category: "Email Automation", items: ["Mailchimp", "HubSpot", "ActiveCampaign"] },
//       ],
//     },
//   },

//   // 5. Video Editing
//   {
//     id: 5,
//     slug: "video-editing",
//     title: "Video Editing",
//     subtitle: "Captivating Storytelling Through Video",
//     description: "Professional video editing services to bring your stories to life and engage audiences.",
//     icon: "FaVideo",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974117/video_edit_imo9xk.avif",
//     details: {
//       fullDescription:
//         "We transform raw footage into compelling videos for marketing, social media, corporate, or cinematic purposes. Our team combines creativity, storytelling, and technical expertise for maximum impact.",
//       features: [
//         "Professional editing & post-production",
//         "Motion graphics & animation",
//         "Color grading & correction",
//         "Sound design & mixing",
//         "Social media-ready formats",
//         "Storyboarding & creative direction",
//       ],
//       technologies: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
//       process: ["Concept & Script", "Storyboarding", "Editing", "Motion Graphics", "Color Grading", "Delivery"],
//       caseStudies: [
//         { title: "Brand Promo Video", result: "50% higher engagement", metric: "Views" },
//         { title: "YouTube Series", result: "100K+ subscribers", metric: "Growth" },
//         { title: "Product Launch", result: "30% conversion uplift", metric: "ROI" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Engaging Content",
//           description: "Captivate your audience with polished, professional storytelling.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Multi-Platform Ready",
//           description: "Videos optimized for social media, web, or broadcast channels.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Creative Excellence",
//           description: "Bring ideas to life with cinematic-quality editing and effects.",
//         },
//       ],
//       roi: [
//         { metric: "Engagement", value: "+50%", description: "Higher video interactions" },
//         { metric: "Conversions", value: "+30%", description: "From video-driven campaigns" },
//         { metric: "Brand Recall", value: "+200%", description: "Memorable storytelling" },
//       ],
//       testimonials: [
//         {
//           name: "Sophia Lee",
//           role: "Marketing Director, VisualBrand",
//           content: "The videos elevated our brand storytelling and delivered measurable engagement.",
//           rating: 5,
//         },
//         {
//           name: "Ethan Walker",
//           role: "Founder, MediaVision",
//           content: "Professional, creative, and fast. Our video campaigns never looked better.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Editing", items: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"] },
//         { category: "Motion Graphics", items: ["After Effects", "Cinema 4D", "Blender"] },
//         { category: "Sound & Music", items: ["Audition", "Logic Pro", "Ableton"] },
//         { category: "Collaboration", items: ["Frame.io", "Dropbox", "Google Drive"] },
//       ],
//     },
//   },

//   // 6. Graphic Designing
//   {
//     id: 6,
//     slug: "graphic-designing",
//     title: "Graphic Designing",
//     subtitle: "Visual Identity & Brand Expression",
//     description: "Transform ideas into visually stunning graphics that communicate your brand message.",
//     icon: "FaPaintBrush",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974162/graphic_desing_znped3.avif",
//     details: {
//       fullDescription:
//         "Our graphic design services create compelling visuals for digital, print, and social platforms. We focus on aesthetics, brand consistency, and audience impact to elevate your brand presence.",
//       features: [
//         "Brand identity & logo design",
//         "Marketing collaterals & brochures",
//         "Infographics & illustrations",
//         "Social media graphics",
//         "Packaging & product design",
//         "Print & digital design",
//       ],
//       technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "CorelDRAW", "Canva"],
//       process: ["Research", "Concept Design", "Iteration", "Finalization", "Delivery", "Support"],
//       caseStudies: [
//         { title: "Brand Re-Design", result: "40% more brand recognition", metric: "Awareness" },
//         { title: "Marketing Campaigns", result: "+25% engagement", metric: "Engagement" },
//         { title: "Product Packaging", result: "3x higher sales", metric: "Sales" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Brand Impact",
//           description: "Visually elevate your brand across all digital and offline channels.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Consistent Identity",
//           description: "Maintain cohesive brand visuals across all campaigns and products.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Creative Excellence",
//           description: "Combine design thinking and aesthetics to create memorable visuals.",
//         },
//       ],
//       roi: [
//         { metric: "Brand Awareness", value: "+40%", description: "Stronger market presence" },
//         { metric: "Engagement", value: "+25%", description: "Higher social interaction" },
//         { metric: "Sales Impact", value: "3x", description: "Through compelling design" },
//       ],
//       testimonials: [
//         {
//           name: "Nora Simmons",
//           role: "CMO, BrandWorks",
//           content: "The design team transformed our visual identity, boosting engagement and recognition.",
//           rating: 5,
//         },
//         {
//           name: "Daniel Cruz",
//           role: "Founder, CreativeSpark",
//           content: "Highly creative and professional. They deliver designs that truly resonate.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Design Tools", items: ["Adobe Photoshop", "Illustrator", "Figma", "CorelDRAW"] },
//         { category: "Prototyping", items: ["Figma", "InVision", "Adobe XD"] },
//         { category: "Illustration", items: ["Procreate", "Adobe Illustrator", "Affinity Designer"] },
//         { category: "Collaboration", items: ["Slack", "Dropbox", "Notion"] },
//       ],
//     },
//   },

//   // 7. SQA (Software Quality Assurance)
//   {
//     id: 7,
//     slug: "software-quality-assurance",
//     title: "Software QA & Testing",
//     subtitle: "Reliability & Bug-Free Solutions",
//     description: "Ensure high-quality, reliable software with automated and manual testing strategies.",
//     icon: "FaCheckCircle",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974284/software-quality-assurance_xfradn.png",
//     details: {
//       fullDescription:
//         "Our SQA services guarantee software stability, performance, and user satisfaction. We implement comprehensive manual and automated testing for web, mobile, and enterprise applications.",
//       features: [
//         "Functional & regression testing",
//         "Performance & load testing",
//         "Automation frameworks",
//         "Cross-browser & device testing",
//         "Security & penetration testing",
//         "Continuous integration testing",
//       ],
//       technologies: ["Selenium", "Cypress", "Jest", "TestRail", "Postman", "JMeter"],
//       process: ["Test Planning", "Test Design", "Execution", "Defect Tracking", "Automation", "Reporting"],
//       caseStudies: [
//         { title: "Enterprise SaaS", result: "99.9% uptime", metric: "Reliability" },
//         { title: "Mobile App Testing", result: "100K+ active users bug-free", metric: "Quality" },
//         { title: "E-commerce Platform", result: "0 critical bugs post-launch", metric: "Stability" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "Bug-Free Delivery",
//           description: "Detect and fix issues before they affect your users.",
//         },
//         {
//           icon: "FaUsers",
//           title: "User Confidence",
//           description: "Deliver applications that are secure, fast, and reliable.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Optimized Performance",
//           description: "Ensure smooth operations even under peak load conditions.",
//         },
//       ],
//       roi: [
//         { metric: "Bug Reduction", value: "90%", description: "Fewer post-launch issues" },
//         { metric: "Release Speed", value: "2x Faster", description: "With automated testing" },
//         { metric: "User Satisfaction", value: "+35%", description: "Improved product quality" },
//       ],
//       testimonials: [
//         {
//           name: "Sophia White",
//           role: "QA Lead, FinTech Solutions",
//           content: "Their testing ensured our platform launched without critical issues. Highly reliable team.",
//           rating: 5,
//         },
//         {
//           name: "Ethan Brooks",
//           role: "CTO, CloudWorks",
//           content: "Comprehensive QA coverage with clear reporting. Saved us weeks of potential debugging.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "Automation Tools", items: ["Selenium", "Cypress", "Jest", "Appium"] },
//         { category: "Performance Testing", items: ["JMeter", "LoadRunner", "Gatling"] },
//         { category: "API Testing", items: ["Postman", "Swagger", "REST Assured"] },
//         { category: "Test Management", items: ["TestRail", "Jira", "Zephyr"] },
//       ],
//     },
//   },

//   // 8. Content Writing
//   {
//     id: 8,
//     slug: "content-writing",
//     title: "Content Writing",
//     subtitle: "Engaging & SEO-Optimized Content",
//     description: "Create compelling content that informs, converts, and ranks high on search engines.",
//     icon: "FaPenNib",
//     accentColor: "#F4A500",
//     image: "https://res.cloudinary.com/dbbbve4y4/image/upload/v1760974208/content_write_shxsdu.avif",
//     details: {
//       fullDescription:
//         "Our content writing services deliver high-quality, engaging copy for websites, blogs, social media, and marketing campaigns. All content is SEO-optimized and aligned with your brand voice.",
//       features: [
//         "SEO-friendly blog posts & articles",
//         "Website copywriting & landing pages",
//         "Social media content & ad copy",
//         "Technical & product writing",
//         "Content strategy & planning",
//         "Editing & proofreading",
//       ],
//       technologies: ["WordPress", "Ahrefs", "SEMRush", "Grammarly", "Hemingway Editor", "Google Docs"],
//       process: ["Research", "Content Strategy", "Writing", "SEO Optimization", "Editing", "Publishing"],
//       caseStudies: [
//         { title: "Tech Blog Series", result: "+300% traffic", metric: "Organic Reach" },
//         { title: "E-commerce Product Copy", result: "25% higher conversions", metric: "Sales" },
//         { title: "Social Campaign", result: "10K+ engagements", metric: "Engagement" },
//       ],
//       benefits: [
//         {
//           icon: "FaTrophy",
//           title: "SEO-Optimized",
//           description: "Boost organic visibility and attract high-intent traffic.",
//         },
//         {
//           icon: "FaUsers",
//           title: "Audience Engagement",
//           description: "Content that captivates readers and drives interactions.",
//         },
//         {
//           icon: "FaLightbulb",
//           title: "Brand Consistency",
//           description: "Maintain a consistent tone of voice across all platforms.",
//         },
//       ],
//       roi: [
//         { metric: "Organic Traffic", value: "+300%", description: "Through targeted content" },
//         { metric: "Conversions", value: "+25%", description: "With persuasive copywriting" },
//         { metric: "Engagement", value: "+150%", description: "Across social channels" },
//       ],
//       testimonials: [
//         {
//           name: "Mia Thompson",
//           role: "Content Manager, EduTech",
//           content: "The content strategy and writing significantly increased our organic traffic and engagement.",
//           rating: 5,
//         },
//         {
//           name: "Liam Johnson",
//           role: "Founder, ShopEase",
//           content: "Professional, creative, and SEO-focused writing that directly improved conversions.",
//           rating: 5,
//         },
//       ],
//       techStackDetails: [
//         { category: "SEO & Research", items: ["Ahrefs", "SEMRush", "Google Keyword Planner"] },
//         { category: "Writing Tools", items: ["Grammarly", "Hemingway Editor", "Google Docs"] },
//         { category: "CMS", items: ["WordPress", "Shopify", "Webflow"] },
//         { category: "Collaboration", items: ["Notion", "Trello", "Slack"] },
//       ],
//     },
//   },
// ];

// const iconMap = {
//   FaTrophy,
//   FaUsers,
//   FaLightbulb,
// };

// export default function ServiceDetailPage() {
//   const params = useParams()
//   const slug = params.slug
//   const service = services.find((s) => s.slug === slug)

//   const containerRef = useRef(null)
//   const headerRef = useRef(null)
//   const contentRef = useRef(null)

//   useEffect(() => {
//     gsap.from(headerRef.current, {
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     })

//     gsap.from(contentRef.current?.children, {
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "power3.out",
//       delay: 0.3,
//     })
//   }, [])

//   if (!service) {
//     return (
//       <main className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
//           <Link href="/services" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
//             Back to Services
//           </Link>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <><Navbar/>
//     <main ref={containerRef} className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div
//         ref={headerRef}
//         className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
//       >
//         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full mb-4 border border-amber-500/30">
//             <FaStar className="w-4 h-4" />
//             <span className="text-sm font-medium">Premium Service</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
//             {service.title}
//           </h1>
//           <p className="text-lg text-gray-300 max-w-2xl text-balance leading-relaxed">
//             {service.details.fullDescription}
//           </p>
//         </div>
//       </div>

//       {/* Image Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
//           <Image
//             src={service.image || "/placeholder.svg"}
//             alt={service.title}
//             width={1280}
//             height={720}
//             className="w-full h-64 sm:h-80 object-cover object-center"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
//         </div>
//       </section>

//       <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
//         {/* Key Benefits Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Benefits</h2>
//             <p className="text-base text-gray-600">Why choose our {service.title.toLowerCase()} service</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.benefits.map((benefit, index) => {
//               const BenefitIcon = iconMap[benefit.icon]
//               return (
//                 <div
//                   key={index}
//                   className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10 mb-4">
//                     <BenefitIcon className="w-6 h-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </section>

//         {/* ROI & Metrics Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">ROI & Metrics</h2>
//             <p className="text-base text-gray-600">Measurable results from our {service.title.toLowerCase()} solutions</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.roi.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
//               >
//                 <p className="text-sm font-medium text-amber-600 mb-2">{item.metric}</p>
//                 <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Features Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Features</h2>
//             <p className="text-base text-gray-600">Everything you need to succeed with {service.title.toLowerCase()}</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-500/10">
//                       <FaCheck className="w-5 h-5 text-amber-600" />
//                     </div>
//                   </div>
//                   <p className="font-medium text-gray-900 text-base">{feature}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Technology Stack Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Technology Stack</h2>
//             <p className="text-base text-gray-600">Comprehensive breakdown of our technical expertise</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {service.details.techStackDetails.map((stack, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{stack.category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {stack.items.map((item, itemIndex) => (
//                     <span
//                       key={itemIndex}
//                       className="px-3 py-1 bg-amber-50 text-amber-700 rounded-md text-sm font-medium border border-amber-200 hover:bg-amber-100 transition-colors"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Core Technologies Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Technologies</h2>
//             <p className="text-base text-gray-600">We use industry-leading technologies to deliver excellence</p>
//           </div>
//           <HorizontalScroller items={service.details.technologies} />
//         </section>

//         {/* Process Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Process</h2>
//             <p className="text-base text-gray-600">A structured approach to delivering exceptional results</p>
//           </div>
//           <div className="space-y-4">
//             {service.details.process.map((step, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold text-lg">
//                   {index + 1}
//                 </div>
//                 <p className="text-base font-medium text-gray-900">{step}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Case Studies Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Case Studies & Results</h2>
//             <p className="text-base text-gray-600">Real results from real projects</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.details.caseStudies.map((study, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-2 py-1 rounded-md mb-4 text-sm font-medium">
//                   {study.metric}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
//                 <p className="text-xl font-bold text-amber-600 mb-2">{study.result}</p>
//                 <p className="text-sm text-gray-600">Achieved through strategic implementation and optimization</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section>
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Client Testimonials</h2>
//             <p className="text-base text-gray-600">What our clients say about working with us</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {service.details.testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className="w-4 h-4 text-amber-400" />
//                   ))}
//                 </div>
//                 <div className="mb-4">
//                   <FaQuoteLeft className="w-5 h-5 text-amber-500/30 mb-2" />
//                   <p className="text-gray-700 text-sm leading-relaxed italic">{testimonial.content}</p>
//                 </div>
//                 <div className="border-t border-gray-200 pt-4">
//                   <p className="font-medium text-gray-900">{testimonial.name}</p>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto text-balance">
//             Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}. Our team is ready to transform your vision into reality.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
//             Schedule a Consultation
//             <FaArrowRight className="w-4 h-4" />
//           </button>
//         </section>
//       </div>
//     </main>
//     <Footer/>
//     </>
//   )
// }


























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