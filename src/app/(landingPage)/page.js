import { defaultMetaData } from "../../../data/data";
import Hero from "./_components/Hero";
import About from "./_components/About";
import AllServices from "./_components/AllServices";
import PageCounter from "./_components/PageCounter";
import OurProcess from "./_components/OurProcess";
import OurProjects from "./_components/OurProjects";
import Testimonials from "./_components/Testimonials";
import AllTechnologies from "./_components/AllTechnologies";

export const metadata = { ...defaultMetaData };

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <AllServices />
      <PageCounter />
      <OurProcess />
      {/* <OurProjects />
      <Testimonials /> */}
      <AllTechnologies />
    </main>
  );
}
