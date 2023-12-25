import React, { useMemo, useRef, useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { Select, Spin } from 'antd'
import type { SelectProps } from 'antd/es/select'
import { useSelectors } from 'src/hooks/useSelectors'
import { LabelValue } from 'src/redux/Admin/allWords/Allwords.types'
import { useActions } from 'src/hooks/useActions'

export interface DebounceSelectProps<ValueType = any>
	extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
	fetchOptions: (search: string) => Promise<ValueType[]>
	debounceTimeout?: number
}

function DebounceSelect<
	ValueType extends {
		key?: string
		label: React.ReactNode
		value: string | number
	} = any
>({
	fetchOptions,
	debounceTimeout = 800,
	...props
}: DebounceSelectProps<ValueType>) {
	const [fetching, setFetching] = useState(false)
	const [options, setOptions] = useState<ValueType[]>([])
	const fetchRef = useRef(0)

	const debounceFetcher = useMemo(() => {
		const loadOptions = (value: string) => {
			fetchRef.current += 1
			const fetchId = fetchRef.current
			setOptions([])
			setFetching(true)

			fetchOptions(value).then(newOptions => {
				if (fetchId !== fetchRef.current) {
					return
				}

				setOptions(newOptions)
				setFetching(false)
			})
		}

		return debounce(loadOptions, debounceTimeout)
	}, [fetchOptions, debounceTimeout])

	return (
		<Select
			labelInValue
			filterOption={false}
			onSearch={debounceFetcher}
			notFoundContent={fetching ? <Spin size='small' /> : null}
			{...props}
			options={options}
		/>
	)
}

async function fetchUserList(search: string): Promise<LabelValue[]> {
	return fetch('https://api.tusindirmesozlik.uz/api/words?search=' + search, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	})
		.then(response => response.json())
		.then((res: any) =>
			res?.data.map((item: any) => ({
				label: item.title.kiril,
				value: item.id,
			}))
		)
}

const SearchNSelect: React.FC<{ currentWords: string }> = ({
	currentWords,
}) => {
	const { currentWord, AntSinModal } = useSelectors()
	const { setSelectedAntonims, setSelectedSinonims } = useActions()
	const [value, setValue] = useState<LabelValue[]>([])

	useEffect(() => {
		if (!AntSinModal) {
			setValue([])
			setSelectedAntonims([])
			setSelectedSinonims([])
		}
	}, [AntSinModal])

	useEffect(() => {
		if (currentWords === 'antonim') {
			if (currentWord?.antonym.length) {
				currentWord?.antonym.map(el => {
					setValue(prev => [...prev, { label: el.title.kiril, value: el.id }])
				})
			}
		} else {
			if (currentWord?.synonym.length) {
				currentWord.synonym.map(el => {
					setValue(prev => [...prev, { label: el.title.kiril, value: el.id }])
				})
			}
		}
	}, [currentWord])

	return (
		<DebounceSelect
			mode='multiple'
			value={value}
			placeholder='Select users'
			fetchOptions={fetchUserList}
			onChange={newValue => {
				setValue(newValue as LabelValue[])
				currentWords === 'antonim'
					? setSelectedAntonims(newValue as any)
					: setSelectedSinonims(newValue as any)
			}}
			style={{ width: '100%' }}
		/>
	)
}

export { SearchNSelect }
