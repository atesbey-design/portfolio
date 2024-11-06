import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  "JavaScript",
  "TypeScript", 
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TailwindCSS",
  "Git"
]

const AboutSection = () => {
  return (
    <section id="about" className="wrapper section-padding bg-gradient-to-b from-background to-secondary/20">
      <h2 className="section-title text-4xl font-bold tracking-tight">Hakkımda</h2>
      
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <Card className="overflow-hidden transition-transform hover:scale-[1.02] h-[400px]">
          <div className="relative w-full h-full">
            <Image
              src="/image.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Card>

        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Merhaba, Ben TuncerBytee</h3>
            <p className="text-lg leading-relaxed">
              Full Stack Developer olarak modern web teknolojileri ile çalışmaktan
              keyif alıyorum. Kullanıcı deneyimini ön planda tutarak, performanslı
              ve ölçeklenebilir uygulamalar geliştiriyorum.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Yetenekler</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-secondary/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection