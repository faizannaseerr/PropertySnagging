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
    <>
      <Header />
      <div className="px-4 flex flex-col items-center justify-center max-w-8xl bg-[#fbf9f5] font-inter gap-12">
        <Hero />
        <div className="w-full flex flex-col items-center justify-center gap-12 px-2">
          <Services />
          <Reasoning />
          <Coverage />
          <Certifications />
          <Testimonials />
          <FAQ />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
