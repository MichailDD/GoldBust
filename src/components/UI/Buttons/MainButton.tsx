import './Buttons.scss'
import { IButton } from './button.props'
import cn from 'classnames'

const MainButton = ({ children, className, varinant }: IButton) => {
	return (
		<button className={cn(`button button_${varinant} ${className}`)}>
			{children}
		</button>
	)
}

export default MainButton
