import React from 'react'
import { TWord } from 'src/redux/Admin/allWords/Allwords.types'
import { useGetAllWordsQuery } from 'src/redux/index.endpoints'
import styles from './SingleWordInfo.module.scss'
import { useActions } from 'src/hooks/useActions'
import { useParams } from 'react-router-dom'


const SingleWordInfo: React.FC = () => {
	const [word, setWord] = React.useState<TWord>()
	const params = useParams()
	const { data } = useGetAllWordsQuery('')
	const { setSearchValue } = useActions()

	console.log(params)

	// React.useEffect(() => {
	// 	setWord(data?.data.find(item => +item.id === +params.id)
	// 	setSearchValue('')
	// }, [params.id])

	return (
		<div className={styles.root}>
			<h2>{word?.title_latin}</h2>
			<div className={styles.desc}>{word?.description_latin}</div>
		</div>
	)
}
export { SingleWordInfo }
