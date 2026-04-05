import styles from './styles.module.scss'

export const Wave = () => {
	return (
		<section>
			<div className={styles.wave}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={styles.content}>
				<div className='container'>
				<h2>Профессиональная академия трейдинга</h2>
				<span>
					Получите навыки трейдинга и научитесь стабильно зарабатывать,
					используя проверенные стратегии.
				</span>
				</div>
			</div>
		</section>
	)
}
