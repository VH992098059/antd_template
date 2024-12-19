import "./UserLayout.scss";
import React from "react";
import Register from "../../page/Register/register.tsx";

const UserLayout:React.FC = () => {
    return (
        <div className="UserLayout">
            {/*<Login/>*/}
            <Register/>
        </div>
    )
}
export default UserLayout;
