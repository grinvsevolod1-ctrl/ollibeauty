"use client"

import { Star, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Анна",
      text: "Оля — настоящий профессионал! Макияж держался весь день, я чувствовала себя королевой на своей свадьбе. Спасибо огромное!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Мария",
      text: "Очень довольна результатом! Оля учла все мои пожелания и создала идеальный образ для фотосессии. Рекомендую!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Екатерина",
      text: "Прекрасный мастер! Макияж был естественным и в то же время выразительным. Обязательно вернусь снова!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Aida",
      text: "Здравствуйте!!! Макияж и прическа продержались на ура!!!! 1000 комплиментов! Спасибо большое Вам",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Анна",
      text: "Спасибо вам большое за макияж) продержался до утра!!! Очень понравился) еще раз спасибо",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    { name: "Ольга",
      text: "Макияж продержался супер) Тон - огонь) Можете подсказать название? Я срочно поменяю свой) Очень рада, что нашла человека с правильными ручками",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
          <p className="text-lg md:text-2xl text-muted-foreground text-balance px-4">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 space-y-4 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base truncate">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 md:h-4 md:w-4 fill-[var(--gradient-start)] text-[var(--gradient-start)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{testimonial.text}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="https://www.instagram.com/olli_beauty_/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              {t.testimonials.viewInstagram}
              <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
