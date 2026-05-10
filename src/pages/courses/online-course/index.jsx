import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const OnlineCoursePage = () => {
	const navigate = useNavigate()

	return (
		<div className={clsx(styles.page, 'container')}>
			{/* HERO */}
			<section className={styles.hero}>
				{/* BACK BUTTON */}
				<button className={styles.backBtn} onClick={() => navigate('/')}>
					← На главную
				</button>

				<h1>Онлайн курс по трейдингу</h1>

				<p>
					Обучайся из любой точки мира в удобном темпе с поддержкой наставников
					и доступом к закрытым стратегиям.
				</p>
			</section>

			{/* IMAGE */}
			<section className={styles.imageBlock}>
				<img
					src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400'
					alt='online trading'
				/>
			</section>

			{/* FEATURES */}
			<section className={styles.info}>
				<h2>Почему онлайн формат работает</h2>

				<ul>
					<li>🌍 Обучение из любой страны</li>
					<li>⏱ Гибкий график без привязки ко времени</li>
					<li>📊 Доступ к видеоурокам 24/7</li>
					<li>💬 Чат с наставниками и учениками</li>
					<li>📈 Разбор реальных рыночных ситуаций</li>
				</ul>
			</section>

			{/* MODULES */}
			<section className={styles.modules}>
				<h2>Программа курса</h2>

				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>Модуль 1</h3>
						<p>Основы рынка и терминология трейдинга</p>
					</div>

					<div className={styles.card}>
						<h3>Модуль 2</h3>
						<p>Графики, свечи и технический анализ</p>
					</div>

					<div className={styles.card}>
						<h3>Модуль 3</h3>
						<p>Стратегии входа и выхода из сделок</p>
					</div>

					<div className={styles.card}>
						<h3>Модуль 4</h3>
						<p>Практика и работа с реальным рынком</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className={styles.cta}>
				<h2>Начни обучение онлайн</h2>
				<p>Доступ к курсу откроется сразу после записи</p>

				<button onClick={() => navigate('/#appointment')}>Записаться</button>
			</section>
		</div>
	)
}
