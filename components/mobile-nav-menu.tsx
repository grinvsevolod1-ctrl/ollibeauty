"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"

export function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#contacts", label: "Contacts" },
  ]

  const servicesItems = [
    { href: "/services", label: "Services" },
    { href: "/workshops", label: "Workshops" },
  ]

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b bg-white shadow-md">
      {/* Верхняя панель */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Логотип */}
        <div className="text-lg font-bold text-gray-900">Olli Beauty</div>

        {/* Блок справа */}
        <div className="flex items-center space-x-4">
          {/* ThemeToggle (если используешь) */}
          {/* <ThemeToggle /> */}

          {/* Гамбургер */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition-colors relative z-50"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Выпадающее меню */}
      {isOpen && (
        <nav className="px-4 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Services */}
          <div className="space-y-1">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
              aria-expanded={isServicesOpen}
            >
              <span>Services</span>
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
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