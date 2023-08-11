import { Main } from 'src/components/screens/dashboard/admin/main/Main'
import { Words } from 'src/components/screens/dashboard/admin/words/Words'
import { Category } from 'src/components/screens/dashboard/admin/category/Category'
import { Users } from 'src/components/screens/dashboard/admin/users/Users'
import { Types } from 'src/components/screens/dashboard/admin/types/Types'
import { Tester } from 'src/components/screens/dashboard/tester/Tester'
import { Copywriter } from 'src/components/screens/dashboard/copywriter/Copywriter'

export const DashboardRoutes = [
	{ path: 'dashboard/admin', element: <Main /> },
	{ path: 'dashboard/admin/words', element: <Words /> },
	{ path: 'dashboard/admin/category', element: <Category /> },
	{ path: 'dashboard/admin/users', element: <Users /> },
	{ path: 'dashboard/admin/types', element: <Types /> },
	{ path: 'dashboard/copywriter', element: <Copywriter /> },
	{ path: 'dashboard/tester', element: <Tester /> },
]
