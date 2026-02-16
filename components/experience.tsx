
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        role: "SENIOR ENGINEER",
        company: "Technolabs of World",
        period: "2023 - PRESENT",
        description: "Leading the frontend team in re-architecting the core product using React and Next.js. Improved performance by 40% and established a comprehensive design system.",
    },
    {
        role: "CREATIVE DEV",
        company: "Studio Alpha",
        period: "2021 - 2023",
        description: "Collaborated with designers to build award-winning marketing sites. Utilized WebGL and GSAP for high-end animations and interactive storytelling experiences.",
    },
    {
        role: "WEB DEVELOPER",
        company: "Freelance",
        period: "2019 - 2021",
        description: "Delivered custom WordPress themes and Shopify stores for over 30 clients. Managed full project lifecycles from concept to deployment.",
    },
]

export function Experience() {
    return (
        <section id="experience" className="border-b py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">EXPERIENCE,</h2>

                <div className="divide-y border-t border-b">
                    {experiences.map((item) => (
                        <div key={item.company} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 group hover:bg-muted/30 transition-colors px-4">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-bold uppercase mb-1">{item.role}</h3>
                                <p className="text-muted-foreground font-mono text-sm">{item.company}</p>
                            </div>
                            <div className="md:col-span-6">
                                <p className="text-lg leading-relaxed">{item.description}</p>
                            </div>
                            <div className="md:col-span-2 flex md:justify-end items-start">
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
