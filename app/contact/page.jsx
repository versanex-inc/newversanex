"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Check, LoaderCircle } from "lucide-react"
import { services } from "@/data/services"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from "./contact.module.css"

const emptyForm = { name: "", email: "", service: "", description: "" }
const ease = [0.22, 1, 0.36, 1]

export default function ContactUs() {
  const [formData, setFormData] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const inFlight = useRef(false)
  const successRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion ? 0 : 0.8, ease },
  }

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (inFlight.current) return
    const payload = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()]))
    if (!payload.name || !payload.email || !payload.service || !payload.description) {
      setError("Please complete your name, email, service, and project details.")
      return
    }
    inFlight.current = true
    setSubmitting(true)
    setError("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error("We couldn't send your enquiry. Please try again, or email us directly.")
      setSubmitted(true)
    } catch {
      setError("We couldn't send your enquiry. Please try again, or email contact@versanex.site.")
    } finally {
      inFlight.current = false
      setSubmitting(false)
    }
  }

  function startAgain() {
    setFormData(emptyForm)
    setError("")
    setSubmitted(false)
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="contact-heading">
          <motion.p {...reveal} className={styles.eyebrow}>Let&apos;s talk</motion.p>
          <motion.h1 id="contact-heading" aria-label="Good things start with a conversation." className={styles.heading}
            initial={reducedMotion ? false : "hidden"} animate="visible">
            {["Good things start", "with a conversation."].map((line, index) => (
              <span key={line} className={styles.headingMask}>
                <motion.span className={index ? styles.muted : undefined}
                  variants={{ hidden: { y: "105%" }, visible: { y: 0 } }}
                  transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : index * 0.14, ease }}>{line}</motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.div {...reveal} className={styles.heroBottom}>
            <p>Have an idea, a challenge, or a project ready to grow?<br className={styles.desktopBreak} /> We&apos;d love to hear what you have in mind.</p>
            <a href="#contact-form" className={styles.scrollLink} aria-label="Go to the project enquiry form"><ArrowDown size={23} strokeWidth={1.5} aria-hidden="true" /></a>
          </motion.div>
        </section>

        <section id="contact-form" className={styles.contactSection} aria-labelledby="enquiry-heading">
          <div className={styles.contactGrid}>
            <motion.aside {...reveal} className={styles.info}>
              <p className={styles.eyebrow}>A good place to begin</p>
              <h2>Big idea.<br /><span>Small first step.</span></h2>
              <p className={styles.infoIntro}>Tell us where you want to go. We&apos;ll help you figure out how to get there.</p>
              <dl className={styles.contactDetails}>
                <div><dt>Email us</dt><dd><a href="mailto:contact@versanex.site">contact@versanex.site <ArrowUpRight size={16} aria-hidden="true" /></a></dd></div>
                <div><dt>Give us a call</dt><dd><a href="tel:+923457707337">+92 345 7707337 <ArrowUpRight size={16} aria-hidden="true" /></a></dd></div>
                <div><dt>Based in</dt><dd>Faisalabad, Pakistan</dd></div>
              </dl>
              <div className={styles.socials}>
                <a href="https://www.linkedin.com/company/versanex" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
                <a href="https://www.instagram.com/versanexinc" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={13} aria-hidden="true" /></a>
              </div>
            </motion.aside>

            <motion.div {...reveal} className={styles.formArea}>
              {submitted ? (
                <motion.div ref={successRef} tabIndex={-1} role="status" className={styles.success}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.6, ease }}>
                  <span className={styles.successIcon}><Check size={28} strokeWidth={1.5} aria-hidden="true" /></span>
                  <p className={styles.eyebrow}>Enquiry received</p>
                  <h2 id="enquiry-heading">That&apos;s the<br />first step taken.</h2>
                  <p>Thanks for sharing your idea. Our team will review your enquiry and get back to you at the email you provided.</p>
                  <button type="button" onClick={startAgain} className={styles.submit}>Send another enquiry <ArrowUpRight size={18} aria-hidden="true" /></button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} aria-busy={submitting} aria-labelledby="enquiry-heading">
                  <div className={styles.formHeader}><h2 id="enquiry-heading">Tell us about your project.</h2><span>01 / Start a conversation</span></div>
                  <fieldset disabled={submitting} className={styles.formFields}>
                    <legend className={styles.screenReaderText}>Your project enquiry</legend>
                    <div className={styles.inputGrid}>
                      <div className={styles.field}><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Alex Morgan" value={formData.name} onChange={handleChange} required maxLength={120} /></div>
                      <div className={styles.field}><label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="alex@company.com" value={formData.email} onChange={handleChange} required maxLength={254} /></div>
                    </div>
                    <fieldset className={styles.services}>
                      <legend>What can we help you with?</legend>
                      <div className={styles.serviceOptions}>
                        {services.map(service => <label key={service.slug} className={styles.serviceOption}>
                          <input type="radio" name="service" value={service.title} checked={formData.service === service.title} onChange={handleChange} required />
                          <span>{service.title}</span>
                        </label>)}
                      </div>
                    </fieldset>
                    <div className={styles.field}><label htmlFor="contact-description">A little about your project</label><textarea id="contact-description" name="description" rows={4} placeholder="Your idea, your goals, or the challenge you'd like to solve..." value={formData.description} onChange={handleChange} required maxLength={5000} /></div>
                    {error && <p role="alert" className={styles.error}>{error}</p>}
                    <div className={styles.formFooter}>
                      <p>Your details are handled according to our <Link href="/privacy-policy">privacy policy</Link>.</p>
                      <button type="submit" className={styles.submit} disabled={submitting}>{submitting ? <>Sending... <LoaderCircle className={styles.spinner} size={18} aria-hidden="true" /></> : <>Send enquiry <ArrowUpRight size={18} aria-hidden="true" /></>}</button>
                    </div>
                  </fieldset>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        <section className={styles.nextSteps} aria-labelledby="next-heading">
          <motion.div {...reveal} className={styles.nextHeader}><p className={styles.eyebrow}>What happens next</p><h2 id="next-heading">A conversation.<br /><span>A clear way forward.</span></h2></motion.div>
          <ol className={styles.steps}>
            {[
              { title: "We get to know your idea.", text: "We review your enquiry and learn about your goals, priorities, and the people you're building for." },
              { title: "We find the right approach.", text: "Together, we explore the scope, the right services, and what your project needs to succeed." },
              { title: "We plan the next step.", text: "You get a clear direction for moving forward, with the details discussed before work begins." },
            ].map((step, index) => <motion.li {...reveal} key={step.title}><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></motion.li>)}
          </ol>
        </section>

        <section className={styles.quickContact}>
          <motion.div {...reveal}><p className={styles.eyebrow}>Keep it simple</p><h2>Prefer a quick hello?</h2><p>Start a conversation on WhatsApp. We&apos;re happy to hear from you.</p><a href="https://wa.me/923457707337" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>Say hello <ArrowUpRight size={19} aria-hidden="true" /></a></motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
