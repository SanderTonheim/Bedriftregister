import styled from 'styled-components'

export const StyledContentContainer = styled.div`
	height: 100%;
	width: 80rem;
	max-width: 50%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	padding-bottom: 10rem;

	> h1 {
		margin-top: 5rem;
		font-weight: 600;
	}

	@media only screen and (max-width: 425px) {
		ul,
		li {
			color: blue;
		}

		> h1 {
			margin-top: 1rem;
		}

		max-width: 90%;
	}

	@media screen and (max-width: 426px) {
		max-width: 90%;
		
	}
`
