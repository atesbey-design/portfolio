"use client"
import React from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    description: "Modern ve responsive kullanıcı arayüzleri",
    items: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 80, color: "#3178C6" },
      { name: "TailwindCSS", level: 90, color: "#38B2AC" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️", 
    description: "Güçlü ve ölçeklenebilir sunucu sistemleri",
    items: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express", level: 80, color: "#000000" },
      { name: "PostgreSQL", level: 75, color: "#336791" },
      { name: "MongoDB", level: 80, color: "#47A248" },
    ],
  },
  {
    category: "DevOps & Araçlar",
    icon: "🛠",
    description: "Geliştirme ve dağıtım süreçleri", 
    items: [
      { name: "Git", level: 85, color: "#F05032" },
      { name: "Docker", level: 70, color: "#2496ED" },
      { name: "AWS", level: 65, color: "#FF9900" },
      { name: "Linux", level: 75, color: "#FCC624" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="wrapper section-padding bg-gradient-to-b from-background to-secondary/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Teknik Yetenekler</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sürekli gelişen teknoloji dünyasında kendimi güncel tutarak, modern araçlar ve
          metodolojiler ile çalışıyorum.
        </p>
      </div>
      
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="mb-2 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 transition-all duration-300"
                      style={{ 
                        backgroundColor: `${skill.color}20`,
                        "--tw-progress-bar-color": skill.color 
                      } as any}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}