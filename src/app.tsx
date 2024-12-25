import {ConfigProvider} from "antd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routesLy} from "./router/routes.tsx";

export const App =()=>{
    return (
        <ConfigProvider>
            <RouterProvider router={createBrowserRouter(routesLy)}/>
           {/* <HomeLayout/>*/}
        </ConfigProvider>
    )
}
