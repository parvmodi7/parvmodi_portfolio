
import { Settings } from "lucide-react"

export function About() {
    return (
        <section id="about" className="border-b py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left: Title & Visual */}
                    <div className="flex flex-col justify-between">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">ABOUT,</h2>
                        <Settings className="w-16 h-16 animate-spin-slow text-muted-foreground hidden lg:block" style={{ animationDuration: "10s" }} />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl md:text-3xl font-medium leading-tight">
                            I'm a multidisciplinary developer focused on crafting <span className="line-through decoration-destructive decoration-2 text-muted-foreground">boring</span> immersive web experiences. I bridge the gap between stark brutalism and functional interaction.
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            With a background in traditional design and a passion for code, I build digital products that are not only functional but also visually compelling. I believe in the power of minimalism and the importance of user experience.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <h4 className="text-sm font-mono text-green-500 uppercase tracking-wider">[ Methodology ]</h4>
                                <p className="text-sm text-muted-foreground">
                                    Believing in code as a medium for artistic expression. Every pixel is calculated, every interaction is intentional. Oversimplify mechanisms not aesthetics.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-mono text-green-500 uppercase tracking-wider">[ Focus ]</h4>
                                <p className="text-sm text-muted-foreground">
                                    Currently obsessed with WebGL, micro-interactions, and typography-driven layouts. Pushing the browser to its absolute limits.
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
