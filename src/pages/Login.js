import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import page from "./page.module.css";

export default function Login({setAuthenticated}) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        // send to server here
        if (true || (email === "ik" && password === "ik")) {
            console.log("INGELOGD!");
            setAuthenticated(true);
            history.push('/blogposts');
        } else {
            console.log("Helaas");
        }
    }

    return (
        <div className={page.container}>
            <form className={page.formTable}>
                <div className={page.formBody}>
                    <div className={page.formRow}>
                        <label className={page.formCell}>
                            Email
                        </label>
                        <input
                            className={page.formCell}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={page.formRow}>
                        <label className={page.formCell}>
                            Password
                        </label>
                        <input
                            className={page.formCell}
                            type="text"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className={page.formRow}>
                    <span className={page.formCell}>
                        &nbsp;
                    </span>
                        <button onClick={handleSubmit} className={page.formCell}>
                            Log in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
