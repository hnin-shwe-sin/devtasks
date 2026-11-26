import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
    const { tasks } = useOutletContext();
    return (
        <div className="main-content grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card rounded-xl p-5 shadow-sm">
                <h5 className="text-xs font-bold text-gray-500">Total Tasks</h5>
                <p className="text-2xl font-bold">{tasks.length}</p>
            </div>

            <div className="card rounded-xl p-5 shadow-sm">
                <h5 className="text-xs font-bold text-gray-500">In Progress</h5>
                <p className="text-2xl font-bold">{count(tasks, 0)}</p>
            </div>

            <div className="card rounded-xl p-5 shadow-sm">
                <h5 className="text-xs font-bold text-gray-500">Completed</h5>
                <p className="text-2xl font-bold">{count(tasks, 1)}</p>
            </div>
        </div>
    );
}

function count(tasks, status) {
    return tasks.filter((task) => Number(task.status) === status).length;
}