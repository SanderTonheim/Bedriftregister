import { useState } from 'react'

export const Collapsible = ({ label, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	console.log(label)

	return (
		<button onClick={() => setIsOpen(!isOpen)}>
			{isOpen && { children }}
			{label}
		</button>
	)
}
