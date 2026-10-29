import { NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function Task() {
    const { tasks } = useOutletContext();
    console.log(tasks);

    return (
        <div className="task-content p-5">
            <NavLink to="/tasks/create" className="bg-blue-400 rounded-md text-white font-bold p-2 cursor-pointer">Create</NavLink>

            <div className="task_list mt-5">
                <table className="w-full rounded-sm overflow-scroll">
                    <thead className="bg-gray-400 uppercase text-white">
                        <tr>
                            <th className="col p-2">No</th>
                            <th className="col p-2">Title</th>
                            <th className="col p-2">Description</th>
                            <th className="col p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-center bg-gray-500 text-white">
                        {tasks.map((task) =>
                            <tr key={task.id}>
                                <td className="p-2">{task.id}</td>
                                <td className="p-2">{task.title}</td>
                                <td className="p-2">{task.desc}</td>
                                <td className="p-2 flex gap-2 w-4">
                                    <a href="#">View</a>
                                    <a href="#">Edit</a>
                                    <a href="#">Delete</a>
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