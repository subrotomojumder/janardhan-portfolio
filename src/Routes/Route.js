import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import MainPage from "../component/MainPage";
import Details from "../component/Projects/Details";
import Main from '../Layout/Main'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainPage></MainPage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/project/:id',
                element: <Details></Details>,
            }
        ]
    }
])