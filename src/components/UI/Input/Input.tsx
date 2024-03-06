import './Input.scss'
import { IInput } from './input.props'

const Input = ({ variant, placeholder, className, ...props }: IInput) => {
	return (
		<input
			placeholder={placeholder}
			className={`main-input main-input_${variant} ${className}`}
			{...props}
		/>
	)
}

export default Input
