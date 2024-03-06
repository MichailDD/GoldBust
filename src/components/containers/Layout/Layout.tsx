import { Outlet } from 'react-router'
import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
import "./Layout.scss"

const Layout = () => {
	return (
		<div className='layout'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
