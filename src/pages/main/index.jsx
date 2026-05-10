import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
	AdvantagesBlock,
	AppointmentBlock,
	ChooseBlock,
	CommandBlock,
	GlobalBlock,
	ReviewsBlock,
	UniqueBlock,
	Wave,
} from '../../components/main'

const MainPage = () => {
	const location = useLocation()

	useEffect(() => {
		if (!location.state?.scrollTo) return

		const id = location.state.scrollTo

		// ждём пока DOM точно отрендерится
		setTimeout(() => {
			const el = document.getElementById(id)

			if (!el) return

			const offset = 80
			const top = el.getBoundingClientRect().top + window.scrollY - offset

			window.scrollTo({
				top,
				behavior: 'smooth',
			})
		}, 50)
	}, [location])

	return (
		<div>
			<Wave />
			<UniqueBlock />
			<ChooseBlock />
			<AdvantagesBlock />
			<CommandBlock />
			<GlobalBlock />
			<ReviewsBlock />
			<AppointmentBlock />
		</div>
	)
}

export default MainPage
