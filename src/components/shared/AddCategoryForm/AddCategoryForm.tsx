import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import { UiButton } from 'src/components/ui/button/UiButton'
import FormItem from 'antd/es/form/FormItem'
import { useCreateNewCategoryMutation } from 'src/redux/index.endpoints'
import { TNewCategory } from 'src/redux/allCategories/allCategories.types'

const AddCategoryForm: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [createNewCategory] = useCreateNewCategoryMutation()
	const [category, setCategory] = useState<TNewCategory>({
		type_id: '',
		title: [
			{
				latin: '',
				kiril: '',
			},
		],
	})

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleOk = () => {
		setIsModalOpen(false)
		createNewCategory(category)
		console.log(category)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<UiButton onClick={showModal}>Add category</UiButton>
			<UiModal
				title={'Add new category'}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
			>
				<Form>
					<FormItem label='Latin'>
						<Input
							value={category.title[0].latin}
							onChange={e =>
								setCategory({
									...category,
									title: [
										{ latin: e.target.value, kiril: category.title[0].kiril },
									],
								})
							}
						/>
					</FormItem>
					<FormItem label='Kiril'>
						<Input
							value={category.title[0].kiril}
							onChange={e =>
								setCategory({
									...category,
									title: [
										{ latin: category.title[0].latin, kiril: e.target.value },
									],
								})
							}
						/>
					</FormItem>
					<FormItem label='Type id'>
						<Input />
					</FormItem>
				</Form>
			</UiModal>
		</>
	)
}
export { AddCategoryForm }
