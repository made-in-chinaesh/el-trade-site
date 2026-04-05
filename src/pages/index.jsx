import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import MainPage from './main'

const Routing = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainPage />} />
			</Routes>
			{/* <div className='snowblock'></div> */}
		</>
	)
}

export default Routing
