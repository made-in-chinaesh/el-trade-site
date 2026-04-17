import styles from './styles.module.scss'

export const Space = ({ children, ...props }) => {
	return (
		<div className={styles.container}>
			<div className={styles.stars}></div>
			<div className={styles.stars2}></div>
			<div className={styles.stars3}></div>
			<div {...props}>{children}</div>
		</div>
	)
}
