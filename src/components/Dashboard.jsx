export default function Dashboard() {
    return (
        <div className="main-content grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card rounded-xl p-5 shadow-sm">
                <h5 className="text-xs font-bold text-gray-500">Total Tasks</h5>
                <p className="text-2xl font-bold">15</p>
            </div>

            <div className="card rounded-xl p-5 shadow-sm">
                <h5 className="text-xs font-bold text-gray-500">In Progress</h5>
                <p className="text-2xl font-bold">5</p>
            </div>

            <div className="card rounded-xl p-5 shadow-sm">
                <h5 className="text-xs font-bold text-gray-500">Completed</h5>
                <p className="text-2xl font-bold">10</p>
            </div>
        </div>
    );
}