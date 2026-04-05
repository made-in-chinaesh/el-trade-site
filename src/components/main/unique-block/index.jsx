import clsx from 'clsx'
import styles from './styles.module.scss'

import { TypeAnimation } from 'react-type-animation'

export const UniqueBlock = () => {
	return (
		<div className={styles.uniqueBlock}>
			<div className={clsx(styles.container, 'container')}>
				<div data-aos='slide-left'>
					<TypeAnimation
						sequence={['Наша уникальность', 1000]}
						wrapper='h1'
						speed={50}
						repeat={Infinity}
					/>
					<p>
						Наша академия предлагает обучение трейдингу как в оффлайн, так и в
						онлайн форматах. Основана тремя экспертами, которые делятся
						уникальными стратегиями, недоступными на <b>YouTube</b> и других
						платформах.
					</p>
				</div>
				<div data-aos='slide-right' className={styles.image}></div>
			</div>
		</div>
	)
}
