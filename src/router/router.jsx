//import { Outlet } from "react-router-dom";
import NowPlayingMovie from "../component/NowPlayingMovie";
import Layout from "../layout/Layout";
import Login from "../app/auth/Login";
import SignUp from "../app/auth/Signup";
import AboutUs from "../app/auth/AboutUs"; 
import PopularMovie from "../component/PopularMovie";
const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <NowPlayingMovie/>
            }
        ]
    },
        {
            path: '/popular',
            element: <PopularMovie/>
        },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/aboutus",
        element: <AboutUs/>
    }
]

export default ROUTES;
