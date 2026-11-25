import { useState } from "react";
import { useOutletContext, useParams, Navigate, useNavigate } from "react-router-dom";
import { taskIndex } from "../routes";
import axios from "axios";

function TaskEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { tasks, setTasks, isLoading } = useOutletContext();

    const task = tasks.find((t) => t.id === Number(id));

    const [formData, setFormData] = useState(
        {
            title: task?.title ?? "",
            description: task?.description ?? ""
        }
    );

    if (isLoading) {
        return <p>Loading Task...</p>
    }

    if (!task) {
        return <Navigate to="*" replace />
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // [name]: value; => Computed Property Name
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:8000/api/task/${id}`, formData);
            const updatedData = response.data;
            setTasks((prevTasks) =>
                prevTasks.map(task => task.id === updatedData.id ? updatedData : task)
            );
            navigate(taskIndex());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5">
            <form className="task-create-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="title">Task Title</label>
                    <input value={formData.title} onChange={handleChange} name="title" type="text" id="title" className="col-span-9 p-2 border border-gray-300 focus:outline-none rounded" />
                </div>
                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="description">Task Description</label>
                    <textarea value={formData.description} onChange={handleChange} name="description" className="p-2 col-span-9 rounded border border-gray-300 focus:outline-none" id="description" rows="5"></textarea>
                </div>

                <button type="submit" className="bg-blue-100 text-blue-700 font-bold p-2 rounded-md cursor-pointer">Update Task</button>
            </form>
        </div>
    );
}

export default TaskEdit; 