import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	varinant: string
}
