import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Suspense } from "react"
import { MobileNavMenu } from "@/components/mobile-nav-menu"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider defaultLanguage="ru">
            {/* 👉 добавляем мобильное меню */}
            <MobileNavMenu />

            <Suspense fallback={null}>{children}</Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
