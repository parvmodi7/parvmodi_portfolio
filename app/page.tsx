import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Works } from "@/components/works"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}
