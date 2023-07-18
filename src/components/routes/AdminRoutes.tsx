import { Admins } from 'src/components/screens/Admin/admins/Admins'
import { Category } from 'src/components/screens/Admin/category/Category'
import { Main } from 'src/components/screens/Admin/main/Main'
import { Words } from 'src/components/screens/Admin/words/Words'
import { _Types } from '../screens/Admin/_types/_Types'

export const AdminRoutes = [
	{ path: '/admin/', element: <Main /> },
	{ path: '/admin/words', element: <Words /> },
	{ path: '/admin/category', element: <Category /> },
	{ path: '/admin/admins', element: <Admins /> },
	{ path: '/admin/types', element: <_Types /> },
]
