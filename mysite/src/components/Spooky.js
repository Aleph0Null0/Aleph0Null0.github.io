import React from "react";
import { useParams } from "react-router-dom";
import { randNum } from "./Random";

export default function Spooky() {
    let params = useParams();

    console.log(randNum);
    console.log("a thing");
    return (
        <div>
            randNum: {params.randNum}
        </div>
    )
};


