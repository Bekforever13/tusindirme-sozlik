import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = props => (
	<ContentLoader
		speed={1}
		width={320}
		height={350}
		viewBox='0 0 320 350'
		backgroundColor='#f2eded'
		foregroundColor='#dedede'
		{...props}
	>
		<rect x='30' y='30' rx='5' ry='5' width='200' height='25' />
		<rect x='30' y='70' rx='5' ry='5' width='100' height='20' />
		<rect x='30' y='100' rx='5' ry='5' width='100' height='20' />
		<rect x='30' y='130' rx='5' ry='5' width='100' height='20' />
		<rect x='30' y='160' rx='5' ry='5' width='100' height='20' />
		<rect x='30' y='190' rx='5' ry='5' width='100' height='20' />
		<rect x='30' y='280' rx='5' ry='5' width='200' height='25' />
		<rect x='30' y='220' rx='5' ry='5' width='100' height='20' />
		<rect x='30' y='250' rx='5' ry='5' width='100' height='20' />
	</ContentLoader>
)

export { Skeleton }
