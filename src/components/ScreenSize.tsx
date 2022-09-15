import { useState, useEffect } from 'react'
import { NavBar } from './navBar'

export default function ScreenSize() {
	const [windowDimenion, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	})

	const detectSize = () => {
		detectHW({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		})
	}

	useEffect(() => {
		window.addEventListener('resize', detectSize)

		return () => {
			window.removeEventListener('resize', detectSize)
		}
	}, [windowDimenion])

	return <NavBar />
}
