import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { Priority, Task } from '../../types/task'

const initialState = {
	tasks: [] as Task[],
	filter: 'all' as 'all' | Priority,
}

const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'createdAt'>>) => {
			const newTask: Task = {
				id: uuidv4(),
				createdAt: new Date().toISOString(),
				...action.payload,
			}
			state.tasks.push(newTask)
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
		},
		updateTask: (state, action: PayloadAction<Task>) => {
			const index = state.tasks.findIndex((t) => t.id === action.payload.id)
			if (index !== -1) {
				state.tasks[index] = action.payload
			}
		},
		setFilter: (state, action: PayloadAction<'all' | Priority>) => {
			state.filter = action.payload
		},
	},
})
export const { addTask, deleteTask, updateTask, setFilter } = taskSlice.actions
export default taskSlice.reducer
