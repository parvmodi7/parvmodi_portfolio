
import { Settings } from "lucide-react"

export function About() {
    return (
        <section id="about" className="border-b py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 md:gap-12 lg:grid-cols-2">
                    {/* Left: Title & Visual */}
                    <div className="flex flex-col justify-between">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">ABOUT,</h2>
                        <Settings className="w-16 h-16 animate-spin-slow text-muted-foreground hidden lg:block" style={{ animationDuration: "10s" }} />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-6 lg:max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-medium leading-tight">
                            I'm Parv Modi, a MERN Stack Developer with 1.5+ years of professional experience building scalable, production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            I work across the full software development lifecycle, from requirements analysis to deployment and maintenance, with a strong focus on clean architecture, API design, performance optimization, and maintainable code.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                            <div className="space-y-2">
                                <h4 className="text-sm font-mono text-green-500 uppercase tracking-wider">[ Methodology ]</h4>
                                <p className="text-sm text-muted-foreground">
                                    Build with practical engineering standards: reusable components, RESTful APIs, MVC patterns, code reviews, and agile collaboration to deliver reliable and scalable products.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-mono text-green-500 uppercase tracking-wider">[ Focus ]</h4>
                                <p className="text-sm text-muted-foreground">
                                    Currently focused on full-stack MERN development, TypeScript-first frontend architecture, secure authentication flows, and real-time features with WebSockets/WebRTC.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Settings className="w-12 h-12 animate-spin-slow text-muted-foreground lg:hidden mt-12" style={{ animationDuration: "10s" }} />
            </div>
        </section>
    )
}
