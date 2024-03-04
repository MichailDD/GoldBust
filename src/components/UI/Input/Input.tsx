import './Input.scss'
import { IInput } from '../../../types/inputs/inputs.type'
const Input = ({ variant, placeholder }: IInput) => {
	return (
		<input
			placeholder={placeholder}
			className={`main-input main-input_${variant}`}
		/>
	)
}

export default Input
