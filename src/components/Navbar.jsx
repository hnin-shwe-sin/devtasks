import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="p-5">
            <div className="mini-header flex justify-between">
                <div className="logo">
                    <h3 className="text-white font-bold text-xl">DevTask</h3>
                </div>
                <div className="active-tab bg-[#001121] rounded-md text-[#3a83f7] text-xs p-1 font-semibold">
                    Dashboard
                </div>
            </div>
            <div className="main-header mt-7 grid grid-cols-2">
                <NavLink className="nav-link" to="/">Dashboard</NavLink>
                <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
            </div>
        </header>
    )
}