import { StyledFetchDataContainer } from './Style/FetchData.styled'
import { StyledLi } from './../FetchData/Style/FetchData.li.styled'

function FetchData() {
	// Select the DOM-element, so that you can replace it with content
	let PROJECT_ID = 'oans3nsr'
	let DATASET = 'production'
	let QUERY = encodeURIComponent('*[_type == "bedrift"]')

	// Compose the URL for your project's endpoint and add the query
	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

	// fetch the content
	async function getNames() {
		const response = await fetch(URL)
		response.json().then(({ result }) => {
			// get the list element, and the first item
			let list = document.querySelector('ul')
			let firstListItem = document.querySelector('ul li')

			if (result.length > 0) {
				// remove the placeholder content
				list.removeChild(firstListItem)

				result.forEach((bedrift) => {
					// create a list element for each animal
					let listItem = document.createElement('li')

					// add the company name as the text content
					listItem.textContent = bedrift?.name
					// add the item to the list
					list.appendChild(listItem)
				})
			}
		})
	}
	getNames()

	return (
		<StyledFetchDataContainer>
			<ul>
				<StyledLi>Loading animals…</StyledLi>
			</ul>
		</StyledFetchDataContainer>
	)
}

export default FetchData
