"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "@/components/theme-provider"

export function MobileNavMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { t } = useLanguage()
  const { theme } = useTheme()

  const navItems = [
    { href: "/#home", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#contacts", label: t.nav.contacts },
  ]

  const servicesItems = [
    { href: "/services", label: t.nav.services },
    { href: "/workshops", label: t.nav.workshops },
    { href: "/training", label: t.nav.training },
  ]

  return (
    <nav className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md px-4 pb-4 space-y-1 transition-colors duration-300">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg 
                     dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-300"
        >
          {item.label}
        </Link>
      ))}

      <div className="space-y-1">
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg 
                     dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-300"
        >
          <span>{t.nav.servicesMenu}</span>
          <ChevronRight
            className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-90" : ""}`}
          />
        </button>

        {isServicesOpen && (
          <div className="pl-4 space-y-1">
            {servicesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg 
                           dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
