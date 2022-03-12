import React from "react";
import { Outlet, Link } from "react-router-dom";
let randNum = Math.trunc(Math.random()*10000)
export default function Random() {
    
    return (
        <div className="App-header">
            <nav>
                <Link to={`/randomizer/${randNum}`}>{randNum}</Link>
            </nav>
            <Outlet />
        </div>
    )
};

export {randNum};
