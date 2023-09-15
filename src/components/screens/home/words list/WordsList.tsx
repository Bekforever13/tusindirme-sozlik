import React, { useState } from 'react'
import { Pagination } from 'antd'
import styles from './WordsList.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useGetAllUserWordsQuery } from 'src/redux/index.endpoints'

const WordsList: React.FC = () => {
	const lang = localStorage.getItem('lang')
	const { t } = useTranslation()
	const [page, setPage] = useState<number>(1)
	const { data, isLoading, isFetching } = useGetAllUserWordsQuery({
		limit: 30,
		page: page,
	})

	return (
		<div className={styles.root}>
			<div className={styles.title}>{t('wordsList')}</div>
			<div className={styles.list}>
				{isLoading || isFetching
					? [
							...Array(30).map((el, i) => {
								return <li>{i + 1}</li>
							}),
					  ]
					: data?.data.map(word => {
							return (
								<Link key={word.id} to={`/${word.id}`}>
									{lang === 'QQ' ? word.title_latin : word.title_kiril}
								</Link>
							)
					  })}
			</div>
			<div className={styles.pagination}>
				<Pagination
					defaultCurrent={1}
					showSizeChanger={false}
					current={page}
					onChange={e => setPage(e)}
					pageSize={30}
					total={data?.pagination.total}
				/>
			</div>
		</div>
	)
}
export { WordsList }
