import { Main } from 'src/components/screens/admin'
import { Words } from 'src/components/screens/admin'
import { Users } from 'src/components/screens/admin'
import { Category } from 'src/components/screens/admin'
import { SingleWordInfo } from 'src/components/screens/admin'

export const DashboardRoutes = [
	{ path: '/admin', element: <Main /> },
	{ path: '/admin/words', element: <Words /> },
	{ path: '/admin/words/:id', element: <SingleWordInfo /> },
	{ path: '/admin/category', element: <Category /> },
	{ path: '/admin/users', element: <Users /> },
]
