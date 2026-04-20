import {
	AdvantagesBlock,
	ChooseBlock,
	CommandBlock,
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
		</div>
	)
}

export default MainPage
