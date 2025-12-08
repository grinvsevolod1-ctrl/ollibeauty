"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { BookingModal } from "@/components/booking-modal"

export default function TrainingPage() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")

  const courses = [
    {
      id: "individual",
      ...t.training.individual,
    },
    {
      id: "online",
      ...t.training.online,
    },
    {
      id: "group",
      ...t.training.group,
    },
  ]

  const handleBooking = (courseTitle: string) => {
    setSelectedCourse(courseTitle)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад на главную
          </Link>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t.training.title.split(" ")[0]}{" "}
              <span className="gradient-text">{t.training.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t.training.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-6">{course.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-[var(--gradient-start)]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-[var(--gradient-start)]" />
                    <span className="font-semibold">{course.price}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[var(--gradient-start)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleBooking(course.title)}
                  className="w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90"
                >
                  {t.training.cta}
                </Button>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Не знаете, какой курс выбрать?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Свяжитесь со мной, и я помогу подобрать программу обучения, которая идеально подойдет именно вам
            </p>
            <Button
              onClick={() => handleBooking("Консультация по обучению")}
              size="lg"
              className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={`Обучение: ${selectedCourse}`}
        title={selectedCourse}
      />
    </main>
  )
}
