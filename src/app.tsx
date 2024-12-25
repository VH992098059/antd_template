import {ConfigProvider} from "antd";
import {RouterProvider} from "react-router-dom";
import router from "./router/router.tsx";

export const App =()=>{
    return (
        <ConfigProvider>
            <RouterProvider router={router}/>
        </ConfigProvider>
    )
}
