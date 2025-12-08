





"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollableCards } from "./ScrollableCards"

export function ServicesSection() {
  const { t } = useLanguage()

  // Первая линия — услуги → /services
  const services = [
    { ...t.services.wedding, image: "/elegant-wedding-makeup-bride.jpg", href: "/services" },
    { ...t.services.evening, image: "/glamorous-evening-makeup.jpg", href: "/services" },
    { ...t.services.photoshoot, image: "/professional-photoshoot-makeup.jpg", href: "/services" },
  ]

  // Вторая линия — курсы → /workshops
  const courses = [
    { id: "individual", ...t.training.individual, href: "/workshops" },
    { id: "online", ...t.training.online, href: "/workshops" },
    { id: "group", ...t.training.group, href: "/workshops" },
  ]

  // Третья линия — воркшопы → /training
  const workshops = [
    { id: "bridal", ...t.workshops.bridal, href: "/training" },
    { id: "evening", ...t.workshops.evening, href: "/training" },
    { id: "photo", ...t.workshops.photo, href: "/training" },
  ]

  return (
    <section id="services" className="py-16 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-lg md:text-2xl text-muted-foreground px-4">{t.services.subtitle}</p>
        </div>

        <ScrollableCards items={services} />
        <ScrollableCards items={courses} />
        <ScrollableCards items={workshops} />

        <div className="text-center mt-12">
          <Link href="#booking">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90 w-full sm:w-auto"
            >
              <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t.hero.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
