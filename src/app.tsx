import React, { useEffect, useState } from 'react';
import {ConfigProvider} from "antd";
import {RouterProvider} from "react-router-dom";
import router from "./router/router.tsx";


const App: React.FC = () => {
    
    return (
        <ConfigProvider>
            <RouterProvider router={router}/>


        </ConfigProvider>
    )
}

export default App;
