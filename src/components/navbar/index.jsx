import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const Navbar = () => {
	const navigate = useNavigate()

	const goToSection = id => {
		navigate('/', { state: { scrollTo: id } })
	}

	return (
		<header className={styles.header}>
			<div className={`${styles.container} container`}>
				<h1
					className={styles.title}
					onClick={() => navigate('/')}
					style={{ cursor: 'pointer' }}
				>
					EL Trade
				</h1>

				<nav className={styles.nav}>
					<ul>
						<li onClick={() => goToSection('courses')}>Курсы</li>
						<li onClick={() => goToSection('team')}>Команда</li>
						<li onClick={() => goToSection('contacts')}>Контакты</li>
						<li onClick={() => goToSection('about')}>О нас</li>
					</ul>
				</nav>

				<button
					className={styles.cta}
					onClick={() => goToSection('appointment')}
				>
					Записаться
				</button>
			</div>
		</header>
	)
}
