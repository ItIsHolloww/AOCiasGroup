import { ChangeEvent, FC, useState } from 'react'
import { Priority, Task } from '../../types/task'
import {
	CancelButton,
	DeleteButton,
	DescriptionTextarea,
	EditButton,
	ItemContainer,
	ItemFooter,
	ItemHeader,
	PriorityBadge,
	PrioritySelect,
	SaveButton,
	TitleInput,
} from './styles'

interface TaskItemProps {
	task: Task
	isEditing: boolean
	onEdit: () => void
	onSave: (task: Task) => void
	onDelete: () => void
	onCancel: () => void
}
export const TaskItem: FC<TaskItemProps> = ({
	task,
	isEditing,
	onEdit,
	onCancel,
	onDelete,
	onSave,
}) => {
	const [editedTask, setEditedTask] = useState(task)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setEditedTask((prev) => ({ ...prev, [name]: value }))
	}

	const handleSave = () => {
		onSave({
			...editedTask,
			priority: editedTask.priority as Priority,
		})
	}

	return (
		<ItemContainer>
			{isEditing ? (
				<>
					<ItemHeader>
						<TitleInput
							name='title'
							value={editedTask.title}
							onChange={handleChange}
						/>
						<PrioritySelect
							name='priority'
							value={editedTask.priority}
							onChange={handleChange}
						>
							{['low', 'medium', 'high'].map((p) => (
								<option key={p} value={p}>
									{p}
								</option>
							))}
						</PrioritySelect>
					</ItemHeader>
					<DescriptionTextarea
						name='description'
						value={editedTask.description}
						onChange={handleChange}
					/>
					<ItemFooter>
						<SaveButton onClick={handleSave}>Сохранить</SaveButton>
						<CancelButton onClick={onCancel}>Отмена</CancelButton>
					</ItemFooter>
				</>
			) : (
				<>
					<ItemHeader>
						<h3>{task.title}</h3>
						<PriorityBadge $priority={task.priority}>
							{task.priority}
						</PriorityBadge>
					</ItemHeader>
					<p>{task.description}</p>
					<ItemFooter>
						<small>{new Date(task.createdAt).toLocaleString()}</small>
						<div>
							<EditButton onClick={onEdit}>Редактировать</EditButton>
							<DeleteButton onClick={onDelete}>Удалить</DeleteButton>
						</div>
					</ItemFooter>
				</>
			)}
		</ItemContainer>
	)
}
