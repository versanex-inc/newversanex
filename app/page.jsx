// import Navbar from "@/components/navbar"
// import Hero from "@/components/hero"
// import Services from "@/components/services"
// import About from "@/components/about"
// import Portfolio from "@/components/portfolio"
// import Advantages from "@/components/advantages"
// import Testimonials from "@/components/testimonials"
// import TechStack from "@/components/tech-stack"
// import Instagram from "@/components/instagram"
// import Team from "@/components/team"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <main id="main" className="flex flex-col">
//         <Hero />
//         <Services />
//         <About />
//         <Portfolio />
//         <Advantages />
//         <Testimonials />
//         <TechStack />
//         <Instagram />
//         <Team />
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   )
// }










import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Advantages from "@/components/advantages";
import Testimonials from "@/components/testimonials";
import TechStack from "@/components/tech-stack";
import Instagram from "@/components/instagram";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

// 👇 Import the popup component
import DynamicPopup from "@/components/DynamicPopup";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Advantages />
        <Testimonials />
        <TechStack />
        <Instagram />
        <Team />
        <Contact />
      </main>

      {/* 👇 Show popup here */}
      <DynamicPopup />

      <Footer />
    </>
  );
}
