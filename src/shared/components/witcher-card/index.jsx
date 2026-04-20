import styles from './styles.module.scss'

export const WitcherCard = ({ children, ...props }) => {
	return (
		<div className={styles['witcher-card-container']}>
			<div className={styles['witcher-card']} tabIndex='0'>
				<div
					className={`${styles['witcher-card-corner']} ${styles['top-left']}`}
				></div>
				<div
					className={`${styles['witcher-card-corner']} ${styles['top-right']}`}
				></div>
				<div
					className={`${styles['witcher-card-corner']} ${styles['bottom-left']}`}
				></div>
				<div
					className={`${styles['witcher-card-corner']} ${styles['bottom-right']}`}
				></div>
				<div {...props}>{children}</div>
			</div>
		</div>
	)
}
