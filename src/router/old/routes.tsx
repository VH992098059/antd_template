
import {buildRoutes, RouteConfig} from "./routesUtils.tsx";
import {lazy} from "react";
import {Navigate} from "react-router-dom";


const RouterLayout: RouteConfig[] = [
    {
        path:"",
        element: lazy(() => import("../../layout/Home/HomeLayout.tsx")),
        children: [
            {
                path: "/home",
                element: lazy(() => import("../../page/Home/Content/ContentBody.tsx")),

            },
            {
                path:"/",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                element:lazy(()=>import(<Navigate to={"/home"}/>))
            },
            {
                path:'/activity',
                element:lazy(()=>import("../../page/Activity/ActivityPage.tsx"))
            }
        ],
    },
    {
        path: "*",
        element: lazy(() => import("../../page/404/not_found.tsx"))
    },
    {
        element: lazy(() => import("../../layout/Login/UserLayout.tsx")),
        children:[
            {
                path: "/login",
                element:lazy(()=>import("../../page/Login/login.tsx"))
            },
            {
                path:"/register",
                element:lazy(()=>import("../../page/Register/register.tsx"))
            }
        ]
    }
];
export const routesLy=buildRoutes(RouterLayout)
