import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { deleteTask, setFilter, updateTask } from '../../store/slices/taskSlice'
import { Priority, Task } from '../../types/task'
import { EmptyMessage, FilterButton, ListContainer } from './styles'
import { TaskItem } from './TaskItem'

export const TaskList: FC = () => {
	const { tasks, filter } = useAppSelector((state) => state.tasks)
	const dispatch = useAppDispatch()
	const [editingId, setEditingId] = useState<string | null>(null)

	const filtredTasks =
		filter === 'all' ? tasks : tasks.filter((task) => task.priority === filter)

	const sortedTasks = [...filtredTasks].sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	)

	const handleDelete = (id: string) => dispatch(deleteTask(id))
	const handleSave = (updatedTask: Task) => {
		dispatch(updateTask(updatedTask))
		setEditingId(null)
	}

	return (
		<div>
			{/* Панель фильтрации */}
			<div>
				<FilterButton
					$active={filter === 'all'}
					onClick={() => dispatch(setFilter('all'))}
				>
					Все
				</FilterButton>
				{(['low', 'medium', 'high'] as Priority[]).map((p) => (
					<FilterButton
						key={p}
						$active={filter === p}
						onClick={() => dispatch(setFilter(p))}
					>
						{p}
					</FilterButton>
				))}
			</div>

			{/* Список задач */}
			<ListContainer>
				{sortedTasks.length > 0 ? (
					sortedTasks.map((task) => (
						<TaskItem
							key={task.id}
							task={task}
							isEditing={editingId === task.id}
							onEdit={() => setEditingId(task.id)}
							onSave={handleSave}
							onDelete={() => handleDelete(task.id)}
							onCancel={() => setEditingId(null)}
						/>
					))
				) : (
					<EmptyMessage>Нет задач</EmptyMessage>
				)}
			</ListContainer>
		</div>
	)
}
