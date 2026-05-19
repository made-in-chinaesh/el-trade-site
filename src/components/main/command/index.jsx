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
		<div className={styles.team}>
			<div className={clsx(styles.container, 'container')} id='team'>
				<div className={styles.commandInfo}>
					<h2>Знакомьтесь с экспертами</h2>

					<p>Команда основателей академии и практикующих трейдеров.</p>
				</div>

				<div className={styles.cards}>
					<div className={styles.card} onClick={() => goToProfile('bilol')}>
						<img
							src='/team/bilol.png'
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
							src='/team/biimyrza.png'
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
							src='/team/oyatillo.png'
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
		</div>
	)
}
