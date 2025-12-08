"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { BookingModal } from "@/components/booking-modal"

export default function ServicesPage() {
  const { t } = useLanguage()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const services = [
    { id: "evening", ...t.services.evening, image: "/glamorous-evening-makeup.jpg" },
    { id: "photoshoot", ...t.services.photoshoot, image: "/professional-photoshoot-makeup.jpg" },
    { id: "lesson", ...t.services.lesson, image: "/makeup-lesson-teaching.jpg" },
  ]

  const handleBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            ← Назад на главную
          </Link>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.services.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="max-w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-[var(--gradient-start)]" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-base md:text-lg font-bold gradient-text">
                    {service.price}
                  </div>
                </div>

                <Button
                  onClick={() => handleBooking(service.title)}
                  className="w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {t.hero.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        onClose={() => setIsModalOpen(false)}
        formType={`Услуга: ${selectedService}`}
        title={selectedService}
      />
    </main>
  )
}