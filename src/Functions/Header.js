import React from "react";

function Header(head){
    return(
        <div className="header">
            <h1>{head.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title : "To do list"
}
export default Header;