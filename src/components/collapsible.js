import { useState } from 'react'

export const Collapsible = ({ label, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	console.log(label)

	return (
		<div className='Collapsible'>
			<button className='toggle' onClick={() => setIsOpen(!isOpen)}>
				{label}
			</button>
			{isOpen && <div className='content'>{children} </div>}
		</div>
	)
}
