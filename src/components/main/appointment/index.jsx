import clsx from 'clsx'
import styles from './styles.module.scss'

export const AppointmentBlock = () => {
	return (
		<div className={styles.appointmentBlock}>
			<div className={clsx(styles.container, 'container')}>
				<h2>Запишитесь сегодня</h2>

				<p>
					Заполните форму регистрации, чтобы забронировать место
					на курсах и начать путь к финансовой свободе.
				</p>

				<form className={styles.appointmentForm}>
					<input type='text' placeholder='Имя' />

					<input type='text' placeholder='Фамилия' />

					<input type='text' placeholder='Телеграм' />

					<div className={styles.radioGroup}>
						<label className={styles.radio}>
							<input type='radio' name='format' />

							<span>Оффлайн</span>
						</label>

						<label className={styles.radio}>
							<input type='radio' name='format' />

							<span>Онлайн</span>
						</label>
					</div>

					<button type='submit'>Записаться</button>
				</form>
			</div>
		</div>
	)
}