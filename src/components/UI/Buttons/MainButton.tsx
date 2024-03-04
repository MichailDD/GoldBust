import './Buttons.scss'
import { IButton } from '../../../types/buttons/buttons.type'

const MainButton = ({ children, varinant }: IButton) => {
	return <button className={`button button_${varinant}`}>{children}</button>
}

export default MainButton
