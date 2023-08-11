import { Tag } from 'antd'
import { TStatusTag } from './tag.types'
import clsx from 'clsx'

const StatusTag: React.FC<TStatusTag> = ({ type, title }) => {
	return (
		<Tag
			color={clsx(
				type === 'confirmed' && 'green',
				type === 'rejected' && 'red',
				type === 'testing' && 'orange',
			)}
		>
			{type?.toUpperCase() || title?.toUpperCase()}
		</Tag>
	)
}
export { StatusTag }
