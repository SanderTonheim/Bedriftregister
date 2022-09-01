import axios from 'axios'
import { useState, useEffect } from 'react'
import { Collapsible } from './collapsible'

function FetchData() {
	const [data, setdata] = useState([0])

	// Select the DOM-element, so that you can replace it with content
	let PROJECT_ID = 'oans3nsr'
	let DATASET = 'production'
	let QUERY = encodeURIComponent('*[_type == "bedrift"]')

	// Compose the URL for your project's endpoint and add the query
	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

	// fetch the content

	const getData = () => {
		axios.get(URL).then((res) => {
			setdata(res.data.result)
		})
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			{data.map((companys) => {
				return (
					<Collapsible>
						<h1>{companys.name}</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus natus ipsa recusandae exercitationem nulla
							praesentium, delectus vitae laboriosam dolorum veniam dolorem
							doloremque voluptatibus nemo reprehenderit nam facilis nobis sint
							aliquam?
						</p>
					</Collapsible>
				)
			})}
		</div>
	)
}

export default FetchData

// fetch(URL)
// 	.then((res) => res.json())
// 	.then(({ result }) => {
// 		console.log(result, 'results')
// 		// get the list element, and the first item
// 		let list = document.querySelector('ul')
// 		let firstListItem = document.querySelector('li')
// 		console.log(firstListItem, 'first list item')

// 		if (result.length > 0) {
// 			// remove the placeholder content
// 			list.removeChild(firstListItem)
// 			console.log('first list item removed')

// 			result.forEach((bedrift) => {
// 				const listItem = document.createElement('div')
// 				listItem.textContent = bedrift.name
// 				list.append(listItem)
// 				// return { listItem }
// 			})
// 			return
// 		}
// 	})
