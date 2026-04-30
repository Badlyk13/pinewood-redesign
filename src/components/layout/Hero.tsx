import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = () => {
    setIsCalculating(true)
    // TODO: Open calculator modal
    setTimeout(() => setIsCalculating(false), 2000)
  }

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-forest-house.svg"
          alt="Каркасный дом Pinewood Homes в лесу с панорамным остеклением"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay - darker on the left (35-45%) for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-pinewood-graphite/70 via-pinewood-graphite/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Headline - 96px+ for premium feel */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-display text-white leading-tight mb-6"
            >
              Построй дом
              <br />
              <span className="text-pinewood-beige">своей мечты</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 max-w-2xl"
            >
              Уютные дома заводского производства
            </motion.p>

            {/* Trust indicators line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-white/80 text-sm sm:text-base md:text-lg font-medium"
            >
              <span>🌲 14 лет</span>
              <span className="hidden sm:inline">·</span>
              <span>🏠 300+ домов</span>
              <span className="hidden sm:inline">·</span>
              <span>🛡️ гарантия 5 лет</span>
              <span className="hidden sm:inline">·</span>
              <span>🏦 ипотека от 6 банков</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 min-w-[280px] sm:min-w-[320px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Рассчитываем...
                  </span>
                ) : (
                  'Рассчитать стоимость моего дома → за 2 минуты'
                )}
              </button>
              
              <button className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
                Видеотур по объекту
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
