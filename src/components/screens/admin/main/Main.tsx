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
	const { data: wordData } = useGetAllWordsQuery({})
	const { data: categoryData } = useGetAllCategoriesQuery()
	const params = useParams()

	return (
		<div className={styles.root}>
			<div className={styles.statistic}>
				<Statistic
					title='Jámi sózler sani'
					value={wordData?.total}
					prefix={<MdOutlineTranslate />}
				/>
			</div>
			<div className={styles.statistic}>
				<Statistic
					title='Jámi kategoriya sani'
					value={categoryData?.data.length}
					prefix={<BiCategory />}
				/>
			</div>
		</div>
	)
}
export { Main }
