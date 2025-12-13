"use client"

import { useState } from "react"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { FaWhatsapp, FaTelegramPlane, FaViber } from "react-icons/fa"

export function MobileContactMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const phoneNumber = "+79219876543"
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`
  const telegramLink = `https://t.me/${phoneNumber.replace(/\+/g, "")}`
  const viberLink = `viber://chat?number=${phoneNumber.replace(/\+/g, "")}`

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
        aria-label="Contact menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed right-2 top-16 w-[calc(100vw-2rem)] max-w-[280px] bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden animate-slide-in-from-top">
          <div className="p-4 space-y-3">
            {/* Phone number */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-5 w-5 text-[var(--gradient-start)] flex-shrink-0" />
              <span className="text-sm font-medium break-all">{phoneNumber}</span>
            </a>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Messengers */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground px-3 font-medium">
                {t.contacts.messengers || "Мессенджеры"}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                <FaTelegramPlane className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium">Telegram</span>
              </a>

              <a
                href={viberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                <FaViber className="h-5 w-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm font-medium">Viber</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
