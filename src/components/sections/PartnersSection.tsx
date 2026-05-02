import { motion } from 'framer-motion'
import { Building2, CreditCard } from 'lucide-react'

interface Partner {
  id: number
  name: string
  category: 'bank' | 'partner'
  logo?: string
  shortName: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Сбербанк',
    shortName: 'СБ',
    category: 'bank',
  },
  {
    id: 2,
    name: 'ВТБ',
    shortName: 'ВТБ',
    category: 'bank',
  },
  {
    id: 3,
    name: 'Газпромбанк',
    shortName: 'ГПБ',
    category: 'bank',
  },
  {
    id: 4,
    name: 'Альфа-Банк',
    shortName: 'АБ',
    category: 'bank',
  },
  {
    id: 5,
    name: 'Райффайзен',
    shortName: 'РБ',
    category: 'bank',
  },
  {
    id: 6,
    name: 'РСХБ',
    shortName: 'РСХБ',
    category: 'bank',
  },
]

const PartnersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
            Наши партнёры
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Сотрудничаем с ведущими банками и строительными компаниями для вашего удобства
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow group"
              variants={itemVariants}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pinewood-forest to-pinewood-moss flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <CreditCard size={24} className="text-white" />
              </div>
              <p className="font-semibold text-pinewood-graphite text-center text-sm md:text-base">
                {partner.name}
              </p>
              <p className="text-xs text-gray-500 mt-2">Ипотека от {6}%</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-pinewood-graphite mb-4">
                Ипотека от 6 банков
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Мы сотрудничаем с ведущими российскими банками, чтобы сделать покупку вашего дома максимально доступной. Помогаем оформить ипотеку, подбираем оптимальные условия и сопровождаем весь процесс.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-pinewood-forest font-bold">✓</span>
                  <span className="text-gray-700">Ставки от 6% годовых</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pinewood-forest font-bold">✓</span>
                  <span className="text-gray-700">Сроки от 3 до 30 лет</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pinewood-forest font-bold">✓</span>
                  <span className="text-gray-700">Быстрое одобрение</span>
                </li>
              </ul>
              <button className="bg-pinewood-forest text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Рассчитать ипотеку
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-pinewood-sand to-pinewood-moss rounded-lg h-64 md:h-80 flex items-center justify-center">
                <Building2 size={80} className="text-gray-400" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Хотите стать нашим партнёром?</p>
          <button className="border-2 border-pinewood-forest text-pinewood-forest px-8 py-3 rounded-lg font-semibold hover:bg-pinewood-sand transition-all">
            Свяжитесь с нами
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
