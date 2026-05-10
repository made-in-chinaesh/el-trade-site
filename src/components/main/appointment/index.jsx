import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'

export const AppointmentBlock = () => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			format: 'offline', // 👈 оффлайн по умолчанию
		},
	})

	const onSubmit = async (data) => {
		const formattedData = {
			...data,
			format: data.format === 'true',
		}
	
		console.log('FORM DATA:', formattedData)
		// reset()
	
		try {
			const res = await fetch('https://el-trade-server.onrender.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formattedData),
			})
	
			const result = await res.json()
			console.log('SERVER RESPONSE:', result)
	
			if (!res.ok) {
				throw new Error(result.error || 'Server error')
			}
	
			reset()
		} catch (err) {
			console.error('REQUEST ERROR:', err)
		}
	}

	return (
		<div className={styles.appointmentBlock} id='appointment'>
			<div className={clsx(styles.container, 'container')}>
				<h2>Запишитесь сегодня</h2>

				<p>
					Заполните форму регистрации, чтобы забронировать место и начать путь к
					финансовой свободе.
				</p>

				<form
					className={styles.appointmentForm}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						type='text'
						placeholder='Имя'
						{...register('name', { required: true })}
					/>

					<input
						type='text'
						placeholder='Фамилия'
						{...register('surname', { required: true })}
					/>

					<input
						type='text'
						placeholder='Телеграм'
						{...register('telegram', { required: true })}
					/>

					<input
						type='tel'
						placeholder='Номер телефона'
						{...register('phoneNumber', {
							required: true,
							pattern: /^[0-9+() -]+$/, // базовая защита
						})}
					/>

					<div className={styles.radioGroup}>
						<label className={styles.radio}>
							<input
								type='radio'
								value='false'
								{...register('format')}
								defaultChecked
							/>
							<span>Оффлайн</span>
						</label>

						<label className={styles.radio}>
							<input type='radio' value='true' {...register('format')} />
							<span>Онлайн</span>
						</label>
					</div>

					<button type='submit'>Записаться</button>
				</form>
			</div>
		</div>
	)
}
