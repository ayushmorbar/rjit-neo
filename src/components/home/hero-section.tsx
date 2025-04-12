"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const heroImages = [
  "https://ext.same-assets.com/907708951.jpeg", // Main Block
  "https://ext.same-assets.com/1151019942.jpeg", // Visit of Hon'ble DG
  "https://ext.same-assets.com/759682827.jpeg", // Silver Jubilee Celebration
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background images with fade transition */}
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={cn(
              "absolute inset-0 bg-cover bg-center",
              index === currentImageIndex ? "z-10" : "z-0"
            )}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-20" />

        {/* Content */}
        <div className="container relative z-30 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Rustamji Institute of Technology
            </h1>
            <p className="text-lg md:text-xl mb-6">
              The first engineering college in India established by a Para Military Force, providing quality education since 1999.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/admissions/procedure">
                  Explore Admissions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
          {heroImages.map((src, index) => (
            <button
              key={src} // Use the image source URL as a key
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                "h-2 w-8 rounded-full transition-all",
                index === currentImageIndex
                  ? "bg-primary"
                  : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
