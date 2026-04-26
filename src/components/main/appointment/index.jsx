import clsx from 'clsx'
import styles from './styles.module.scss'

export const AppointmentBlock = () => {
	return (
		<div className={styles.appointmentBlock}>
			<div className={clsx(styles.container, 'container')}>
				<h2>Запишитесь сегодня</h2>
				<p>
					Заполните форму регистрации, чтобы забронировать место на курсах и
					начать путь к финансовой свободе.
				</p>
				<form className={styles.appointmentForm}>
					<div>
						<input type='text' placeholder='Имя' />
						<input type='email' placeholder='Электронная почта' />
					</div>
					<textarea placeholder='Комментарий' />

					<button type='submit'>Записатся</button>
				</form>
			</div>
		</div>
	)
}
