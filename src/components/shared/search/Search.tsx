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
import { TWord } from 'src/redux/Admin/allWords/Allwords.types'
import { useTranslation } from 'react-i18next'

const Search: React.FC = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [search, setSearch] = React.useState<string>()
	const { t } = useTranslation()
	const lang = localStorage.getItem('lang')
	const debouncedSearch = useDebounce(search, 500)
	const { data: allWords } = useGetAllWordsQuery(debouncedSearch, {
		skip: !debouncedSearch,
	})
	const { setSearchValue } = useActions()
	const { searchValue } = useSelectors()

	const clearSearchValue = () => {
		setSearchValue('')
		setSearch('')
	}

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	React.useEffect(() => {
		setSearchValue(debouncedSearch)
	}, [debouncedSearch])

	return (
		<div className={styles.root}>
			<div className={styles.wrapper} onClick={() => inputRef.current?.focus()}>
				<span className={styles.search}>
					<BiSearch />
				</span>
				<input
					value={search}
					onChange={handleChangeInput}
					type='text'
					id='input'
					ref={inputRef}
					placeholder={t('searchPlaceholder')}
				/>
				{search && (
					<button className={styles.clearButton} onClick={clearSearchValue}>
						<AiOutlineClose />
					</button>
				)}
			</div>
			{searchValue && (
				<div className={styles.searchResults}>
					{!allWords?.data ? (
						<h2>{t('wordNotFound')}</h2>
					) : (
						allWords?.data.map((word: TWord) => {
							return (
								<Link
									key={word.id}
									onClick={() => setSearch('')}
									to={`/dashboard/admin/words/${word.id}`}
									replace={true}
								>
									{lang === 'QQ' ? word.title.kiril : word.title.latin}
								</Link>
							)
						})
					)}
				</div>
			)}
		</div>
	)
}

export { Search }
