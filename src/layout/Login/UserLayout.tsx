import "./UserLayout.scss";
import React from "react";
import {useLocation, useOutlet} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {LazyLoading} from "../../router/LazyLoading.tsx";
/* 登录组件 */
const UserLayout:React.FC = () => {
    const location = useLocation()
    const currentOutlet = useOutlet()
    return (
        <div className="UserLayout">
            <SwitchTransition mode="out-in">
                <CSSTransition timeout={300} key={location.key} classNames={"fade"} fallback={<LazyLoading/>}>
                    {currentOutlet}
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}
export default UserLayout;
