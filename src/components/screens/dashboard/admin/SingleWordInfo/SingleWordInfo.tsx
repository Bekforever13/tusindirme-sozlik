import React from 'react'
import { useCustomGetRole } from 'src/hooks/useCustomGetRole'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useGetAllWordsQuery } from 'src/redux/index.endpoints'
import styles from './SingleWordInfo.module.scss'
import { useActions } from 'src/hooks/useActions'

const SingleWordInfo: React.FC = () => {
	const [word, setWord] = React.useState<TWord>()
	const id = useCustomGetRole(23)
	const { data } = useGetAllWordsQuery('')
	const { setSearchValue } = useActions()

	React.useEffect(() => {
		setWord(data?.data.find(item => +item.id === +id))
		setSearchValue('')
	}, [id])

	return (
		<div className={styles.root}>
			<h2>{word?.title_latin}</h2>
			<div className={styles.desc}>{word?.description_latin}</div>
		</div>
	)
}
export { SingleWordInfo }
