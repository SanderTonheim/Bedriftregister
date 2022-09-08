import { StyledButton, StyledContent } from '../style/collapsible.styled'
import { useState, useRef } from 'react'
import icon from '../asests/arrow.png'

export const Collapsible = ({ children, name }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [arrowOpen, setArrowOpen] = useState(false)

	const parentRef = useRef()
	if (parentRef.current)
	console.log(parentRef.current.scrollHeight);
	return (
		<div className='collapsible'>
			<div className='list-items'>
				<h1>{name}</h1>
				<StyledButton className='toggle' onClick={() => setIsOpen(!isOpen)}>
					<div
						className={arrowOpen ? 'arrow-open' : 'arrow-closed'}
						onClick={() => setArrowOpen(!arrowOpen)}
					>
						<img src={icon} alt='pic' />
						Les mer
					</div>
				</StyledButton>
			</div>
			<div
				className='content-parent'
				ref={parentRef}
				style={
					isOpen
						? { height: parentRef.current.scrollHeight + 'px' }
						: { height: '0px' }
				}
			>
				<StyledContent className='content'>{children}</StyledContent>
			</div>
		</div>
	)
}
