
const technologies = [
    "REACT",
    "NODE.JS",
    "EXPRESS.JS",
    "MONGODB",
    "TYPESCRIPT",
    "TAILWIND",
    "JAVASCRIPT",
    "REDUX TOOLKIT",
    "MYSQL",
]

export function TechStack() {
    return (
        <section className="border-b py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono text-muted-foreground">| TECH STACK |</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y border-l border-t">
                    {technologies.map((tech) => (
                        <div
                            key={tech}
                            className="flex items-center justify-start min-h-20 p-4 md:p-6 hover:bg-muted/50 transition-colors border-b border-r"
                        >
                            <span className="text-base md:text-xl font-bold tracking-tight">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
