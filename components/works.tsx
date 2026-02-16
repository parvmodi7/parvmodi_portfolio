
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        title: "DASHBOARD",
        category: "UI / UX Design",
        year: "2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["React", "Next.js", "Tailwind CSS"],
        href: "#",
    },
    {
        title: "NEON AI",
        category: "Web Development",
        year: "2023",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
        tags: ["WebGL", "Three.js", "GSAP"],
        href: "#",
    },
    {
        title: "LUMINA",
        category: "Branding",
        year: "2023",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        tags: ["Brand Identity", "Design System"],
        href: "#",
    },
    {
        title: "DEVTOOLS",
        category: "Product Design",
        year: "2022",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
        tags: ["Electron", "React", "TypeScript"],
        href: "#",
    },
]

export function Works() {
    return (
        <section id="work" className="border-b py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">WORKS,</h2>
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground" />
                </div>

                <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
