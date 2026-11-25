import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { useState, useEffect } from 'react'
import axios from "axios";

function Layout() {
    const [tasks, setTasks] = useState([]);

    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks')
            .then(response => {
                setTasks(response.data);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false);
            })
    }, []);
    return (
        <div>
            <Navbar />
            <Outlet context={{ tasks, setTasks, isLoading }} />
        </div>
    )
}

export default Layout