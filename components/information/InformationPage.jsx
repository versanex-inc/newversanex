import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from "./information-page.module.css"

const resources = [
  { href: "/faqs", label: "FAQs" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
]

export default function InformationPage({ path, eyebrow, title, intro, sections, lastUpdated, contactTitle, contactCopy }) {
  const isFAQ = path === "/faqs"
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.hero}>
            <div className={styles.topline}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <nav aria-label="Help and legal pages" className={styles.resourceNav}>
                {resources.map((resource) => (
                  <Link key={resource.href} href={resource.href} aria-current={resource.href === path ? "page" : undefined}>
                    {resource.label}
                  </Link>
                ))}
              </nav>
            </div>
            <h1 className={styles.heading}>{title}</h1>
            <p className={styles.intro}>{intro}</p>
            {lastUpdated && <p className={styles.updated}>Last updated <span>{lastUpdated}</span></p>}
          </header>

          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <nav aria-label={isFAQ ? "FAQ categories" : "On this page"}>
                <p className={styles.navLabel}>{isFAQ ? "Browse by topic" : "On this page"}</p>
                <ol className={styles.sectionNav}>
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={"#" + section.id}>
                        <span className={styles.navNumber}>{String(index + 1).padStart(2, "0")}</span>
                        <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className={styles.sidebarHelp}>
                <p>Need a little more clarity?</p>
                <Link href="/contact">Talk to our team <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </aside>

            <div className={isFAQ ? styles.faqContent : styles.document}>
              {sections.map((section, index) => (
                <section id={section.id} aria-labelledby={section.id + "-heading"} className={isFAQ ? styles.faqGroup : styles.documentSection} key={section.id}>
                  <div className={styles.sectionHeading}>
                    <span className={styles.sectionNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h2 id={section.id + "-heading"}>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                    {isFAQ && <span className={styles.questionCount}>{section.questions.length} questions</span>}
                  </div>
                  {isFAQ ? (
                    <div className={styles.faqList}>
                      {section.questions.map((item, questionIndex) => (
                        <details key={item.q} className={styles.faqItem} open={index === 0 && questionIndex === 0}>
                          <summary>
                            <h3>{item.q}</h3>
                            <span className={styles.chevron}><ChevronDown size={18} aria-hidden="true" /></span>
                          </summary>
                          <div className={styles.answer}><p>{item.a}</p></div>
                        </details>
                      ))}
                    </div>
                  ) : <p className={styles.legalCopy}>{section.content}</p>}
                </section>
              ))}
            </div>
          </div>

          <section className={styles.contact} aria-labelledby="information-contact-heading">
            <div>
              <p className={styles.eyebrow}>Let&rsquo;s talk</p>
              <h2 id="information-contact-heading">{contactTitle}</h2>
              <p className={styles.contactCopy}>{contactCopy}</p>
            </div>
            <Link href="/contact" className={styles.button}>
              Contact Us <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
