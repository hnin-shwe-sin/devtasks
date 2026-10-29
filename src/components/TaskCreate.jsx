import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function TaskCreate() {
    const { setTask } = useOutletContext();
    const [formData, setFormData] = useState({ title: '', desc: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTask((prevTasks) => [...prevTasks, { id: Date.now(), ...formData }]);
    }
    return (
        <div className="p-5">
            <form onSubmit={handleSubmit} className="task-create-form">
                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="title">Task Title</label>
                    <input onChange={handleChange} value={formData.title} name="title" type="text" id="title" className="col-span-9 p-2 border border-gray-300 focus:outline-none rounded" />
                </div>
                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="desc">Task Description</label>
                    <textarea onChange={handleChange} value={formData.desc} name="desc" className="p-2 col-span-9 rounded border border-gray-300 focus:outline-none" id="desc" rows="5"></textarea>
                </div>

                <button type="submit" className="bg-blue-100 text-blue-700 font-bold p-2 rounded-md cursor-pointer">Add Task</button>
            </form>
        </div>
    )
}

export default TaskCreate;