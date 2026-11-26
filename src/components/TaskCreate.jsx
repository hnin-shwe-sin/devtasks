import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { taskIndex } from '../routes';
import axios from 'axios';

function TaskCreate() {
    const { setTasks } = useOutletContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', description: '', status: '0' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8000/api/task', formData);

            setTasks(prevTasks => [...prevTasks, response.data]);
            navigate(taskIndex());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="p-5">
            <form onSubmit={handleSubmit} className="task-create-form">

                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="title">Task Title</label>
                    <input onChange={handleChange} value={formData.title} name="title" type="text" id="title" className="col-span-9 p-2 border border-gray-300 focus:outline-none rounded" />
                </div>

                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="description">Task Description</label>
                    <textarea onChange={handleChange} value={formData.description} name="description" className="p-2 col-span-9 rounded border border-gray-300 focus:outline-none" id="description" rows="5"></textarea>
                </div>

                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="description">Status</label>
                    <select onChange={handleChange} name="status" className="p-2 col-span-9 rounded border border-gray-300 focus:outline-none">
                        <option value="0">Draft</option>
                        <option value="1">Done</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-100 text-blue-700 font-bold p-2 rounded-md cursor-pointer">Add Task</button>
            </form>
        </div>
    )
}

export default TaskCreate;