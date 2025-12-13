"use client"

import { Instagram, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { FaWhatsapp, FaTelegramPlane, FaViber } from "react-icons/fa"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--gradient-start)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--gradient-end)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10 px-4 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">
              <span className="gradient-text">Olli Beauty</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональный макияж и обучение в Санкт-Петербурге и городе Борисов
            </p>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/olli_beauty_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-[var(--gradient-start)]/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/79219876543"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-green-500/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/79219876543"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-blue-500/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="h-5 w-5" />
              </a>
              <a
                href="viber://chat?number=79219876543"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-purple-500/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Viber"
              >
                <FaViber className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-base">{t.nav.services}</h4>
            <nav className="space-y-3">
              <Link
                href="/#about"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/#services"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/#portfolio"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="/#testimonials"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.testimonials}
              </Link>
            </nav>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Обучение</h4>
            <nav className="space-y-3">
              <Link
                href="/training"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.training}
              </Link>
              <Link
                href="/workshops"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.workshops}
              </Link>
              <Link
                href="/#booking"
                className="block text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors hover:translate-x-1 transform duration-200"
              >
                {t.nav.booking}
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4 text-base">{t.nav.contacts}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[var(--gradient-start)]" />
                <span className="leading-relaxed">{t.contacts.address}</span>
              </div>
              <a
                href={`tel:${t.contacts.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{t.contacts.phone}</span>
              </a>
              <a
                href="https://www.instagram.com/olli_beauty_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                <span>@olli_beauty_</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Olli Beauty. {t.footer.rights}
          </p>
          <a
            href="https://netnext.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-[var(--gradient-start)] transition-colors flex items-center gap-2 group"
          >
            <span>Designed And Developed by</span>
            <span className="font-semibold gradient-text group-hover:opacity-80 transition-opacity">
              NetNext Studio
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
