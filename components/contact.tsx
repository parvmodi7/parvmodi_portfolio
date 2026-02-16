
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-4 mb-16 md:mb-24">
                    <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">[ CONTACT ]</span>
                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none break-words">
                        LET'S
                        <br />
                        CONNECT.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start md:items-end">
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-mono">EMAIL</p>
                        <Link href="mailto:parvmodi11@gmail.com" className="text-xl sm:text-2xl md:text-4xl font-bold hover:underline decoration-2 underline-offset-4 decoration-primary break-all">
                            PARVMODI11@GMAIL.COM
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-muted-foreground font-mono">SOCIALS</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {[
                                { label: "GITHUB", href: "https://github.com/parvmodi7" },
                                { label: "LINKEDIN", href: "https://linkedin.com/in/parvmodi" },
                                { label: "PORTFOLIO", href: "#" },
                            ].map((social) => (
                                <Link href={social.href} key={social.label} className="font-bold flex items-center gap-1 hover:text-primary transition-colors">
                                    {social.label} <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 pt-8 border-t flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground font-mono uppercase">
                    <p>Bhopal, Madhya Pradesh, India</p>
                    <p>© 2026 Parv Modi Portfolio</p>
                </div>
            </div>
        </section>
    )
}
