import HomeLayout from "../layout/Home/HomeLayout.tsx";
import ContentBody from "../page/Home/Content/ContentBody.tsx";
import {useRoutes} from "react-router-dom";

export const RouterLayout = ()=>{
    return useRoutes([
        {
            path: '/home',
            element: <HomeLayout/>,
            children: [
                {
                    path: '/',
                    element: <ContentBody/>,

                },
            ]
        }
    ])
}
