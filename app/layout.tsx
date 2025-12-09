import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import Silk from "@/components/silk"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// --- МЕТАДАННЫЕ ---
export const metadata: Metadata = {
  title: "Olli Beauty | Профессиональный макияж в Санкт-Петербурге",
  description:
    "Профессиональный визажист в Санкт-Петербурге. Свадебный, вечерний макияж, макияж для фотосессий. Запись онлайн.",
  keywords:
    "визажист, макияж, Санкт-Петербург, свадебный макияж, вечерний макияж, Olli Beauty",
  openGraph: {
    title: "Olli Beauty | Профессиональный макияж",
    description: "Профессиональный визажист в Санкт-Петербурге",
    type: "website",
    url: "https://ollibeauty.ru",
    images: ["/og-image.jpg"], // добавь картинку для соцсетей
  },
}

// --- ОСНОВНОЙ КОМПОНЕНТ ---
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`relative min-h-screen font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          {/* Silk фон */}
          <div className="absolute inset-0 -z-10 w-full h-full">
            <Silk speed={5} rotation={0} />
          </div>

          {/* Провайдер языка */}
          <LanguageProvider defaultLanguage="ru">
            <Header />
            <main className="pt-16 md:pt-20">
              <Suspense fallback={<div>Загрузка...</div>}>
                {children}
              </Suspense>
            </main>
          </LanguageProvider>

          {/* Аналитика Vercel */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
} 
