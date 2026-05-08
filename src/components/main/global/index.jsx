import { CiStar, CiUser } from 'react-icons/ci'
import { MdOutlineTravelExplore } from "react-icons/md";

import clsx from 'clsx'
import styles from './styles.module.scss'

export const GlobalBlock = () => {
	return (
		<div className={styles.globalBlock}>
			<div className={clsx(styles.container, 'container')}>
				<div className={styles.containerFirstBlock}>
					<h2>Глобальный опыт у вас под рукой</h2>
					<p>
						Изучите опыт основателей на международных рынках и стратегии из
						финансовых центров для широкой перспективы.
					</p>
				</div>
				<div className={styles.containerSecondBlock}>
					<div>
						<section>
							<CiStar />
						</section>
						<div>
							<h4>Эксклюзивные методики</h4>
							<span>
								Уникальные уроки, которых нет на общедоступных платформах
							</span>
						</div>
					</div>

					<div>
						<section>
							<MdOutlineTravelExplore />
						</section>
						<div>
							<h4>Международный опыт</h4>
							<span>
								Основатели академии обучались стратегиям в Малазии, Дубае и
								Ташкенте, что позволяет передать глубокие знания ученикам.
							</span>
						</div>
					</div>

					<div>
						<section>
							<CiUser />
						</section>
						<div>
							<h4>Работа на новостях</h4>
							<span>
								Обучение работе с актуальными новостями для принятия взвешенных
								торговых решений.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
