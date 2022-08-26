import { GlobalStyle } from './globalStyle'
import { CompanyMap } from './components/googleMaps'
import FetchData from './components/fetchData'

function App() {
	return (
		<>
			<GlobalStyle />
			<h1>Bedriftregister</h1>
			<FetchData />
			<CompanyMap />
		</>
	)
}

export default App
