import React from 'react'
import styles from './Main.module.scss'
import { MdOutlineTranslate } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'
import {
	useGetAllCategoriesQuery,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { Statistic } from 'antd'
import { useParams } from 'react-router-dom'

const Main: React.FC = () => {
	const { data: wordData } = useGetAllWordsQuery('')
	const { data: categoryData } = useGetAllCategoriesQuery()
	const params = useParams()

	return (
		<div className={styles.root}>
			<Statistic
				title='Total words'
				value={wordData?.data.length}
				prefix={<MdOutlineTranslate />}
			/>
			<Statistic
				title='Total category'
				value={categoryData?.data.length}
				prefix={<BiCategory />}
			/>
		</div>
	)
}
export { Main }
