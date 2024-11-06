"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const education = [
  {
    school: "X Üniversitesi",
    degree: "Bilgisayar Mühendisliği", 
    period: "2018 - 2022",
    description: "Yazılım geliştirme, algoritma ve veri yapıları üzerine kapsamlı eğitim.",
    achievements: ["Onur Öğrencisi", "3.85 GPA", "Yazılım Kulübü Başkanı"],
    icon: "🎓"
  },
  {
    school: "Y Kurumu",
    degree: "Full Stack Web Development",
    period: "2022", 
    description: "Modern web teknolojileri ve uygulama geliştirme bootcamp programı.",
    achievements: ["En İyi Proje Ödülü", "100+ Saat Pratik"],
    icon: "💻"
  },
]

const EducationSection = () => {
  return (
    <section id="education" className="wrapper section-padding bg-gradient-to-b from-background to-secondary/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Eğitim Geçmişim</h2>
        <p className="text-lg text-muted-foreground">
          Akademik ve profesyonel eğitim deneyimlerim
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{edu.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary">{edu.school}</h3>
                      <p className="text-xl font-medium">{edu.degree}</p>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-secondary">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <Badge 
                        key={achievement} 
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium hover:bg-secondary/80"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection