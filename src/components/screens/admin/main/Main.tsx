import React from 'react'
import styles from './Main.module.scss'
import { MdOutlineTranslate } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'
import {
	useGetAllCategoriesQuery,
	useGetAdminAllWordsQuery,
} from 'src/redux/index.endpoints'
import { Statistic } from 'antd'
import CountUp from 'react-countup'

const Main: React.FC = () => {
	const { data: wordData } = useGetAdminAllWordsQuery({})
	const { data: categoryData } = useGetAllCategoriesQuery()
	const formatter = (value: any) => <CountUp end={value} separator=',' />

	return (
		<div className={styles.root}>
			<div className={styles.statistic}>
				<Statistic
					title='Общее количество слов'
					value={wordData?.total}
					prefix={<MdOutlineTranslate />}
					formatter={formatter}
				/>
			</div>
			<div className={styles.statistic}>
				<Statistic
					title='Общее количество категорий'
					value={categoryData?.data.length}
					prefix={<BiCategory />}
					formatter={formatter}
				/>
			</div>
		</div>
	)
}
export { Main }
