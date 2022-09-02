import { StyledButton, StyledContent } from '../style/collapsible.styled'
import { useState } from 'react'

export const Collapsible = ({ children, name }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='collapsible'>
			<div className='list-items'>
				<h1>{name}</h1>
				<StyledButton className='toggle' onClick={() => setIsOpen(!isOpen)}>
					Les mer
				</StyledButton>
			</div>
			<div className={isOpen ? 'content-parent show' : 'content-parent'}>
				<StyledContent className='content'>{children}</StyledContent>
			</div>
		</div>
	)
}
