export interface IRoutes {
	path: string
	element: JSX.Element
	children?: IRoutes[]
}
