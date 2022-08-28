import { StyledFetchDataContainer } from './Style/FetchData.styled'
import { StyledLi } from './../FetchData/Style/FetchData.li.styled'

// function FetchData() {
// 	let PROJECT_ID = 'oans3nsr'
// 	let DATASET = 'production'
// 	let QUERY = encodeURIComponent('*[_type == "bedrift"]')

// 	// Compose the URL for your project's endpoint and add the query
// 	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
// 	// Select the DOM-element, so that you can replace it with content
// 	// fetch the content
// 	fetch(URL)
// 		.then((res) => res.json())
// 		.then(({ result }) => {
// 			// get the list element, and the first item
// 			let list = document.querySelector('ul')
// 			let firstListItem = document.querySelector('ul StyledLi')

// 			if (result.length > 0) {
// 				// remove the placeholder content
// 				list.removeChild(firstListItem)
// 				result.forEach((bedrift) => {
// 					// create a list element for each animal
// 					let listItem = document.createElement('StyledLi')

// 					// add the company name as the text content
// 					listItem.textContent = bedrift?.name
// 					// add the item to the list
// 					list.appendChild(listItem)
// 					return (
// 						// <StyledFetchDataContainer>
// 						<ul>
// 							<StyledLi>Loading animals…</StyledLi>
// 						</ul>
// 						/* </StyledFetchDataContainer> */
// 					)
// 				})
// 			}
// 		})
// }

function FetchData() {
	// Select the DOM-element, so that you can replace it with content
	let PROJECT_ID = 'oans3nsr'
	let DATASET = 'production'
	let QUERY = encodeURIComponent('*[_type == "bedrift"]')

	// Compose the URL for your project's endpoint and add the query
	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

	// fetch the content
	fetch(URL)
		.then((res) => res.json())
		.then(({ result }) => {
			// get the list element, and the first item
			let list = document.querySelector(StyledFetchDataContainer)
			console.log(list, 'ok')
			let firstListItem = document.querySelector(StyledLi)
			console.log(firstListItem, 'ok')

			if (result.length > 0) {
				// remove the placeholder content
				list.removeChild(firstListItem)
				result.forEach((bedrift) => {
					// create a list element for each animal
					const listItem = document.createElement('li')
					// console.log(listItem, 'ok');

					// add the animal name as the text content
					const companyName = listItem.textContent = bedrift.name
					console.log(listItem,companyName, 'ok')

					// add the item to the list
					list.appendChild(listItem)
					console.log(list.appendChild+'append ok');
				})
			}
		})
	return (
		<StyledFetchDataContainer>
			<StyledLi>animal loading</StyledLi>
		</StyledFetchDataContainer>
	)
}

export default FetchData
