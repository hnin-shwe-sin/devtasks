import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from 'react'

function Layout() {
    const [tasks, setTask] = useState([{ id: 1, title: 'task title 1', desc: 'The useParams hook is a built-in feature of React Router that extracts dynamic parameters from the current URL path. It returns an object where the keys match the parameter names specified in your route definitions, and the values represent the actual segments from the active' }]);
    return (
        <div>
            <Navbar />
            <Outlet context={{ tasks, setTask }} />
        </div>
    )
}

export default Layout