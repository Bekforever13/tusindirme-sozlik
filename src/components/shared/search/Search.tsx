import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './Search.module.scss'

const Search: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>Bir sózdi izleń, onı úyreniń</h1>
			<label htmlFor='input'>
				<select className={styles.select}>
					<option value={'Aa'}>Aa</option>
					<option value={'Bb'}>Bb</option>
					<option value={'Cc'}>Cc</option>
					<option value={'Dd'}>Dd</option>
					<option value={'Ee'}>Ee</option>
				</select>
				<span>
					<BiSearch />
				</span>
				<input
				id='input'
					type='text'
					placeholder={'Sózdi izlew ushın jazıń ...'}
				/>
			</label>
		</div>
	)
}

export default Search
