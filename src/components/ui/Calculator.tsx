import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 'living-type' | 'bedrooms' | 'area' | 'contact'

interface CalculatorState {
  livingType: 'permanent' | 'seasonal' | null
  bedrooms: number | null
  area: number | null
  name: string
  phone: string
}

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState<Step>('living-type')
  const [state, setState] = useState<CalculatorState>({
    livingType: null,
    bedrooms: null,
    area: null,
    name: '',
    phone: '',
  })

  const steps: Step[] = ['living-type', 'bedrooms', 'area', 'contact']
  const progress = ((steps.indexOf(currentStep) + 1) / steps.length) * 100

  const handleLivingTypeSelect = (type: 'permanent' | 'seasonal') => {
    setState((prev: CalculatorState) => ({ ...prev, livingType: type }))
    setCurrentStep('bedrooms')
  }

  const handleBedroomsSelect = (count: number) => {
    setState((prev: CalculatorState) => ({ ...prev, bedrooms: count }))
    setCurrentStep('area')
  }

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev: CalculatorState) => ({ ...prev, area: parseInt(e.target.value) || 0 }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit to backend
    console.log('Calculator submitted:', state)
  }

  return (
    <section className="py-20 bg-pinewood-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-pinewood-graphite mb-4">
              Рассчитайте стоимость вашего дома
            </h2>
            <p className="text-lg text-pinewood-graphite/70">
              Ответьте на 4 вопроса и получите предварительную смету
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-pinewood-beige/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-pinewood-forest"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-pinewood-graphite/60 mt-2 text-center">
              Шаг {steps.indexOf(currentStep) + 1} из {steps.length}
            </p>
          </div>

          {/* Questions */}
          <AnimatePresence mode="wait">
            {/* Step 1: Living Type (IMPROVED - was "Укажите площадь дома") */}
            {currentStep === 'living-type' && (
              <motion.div
                key="living-type"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-pinewood-graphite mb-6">
                  Постоянное проживание или сезонное?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleLivingTypeSelect('permanent')}
                    className="p-6 border-2 border-pinewood-beige/30 rounded-xl hover:border-pinewood-forest hover:bg-pinewood-forest/5 transition-all duration-300 text-left group"
                  >
                    <div className="text-3xl mb-3">🏡</div>
                    <div className="font-semibold text-pinewood-graphite group-hover:text-pinewood-forest">
                      Постоянное
                    </div>
                    <div className="text-sm text-pinewood-graphite/60 mt-1">
                      Для круглогодичного проживания
                    </div>
                  </button>
                  <button
                    onClick={() => handleLivingTypeSelect('seasonal')}
                    className="p-6 border-2 border-pinewood-beige/30 rounded-xl hover:border-pinewood-forest hover:bg-pinewood-forest/5 transition-all duration-300 text-left group"
                  >
                    <div className="text-3xl mb-3">☀️</div>
                    <div className="font-semibold text-pinewood-graphite group-hover:text-pinewood-forest">
                      Сезонное
                    </div>
                    <div className="text-sm text-pinewood-graphite/60 mt-1">
                      Дача, летний дом
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Bedrooms */}
            {currentStep === 'bedrooms' && (
              <motion.div
                key="bedrooms"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-pinewood-graphite mb-6">
                  Сколько спален нужно?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map(num => (
                    <button
                      key={num}
                      onClick={() => handleBedroomsSelect(num)}
                      className="p-6 border-2 border-pinewood-beige/30 rounded-xl hover:border-pinewood-forest hover:bg-pinewood-forest/5 transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-pinewood-forest mb-2">
                        {num}
                      </div>
                      <div className="text-sm text-pinewood-graphite/60">
                        {num === 1 ? 'Спальня' : num <= 4 ? 'Спальни' : 'Спален'}
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentStep('living-type')}
                  className="mt-6 text-pinewood-graphite/60 hover:text-pinewood-forest transition-colors"
                >
                  ← Назад
                </button>
              </motion.div>
            )}

            {/* Step 3: Area */}
            {currentStep === 'area' && (
              <motion.div
                key="area"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <label htmlFor="area-range" className="block text-2xl font-semibold text-pinewood-graphite mb-6">
                  Желаемая площадь дома
                </label>
                <div className="mb-8">
                  <input
                    id="area-range"
                    type="range"
                    min="50"
                    max="300"
                    step="10"
                    value={state.area || 100}
                    onChange={handleAreaChange}
                    className="w-full h-3 bg-pinewood-beige/30 rounded-lg appearance-none cursor-pointer accent-pinewood-forest"
                    aria-label="Площадь дома (м²)"
                    aria-valuenow={state.area || 100}
                    aria-valuemin={50}
                    aria-valuemax={300}
                  />
                  <div className="text-center mt-4">
                    <span className="text-5xl font-bold text-pinewood-forest">
                      {state.area || 100}
                    </span>
                    <span className="text-xl text-pinewood-graphite/60 ml-2">м²</span>
                  </div>
                  <div className="flex justify-between text-sm text-pinewood-graphite/50 mt-2">
                    <span>50 м²</span>
                    <span>300 м²</span>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep('bedrooms')}
                  className="text-pinewood-graphite/60 hover:text-pinewood-forest transition-colors"
                >
                  ← Назад
                </button>
              </motion.div>
            )}

            {/* Step 4: Contact */}
            {currentStep === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-pinewood-graphite mb-2">
                  Куда отправить расчёт?
                </h3>
                <p className="text-pinewood-graphite/60 mb-6">
                  Перезвоним в течение 15 минут с готовой сметой
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pinewood-graphite mb-2">
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={state.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState((prev: CalculatorState) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-pinewood-beige/30 rounded-lg focus:outline-none focus:border-pinewood-forest focus:ring-2 focus:ring-pinewood-forest/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-pinewood-graphite mb-2">
                      Ваш номер телефона
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={state.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState((prev: CalculatorState) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-pinewood-beige/30 rounded-lg focus:outline-none focus:border-pinewood-forest focus:ring-2 focus:ring-pinewood-forest/20 transition-all"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Получить расчёт →
                  </button>
                  <p className="text-xs text-pinewood-graphite/50 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
                <button
                  onClick={() => setCurrentStep('area')}
                  className="mt-6 text-pinewood-graphite/60 hover:text-pinewood-forest transition-colors"
                >
                  ← Назад
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
