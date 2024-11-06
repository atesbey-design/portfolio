import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformu. Next.js ve Stripe entegrasyonu ile geliştirildi.",
    image: "/elittur.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    github: "https://www.elittur.com/",
    demo: "https://project-demo.com",
  },
  // Diğer projeler...
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="wrapper section-padding bg-gradient-to-b from-background to-secondary/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Öne Çıkan Projeler</h2>
        <p className="text-lg text-muted-foreground">
          Modern teknolojiler kullanarak geliştirdiğim bazı projeler
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium hover:bg-secondary/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full transition-colors hover:bg-secondary" 
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-5 w-5" /> GitHub
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full group/btn" 
                    asChild
                  >
                    <Link href={project.demo} target="_blank">
                      <span>Demo</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection