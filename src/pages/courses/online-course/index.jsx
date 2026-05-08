import styles from './styles.module.scss'

export const OnlineCoursePage = () => {
	return (
		<div className={styles.page}>
			{/* HERO */}
			<section className={styles.hero}>
				<div className='container'>
					<h1>Онлайн курс по трейдингу</h1>

					<p>
						Обучайся из любой точки мира в удобном темпе с поддержкой
						наставников и доступом к закрытым стратегиям.
					</p>
				</div>
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
				<div className='container'>
					<h2>Почему онлайн формат работает</h2>

					<ul>
						<li>🌍 Обучение из любой страны</li>
						<li>⏱ Гибкий график без привязки ко времени</li>
						<li>📊 Доступ к видеоурокам 24/7</li>
						<li>💬 Чат с наставниками и учениками</li>
						<li>📈 Разбор реальных рыночных ситуаций</li>
					</ul>
				</div>
			</section>

			{/* MODULES */}
			<section className={styles.modules}>
				<div className='container'>
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
				</div>
			</section>

			{/* CTA */}
			<section className={styles.cta}>
				<div className='container'>
					<h2>Начни обучение онлайн</h2>
					<p>Доступ к курсу откроется сразу после записи</p>

					<button>Записаться</button>
				</div>
			</section>
		</div>
	)
}
