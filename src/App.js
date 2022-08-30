import { GlobalStyle } from './globalStyle'
import { CompanyMap } from './components/googleMaps'
import { StyledContentContainer } from './style/Container.styled'
import FetchData from './components/FetchData/fetchData'
import { Collapsible } from './components/collapsible'

function App() {
	return (
			<StyledContentContainer>
				<GlobalStyle />
				<h1>Bedriftregister</h1>
				<FetchData />
				<CompanyMap />
			<Collapsible label='Les mer'>
				<h1>Bedrift 1</h1>
			</Collapsible>
			<Collapsible label='Les mer'>
				<h1>Bedrift 2</h1>
			</Collapsible>
			<Collapsible label='Les mer'>
				<h1>Bedrift 3</h1>
			</Collapsible>
			</StyledContentContainer>
	)
}

export default App
