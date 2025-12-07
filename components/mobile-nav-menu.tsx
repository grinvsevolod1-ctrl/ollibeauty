"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "/#home", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#testimonials", label: t.nav.testimonials },
    { href: "/#contacts", label: t.nav.contacts },
  ]

  const servicesItems = [
    { href: "/services", label: t.nav.services },
    { href: "/training", label: t.nav.training },
    { href: "/workshops", label: t.nav.workshops },
  ]

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/95 backdrop-blur-lg">
      {/* Toggle button */}
      <div className="flex justify-end px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Collapsible navigation */}
      {isOpen && (
        <nav className="px-4 pb-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="space-y-1">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              <span>{t.nav.servicesMenu || "Услуги"}</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-90" : ""}`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-4 space-y-1 animate-in slide-in-from-left-2 duration-200">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  )
}
