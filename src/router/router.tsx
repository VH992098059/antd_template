import {createBrowserRouter, Navigate} from "react-router-dom";
import HomeLayout from "../layout/Home/HomeLayout.tsx";
import ContentBody from "../page/Home/Content/ContentBody.tsx";
import ActivityPage from "../page/Activity/ActivityPage.tsx";
import UserLayout from "../layout/Login/UserLayout.tsx";
import Not_found from "../page/404/not_found.tsx";
import Login from "../page/Login/login.tsx";
import Register from "../page/Register/register.tsx";
import {lazyLoad} from "./lazyLoad.tsx";
import  ActivityTotalPage  from "../page/ActivityTotalPage/ActivityTotalPage.tsx";
import { SearchPage } from "../page/Search/SearchPage.tsx";
import { PrivateRoute } from "./privateRoute/PrivateRoute.tsx";
import { ProFile } from "../page/Account/profile/ProFile.tsx";


const router=createBrowserRouter([
    {
        path:"/",
        element:lazyLoad(<PrivateRoute><HomeLayout/></PrivateRoute>),
        children: [
            {
                path: "/home",
                element: lazyLoad(<ContentBody/>),
            },
            {
                path: "/home/activity",
                element: lazyLoad(<ActivityPage/>)
            },
            {
                path: "/",
                element: <Navigate to={"/home"}/>
            },
            {
                path: "/activity",
                element: lazyLoad(<ActivityTotalPage/>)

            },
            {
                path:"/search",
                element:lazyLoad(<SearchPage/>)
            },
            {
                path:"/account/profile",
                element:lazyLoad(<ProFile/>)
            }
        ]
    },
    {
        path:"/account",
        element: lazyLoad(<UserLayout/>),
        children:[
            {
                index:true,
                path: "login",
                element: lazyLoad(<Login/>)
            },
            {
                path: "register",
                element: lazyLoad(<Register/>)
            }
        ]

    },
    {
        path: "*",
        element:<Not_found/>
    }

])

export default router;
