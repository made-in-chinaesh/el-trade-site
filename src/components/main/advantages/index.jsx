import { CiStar } from 'react-icons/ci'
import { GrMoney } from 'react-icons/gr'
import { RiHomeOfficeLine } from 'react-icons/ri'

import styles from './styles.module.scss'

export const AdvantagesBlock = () => {
	return (
		<section className={styles.advantages} id='about'>
			<div className='container'>
				<div className={styles.firstBlock}>
					<h2>Преимущества нашей академии</h2>
					<span>
						Получите практический опыт и применение в реальном мире с нашими
						торговыми стратегиями
					</span>
				</div>
				<div className={styles.secondBlock}>
					<div>
						<CiStar />
						<h3>Акцент на практику</h3>
						<p>
							Два месяца теории дополняются месяцем интенсивной практики, чтобы
							закрепить полученные знания.
						</p>
					</div>

					<div>
						<RiHomeOfficeLine />
						<h3>Возможность работы в офисе академии</h3>
						<p>
							После изучения теории ученики могут приходить в офис академии для
							совместной работы и анализа новостей.
						</p>
					</div>

					<div>
						<GrMoney />
						<h3>Работа на новостях</h3>
						<p>
							Обучение на основе актуальных новостей помогает лучше понимать
							рынок и принимать обоснованные решения.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
