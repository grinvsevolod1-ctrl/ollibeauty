/*"use client"

import { Sparkles, Heart } from "lucide-react"

interface MarqueeTextProps {
  items: string[]
}

export function MarqueeText({ items }: MarqueeTextProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] py-3 md:py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="flex items-center mx-6 md:mx-8">
            {items.map((item, idx) => (
              <span key={idx} className="flex items-center text-xs sm:text-sm md:text-base font-medium text-white">
                {idx === 0 ? (
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4 mr-2 flex-shrink-0" />
                ) : (
                  <Heart className="h-2 w-2 md:h-3 md:w-3 mx-2 md:mx-3 fill-white flex-shrink-0" />
                )}
                <span className="whitespace-nowrap">{item}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
*/
