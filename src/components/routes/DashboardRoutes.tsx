import { Main } from 'src/components/screens/dashboard/admin'
import { Words } from 'src/components/screens/dashboard/admin'
import { Users } from 'src/components/screens/dashboard/admin'
import { Types } from 'src/components/screens/dashboard/admin'
import { Category } from 'src/components/screens/dashboard/admin'
import { SingleWordInfo } from 'src/components/screens/dashboard/admin'

import { Tester } from 'src/components/screens/dashboard/tester/Tester'
import { Copywriter } from 'src/components/screens/dashboard/copywriter/Copywriter'

export const DashboardRoutes = [
	{ path: 'dashboard/admin', element: <Main /> },
	{ path: 'dashboard/admin/words', element: <Words /> },
	{ path: 'dashboard/admin/words/:id', element: <SingleWordInfo /> },
	{ path: 'dashboard/admin/category', element: <Category /> },
	{ path: 'dashboard/admin/users', element: <Users /> },
	{ path: 'dashboard/admin/types', element: <Types /> },
	{ path: 'dashboard/copywriter', element: <Copywriter /> },
	{ path: 'dashboard/copywriter/table', element: <Copywriter /> },
	{ path: 'dashboard/tester', element: <Tester /> },
	{ path: 'dashboard/tester/table', element: <Tester /> },
]
