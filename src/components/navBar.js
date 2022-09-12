import { StyledNav, StyledUl } from '../style/navBar.styled'
import logo from '../asests/BG-removed-logo.png'
import menu from '../asests/menuIcon.png'

export const NavBar = () => {
	return (
		<StyledNav>
			<img src={logo} alt='' />
			<StyledUl className='ul'>
				<li>Hjem</li>
				<li>Om oss</li>
				<li>aktiviteter</li>
				<li>Kommune</li>
			</StyledUl>
		</StyledNav>
	)
}
