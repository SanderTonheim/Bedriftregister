import { CompanyMap } from './googleMaps'
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

	// const companyName = res.data.

	const getData = () => {
		axios.get(URL).then((res) => {
			setdata(res.data.result)
		})
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='site-content'>
			{data.map((companys) => {
				console.log(companys.Text)
				return (
					<Collapsible name={companys.name}>
						<div className='company-text'>
							<p>{companys.Text}</p>
						</div>
						<div className='map'>
							<CompanyMap
								latitude={companys.latitude}
								longetude={companys.longetude}
							/>
						</div>
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
