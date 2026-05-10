import clsx from 'clsx'
import { FaInstagram } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const CommandBlock = () => {
	const navigate = useNavigate()

	const goToProfile = id => {
		navigate(`/team/${id}`)
	}

	return (
		<div className={clsx(styles.container, 'container')} id='team'>
			<div className={styles.commandInfo}>
				<h2>Знакомьтесь с экспертами</h2>

				<p>Команда основателей академии и практикующих трейдеров.</p>
			</div>

			<div className={styles.cards}>
				<div className={styles.card} onClick={() => goToProfile('bilol')}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxys3YcMIKBtHrEwQ3JdVz-YiNNSDlXhYRVw&s'
						alt='Azimov Bilol'
					/>

					<div className={styles.cardContent}>
						<h3>Азимов Билол</h3>
						<div className={styles.role}>Основатель</div>
						<a
							target='_blank'
							href='https://instagram.com'
							rel='noreferrer'
							onClick={e => e.stopPropagation()}
						>
							<FaInstagram /> Instagram
						</a>
					</div>
				</div>

				<div className={styles.card} onClick={() => goToProfile('biimyrza')}>
					<img
						src='https://i1.sndcdn.com/avatars-wtBAX6qgXtY0yPad-R1QPuA-t1080x1080.jpg'
						alt='Tagaev Biimyrza'
					/>

					<div className={styles.cardContent}>
						<h3>Тагаев Биймырза</h3>
						<div className={styles.role}>Основатель</div>
						<a
							target='_blank'
							href='https://instagram.com'
							rel='noreferrer'
							onClick={e => e.stopPropagation()}
						>
							<FaInstagram /> Instagram
						</a>
					</div>
				</div>

				<div className={styles.card} onClick={() => goToProfile('oyatillo')}>
					<img
						src='https://pyxis.nymag.com/v1/imgs/059/056/4fe6fb3a2aa9222855627e5ef384156369-6-22-Epstein.1x.rsquare.w1400.jpg'
						alt='Umurzakov Oyatillo'
					/>

					<div className={styles.cardContent}>
						<h3>Умурзаков Оятилло</h3>
						<div className={styles.role}>Основатель</div>
						<a
							target='_blank'
							href='https://instagram.com'
							rel='noreferrer'
							onClick={e => e.stopPropagation()}
						>
							<FaInstagram /> Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
