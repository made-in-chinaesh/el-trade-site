import clsx from 'clsx'
import { TypeAnimation } from 'react-type-animation'
import styles from './styles.module.scss'

export const ChooseBlock = () => {
	return (
		<div className={styles.chooseBlock}>
			<div className={clsx(styles.container, 'container')} data-aos='fade-up'>
				<div className={styles.mainInfo}>
					<TypeAnimation
						sequence={['Выберите свой путь', 1000]}
						wrapper='h1'
						speed={50}
						repeat={Infinity}
						className={clsx(styles.title, 'gradientText')}
					/>

					<span>
						Выберите подходящий формат обучения: оффлайн курсы или гибкие
						онлайн-программы для получения знаний и практических навыков.
					</span>
				</div>

				<div className={styles.outer}>
					<div className={styles.dot} />
					<div className={styles.card}>
						<div className={styles.ray} />
						<div className={styles.info}>
							<div className={clsx(styles.text, 'gradientText')}>
								Оффлайн-курсы
							</div>

							<p>
								Длительность — 3 месяца, из них 2 месяца теории и 1 месяц
								практики. Идеально подходят для глубокого погружения в тему.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.outer}>
					<div className={styles.dot} />
					<div className={styles.card}>
						<div className={styles.ray} />
						<div className={styles.info}>
							<div className={clsx(styles.text, 'gradientText')}>
								Онлайн-курсы
							</div>
							<p>
								Длительность — примерно 1,5 месяца. Удобный формат для тех, кто
								ценит своё время и предпочитает обучение онлайн.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.card2}></div>
			</div>
		</div>
	)
}
