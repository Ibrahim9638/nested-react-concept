import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users";
import Contact from "../pages/Contact";
import UserDetails from "../components/UserDetails/UserDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element:<Home/>
        },
        {
            path: '/about',
            element:<About/>
        },
        {
            path: '/users',
            loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
            element:<Users/>
        },
        {
            path: '/user/:userId',
            loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.userId}`),
            element:<UserDetails/>
        },
        {
            path: '/contact',
            element:<Contact/>
        }
    ],
  },
]);
