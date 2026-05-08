import clsx from 'clsx'
import styles from './styles.module.scss'

const reviews = [
	{
		id: 1,
		name: 'Jhonny Sins',
		content:
			'Hello everyone, this course is fire! I am trader right now and I started making consistent profit after this academy.',
		image: 'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg',
	},
	{
		id: 2,
		name: 'Alex M.',
		content:
			'Очень сильная база, особенно по новостному анализу. Теперь понимаю рынок намного лучше.',
		image: 'https://i.pravatar.cc/150?img=12',
	},
	{
		id: 3,
		name: 'Daniel K.',
		content:
			'До курса был полный ноль, сейчас уже делаю первые стабильные сделки.',
		image: 'https://i.pravatar.cc/150?img=32',
	},
	{
		id: 4,
		name: 'Sara L.',
		content:
			'Онлайн формат удобный, можно учиться в любое время и пересматривать уроки.',
		image: 'https://i.pravatar.cc/150?img=47',
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
