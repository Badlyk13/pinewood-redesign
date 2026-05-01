import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingTier {
  id: number
  name: string
  description: string
  price: string
  period: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: 'Базовый',
    description: 'Для небольших участков',
    price: '2,500,000',
    period: 'от',
    features: [
      'Площадь до 100 м²',
      'Стандартный проект',
      'Классические материалы',
      'Построение за 6-8 месяцев',
      'Гарантия 3 года',
    ],
    cta: 'Узнать подробнее',
  },
  {
    id: 2,
    name: 'Премиум',
    description: 'Самый популярный выбор',
    price: '4,500,000',
    period: 'от',
    features: [
      'Площадь до 200 м²',
      'Индивидуальный проект',
      'Премиум материалы',
      'Построение за 4-6 месяцев',
      'Гарантия 5 лет',
      'Поддержка архитектора',
    ],
    cta: 'Рассчитать стоимость',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Люкс',
    description: 'Максимум возможностей',
    price: '7,000,000',
    period: 'от',
    features: [
      'Площадь до 300+ м²',
      'Эксклюзивный проект',
      'Люкс материалы',
      'Построение за 2-4 месяца',
      'Гарантия 7 лет',
      'Персональный менеджер',
      'Дизайн интерьера',
    ],
    cta: 'Консультация',
  },
]

const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pinewood-graphite mb-4">
            Прозрачные цены
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите пакет, который подходит именно вам. Все цены включают материалы и работы
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              className={`rounded-lg p-8 transition-all ${
                tier.highlighted
                  ? 'bg-white shadow-2xl ring-2 ring-pinewood-gold scale-105 md:scale-110'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
              variants={itemVariants}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block bg-pinewood-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Самый популярный
                </div>
              )}
              <h3 className="text-2xl font-bold text-pinewood-graphite mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-pinewood-forest">
                  {tier.price}
                </span>
                <span className="text-gray-600 ml-2">₽ {tier.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  tier.highlighted
                    ? 'bg-pinewood-forest text-white hover:bg-opacity-90'
                    : 'bg-pinewood-sand text-pinewood-forest hover:bg-pinewood-moss'
                }`}
              >
                {tier.cta}
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check
                      size={20}
                      className="text-pinewood-forest flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Не нашли идеальный вариант? Создадим индивидуальный проект
          </p>
          <button className="border-2 border-pinewood-forest text-pinewood-forest px-8 py-3 rounded-lg font-semibold hover:bg-pinewood-sand transition-all">
            Обсудить проект
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
