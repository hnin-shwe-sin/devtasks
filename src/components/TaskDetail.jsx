import { useParams, useOutletContext } from "react-router-dom"

export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useOutletContext();

    const task = tasks.find(task => task.id === Number(id));

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-3">{task.title}</h1>
            <p className="text-xl">{task.desc}</p>
        </div>
    )
}