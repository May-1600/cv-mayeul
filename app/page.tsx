import MeshBackground from "@/components/MeshBackground";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="noise">
      <MeshBackground />
      <Hero />
      <Projects />
      <Timeline />
      <Skills />
      <Contact />
    </main>
  );
}
