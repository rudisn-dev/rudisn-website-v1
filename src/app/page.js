import Home2About from "@/components/about/Home2About";
import Home2BannerSection from "@/components/banner-section/home2-banner-section";
import Home2CounterArea from "@/components/counter-area-section/home2-counter-area";
import Home2PortfolioSection from "@/components/portfolio-section/home2-portfolio-section";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Home2ServicesSection from "@/components/services-section/home2-services-section";
import Home2TechnologySection from "@/components/technology-section/home2-technology-section";
import Home2TestimonialSection from "@/components/testimonial-section/home2-testimonial-section";

export default function Home() {
  return (
    <main>
      <Home2BannerSection />
      <Home2About />
      <Home2ServicesSection />
      <Home2CounterArea />
      <Home2ProcessSection />
      <Home2PortfolioSection />
      <Home2TestimonialSection />
      <Home2TechnologySection />
    </main>
  );
}
