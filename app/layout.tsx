import type React from "react"
import type { Metadata } from "next"
import Silk from "@/components/Silk"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Suspense } from "react"
import { Header } from "@/components/header"   

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <div className="absolute inset-0 -z-10">
  <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
</div>
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider defaultLanguage="ru">
            <Header />
            <main className="pt-16 md:pt-20">
              <Suspense fallback={null}>{children}</Suspense>
            </main>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
