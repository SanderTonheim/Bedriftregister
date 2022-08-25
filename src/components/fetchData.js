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

	// .then(json.stringify())
	// .then(({ result }) => {
	// 	// get the list element, and the first item
	// 	let list = document.querySelector('ul')
	// 	let firstListItem = document.querySelector('ul li')

	// 	if (result.length > 0) {
	// 		// remove the placeholder content
	// 		list.removeChild(firstListItem)

	// 		result.forEach((bedrift) => {
	// 			// create a list element for each animal
	// 			let listItem = document.createElement('li')

	// 			// add the company name as the text content
	// 			listItem.textContent = bedrift?.name

	// 			// add the item to the list
	// 			list.appendChild(listItem)
	// 		})
	// 		console.log(result)
	// 	}
	// })
	// .catch((err) => console.error(err))

	return (
		<div>
			<header>
				<h1>Bedriftregister</h1>
			</header>
			<main>
				<h2>Animals</h2>
				<ul>
					<li>Loading animals…</li>
				</ul>
			</main>
		</div>
	)
}

export default FetchData
