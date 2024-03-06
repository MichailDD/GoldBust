import './Buttons.scss'
import { IButton } from '../../../types/buttons/buttons.type'
import cn from 'classnames'

const MainButton = ({ children, className, varinant }: IButton) => {
	return (
		<button className={cn(`button button_${varinant} ${className}`)}>
			{children}
		</button>
	)
}

export default MainButton
