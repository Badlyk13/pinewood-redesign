import { motion } from 'framer-motion'
import { MapPin, Home, Calendar } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  location: string
  area: string
  duration: string
  description: string
  tags: string[]
  image?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Коттедж в Подмосковье',
    location: 'Московская область, 45 км от МКАД',
    area: '180 м²',
    duration: '5 месяцев',
    description:
      'Строительство современного коттеджа с использованием экологичных материалов. Проект включал персональный дизайн ландшафта и систему умного дома.',
    tags: ['Коттедж', 'Современный', 'Экологичные материалы'],
    image: '/placeholder-case-1.svg',
  },
  {
    id: 2,
    title: 'Загородный дом класса люкс',
    location: 'Тверская область, элитное поселение',
    area: '280 м²',
    duration: '7 месяцев',
    description:
      'Эксклюзивный проект с использованием премиум материалов. Включал строительство сауны, бассейна и охраняемого периметра.',
    tags: ['Люкс', 'Бассейн', 'Сауна'],
    image: '/placeholder-case-2.svg',
  },
  {
    id: 3,
    title: 'Семейный коттедж',
    location: 'Ленинградская область, ближайшие окрестности',
    area: '120 м²',
    duration: '3 месяца',
    description:
      'Бюджетный вариант для молодой семьи с детьми. Оптимизированный проект с функциональной планировкой и энергоэффективностью.',
    tags: ['Компактный', 'Функциональный', 'Экономичный'],
    image: '/placeholder-case-3.svg',
  },
]

const CaseStudiesSection = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pinewood-graphite mb-4">
            Наши проекты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            От маленьких семейных домиков до люкс-коттеджей — мы реализуем мечты
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
              variants={itemVariants}
            >
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
                  <div className="w-full h-full bg-gradient-to-br from-pinewood-sand to-pinewood-moss flex items-center justify-center">
                    <Home size={64} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-pinewood-graphite mb-4">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-2 items-start">
                    <MapPin
                      size={20}
                      className="text-pinewood-forest mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{project.location}</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Home
                      size={20}
                      className="text-pinewood-forest mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">Площадь: {project.area}</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Calendar
                      size={20}
                      className="text-pinewood-forest mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">Сроки: {project.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-pinewood-sand text-pinewood-forest px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-pinewood-forest text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Смотреть все проекты
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
