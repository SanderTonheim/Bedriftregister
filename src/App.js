import { GlobalStyle } from './globalStyle'
import { CompanyMap } from './components/googleMaps'
import { StyledContainer } from './style/Container.styled'
import FetchData from './components/fetchData'

function App() {
	return (
		<StyledContainer>
			<GlobalStyle />
			<h1>Bedriftregister</h1>
			<FetchData />
			<CompanyMap />
		</StyledContainer>
	)
}

export default App
