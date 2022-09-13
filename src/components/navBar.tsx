import { StyledNav, StyledUl } from '../style/navBar.styled'
import logo from '../asests/BG-removed-logo.png'
import React from 'react'

export const NavBar = () => {
	return (
		<StyledNav className='Navbar'>
			<div className='navbar-logo'>
				<img src={logo} alt='' />
				<p>Bjørnafjorden Kommune</p>
			</div>
			<StyledUl className='Navbar-ul'>
				<li>Hjem</li>
				<li>Om Oss</li>
				<li>Aktiviteter</li>
				<li>Næringsliv</li>
			</StyledUl>
		</StyledNav>
	)
}
