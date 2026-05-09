import clsx from 'clsx'

import {
	FaInstagram,
	FaPhoneAlt,
	FaTelegramPlane,
	FaWhatsapp,
} from 'react-icons/fa'

import styles from './styles.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer} id='contacts'>
			<div className={clsx(styles.container, 'container')}>
				<div className={styles.logo}>
					<span>El Trade</span>
				</div>

				<div className={styles.links}>
					<a
						href='https://www.instagram.com/eltrade_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
						target='_blank'
						rel='noreferrer'
					>
						<FaInstagram /> Instagram
					</a>

					<a
						href='https://t.me/El_trade_admin'
						target='_blank'
						rel='noreferrer'
					>
						<FaTelegramPlane /> Telegram
					</a>

					<a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
						<FaWhatsapp /> WhatsApp
					</a>

					<a href='tel:+996 226 166 666'>
						<FaPhoneAlt /> Phone
					</a>
				</div>

				<div className={styles.bottom}>
					<span>© 2026 EL Trade Academy</span>
				</div>
			</div>
		</footer>
	)
}
