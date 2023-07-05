import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './Search.module.scss'
import { Select } from 'antd'
import { useDebounce } from 'src/hooks/useDebounce'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Search: React.FC = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [search, setSearch] = React.useState<string>()
	const debouncedSearch = useDebounce(search, 500)
	const options = [
		{ value: 'Aa', label: 'Aa' },
		{ value: 'Bb', label: 'Bb' },
		{ value: 'Cc', label: 'Cc' },
		{ value: 'Dd', label: 'Dd' },
		{ value: 'Ee', label: 'Ee' },
	]

	const fakeSearchValues = [
		'Abadan',
		'Abadanlasıw',
		'Abadanlıq',
		'Abajur',
		'Abay',
		'Abay-sıyasat',
		'Abaylaw',
		'Abaylı',
		'Abaysız',
		'Abaysızda',
	]

	const handleClick = () => setSearch('')

	return (
		<div className={styles.root}>
			<h1>Bir sózdi izleń, onı úyreniń</h1>
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
					onChange={e => setSearch(e.target.value)}
					type='text'
					id='input'
					ref={inputRef}
					placeholder={'Sózdi izlew ushın jazıń ...'}
				/>
				{search && (
					<button className={styles.clearButton} onClick={handleClick}>
						<AiOutlineClose />
					</button>
				)}
			</div>
			{debouncedSearch && (
				<div className={styles.searchResults}>
					{fakeSearchValues.map(word => {
						return <Link to={`/`}>{word}</Link>
					})}
				</div>
			)}
		</div>
	)
}

export { Search }
