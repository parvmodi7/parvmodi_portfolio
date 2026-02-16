import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">

                    {/* Content Section */}
                    <div className="flex flex-col space-y-8 lg:order-1 order-2 lg:pr-16 lg:border-r lg:border-white/10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                {/* <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                                    Available for work
                                </span> */}
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.1]">
                                PARV <br className="hidden md:block" /> MODI
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                                Full-stack developer specializing in building exceptional digital experiences with the MERN stack.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                            <button className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors">
                                Contact Me
                            </button>
                        </div>

                        <div className="flex items-center gap-6 text-muted-foreground">
                            <a href="#" className="hover:text-foreground transition-colors">
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="#" className="hover:text-foreground transition-colors">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="hover:text-foreground transition-colors">
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:order-2 order-1 flex justify-center lg:justify-end relative lg:pl-16">
                        {/* Abstract Shape Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10  blur-3xl -z-10" />

                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            <img
                                src="parv.png"
                                alt="Parv Modi"
                                className="w-full h-full object-cover  shadow-2xl border border-border/50 bg-muted"
                            />
                            {/* Floating Card Element (Optional decoration) */}
                            <div className="absolute -bottom-6 -left-6 bg-card border text-card-foreground p-4 rounded-xl shadow-lg hidden md:block animate-in fade-in slide-in-from-bottom-10 duration-1000">
                                <p className="font-bold text-lg">1+ Years</p>
                                <p className="text-sm text-muted-foreground">Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
