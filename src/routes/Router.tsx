import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/containers/Layout/Layout'
import Catalog from '../components/pages/Catalog/Catalog'
import { CATALOG } from './routes.links'
import { lazy } from 'react'
const MainPage = lazy(() => import('../components/pages/MainPage/MainPage'))

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />
			},
			{
				path: `${CATALOG}`,
				element: <Catalog />
			}
		]
	}
])

export default Router
