import "./UserLayout.scss";
import React from "react";
import {Outlet} from "react-router-dom";

const UserLayout:React.FC = () => {
    return (
        <div className="UserLayout">
            <Outlet/>
        </div>
    )
}
export default UserLayout;
