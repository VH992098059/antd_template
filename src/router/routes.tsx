
import {buildRoutes, RouteConfig} from "./routesUtils.tsx";
import {lazy} from "react";
import {Navigate} from "react-router-dom";


const RouterLayout: RouteConfig[] = [
    {
        element: lazy(() => import("../layout/Home/HomeLayout.tsx")),
        children: [
            {
                path: "/",
                element: lazy(() => import("../page/Home/Content/ContentBody.tsx"))
            },
            {
                path:"/home",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                element:lazy(()=>import(<Navigate to={"/"}/>))
            }
        ],
    },
    {
        path: "*",
        element: lazy(() => import("../page/404/not_found.tsx"))
    }
];
export const routesLy=buildRoutes(RouterLayout)
