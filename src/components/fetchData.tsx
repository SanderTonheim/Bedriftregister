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
				return (
					<Collapsible name={companys.name}>
						<div className='map'>
							<CompanyMap
								latitude={companys.latitude}
								longetude={companys.longetude}
							/>
						</div>
						<div className='company-text'>
							<p>{companys.Text}</p>
						</div>
					</Collapsible>
				)
			})}
		</div>
	)
}

export default FetchData
