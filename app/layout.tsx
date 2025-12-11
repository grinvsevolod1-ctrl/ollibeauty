import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/next"
import silk from "@/components/silk"
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
            {/* Живой фон Silk */}
            <div className="absolute inset-0 -z-10">
              <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
            </div>

            {/* Overlay для читаемости текста */}
            <div className="absolute inset-0 bg-black/30 -z-5" />

            {/* Шапка и контент */}
            <Header />
            <main className="pt-16 md:pt-20 relative z-10">{children}</main>
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
