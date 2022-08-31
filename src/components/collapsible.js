import { StyledButton, StyledContent } from '../style/collapsible.styled'
import { useState } from 'react'

export const Collapsible = ({ label, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='collapsible'>
			<StyledButton className='toggle' onClick={() => setIsOpen(!isOpen)}>
				{label}
			</StyledButton>
			<div className={isOpen ? 'content-parent show' : 'content-parent'}>
				<StyledContent className='content'>{children}</StyledContent>
			</div>
		</div>
	)
}
