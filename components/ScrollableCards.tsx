"use client"

import { Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useRef, useState } from "react"

interface Service {
  id?: string
  title: string
  description: string
  duration?: string
  price?: string
  image?: string
  video?: string   // 👈 добавлено
  href?: string
}

interface ScrollableCardsProps {
  items: Service[]
}

export function ScrollableCards({ items }: ScrollableCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.8
      let newScrollLeft =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
      newScrollLeft = Math.max(0, Math.min(newScrollLeft, scrollWidth - clientWidth))
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) scroll("right")
    if (touchEndX - touchStartX > 50) scroll("left")
    setTouchStartX(0)
    setTouchEndX(0)
  }

  return (
    <div className="relative mb-12">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((service, index) => (
          <Link
            key={`${service.id || service.title}-${index}`}
            href={service.href || "#booking"}
            className="flex-shrink-0 w-[300px] md:w-[400px]"
          >
            <Card
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden group hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {(service.video || service.image) && (
                <div className="relative overflow-hidden">
                  {service.video ? (
                    <video
                      src={service.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={service.image!}
                      alt={service.title || "Service image"}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6 space-y-4 text-base md:text-lg">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                {(service.duration || service.price) && (
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    {service.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                    {service.price && <div className="font-bold gradient-text">{service.price}</div>}
                  </div>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
      >
        ▶
      </button>
    </div>
  )
}
