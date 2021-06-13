import React from 'react';
import {useLocation} from "react-router-dom";
import page from "./page.module.css";
import {Error} from "../components/Error";

export default function Blogpost() {
    const location = useLocation();
    const blogItem = location.state.item;

    return (
        <div className={page.container}>
            {/*id = {blogItem.id}*/}
            {blogItem
                ? (<>
                    <h3 className={page.title}>{blogItem.title}</h3>
                    <p>
                        {blogItem.content}
                    </p>
                </>)
                : (<Error>
                    <p>Three things are certain:</p>
                    <p>Death, taxes and lost data.</p>
                    <p>Guess which has occurred.</p>
                </Error>)
            }
        </div>
    );
}
