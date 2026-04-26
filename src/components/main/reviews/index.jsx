import clsx from 'clsx'
import styles from './styles.module.scss'

const reviews = [
	{
		id: 1,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 2,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 3,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 4,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 5,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 6,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 7,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
	{
		id: 8,
		name: 'Jhonny Sins',
		content: 'Hello everyone, this courses fire! I am trader right now',
		image:
			'https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=100&format=webp&flop=false',
	},
]

export const ReviewsBlock = () => {
	return (
		<div className={styles.reviewsBlock}>
			<h2 className='gradientText'>Отзывы о курсах</h2>
			<div className={clsx(styles.container, 'container')}>
				{reviews.map(item => (
					<div key={item.id} className={styles.review}>
						<div className={styles.reviewImage}>
							<img src={item.image} alt={item.name} />
						</div>
						<div className={styles.reviewContent}>
							<span className={styles.name}>{item.name}</span>
							<p className={styles.content}>{item.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
