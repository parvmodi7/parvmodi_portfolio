
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
    title: string
    category: string
    year: string
    image: string
    tags: string[]
    href: string
}

export function ProjectCard({ title, category, year, image, tags, href }: ProjectCardProps) {
    return (
        <Link href={href} className="group block">
            <Card className="border-0 bg-transparent shadow-none overflow-hidden">
                <CardHeader className="p-0 mb-4 ">
                    <div className="flex items-center justify-between border-b pb-2 mb-2 text-xs font-mono uppercase text-muted-foreground">
                        <span>{category}</span>
                        <span>{year}</span>
                    </div>
                    <CardTitle className="text-3xl font-bold group-hover:underline decoration-2 underline-offset-4 decoration-primary">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 relative aspect-video overflow-hidden rounded-md border bg-muted">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                        <div className="bg-background/80 backdrop-blur p-3 rounded-full">
                            <ArrowUpRight className="w-6 h-6 text-foreground" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-0 pt-4 gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    )
}
