import styled from 'styled-components'

export const StyledNav = styled.div`
	height: 4rem;
	/* From https://css.glass */
	background: rgba(255, 255, 255, 0.15);
	border-radius: 16px;
	box-shadow: 0 4px 30px hsla(0, 0%, 0%, 0.1);
	backdrop-filter: blur(2px);
	border: 1px solid rgba(255, 255, 255, 0.13);
	display: flex;
	justify-content: flex-end;
	justify-content: space-around;
	margin: 1rem;
	padding: 0.5rem;
`
export const StyledUl = styled.ul`
	display: flex;
	width: 50%;
	height: 100%;
	justify-content: space-evenly;
	list-style: none;
	align-items: center;
	color: #ff8993;
	margin: auto 2rem;
	
	@media only screen and (max-width: 425px) {
		
		width: 100%;
		margin: 0%;

		
	}
	`
