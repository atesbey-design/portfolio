import React from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import EducationSection from "@/components/sections/education-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="flex flex-col gap-[10vh]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
} 