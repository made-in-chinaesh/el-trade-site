import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const Navbar = () => {
	const navigate = useNavigate()
	const [menuOpen, setMenuOpen] = useState(false)

	const goToSection = id => {
		navigate('/', { state: { scrollTo: id } })
		setMenuOpen(false)
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

				<nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
					<ul>
						<li onClick={() => goToSection('courses')}>Курсы</li>

						<li onClick={() => goToSection('team')}>Команда</li>

						<li onClick={() => goToSection('contacts')}>Контакты</li>

						<li onClick={() => goToSection('about')}>О нас</li>

						<button
							className={styles.mobileCta}
							onClick={() => goToSection('appointment')}
						>
							Записаться
						</button>
					</ul>
				</nav>

				<button
					className={styles.cta}
					onClick={() => goToSection('appointment')}
				>
					Записаться
				</button>

				<button
					className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
					onClick={() => setMenuOpen(prev => !prev)}
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</header>
	)
}
