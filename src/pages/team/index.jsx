import clsx from 'clsx'
import { useNavigate, useParams } from 'react-router-dom'
import { ScrollToTop } from '../../shared/components'
import styles from './styles.module.scss'

const teamData = {
	bilol: {
		name: 'Азимов Билол',
		role: 'Основатель',
		image: '/team/bilol.png',
		description: `
Билол — один из основателей академии EL Trade.
Он начал свой путь в трейдинге более 6 лет назад, начиная с криптовалютного рынка.

За это время он:
- разработал собственные торговые стратегии
- работал с международными рынками
- обучил более 500+ учеников

Основной фокус — риск-менеджмент и новостной анализ.
		`,
	},

	biimyrza: {
		name: 'Тагаев Биймырза',
		role: 'Основатель',
		image: '/team/biimyrza.png',
		description: `
Биймырза — практикующий трейдер и сооснователь академии.

Специализируется на:
- техническом анализе
- внутридневной торговле
- работе с ликвидностью

Он активно участвует в обучении студентов и ведёт практические занятия в офисе.
		`,
	},

	oyatillo: {
		name: 'Умурзаков Оятилло',
		role: 'Основатель',
		image: '/team/oyatillo.png',
		description: `
Оятилло — аналитик и стратег академии.

Его сильная сторона:
- фундаментальный анализ
- работа с новостями
- макроэкономика

Он отвечает за стратегическое направление и обучение аналитике рынка.
		`,
	},
}

export const TeamProfile = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const member = teamData[id]

	if (!member) return <div>Not found</div>

	return (
		<div className={styles.profile}>
			<ScrollToTop />
			<div className={clsx(styles.page, 'container')}>
				{/* BACK BUTTON */}
				<button className={styles.backBtn} onClick={() => navigate('/')}>
					← Назад
				</button>

				<div className={styles.header}>
					<img src={member.image} alt='' />
					<div>
						<h1>{member.name}</h1>
						<span>{member.role}</span>
					</div>
				</div>

				<div className={styles.content}>
					<p>{member.description}</p>
				</div>
			</div>
		</div>
	)
}
