
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        title: "AI-POWERED RESUME ANALYZER",
        category: "Full-Stack Web App",
        year: "2026",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS"],
        href: "https://github.com/Garvis123",
    },
    {
        title: "MECHVISTAS",
        category: "Petrol Pump Management System",
        year: "2025",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
        tags: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC"],
        href: "https://github.com/Garvis123",
    },
    {
        title: "LIBRARY MANAGEMENT SYSTEM",
        category: "Full-Stack MERN App",
        year: "2025",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
        href: "https://github.com/Garvis123",
    },
    {
        title: "MEDIMIND",
        category: "AI-Powered Healthcare Platform",
        year: "2024",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
        tags: ["React", "Node.js", "WebSockets", "WebRTC", "AI/ML"],
        href: "https://github.com/Garvis123",
    },
]

export function Works() {
    return (
        <section id="work" className="border-b py-12 md:py-24 ">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">WORKS</h2>
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
