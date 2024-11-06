interface Experience {
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string[]
}

const experiences: Experience[] = [
  {
    company: 'Tech Company',
    position: 'Senior Frontend Developer', 
    startDate: '2022',
    endDate: 'Günümüz',
    description: [
      'Modern web uygulamaları geliştirme',
      'Takım liderliği ve mentorluk',
      'Performans optimizasyonu'
    ]
  },
  // Diğer deneyimler...
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Deneyimlerim
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Profesyonel iş deneyimlerim
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-muted-foreground/20"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{experience.position}</h3>
                    <span className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{experience.company}</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {experience.description.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}