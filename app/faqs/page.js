import InformationPage from "@/components/information/InformationPage"
import { faqData } from "@/data/information-pages"

export default function FAQsPage() {
  return (
    <InformationPage
      path="/faqs"
      eyebrow="A little more clarity"
      title="Frequently asked questions."
      intro="From the first conversation to the final delivery, find answers to common questions about working with VersaNex."
      sections={faqData.map((category, index) => ({ id: "faq-topic-" + (index + 1), title: category.category, questions: category.questions }))}
      contactTitle="Still have a question?"
      contactCopy="Tell us what you have in mind. Our team can help you understand the next steps for your project."
    />
  )
}
