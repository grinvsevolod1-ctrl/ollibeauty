import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Debug Layout",
  description: "Минимальный layout для диагностики",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}