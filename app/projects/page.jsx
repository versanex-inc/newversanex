


// "use client"
// import { useState } from "react"
// import PortfolioHeader from "@/components/projects/portfolio-header"
// import ProjectsGrid from "@/components/projects/projects-grid"
// import Footer from "@/components/footer"
// import Navbar from "@/components/navbar"

// export default function PortfolioPage() {
//   // Track selected filter
//   const [activeFilter, setActiveFilter] = useState("All")

//   return (
//     <>
//       <Navbar />
//       <main className="container mx-auto px-4 md:px-6">
//         {/* Pass onFilterChange to PortfolioHeader */}
//         <PortfolioHeader onFilterChange={(filter) => setActiveFilter(filter)} />

//         <section aria-labelledby="projects-heading" className="py-2 md:py-4">
//           <h2 id="projects-heading" className="sr-only">
//             Projects
//           </h2>

//           {/* Pass activeFilter to ProjectsGrid */}
//           <ProjectsGrid category={activeFilter === "All" ? "" : activeFilter} />
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }

















"use client"
import { useState } from "react"
import PortfolioHeader from "@/components/projects/portfolio-header"
import ProjectsGrid from "@/components/projects/projects-grid"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PortfolioPage() {
  // Track selected filter
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6">
        {/* Pass onFilterChange to PortfolioHeader */}
        <PortfolioHeader onFilterChange={(filter) => setActiveFilter(filter)} />

        <section aria-labelledby="projects-heading" className="py-2 md:py-4">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>

          {/* Pass activeFilter to ProjectsGrid */}
          <ProjectsGrid category={activeFilter === "All" ? "" : activeFilter} />
        </section>
      </main>
      <Footer />
    </>
  )
}