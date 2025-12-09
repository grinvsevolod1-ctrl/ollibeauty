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



export const metadata: Metadata = {
  title: "Olli Beauty | Профессиональный макияж в Санкт-Петербурге",
  description:
    "Профессиональный визажист в Санкт-Петербурге. Свадебный, вечерний макияж, макияж для фотосессий. Запись онлайн.",
  keywords: "визажист, макияж, Санкт-Петербург, свадебный макияж, вечерний макияж, Olli Beauty",
  openGraph: {
    title: "Olli Beauty | Профессиональный макияж",
    description: "Профессиональный визажист в Санкт-Петербурге",
    type: "website",
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 1. ThemeProvider (Обертка для темной/светлой темы)
    <ThemeProvider defaultTheme="dark">
      {/* 2. HTML-тег */}
      <html lang="ru" suppressHydrationWarning>
        {/* 3. Body-тег */}
        <body
          className={`relative min-h-screen font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
        >
          {/* Silk фон (background) */}
          <div className="absolute inset-0 -z-10 w-full h-full">
            <Silk speed={5} rotation={0} />
          </div>

       
          <LanguageProvider defaultLanguage="ru">
            <Header />
            <main className="pt-16 md:pt-20">
              
              <Suspense fallback={null}>{children}</Suspense>
            </main>
          </LanguageProvider>

          <Analytics />
        </body>
      </html> {/* <-- Исправлено: Закрывающий тег HTML */}
    </ThemeProvider>
  )
}
