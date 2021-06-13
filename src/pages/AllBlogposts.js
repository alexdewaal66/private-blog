import React, {useState} from 'react';
import {Link} from "react-router-dom";
import page from "./page.module.css";
import json from "../data/posts.json";
import {now, useConditionalEffect} from "../helpers/utils";


export default function AllBlogposts() {
    const [data, setData] = useState(null);

    function handleClickNext() {
        // history.push("/afspraak-maken");
    }

    function fetchData() {
        console.log(now(), 'in fetchData()');
        console.log(`json:`, json);
        setData(json);
    }

    useConditionalEffect(fetchData, json);

    return (
        <div className={page.container}>
            <h1>
                Alle posts:
            </h1>
            {data
                ? (
                    <>
                        {/*Geladen: {(data?.length)} stuks*/}
                        {data.map((item) => {
                                return (
                                    <div
                                        className={page.summary}
                                        key={item.id}
                                    >
                                        <h3 className={page.title}>

                                            <Link
                                                to={{
                                                    pathname: `/blog/${item.id}`,
                                                    state: {item: item}
                                                }}
                                            >
                                                #{item.id} -{item.title}
                                            </Link>

                                        </h3>
                                    </div>
                                )
                            }
                        )}
                    </>
                )
                : (
                    <>
                        Bezig met laden...<br/>
                    </>
                )
            }

            <button type="button" onClick={handleClickNext}>
                Next
            </button>
        </div>
    );
};
