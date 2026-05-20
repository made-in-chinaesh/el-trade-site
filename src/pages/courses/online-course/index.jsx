import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollToTop } from '../../../shared/components'
import styles from './styles.module.scss'

const tariffs = {
	standard: {
		title: 'Standard',
		price: '$499',
		// oldPrice: '$699',
		description:
			'Идеально для новичков, которые хотят освоить основы трейдинга.',
		features: [
			'📚 Базовые уроки',
			'📊 Основы технического анализа',
			'💬 Общий чат студентов',
			'🎥 Доступ к материалам 3 месяца',
		],
	},

	premium: {
		title: 'Premium',
		price: '$750',
		oldPrice: '$999',
		description: 'Для тех, кто хочет выйти на профессиональный уровень.',
		features: [
			'🔥 Все из Standard',
			'📈 Продвинутые стратегии',
			'🧠 Разборы рынка в реальном времени',
			'👨‍🏫 Поддержка наставника',
			'🎥 Доступ к материалам навсегда',
		],
	},

	individual: {
		title: 'Индивидуальный',
		price: '$1300',
		oldPrice: '$1600',
		description: 'Полностью персональное обучение с наставником 1 на 1.',
		features: [
			'👤 Индивидуальные созвоны',
			'📊 Персональный план обучения',
			'💼 Разбор твоих сделок',
			'⚡ Быстрый рост навыков',
			'🏆 Максимальная поддержка',
		],
	},
}

export const OnlineCoursePage = () => {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState('standard')

	const [displayPrice, setDisplayPrice] = useState(0)

	const current = tariffs[activeTab]

	// COUNT-UP ANIMATION
	useEffect(() => {
		const target = Number(current.price?.replace('$', ''))
		let start = 0

		const duration = 600
		const stepTime = 20
		const steps = duration / stepTime
		const increment = target / steps

		const interval = setInterval(() => {
			start += increment

			if (start >= target) {
				start = target
				clearInterval(interval)
			}

			setDisplayPrice(Math.floor(start))
		}, stepTime)

		return () => clearInterval(interval)
	}, [activeTab, current.price])

	const goToAppointment = () => {
		navigate('/')

		setTimeout(() => {
			const el = document.getElementById('appointment')
			if (el) el.scrollIntoView({ behavior: 'smooth' })
		}, 100)
	}

	return (
		<div className={styles.online}>
			<ScrollToTop />

			<div className={clsx(styles.page, 'container')}>
				{/* HERO */}
				<section className={styles.hero}>
					<button className={styles.backBtn} onClick={() => navigate('/')}>
						← На главную
					</button>

					<h1>Онлайн курс по трейдингу</h1>

					<p>
						Обучайся из любой точки мира в удобном темпе с поддержкой
						наставников и доступом к закрытым стратегиям.
					</p>
				</section>

				{/* IMAGE */}
				<section className={styles.imageBlock}>
					<img
						src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400'
						alt='online trading'
					/>
				</section>

				{/* TARIFFS */}
				<section className={styles.tariffs}>
					<div className={styles.top}>
						<h2>Выбери формат обучения</h2>
						<p>Каждый тариф создан под разный уровень подготовки и цели.</p>
					</div>

					{/* TABS */}
					<div className={styles.tabs}>
						<button
							className={activeTab === 'standard' ? styles.active : ''}
							onClick={() => setActiveTab('standard')}
						>
							Standard
						</button>

						<button
							className={activeTab === 'premium' ? styles.active : ''}
							onClick={() => setActiveTab('premium')}
						>
							Premium
						</button>

						<button
							className={activeTab === 'individual' ? styles.active : ''}
							onClick={() => setActiveTab('individual')}
						>
							Individual
						</button>
					</div>

					{/* CARD */}
					<div key={activeTab} className={styles.card}>
						<div className={styles.priceBlock}>
							<h3>{current.title}</h3>

							<div className={styles.priceWrap}>
								<span className={styles.oldPrice}>
									{current.oldPrice || ''}
								</span>

								<span className={styles.price}>${displayPrice}</span>
							</div>

							<p>{current.description}</p>
						</div>

						<ul>
							{current.features.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>

						<button className={styles.buyBtn} onClick={goToAppointment}>
							Записаться
						</button>
					</div>
				</section>

				{/* CTA */}
				<section className={styles.cta}>
					<h2>Начни обучение онлайн</h2>
					<p>Доступ к курсу откроется сразу после записи</p>

					<button onClick={goToAppointment}>Записаться</button>
				</section>
			</div>
		</div>
	)
}
