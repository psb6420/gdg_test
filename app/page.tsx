import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-4">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
