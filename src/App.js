import FetchData from './components/fetchData'
import { GlobalStyle } from './globalStyle'
import { StyledContentContainer } from './style/Container.styled'

function App() {
	return (
		<StyledContentContainer>
			<GlobalStyle />
			<h1>Bedrift register</h1>
			<div className='site-content'>
				<FetchData />
			</div>
		</StyledContentContainer>
	)
}

export default App
