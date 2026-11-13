import { useState } from "react";
import { useOutletContext, useParams, Navigate, useNavigate } from "react-router-dom";
import { taskIndex } from "../routes";

function TaskEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { tasks, setTasks } = useOutletContext();

    const task = tasks.find((t) => t.id === Number(id));

    const [formData, setFormData] = useState(
        {
            title: task?.title ?? "",
            desc: task?.desc ?? ""
        }
    );

    if (!task) {
        return <Navigate to="*" replace />
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // [name]: value; => Computed Property Name
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTasks = tasks.map((task) => {
            if (task.id === Number(id)) {
                return {
                    ...task,
                    ...formData
                }// Object Spred Syntax (Object Spread Operator)
            } else {
                return task;
            }
        });

        setTasks(updatedTasks);
        navigate(taskIndex());
    };

    return (
        <div className="p-5">
            <form className="task-create-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="title">Task Title</label>
                    <input value={formData.title} onChange={handleChange} name="title" type="text" id="title" className="col-span-9 p-2 border border-gray-300 focus:outline-none rounded" />
                </div>
                <div className="grid grid-cols-12 form-input mb-5">
                    <label className="col-span-3" htmlFor="desc">Task Description</label>
                    <textarea value={formData.desc} onChange={handleChange} name="desc" className="p-2 col-span-9 rounded border border-gray-300 focus:outline-none" id="desc" rows="5"></textarea>
                </div>

                <button type="submit" className="bg-blue-100 text-blue-700 font-bold p-2 rounded-md cursor-pointer">Update Task</button>
            </form>
        </div>
    );
}

export default TaskEdit; 