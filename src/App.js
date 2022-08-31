import { GlobalStyle } from './globalStyle'
import { StyledContentContainer } from './style/Container.styled'
import { Collapsible } from './components/collapsible'
import { CompanyMap } from './components/googleMaps'

function App() {
	return (
		<StyledContentContainer>
			<GlobalStyle />
			<h1>Bedriftregister</h1>
			<ul>
				<Collapsible label='Les mer'>
					<h1>Bedrift 1</h1>
				</Collapsible>

				<Collapsible label='Les mer'>
					<h1>Bedrift 2</h1>
				</Collapsible>

				<Collapsible label='Les mer'>
					<div className='company-text'>
						<h1>Bedrift 3</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
							voluptatibus, magnam, sed cumque magni id beatae labore aliquid
							vitae ipsam repellendus mollitia, quaerat ipsum accusamus.
							Similique voluptatum neque totam nostrum.
						</p>
					</div>
					<CompanyMap />
				</Collapsible>
			</ul>
		</StyledContentContainer>
	)
}

export default App
