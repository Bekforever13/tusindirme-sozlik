import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { Search } from 'src/components/shared/search/Search'
import { Frame } from 'src/components/screens/home/frame/Frame'
import { About } from 'src/components/screens/home/about/About'
import { FloatButton } from 'antd'
import { Card } from 'src/components/shared/Landing/Card/Card'
import { useGetCardWordsQuery } from 'src/redux/index.endpoints'
import { Skeleton } from 'src/components/shared/Landing/Skeleton/Skeleton'
import { useParams } from 'react-router-dom'
import { Word } from './word/Word'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
	const { data, isLoading } = useGetCardWordsQuery()
	const { id } = useParams()
	const { t } = useTranslation()

	return (
		<div className={styles.root}>
			{id ? (
				<Word />
			) : (
				<div className={styles.search}>
					<h1>{t('searchTitle')}</h1>
					<Search />
				</div>
			)}
			<div className={styles.cards}>
				{isLoading ? (
					[...Array(3)].map((el, i) => <Skeleton key={i} />)
				) : (
					<>
						<Card title={t('firstCardTitle')} words={data?.max} />
						<Card title={t('secondCardTitle')} words={data?.random} />
						<Card title={t('thirdCardTitle')} words={data?.in_correct} />
					</>
				)}
			</div>
			<Frame />
			<About />
			<FloatButton.BackTop visibilityHeight={0} />
		</div>
	)
}
export { Home }
