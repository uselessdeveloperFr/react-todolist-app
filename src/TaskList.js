import {collection, onSnapshot, orderBy, query, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {useEffect, useState} from "react";
import './App.css';
import db from './connectDB'

function TaskList() {

	const [tasks, setTask] = useState([])

	useEffect(() => {
		const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
		onSnapshot(taskColRef, (snapshot) => {
			setTask(snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})))
		})
	}, [])

	console.log(tasks)

	const deleteTask = (id) => {
		deleteDoc(doc(db, 'tasks', id))
			.then(r => console.log(r))
			.catch(r => console.log(r))
	}

	const onToggleDone = (id, newStatus) => {
		updateDoc(doc(db, 'tasks', id), {completed: newStatus})
			.then(r => console.log(r))
			.catch(r => console.log(r))
	}

	return (
		<ul className='list-group'>
			{tasks.map(task => (
				<li className='list-group-item' key={task.title}>
					{task.completed ? <s>{task.title}</s> : task.title}
					<button className='btn btn-warning btn-sm float-sm-right' onClick={() => deleteTask(task.id)}>Delete</button>
					<button className='btn btn-success btn-sm float-sm-right' onClick={() => onToggleDone(task.id,!task.completed)}>Done</button>
				</li>
			))}
		</ul>
	);
}

export default TaskList;
