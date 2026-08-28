import clsx from 'clsx'
import styles from './styles.module.scss'

const reviews = [
	{
		id: 1,
		name: 'Сардор Рахимов',
		content:
			'Долго сомневался, но курс реально мощный. Сначала торговал в минус, но после модулей по риск-менеджменту и психологии наконец-то вышел в стабильный профит. Главное — не жадничать и строго соблюдать стратегию.',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMO2m9G7jzeo3REE54xjGDgp9rSxcaEC-iabQ-o_ams6Jh7Hz4JvYolky&s=10', // Ссылка на ч/б фото парня
	},
	{
		id: 2,
		name: 'Азамат Бектуров',
		content:
			'Очень сильная база, особенно по техническому и новостному анализу. Спикеры объясняют всё простым языком без лишней воды. Теперь графики для меня — это понятные сигналы для входа в сделку, а не просто хаотичные линии.',
		image:
			'https://i.pinimg.com/474x/33/03/4d/33034d1fb78653fa259e6d9eda34cb3e.jpg',
	},
	{
		id: 3,
		name: 'Джахонгир Каримов',
		content:
			'Пришел на обучение полным нулем, даже терминал открывать не умела. Сейчас уже уверенно делаю первые самостоятельные прибыльные сделки на споте. Огромное спасибо кураторам за детальные разборы ошибок в чате.',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCBgfDIWHCSIfy8WKaz3IdRSdp4u0oq0EfK48sDs8eox5ZHgZEJZYnQo&s=10',
	},
	{
		id: 4,
		name: 'Нурбек Осмонов',
		content:
			'Формат обучения супер удобный, спокойно совмещаю с основной работой. Закрытый чат студентов — это вообще отдельный плюс, постоянно делимся аналитикой и крутыми сетапами. Рекомендую, курс окупает себя.',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K3whkrafa0aD6tTz3pVoMXT3GaAZo4ql0jKNUdF6AA&s=10',
	},
]

export const ReviewsBlock = () => {
	return (
		<div className={styles.reviewsBlock}>
			<h2>Отзывы о курсах</h2>

			<div className={clsx(styles.container, 'container')}>
				{reviews.map(item => (
					<div key={item.id} className={styles.review}>
						<div className={styles.header}>
							<img src={item.image} alt={item.name} />
							<span className={styles.name}>{item.name}</span>
						</div>

						<p className={styles.content}>{item.content}</p>
					</div>
				))}
			</div>
		</div>
	)
}
