"use client"

import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "S/001",
    title: "Custom Software",
    description: "We build custom software that solves real problems, not just checks boxes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    href: "/services/custom-software-development",
  },
  {
    id: "S/002",
    title: "Web Development",
    description: "We design and build websites that represent your brand and convert visitors into customers. From business websites to landing pages, every site is fast, responsive, and built to perform.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    href: "/services/web-development",
  },
  {
    id: "S/003",
    title: "SaaS Products",
    description: "From MVP to full scale platform, we build subscription ready products designed to grow with your user base.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    href: "/services/saas-development",
  },
  {
    id: "S/004",
    title: "Mobile Apps",
    description: "Your app is often the first thing customers touch. We make sure it leaves the right impression. We build fast, reliable mobile experiences for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    href: "/services/mobile-app-development",
  },
  {
    id: "S/005",
    title: "UI/UX Design",
    description: "User-centric interfaces engineered to provide intuitive journeys and seamless interaction across all device platforms.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    href: "/services/ui-ux-design",
  },
  {
    id: "S/006",
    title: "E-commerce",
    description: "Conversion-focused e-commerce experiences that help businesses sell products and grow online.",
    image: "https://images.unsplash.com/photo-1556742049-0a67f572c36e?auto=format&fit=crop&w=1200&q=80",
    href: "/services/ecommerce-development",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full min-w-0 max-w-full overflow-x-clip py-16 sm:py-24 lg:py-28 bg-[#F8F9FA] dark:bg-[#090A0C] text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-8 sm:mb-14 border-b border-slate-200 dark:border-neutral-800 pb-6 sm:pb-8 flex justify-between items-end gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                OUR SERVICES
              </span>
            </div>
            <h2
              id="services-heading"
              className="text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 dark:text-white"
            >
              Services
            </h2>
          </div>
          <span className="shrink-0 text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">
            02&apos;
          </span>
        </div>

        {/* Scroll Folding Container */}
        <div className="relative flex w-full min-w-0 flex-col gap-5 sm:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative w-full min-w-0 lg:sticky lg:top-24 lg:z-10"
            >
              <div className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#0f1115] p-5 sm:p-7 lg:p-10 shadow-sm transition-all duration-500 hover:shadow-lg">
                <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

                  {/* Left: ID, Title, Description & CTA */}
                  <div className="min-w-0 lg:col-span-7 flex flex-col justify-between h-full lg:min-h-[200px]">
                    <div className="min-w-0">
                      <span className="text-xs font-mono italic text-slate-400 dark:text-slate-500 block mb-3">
                        {service.id}
                      </span>
                      <h3 className="text-[clamp(1.5rem,5vw,2.25rem)] lg:text-5xl [overflow-wrap:anywhere] font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-3 sm:mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl break-words font-normal">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex min-h-11 max-w-full items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 dark:border-neutral-700 bg-transparent hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-900 dark:text-white text-sm lg:text-xs font-medium transition-all duration-300"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                  {/* Right: Preview Image */}
                  <div className="min-w-0 lg:col-span-5 w-full">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-neutral-800 shadow-inner">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        unoptimized
                        sizes="(max-width: 639px) calc(100vw - 74px), (max-width: 1023px) calc(100vw - 106px), 480px"
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
                    </div>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
