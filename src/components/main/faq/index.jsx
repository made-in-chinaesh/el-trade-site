import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import clsx from 'clsx'
import styles from './styles.module.scss'

const questions = [
	{
		id: 1,
		question: 'Что такое TakeProfit?',
		answer:
			'Take Profit (буквально — «взять прибыль») — это специальный биржевой ордер, который автоматически закрывает вашу сделку, когда цена актива достигает заранее заданного вами уровня.',
	},
	{
		id: 2,
		question: 'Что такое LoseProfit?',
		answer:
			'LoseProfit — это сленговое искажение выражения Lost Profit (упущенная выгода). Это деньги, которые могли быть заработаны, но были потеряны.',
	},
	{
		id: 3,
		question: 'Что такое брокерский счет?',
		answer:
			'Брокерский счет — это специальный счет для торговли акциями, валютой, криптовалютой и другими активами через брокера.',
	},
	{
		id: 4,
		question: 'Что такое ликвидность?',
		answer:
			'Ликвидность показывает, насколько быстро актив можно купить или продать без сильного изменения цены.',
	},
]

export const FaqBlock = () => {
	const [activeId, setActiveId] = useState(null)

	const toggleFaq = id => {
		setActiveId(prev => (prev === id ? null : id))
	}

	return (
		<section className={styles.faqBlock}>
			<div className={clsx(styles.container, 'container')}>
				{/* LEFT */}
				<div className={styles.left}>
					<span>FAQ</span>

					<h2>
						Часто задаваемые <br /> вопросы
					</h2>

					<p>
						Собрали ответы на самые популярные вопросы по трейдингу,
						обучению и академии.
					</p>
				</div>

				{/* RIGHT */}
				<div className={styles.right}>
					{questions.map(item => (
						<div
							key={item.id}
							className={clsx(
								styles.item,
								activeId === item.id && styles.active
							)}
						>
							<button
								className={styles.question}
								onClick={() => toggleFaq(item.id)}
							>
								<span>{item.question}</span>

								<FiChevronDown />
							</button>

							<div className={styles.answer}>
								<p>{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}