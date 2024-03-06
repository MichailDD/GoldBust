import { InputHTMLAttributes } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	variant: string
	placeholder?: string
}
