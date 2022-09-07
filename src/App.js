import FetchData from './components/fetchData'
import { NavBar } from './components/navBar'
import { GlobalStyle } from './globalStyle'
import { StyledContentContainer } from './style/Container.styled'

function App() {
	return (
		<>
		<NavBar />
		<StyledContentContainer>
			<GlobalStyle />
			<h1>Bedrift register</h1>
				<FetchData />
		</StyledContentContainer>
		</>
	)
}

export default App
