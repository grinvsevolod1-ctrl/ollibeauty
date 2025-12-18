/*"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function HeroVideo() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1
      setIsLoaded(true)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video5429239966708305361-idtDD7V58TIoZ4ILhx06RxJu7gJBbq.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 pt-32 lg:pt-20">
        <div
          className={`max-w-4xl mx-auto text-center space-y-6 md:space-y-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Pill button */}
          <Link href="#services">
            <Button
              variant="outline"
              className="rounded-full px-4 sm:px-6 py-5 sm:py-6 border-white/30 hover:border-white/50 transition-all duration-300 group bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 hover:scale-105"
            >
              <Sparkles className="h-4 w-4 mr-2 text-[var(--gradient-start)] animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-none">
                {t.hero.ctaSecondary}
              </span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </Link>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white px-2 sm:px-4 animate-fade-in-up">
            <span className="block sm:inline">{t.hero.title}</span>{" "}
            <span className="gradient-text block sm:inline mt-2 sm:mt-0 animate-gradient">{t.hero.brand}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up animation-delay-200">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-400">
            {t.hero.description}
          </p>

          {/* CTA Button */}
          <div className="pt-4 px-4 animate-fade-in-up animation-delay-600">
            <Link href="#booking">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto shadow-lg hover:shadow-xl"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
*/
