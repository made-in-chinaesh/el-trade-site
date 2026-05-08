import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
	const navigate = useNavigate()

	const scrollTo = id => {
		const el = document.getElementById(id)

		if (!el) return

		const offset = 80
		const top = el.getBoundingClientRect().top + window.scrollY - offset

		window.scrollTo({
			top,
			behavior: 'smooth',
		})
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
						<li onClick={() => scrollTo('courses')}>Курсы</li>
						<li onClick={() => scrollTo('team')}>Команда</li>
						<li onClick={() => scrollTo('about')}>О нас</li>
						<li onClick={() => scrollTo('contacts')}>Контакты</li>
					</ul>
				</nav>

				<button
					className={styles.cta}
					onClick={() => scrollTo('appointment')}
				>
					Записаться
				</button>

			</div>
		</header>
	)
}