"use client"

import { useState } from "react"
import Link from "next/link"
// Импортируем иконки из lucide-react
import { Menu, X, ChevronRight } from "lucide-react"

export function MobileNavMenu() {
  // Состояние для открытия/закрытия главного меню
  const [isOpen, setIsOpen] = useState(false)
  // Состояние для открытия/закрытия подменю "Services"
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Основные пункты навигации
  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#contacts", label: "Contacts" },
  ]

  // Пункты подменю "Services"
  const servicesItems = [
    { href: "/services", label: "Services" },
    { href: "/workshops", label: "Workshops" },
  ]

  return (
    // Контейнер мобильного меню: фиксирован сверху, слева, справа; высокий z-index.
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b bg-white shadow-md">
      {/* Верхняя панель: flex-контейнер для логотипа и элементов справа */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Логотип слева */}
        <div className="text-lg font-bold text-gray-900">Olli Beauty</div>

        {/* Блок справа: переключатель темы + гамбургер */}
        {/* Используем flex для расположения в ряд и gap для отступа. 
            Это гарантирует, что элементы не будут наслаиваться. */}
        <div className="flex items-center gap-3">
          {/* Если используешь ThemeToggle, вставь сюда (раскомментируй) */}
          {/* <ThemeToggle /> */}

          {/* Кнопка гамбургера */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition-colors"
            // Убеждаемся, что кнопка имеет свое место и не наслаивается
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Выпадающее меню (скрывается/показывается в зависимости от isOpen) */}
      {isOpen && (
        <nav className="px-4 pb-4 space-y-1">
          {/* Основные пункты */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)} // Закрываем меню при клике
            >
              {item.label}
            </Link>
          ))}

          {/* Пункт с подменю "Services" */}
          <div className="space-y-1">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
              aria-expanded={isServicesOpen}
            >
              <span>Services</span>
              <ChevronRight
                // Поворачиваем иконку на 90 градусов при открытом подменю
                className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-90" : ""}`}
              />
            </button>

            {/* Подменю "Services" */}
            {isServicesOpen && (
              <div className="pl-4 space-y-1">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => {
                      setIsOpen(false)       // Закрываем главное меню
                      setIsServicesOpen(false) // Закрываем подменю
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
