import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Coverage from "@/components/coverage";
import Reasoning from "@/components/reasoning";
import Certifications from "@/components/certifications";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div className="px-4 flex flex-col items-center justify-center max-w-8xl mx-auto bg-gray-50 font-inter">
      <Header />
      <Hero />
      <Services />
      <Coverage />
      <Reasoning />
      <Certifications />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
