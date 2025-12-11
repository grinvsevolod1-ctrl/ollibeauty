"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      className={`relative sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — инлайн SVG */}
          <Link href="/" aria-label="На главную">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1405.69 469.25"
              className="h-8 md:h-10 w-auto transition-transform duration-300"
            >
              <path fill="#FEFEFE" d="M652.23 218.43c-4.47-5.67-9.99-9.99-16.56-13-6.58-3.02-13.61-4.53-21.09-4.53-15.81 0-28.27 5.52-37.38 16.53-9.11 11.04-13.67 25.77-13.67 44.2 0 17.71 4.83 31.62 14.48 41.76 9.05 9.38 20.7 14.09 34.94 14.09 17.02 0 30.23-7.36 39.64-22.06 7.36-11.44 11.04-23.87 11.04-37.23 0-8.21-0.78-15.45-2.35-21.78-1.57-6.31-4.59-12.31-9.05-17.98z"/>
              <path fill="#DFC1BE" d="M536.69 42.15c5.22 0.8 10.74 2.41 16.56 4.82 5.82 2.41 8.93 4.62 9.33 6.62-3.21-0.8-7.23-1.4-12.04-1.81-4.82-0.4-8.23-0.6-10.24-0.6-17.26 0-34.02 3.61-50.28 10.84-16.26 7.22-31.71 16.76-46.36 28.6-14.65 11.84-28.1 25.49-40.34 40.95-12.24 15.45-22.68 31.41-31.31 47.87-8.63 16.46-15.45 32.82-20.47 49.07-5.02 16.26-7.53 31.21-7.53 44.86 0 23.28 6.22 41.75 18.67 55.39 12.44 13.65 33.12 20.47 62.02 20.47 19.27 0 38.74-3.71 58.41-11.14 19.67-7.43 38.84-17.56 57.5-30.41 18.67-12.85 36.13-27.8 52.38-44.86 16.26-17.06 30.41-35.42 42.45-55.09 12.04-19.67 21.58-39.94 28.6-60.81 7.03-20.87 10.54-41.35 10.54-61.42 0-10.84-1.6-20.87-4.82-30.11-3.21-9.23-8.03-17.36-14.45-24.38-6.42-7.03-14.55-12.54-24.38-16.56-9.84-4.01-21.17-6.02-34.02-6.02-14.05 0-27.3 1.5-39.74 4.52-12.44 3.01-23.68 6.52-33.72 10.54z"/>
            </svg>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
  variant="ghost"
  size="icon"
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  aria-label="Toggle theme"
>
  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
</Button>

<Link href="#booking" className="hidden md:block">
  <Button className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90">
    {t.hero.cta}
  </Button>
</Link>
</div>
</div>
</div>

{/* Mobile Dropdown */}
{isOpen && <MobileNavMenu />}
</header>
)
}