import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from '../page/contact/Contact.page';
import Home from '../page/home/Home.page';

import { getTodoData, getTodoDataByid } from '../api/get.api';
import AppLayout from '../components/layout/AppLayout';
import TodoDetail from '../components/ui/todo/TodoDetail';
import ErrorBoundary from '../page/error/Error.page';
import Todo from '../page/todo/Todo.page';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <ErrorBoundary />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/movies",
                    element: <Todo />,
                    loader: getTodoData
                },
                {
                    path: "/movies/:id",
                    element: <TodoDetail />,
                    loader:getTodoDataByid

                }
            ]
        },

    ])

    return <RouterProvider router={router} />;
}

export default Router
