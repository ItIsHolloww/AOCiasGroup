import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import { GlobalStyles } from './styles/global'

function App() {
	return (
		<>
			<GlobalStyles />
			<h1>Task Manger</h1>
			<TaskForm />
			<TaskList />
		</>
	)
}

export default App
