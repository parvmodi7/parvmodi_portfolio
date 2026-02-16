
import { ArrowDownRight } from "lucide-react"

export function Hero() {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row border-b">
            {/* Left Side: Name */}
            <div className="flex-1 flex flex-col justify-center p-6 md:p-12 md:border-r">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4">
                    PARV
                    <br />
                    MODI
                </h1>
            </div>

            {/* Right Side: Intro */}
            <div className="flex-1 flex flex-col justify-end p-6 md:p-12 bg-muted/20">
                <div className="max-w-md ml-auto">
                    <p className="text-lg md:text-xl font-mono mb-8 text-muted-foreground uppercase tracking-wider">
                        MERN STACK DEVELOPER BUILDING SCALABLE FULL-STACK APPLICATIONS WITH REACT.JS, NODE.JS, EXPRESS.JS, MONGODB, AND RESTFUL APIS.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        OPEN TO OPPORTUNITIES
                    </div>
                </div>
                <ArrowDownRight className="w-12 h-12 mt-12 self-end text-muted-foreground/50" />
            </div>
        </section>
    )
}
