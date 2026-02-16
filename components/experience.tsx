
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        role: "MERN STACK DEVELOPER",
        company: "Eulogik",
        period: "Oct 2025 - Feb 2026 (Ongoing)",
        description: "Develop and maintain full-stack web applications using the MERN stack, design and integrate RESTful APIs, optimize performance through refactoring and code reviews, and collaborate in agile sprints with cross-functional teams.",
    },
]

export function Experience() {
    return (
        <section id="experience" className="border-b py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">EXPERIENCE,</h2>

                <div className="divide-y border-t border-b">
                    {experiences.map((item) => (
                        <div key={item.company} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 group hover:bg-muted/30 transition-colors px-4 md:px-6">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-bold uppercase mb-1">{item.role}</h3>
                                <p className="text-muted-foreground font-mono text-sm">{item.company}</p>
                            </div>
                            <div className="md:col-span-6">
                                <p className="text-base md:text-lg leading-relaxed">{item.description}</p>
                            </div>
                            <div className="md:col-span-2 flex md:justify-end items-start md:items-center">
                                <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-mono">
                                    [{item.period}]
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
