import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from 'react'

function Layout() {
    const [tasks, setTask] = useState([{ id: 1, title: 'task title 1', desc: 'task desc 1' }]);
    return (
        <div>
            <Navbar />
            <Outlet context={{ tasks, setTask }} />
        </div>
    )
}

export default Layout