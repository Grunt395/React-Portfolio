import React from "react";

const PageContent = (props) => {
    return <div style={{paddingRight: "1rem", paddingLeft: "1rem"}}>
        {props.children}
    </div>
}

export default PageContent;