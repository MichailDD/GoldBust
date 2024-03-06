import './Container.scss'
import { IContainer } from './container.props'

const Container = ({ children }: IContainer) => {
	return <div className='container'>
		{children}
	</div>
}

export default Container
