import './App.css';
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";

function App() {

	return (
		<div className="container">
			<CreateTaskForm/>
			<TaskList/>
		</div>
	);
}

export default App;
