import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Catagory/Category/Category";
import Home from "../pages/Home/home/Home";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import News from "../pages/News/News/News";
import Profile from "../pages/Others/Profile/Profile";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:8000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:8000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])