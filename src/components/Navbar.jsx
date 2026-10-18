import { NavLink, useLocation } from "react-router-dom"

export default function Navbar() {

    return (
        <header className="p-5 mb-3">
            <div className="mini-header flex justify-between items-center">
                <div className="logo">
                    <h3 className="font-bold text-xl">DevTask</h3>
                </div>
                <div className="active-tab p-1 font-bold text-blue-700 bg-blue-200 rounded-md text-xs">
                    {useLocation().pathname === '/' ? 'Dashboard' : 'Task'}
                </div>
            </div>
            <div className="main-header mt-7 grid grid-cols-2">
                <NavLink className="nav-link shadow-lg" to="/">Dashboard</NavLink>
                <NavLink className="nav-link shadow-lg" to="/tasks">Tasks</NavLink>
            </div>
        </header>
    )
}