import React from 'react';
import {NavLink} from "react-router-dom";
import tooltip from "./tooltip.module.css";
import topmenu from "./TopMenu.module.css";
import {cx} from "../helpers/utils"

function TopMenu({isAuthenticated}) {
    return (
        <nav>
            <div className={cx(tooltip.container, topmenu.navContainer)}>
                <h4>Private Blogs</h4>
                <div className={tooltip.text}>
                    isAuthenticated = {isAuthenticated.toString()}
                </div>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName={topmenu.activeLink}>Home</NavLink>
                    </li>

                    {!isAuthenticated && (
                        <li>
                            <NavLink to="/login" activeClassName={topmenu.activeLink}>Login</NavLink>
                        </li>
                    )}
                    {isAuthenticated && (
                        <>
                            <li>
                                <NavLink to="/blogposts" activeClassName={topmenu.activeLink}>Alle posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/logout" activeClassName={topmenu.activeLink}>Logout</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;