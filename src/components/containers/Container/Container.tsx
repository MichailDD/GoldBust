import './Container.scss'
import { IContainer } from '../../../types/container/container.type'

const Container = ({ children }: IContainer) => {
	return <div className='container'>
		{children}
	</div>
}

export default Container
