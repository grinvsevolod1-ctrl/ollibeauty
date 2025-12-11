import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Olli Beauty | Профессиональный макияж",
  description: "Профессиональный визажист в Санкт-Петербурге",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider defaultLanguage="ru">
            <Header />
            <main className="pt-16 md:pt-20">{children}</main>
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
