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
