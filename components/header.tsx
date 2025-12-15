"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Globe, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { MobileNavMenu } from "@/components/mobile-nav-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#contacts", label: t.nav.contacts },
  ]

  const servicesItems = [
    { href: "#services", label: t.nav.services },
    { href: "/training", label: t.nav.training },
    { href: "/workshops", label: t.nav.workshops },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Лого слева */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Olya.png"        // файл в папке public/logo.png
            alt="Olli Beauty Logo"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Навигация по центру (только на десктопе) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              {t.nav.servicesMenu || "Услуги"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Действия справа */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Language */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
          </Button>

          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* CTA */}
          <Link href="#booking" className="hidden md:block">
            <Button className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90">
              {t.hero.cta}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && <MobileNavMenu />}
    </header>
  )
}
