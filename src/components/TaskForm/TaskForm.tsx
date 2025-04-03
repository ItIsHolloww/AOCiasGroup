import { FC, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/taskSlice'
import { Priority } from '../../types/task'
import { Button, Form, Input, Select, TextArea } from './styles'

export const TaskForm: FC = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [priority, setPriority] = useState<Priority>('medium')
	const dispatch = useDispatch()

	useEffect(() => {
		const interval = setInterval(() => {
			const autoTask = {
				title: `Task #${Math.floor(Math.random() * 1000)}`,
				description: 'Auto-generate',
				priority: ['low', 'medium', 'high'][
					Math.floor(Math.random() * 3)
				] as Priority,
			}
			dispatch(addTask(autoTask))
		}, 1000 + Math.random() * 10000)

		return () => clearInterval(interval)
	}, [dispatch])

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		dispatch(addTask({ title, description, priority }))
		setTitle('')
		setDescription('')
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Title'
				required
			/>
			<TextArea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='Description'
			/>
			<Select
				value={priority}
				onChange={(e) => setPriority(e.target.value as Priority)}
			>
				{['low', 'medium', 'high'].map((p) => (
					<option key={p} value={p}>
						{p}
					</option>
				))}
			</Select>
			<Button type='submit'>Add Task</Button>
		</Form>
	)
}
