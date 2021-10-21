import React from "react";
import ReactDOM from "react-dom";
import {SignOut} from "../App";

function Logout() {
    SignOut()
    return (
        <h1>Logging Out
        </h1>
    );
}

export default Logout;