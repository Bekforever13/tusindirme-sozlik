import React from 'react'
import styles from './Home.module.scss'
import { Search } from 'src/components/shared/search/Search'
import { Frame } from 'src/components/screens/home/frame/Frame'
import { About } from 'src/components/screens/home/about/About'
import { FloatButton } from 'antd'
import { Card } from 'src/components/shared/Landing/Card/Card'
import { Skeleton } from 'src/components/shared/Landing/Skeleton/Skeleton'
import { useParams } from 'react-router-dom'
import { Word } from './word/Word'
import { useTranslation } from 'react-i18next'
import { useSelectors } from 'src/hooks/useSelectors'
import { useGetUserCardsData } from 'src/hooks/useGetUserCardsData'

const Home: React.FC = () => {
	const { id } = useParams()
	const { t } = useTranslation()
	useGetUserCardsData()
	const {
		randomWordsData,
		popularWordsData,
		isCorrectWordsData,
		popularWordsLoading,
		isCorrectWordsLoading,
		randomWordsLoading,
	} = useSelectors()

	return (
		<div className={styles.root}>
			<div className={styles.search}>
				<h1>{t('searchTitle')}</h1>
				<Search />
			</div>
			{id && <Word />}
			<div className={styles.cards}>
				{popularWordsLoading ? (
					<Skeleton />
				) : (
					<Card title={t('firstCardTitle')} words={randomWordsData} />
				)}
				{isCorrectWordsLoading ? (
					<Skeleton />
				) : (
					<Card title={t('secondCardTitle')} words={popularWordsData} />
				)}
				{randomWordsLoading ? (
					<Skeleton />
				) : (
					<Card title={t('thirdCardTitle')} words={isCorrectWordsData} />
				)}
			</div>
			<Frame />
			<About />
			<FloatButton.BackTop visibilityHeight={0} />
		</div>
	)
}
export { Home }
