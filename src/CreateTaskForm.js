import {useState} from "react";
import {collection, addDoc, Timestamp} from "firebase/firestore";
import db from './connectDB'


function CreateTaskForm() {
	const [title, setTitle] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		addDoc(collection(db, 'tasks'), {
			title,
			created: Timestamp.now()
		}).then(r => console.log(r))
			.catch(r => console.log(r))
		setTitle('')
	}
	return (
		<form className='input-group mb-3'>
			<input className='form-control' type="text" placeholder='Enter text task' value={title} onChange={e => setTitle(e.target.value)}/>
			<button className='btn btn-primary btn-sm' type='submit' onClick={handleSubmit}>Add task</button>
		</form>
	)
}

export default CreateTaskForm