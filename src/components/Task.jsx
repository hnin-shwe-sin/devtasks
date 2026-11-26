import { Link, NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { taskView, taskEdit } from '../routes';
import axios from 'axios';

function Task() {
    const { tasks, setTasks } = useOutletContext();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/task/${id}`);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="task-content p-5">
            <NavLink to="/tasks/create" className="bg-blue-400 rounded-md text-white font-bold p-2 cursor-pointer">Create</NavLink>

            <div className="task_list mt-5">
                <table className="w-full rounded-sm table-auto">
                    <thead className="bg-gray-400 uppercase text-white">
                        <tr>
                            <th className="col p-2">No</th>
                            <th className="col p-2">Title</th>
                            <th className="col p-2">Description</th>
                            <th className="col p-2">Status</th>
                            <th className="col p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-center bg-gray-500 text-white">
                        {tasks.map((task, index) =>
                            <tr key={task.id}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{task.title}</td>
                                <td className="p-2">
                                    {task.description.length > 30 ? `${task.description.slice(0, 30)}...` : task.description}
                                </td>
                                <td className="p-2">{task.status == 1 ? 'Completed' : 'Draft'}</td>
                                <td className="p-2 flex gap-1">
                                    <Link to={taskView(task.id)}>View</Link>
                                    <Link to={taskEdit(task.id)}>Edit</Link>
                                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Task;