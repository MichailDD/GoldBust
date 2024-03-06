import './styles/modules/global.scss'
import { CATALOG } from './routes/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const MainPage = lazy(() => import('./components/pages/MainPage/MainPage'))
const Catalog = lazy(() => import('./components/pages/Catalog/Catalog'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	},
	{
		path: `${CATALOG}`,
		element: <Catalog />
	}
])

function App() {
	return <RouterProvider router={router} />
}

export default App
