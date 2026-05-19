import { ScrollToTop } from '../../../shared/components'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

export const OfflineCoursePage = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.page}>
			<ScrollToTop />
			{/* HERO */}
			<section className={styles.hero}>
				<div className='container'>

					{/* BACK BUTTON */}
					<button
						className={styles.backBtn}
						onClick={() => navigate('/')}
					>
						← На главную
					</button>

					<h1>Оффлайн курс по трейдингу</h1>
					<p>
						Полное погружение в рынок: от базовой теории до реальной практики с
						наставниками в офисе академии в городе Ош.
					</p>
				</div>
			</section>

			{/* IMAGE */}
			<section className={styles.imageBlock}>
				<div className='container'>
					<img
						src='https://img.freepik.com/premium-vector/up-trend-grapgh-stock-market-charts-forex-trading-graph-up-trend-concept-financial_293525-3603.jpg?semt=ais_hybrid&w=740&q=80'
						alt='trading class'
					/>
				</div>
			</section>

			{/* INFO */}
			<section className={styles.info}>
				<div className='container'>
					<h2>Что ты получишь</h2>

					<ul>
						<li>📊 Анализ рынка и графиков</li>
						<li>💹 Работа с реальными сделками</li>
						<li>🧠 Понимание новостей и их влияния</li>
						<li>🏢 Практика в офисе академии в городе Ош</li>
						<li>👨‍🏫 Личный разбор сделок с наставником</li>
					</ul>
				</div>
			</section>

			{/* CTA */}
			<section className={styles.cta}>
				<div className='container'>
					<h2>Готов начать?</h2>
					<p>Запишись на оффлайн курс прямо сейчас</p>

					<button onClick={() => navigate('/#appointment')}>
						Записаться
					</button>
				</div>
			</section>
		</div>
	)
}