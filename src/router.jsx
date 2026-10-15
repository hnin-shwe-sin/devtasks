import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Task from "./components/Task";
import TaskDetail from "./components/TaskDetail";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/tasks',
                element: <Task />
            },
            {
                path: '/tasks/:id',
                element: <TaskDetail />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;