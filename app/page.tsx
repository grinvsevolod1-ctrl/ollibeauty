import { HeroVideo } from "@/components/hero-video"
import { MarqueeText } from "@/components/marquee-text"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingSection } from "@/components/booking-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroVideo />
      <MarqueeText
        items={[
          "Профессиональный макияж",
          "Свадебный макияж",
          "Вечерний макияж",
          "Макияж для фотосессий",
          "Обучение макияжу",
        ]}
      />
      <AboutSection />
      <ServicesSection />
      <MarqueeText items={["Olli Beauty", "Санкт-Петербург", "Запись онлайн", "Instagram @olli_beauty_"]} />
      <PortfolioSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactsSection />
      <Footer />
    </main>
  )
}