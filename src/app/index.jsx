import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Routing from '../pages'
import './index.scss'

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000, // скорость анимации
			once: false, // один раз или каждый раз
		})
	}, [])
	return <Routing />
}

export default App
