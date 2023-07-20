import React from 'react'
import { SortDateTable } from 'src/components/screens/Admin/main/SortDateTable/SortDateTable'
import { CategoryTable } from 'src/components/screens/Admin/main/CategoryTable/CategoryTable'
import styles from './Main.module.scss'
import {
	useGetAllCategoriesQuery,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { LoadingOutlined } from '@ant-design/icons'

const Main: React.FC = () => {
	const { data: wordData, isLoading: wordLoading } = useGetAllWordsQuery()
	const { data: categoryData, isLoading: categoryLoading } =
		useGetAllCategoriesQuery()
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<div className={styles.allWordsCount}>
					{wordLoading ? <LoadingOutlined /> : wordData?.data.length + ' sóz'}
				</div>
				<div className={styles.allCategoriesCount}>
					{categoryLoading ? (
						<LoadingOutlined />
					) : (
						categoryData?.data.length + ' category'
					)}
				</div>
			</div>
			<div className={styles.tables}>
				<SortDateTable />
				<CategoryTable />
			</div>
		</div>
	)
}
export { Main }
