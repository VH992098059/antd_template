import {createBrowserRouter, Navigate} from "react-router-dom";
import HomeLayout from "../layout/Home/HomeLayout.tsx";
import ContentBody from "../page/Home/Content/ContentBody.tsx";
import ActivityPage from "../page/Activity/ActivityPage.tsx";
import UserLayout from "../layout/Login/UserLayout.tsx";
import Not_found from "../page/404/not_found.tsx";
import Login from "../page/Login/login.tsx";
import Register from "../page/Register/register.tsx";

const router=createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout/>,
        children:[
            {
                path: "/home",
                element:<ContentBody/>,
            },
            {
                path: "activity",
                element:<ActivityPage/>
            },
            {
                path: "/",
                element:<Navigate to={"/home"}/>
            }
        ]
    },
    {
        path:"/userLayout",
        element: <UserLayout/>,
        children:[
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            }
        ]

    },
    {
        path: "*",
        element:<Not_found/>
    }

])
export default router;