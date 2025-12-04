"use client"

import { Clock, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState } from "react"

export function ServicesSection() {
  const { t } = useLanguage()
  const scrollRef = useRef(null)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const services = [
    { ...t.services.wedding, image: "/elegant-wedding-makeup-bride.jpg" },
    { ...t.services.evening, image: "/glamorous-evening-makeup.jpg" },
    { ...t.services.photoshoot, image: "/professional-photoshoot-makeup.jpg" },
    { ...t.services.lesson, image: "/makeup-lesson-teaching.jpg" },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.8
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

 
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
     
      scroll("right")
    }
    if (touchEndX - touchStartX > 50) {
      
      scroll("left")
    }
    setTouchStartX(0)
    setTouchEndX(0)
  }

  return (
    <section id="services" className="py-16 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-lg md:text-2xl text-muted-foreground px-4">{t.services.subtitle}</p>
        </div>


        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 md:gap-8 scroll-smooth no-scrollbar"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <Link key={index} href="#booking" className="flex-shrink-0 w-1/2 md:w-1/3">
                <Card
                  className="scale-[0.65] transform transition-transform duration-300 hover:scale-[0.975] cursor-pointer overflow-hidden group hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-2xl font-bold">{service.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="text-base md:text-lg font-bold gradient-text">{service.price}</div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          >
            ▶
          </button>
        </div>

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