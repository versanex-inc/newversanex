import { FiArrowRight, FiCheckCircle } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-18 lg:py-10">
        <div className="grid mx-5 items-center gap-10 md:grid-cols-2">
          <div>
            {/* Heading and Intro */}
            <div>
              <p className="text-sm font-medium" style={{ color: "#f2ad08" }}>
                VersaNex • Software House
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold leading-tight md:text-5xl text-gray-900">
                We design and build products that people love to use.
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                High-performance cloud, mobile, AI, and web applications. Conversion-focused, human-centered, and optimized for scale.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition shadow-sm"
                  style={{ backgroundColor: "#f2ad08" }}
                >
                  Start a Project <FiArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-[#f2ad08]/10"
                  style={{
                    borderColor: "#f2ad08",
                    color: "#f2ad08",
                    backgroundColor: "transparent",
                  }}
                >
                  View Projects
                </Link>
              </div>

              {/* Features list */}
              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                {[
                  "100% responsive & accessible",
                  "SEO & performance optimized",
                  "Modern stack & best practices",
                  "On-time delivery & support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FiCheckCircle style={{ color: "#f2ad08" }} className="flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="https://res.cloudinary.com/dbbbve4y4/image/upload/w_600,h_450,c_fill,f_auto,q_auto/v1760972222/team-collaborating-in-modern-software-studio_wxzvwf.jpg"
                alt="VersaNex team collaborating in a modern studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>

            {/* Decorative Shapes */}
            <div
              className="pointer-events-none absolute -left-6 -top-6 hidden h-20 w-20 rounded-xl md:block"
              style={{ backgroundColor: "#f2ad084d" }}
            />
            <div
              className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-xl md:block"
              style={{ backgroundColor: "#f2ad0833" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
