import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

export const Navbar = () => {
	return (
		<header>
			<div className={`${styles.container} container`}>
				<h1 className={styles.title}>EL Trade</h1>

				<nav>
					<ul>
						<li>
							<NavLink>Курсы</NavLink>
						</li>

						<li>
							<NavLink>Команда</NavLink>
						</li>

						<li>
							<NavLink>О нас</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
