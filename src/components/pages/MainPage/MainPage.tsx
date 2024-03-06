import { Link } from 'react-router-dom'
import './MainPage.scss'
import { CATALOG } from '../../../routes/routes.links'

const MainPage = () => {
	return (
		<div>
			<h1>
				<Link to={CATALOG}>Catalog</Link>
			</h1>
		</div>
	)
}

export default MainPage
