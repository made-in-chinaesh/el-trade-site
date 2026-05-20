import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollToTop } from '../../../shared/components'
import styles from './styles.module.scss'

const tariffs = {
	standard: {
		title: 'Standard',
		price: '$199',
		description: 'Базовый оффлайн курс для старта в трейдинге.',
		features: [
			'📊 Основы анализа рынка',
			'📚 Теория + практика',
			'💬 Групповые занятия',
		],
	},

	premium: {
		title: 'Premium',
		price: '$399',
		oldPrice: '$499',
		description: 'Продвинутый оффлайн курс с практикой в офисе.',
		features: [
			'🔥 Всё из Standard',
			'📈 Реальные сделки',
			'🧠 Разбор рынка с наставником',
			'🏢 Практика в офисе',
		],
	},

	individual: {
		title: 'Индивидуальный',
		price: '$799',
		oldPrice: '$999',
		description: 'Персональное обучение 1 на 1 в офисе.',
		features: [
			'👤 Личный наставник',
			'📊 Индивидуальный план',
			'💼 Разбор сделок',
			'⚡ Максимальный рост',
		],
	},
}

const parsePrice = price => Number(price.replace('$', ''))

export const OfflineCoursePage = () => {
	const navigate = useNavigate()

	const [activeTab, setActiveTab] = useState('standard')
	const [displayPrice, setDisplayPrice] = useState(0)

	const current = tariffs[activeTab]

	const goToAppointment = () => {
		navigate('/')

		setTimeout(() => {
			const el = document.getElementById('appointment')
			if (el) el.scrollIntoView({ behavior: 'smooth' })
		}, 100)
	}

	// COUNT-UP
	useEffect(() => {
		let start = 0
		const target = parsePrice(current.price)

		const duration = 700
		const stepTime = 16
		const steps = duration / stepTime
		const increment = target / steps

		setDisplayPrice(0)

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

	return (
		<div className={styles.online}>
			<ScrollToTop />

			<div className={clsx(styles.page, 'container')}>
				{/* HERO */}
				<section className={styles.hero}>
					<button className={styles.backBtn} onClick={() => navigate('/')}>
						← На главную
					</button>

					<h1>Оффлайн курс по трейдингу</h1>

					<p>
						Полное погружение в рынок: теория, практика и реальные сделки в
						офисе с наставниками.
					</p>
				</section>

				{/* IMAGE */}
				<section className={styles.imageBlock}>
					<img
						src='https://img.freepik.com/premium-vector/up-trend-grapgh-stock-market-charts-forex-trading-graph-up-trend-concept-financial_293525-3603.jpg'
						alt='offline trading'
					/>
				</section>

				{/* TARIFFS */}
				<section className={styles.tariffs}>
					<div className={styles.top}>
						<h2 className={styles.title}>Форматы обучения</h2>
						<p>Выбери подходящий уровень подготовки</p>
					</div>

					{/* TABS */}
					<div className={styles.tabs}>
						<button
							className={clsx(activeTab === 'standard' && styles.active)}
							onClick={() => setActiveTab('standard')}
						>
							Standard
						</button>

						<button
							className={clsx(activeTab === 'premium' && styles.active)}
							onClick={() => setActiveTab('premium')}
						>
							Premium
						</button>

						<button
							className={clsx(activeTab === 'individual' && styles.active)}
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
								{current.oldPrice && (
									<span className={styles.oldPrice}>{current.oldPrice}</span>
								)}

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
					<h2>Готов начать?</h2>
					<p>Запишись на оффлайн курс прямо сейчас</p>

					<button onClick={goToAppointment}>Записаться</button>
				</section>
			</div>
		</div>
	)
}
