import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

import { OfflineCoursePage } from './courses/offline-course'
import { OnlineCoursePage } from './courses/online-course'

import MainPage from './main'

import { TeamProfile } from './team'

const Routing = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/offline-course' element={<OfflineCoursePage />} />
				<Route path='/online-course' element={<OnlineCoursePage />} />
				<Route path='/team/:id' element={<TeamProfile />} />
			</Routes>
			<Footer />
		</>
	)
}

export default Routing
