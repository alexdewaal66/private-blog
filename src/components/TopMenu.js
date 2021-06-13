import React from 'react';
import {NavLink} from "react-router-dom";
import tooltip from "./tooltip.module.css";
import topmenu from "./TopMenu.module.css";

function TopMenu({isAuthenticated}) {
    return (
        <nav>
            <div className={topmenu.navContainer}>
                <h4>Private Blogs</h4>
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