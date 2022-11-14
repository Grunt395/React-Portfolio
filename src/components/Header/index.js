import React from "react";

import "./style.css"

function Header(props) {
    return (
        <header className="header-container">
            <h1>Grant Lewandowski Portfolio</h1>
            <img src="https://images.unsplash.com/photo-1667346697446-139e30b75c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"></img>
            {
            props.children
        } </header>
    );
}

export default Header;
