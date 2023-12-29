import React from "react";

import { Link } from "react-router-dom";
export default function NotFound({message,linkRoute,linkText}){

    return <div className="container">
            "Not Found"
        <Link to="/">Go to HomePage</Link>
    </div>
}

