import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './Search.module.scss'
import { useDebounce } from 'src/hooks/useDebounce'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useGetAllUserWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'
import { useTranslation } from 'react-i18next'
import { TUserWordCard } from 'src/redux/User/User.types'
import { Spin } from 'antd'

const Search: React.FC = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [search, setSearch] = React.useState<string>()
	const { t } = useTranslation()
	const lang = localStorage.getItem('lang')
	const debouncedSearch: string = useDebounce(search, 500)
	const { data: allWords, isLoading } = useGetAllUserWordsQuery(
		{ search: debouncedSearch },
		{
			skip: !debouncedSearch,
		}
	)
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
					{isLoading ? (
						<div>
							<Spin spinning />
						</div>
					) : allWords?.data.length ? (
						allWords?.data.map((word: TUserWordCard) => (
							<Link
								key={word.id}
								onClick={() => setSearch('')}
								to={`/${word.id}`}
								replace={true}
							>
								{lang === 'QQ' ? word.title.kiril : word.title.latin}
							</Link>
						))
					) : (
						<h2>Sóz tabilǵan joq</h2>
					)}
				</div>
			)}
		</div>
	)
}

export { Search }
