import FetchData from './components/fetchData'
import ScreenSize from './components/ScreenSize'
import { GlobalStyle } from './globalStyle'
import { StyledContentContainer } from './style/Container.styled'

function App() {
	return (
		<>
			<ScreenSize />
			<StyledContentContainer>
				<GlobalStyle />
				<h1>Bedriftsregister</h1>
				<FetchData />
			</StyledContentContainer>
		</>
	)
}

export default App
