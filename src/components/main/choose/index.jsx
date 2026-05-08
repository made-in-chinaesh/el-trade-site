import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import styles from './styles.module.scss'

export const ChooseBlock = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.chooseBlock} id='courses'>
			<div className={clsx(styles.container, 'container')} data-aos='fade-up'>
				<div className={styles.mainInfo}>
					<TypeAnimation
						sequence={['Выберите свой путь', 1000]}
						wrapper='h1'
						speed={50}
						repeat={Infinity}
						className={clsx(styles.title, 'gradientText')}
					/>

					<span>Выберите формат обучения и начните путь в трейдинге.</span>
				</div>

				{/* OFFLINE */}
				<div
					className={styles.outer}
					data-aos='fade-left'
					onClick={() => navigate('/offline-course')}
				>
					<div className={styles.dot} />
					<div className={styles.card}>
						<div className={styles.ray} />
						<div className={styles.info}>
							<div className={clsx(styles.text, 'gradientText')}>
								Оффлайн-курсы
							</div>

							<p>
								3 месяца интенсивного обучения: теория, практика и работа с
								реальными кейсами рынка.
							</p>
						</div>
					</div>
				</div>

				{/* ONLINE */}
				<div
					className={styles.outer}
					data-aos='fade-right'
					onClick={() => navigate('/online-course')}
				>
					<div className={styles.dot} />
					<div className={styles.card}>
						<div className={styles.ray} />
						<div className={styles.info}>
							<div className={clsx(styles.text, 'gradientText')}>
								Онлайн-курсы
							</div>
							<p>
								Гибкий формат обучения из любой точки мира с поддержкой
								наставников.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
