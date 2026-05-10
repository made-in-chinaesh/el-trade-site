import clsx from 'clsx'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './styles.module.scss'

const teamData = {
	bilol: {
		name: 'Азимов Билол',
		role: 'Основатель',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxys3YcMIKBtHrEwQ3JdVz-YiNNSDlXhYRVw&s',
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
		image:
			'https://i1.sndcdn.com/avatars-wtBAX6qgXtY0yPad-R1QPuA-t1080x1080.jpg',
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
		image:
			'https://pyxis.nymag.com/v1/imgs/059/056/4fe6fb3a2aa9222855627e5ef384156369-6-22-Epstein.1x.rsquare.w1400.jpg',
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
	)
}
