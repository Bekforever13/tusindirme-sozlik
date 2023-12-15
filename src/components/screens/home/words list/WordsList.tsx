import React, { useState } from 'react'
import { Pagination, Spin } from 'antd'
import styles from './WordsList.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useGetAllUserWordsQuery } from 'src/redux/index.endpoints'

const WordsList: React.FC = () => {
	const lang = localStorage.getItem('lang')
	const { t } = useTranslation()
	const [page, setPage] = useState<number>(1)
	const [pageSize, setPageSize] = useState<number>(30)
	const { data, isLoading } = useGetAllUserWordsQuery({
		limit: pageSize,
		page: page,
	})

	return (
		<div className={styles.root}>
			<div className={styles.title}>{t('wordsList')}</div>
			<Spin spinning={isLoading}>
				<div className={styles.list}>
					{data?.data.map(word => {
						return (
							<Link key={word.id} to={`/${word.id}`}>
								{lang === 'QQ' ? word.title.latin : word.title.kiril}
							</Link>
						)
					})}
				</div>
			</Spin>
			<div className={styles.pagination}>
				<Pagination
					showSizeChanger={true}
					current={page}
					pageSize={pageSize}
					onChange={(page, pageSize) => {
						setPage(page)
						setPageSize(pageSize)
					}}
					total={data?.total}
				/>
			</div>
		</div>
	)
}
export { WordsList }
