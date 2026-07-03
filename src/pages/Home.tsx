import Hero from "../sections/Hero";
import SelectedWork from "../sections/SelectedWork";
import Services from "../sections/Services";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
