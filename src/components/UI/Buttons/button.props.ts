import { ButtonHTMLAttributes, ReactNode } from 'react'
export type ButtonSize = 'big' | 'default'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	varinant: ButtonSize
}
