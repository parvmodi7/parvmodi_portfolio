
const technologies = [
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "TAILWIND",
    "WEBGL",
    "THREE.JS",
    "NODE.JS",
    "FIGMA",
]

export function TechStack() {
    return (
        <section className="border-b py-12">
            <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono text-muted-foreground">| TECH STACK |</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y border-l border-t ">
                    {technologies.map((tech) => (
                        <div
                            key={tech}
                            className="flex items-center justify-start p-6 hover:bg-muted/50 transition-colors border-b border-r"
                        >
                            <span className="text-xl font-bold tracking-tight">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
