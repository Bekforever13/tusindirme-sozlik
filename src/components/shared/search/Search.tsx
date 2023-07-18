import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './Search.module.scss'
import { Select } from 'antd'
import { useDebounce } from 'src/hooks/useDebounce'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useGetAllWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'
import { TWord } from 'src/redux/allWords/Allwords.types'

const Search: React.FC = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const { data } = useGetAllWordsQuery()
	const [search, setSearch] = React.useState<string>()
	const [searchResult, setSearchResult] = React.useState<[]>()
	const { setSearchValue } = useActions()
	const { searchValue } = useSelectors()
	const debouncedSearch = useDebounce(search, 500)
	const options = [
		{ value: 'Aa', label: 'Aa' },
		{ value: 'Bb', label: 'Bb' },
		{ value: 'Cc', label: 'Cc' },
		{ value: 'Dd', label: 'Dd' },
		{ value: 'Ee', label: 'Ee' },
	]

	const clearSearchValue = () => {
		setSearchValue('')
		setSearch('')
		// inputRef.current?.focus()
	}

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	// React.useEffect(() => {
	// 	if (search) {
	// 		data?.data.map(item => {
	// 			item.title_latin.includes(search)
	// 				? setSearchResult(prev => [...prev, { ...item }])
	// 				: ''
	// 		})
	// 	}
	// }, [search])

	React.useEffect(() => {
		setSearchValue(debouncedSearch)
	}, [debouncedSearch])

	return (
		<div className={styles.root}>
			<div className={styles.wrapper} onClick={() => inputRef.current?.focus()}>
				<Select
					defaultValue={options[0].value}
					options={options}
					style={{ width: 70 }}
					onClick={e => e.stopPropagation()}
				/>
				<span className={styles.search}>
					<BiSearch />
				</span>
				<input
					value={search}
					onChange={handleChangeInput}
					type='text'
					id='input'
					ref={inputRef}
					placeholder={'Sózdi izlew ushın jazıń ...'}
				/>
				{search && (
					<button className={styles.clearButton} onClick={clearSearchValue}>
						<AiOutlineClose />
					</button>
				)}
			</div>
			{searchValue && (
				<div className={styles.searchResults}>
					{!data ? (
						<h2>Word is not found</h2>
					) : searchResult ? (
						searchResult.map((word: TWord) => {
							return <Link to='/'>{word.title_latin}</Link>
						})
					) : (
						''
					)}
				</div>
			)}
		</div>
	)
}

export { Search }
