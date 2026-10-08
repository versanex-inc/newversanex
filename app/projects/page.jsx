"use client"
import { useState } from "react"
import PortfolioHeader from "@/components/projects/portfolio-header"
import ProjectsGrid from "@/components/projects/projects-grid"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ProjectsHero from "@/components/projects/projects-hero"
import styles from "@/components/projects/projects-gallery.module.css"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [view, setView] = useState("grid")
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <section id="projects" aria-labelledby="projects-heading" className={styles.section}>
          <div className={styles.inner}>
            <PortfolioHeader activeFilter={activeFilter} onFilterChange={setActiveFilter}
              view={view} onViewChange={setView} />
            <ProjectsGrid category={activeFilter} view={view} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
