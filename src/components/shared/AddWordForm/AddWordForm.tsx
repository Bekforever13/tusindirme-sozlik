import React, { useState } from 'react'
import { Button, Form, Input, Modal } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import { UiButton } from 'src/components/ui/button/UiButton'
import FormItem from 'antd/es/form/FormItem'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import {
	useCreateNewWordMutation,
	useGetAllCategoriesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { TNewWord } from 'src/redux/allWords/Allwords.types'

const AddWordForm: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { data } = useGetAllCategoriesQuery()
	const [createNewWord] = useCreateNewWordMutation()
	const [word, setWord] = useState<TNewWord>({
		title: [
			{
				latin: '',
				kiril: '',
			},
		],
		description: [
			{
				latin: '',
				kiril: '',
			},
		],
		correct: '',
		category_id: [1],
	})
	const [selectOptions, setSelectOptions] = useState<TCategory[]>()

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleOk = () => {
		setIsModalOpen(false)
		createNewWord(word)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<UiButton onClick={showModal}>Add word</UiButton>
			<UiModal
				title={'Add new word'}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
			>
				<Form>
					<FormItem label='Title latin'>
						<Input
							value={word.title[0].latin}
							onChange={e =>
								setWord({
									...word,
									title: [
										{ latin: e.target.value, kiril: word.title[0].kiril },
									],
								})
							}
						/>
					</FormItem>
					<FormItem label='Title kiril'>
						<Input
							value={word.title[0].kiril}
							onChange={e =>
								setWord({
									...word,
									title: [
										{ latin: word.title[0].latin, kiril: e.target.value },
									],
								})
							}
						/>
					</FormItem>
					<FormItem label='Description latin'>
						<Input
							value={word.description[0].latin}
							onChange={e =>
								setWord({
									...word,
									description: [
										{
											latin: e.target.value,
											kiril: word.description[0].kiril,
										},
									],
								})
							}
						/>
					</FormItem>
					<FormItem label='Description kiril'>
						<Input
							value={word.description[0].kiril}
							onChange={e =>
								setWord({
									...word,
									description: [
										{
											latin: word.description[0].latin,
											kiril: e.target.value,
										},
									],
								})
							}
						/>
					</FormItem>
					<FormItem label='Category'>
						{/*  need to fix here below */}
						{/* <UiSelect placeholder={'Category'} options={selectOptions} /> */}
					</FormItem>
					<FormItem label='Correct'>
						<Input
							value={word.correct}
							onChange={e =>
								setWord({
									...word,
									correct: e.target.value,
								})
							}
						/>
					</FormItem>
				</Form>
			</UiModal>
		</>
	)
}
export { AddWordForm }
