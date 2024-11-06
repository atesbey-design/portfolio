import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="section-padding flex h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="space-y-4 max-w-3xl">
          <span className="text-sm font-semibold text-primary">
            Hoş Geldiniz 👋
          </span>
          <h1 className="text-5xl font-bold">
            Ben <span className="text-primary">TuncerBytee</span>
          </h1>
          <h2 className="text-3xl font-bold text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="text-xl text-muted-foreground">
            Modern web teknolojileri ile kullanıcı dostu ve ölçeklenebilir 
            uygulamalar geliştiriyorum.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="#contact">
              İletişime Geç <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cv.pdf" target="_blank">
              CV İndir <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="h-12 w-12 rounded-full border-2 border-background bg-muted"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">50+</span> proje
            tamamlandı
          </p>
        </div>

       
      </div>
    </section>
  )
}

export default HeroSection 