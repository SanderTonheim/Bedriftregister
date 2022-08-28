import { GlobalStyle } from './globalStyle'
import { CompanyMap } from './components/googleMaps'
import { StyledContentContainer } from './style/Container.styled'
import FetchData from './components/FetchData/fetchData'

function App() {
	return (
		<StyledContentContainer>
			<GlobalStyle />
			<h1>Bedriftregister</h1>
			<FetchData />
			<CompanyMap />
		</StyledContentContainer>
	)
}

export default App
