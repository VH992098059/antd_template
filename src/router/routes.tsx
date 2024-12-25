
import {buildRoutes, RouteConfig} from "./routesUtils.tsx";
import {lazy} from "react";

const RouterLayout:RouteConfig[]=[
    {
        element: lazy(() => import("../layout/Home/HomeLayout.tsx")),
        children:[
            {
                path: "/",
                element:lazy(()=>import("../page/Home/Content/ContentBody.tsx"))
            }
        ]
    }
]
export const routesLy=buildRoutes(RouterLayout)
