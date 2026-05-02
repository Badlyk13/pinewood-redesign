import { motion, type Variants } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Сергей Петров',
    role: 'Директор компании',
    content: 'Проект выполнен качественно и в срок. Команда очень профессиональна и внимательна к деталям. Рекомендую!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Владелец коттеджа',
    content: 'Наша мечта о доме стала реальностью благодаря Pinewood. Отличное качество и надёжность.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Алексей Морозов',
    role: 'Архитектор',
    content: 'Работали с компанией на нескольких проектах. Всегда надёжные партнёры с инновационным подходом.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Елена Сидорова',
    role: 'Семейная пара',
    content: 'Процесс был понятным и прозрачным. Спасибо команде за внимание к нашим пожеланиям.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Николай Зубов',
    role: 'Предприниматель',
    content: 'Финансировали проект с помощью ипотеки от одного из партнёрских банков. Всё быстро и легко.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Анна Волкова',
    role: 'Менеджер проекта',
    content: 'Профессиональная команда с отличным послепродажным обслуживанием. Спасибо за помощь!',
    rating: 5,
  },
]

const ReviewsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 300 благодарных семей доверили нам строительство своих домов
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-pinewood-gold text-pinewood-gold"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-pinewood-graphite">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-pinewood-forest text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Оставить отзыв
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
