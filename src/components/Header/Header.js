import React from 'react';
import MenuItem from "./MenuItem";
import Logo from "../../logo.svg";

function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="web site Logo" />
                <h1>Header</h1>
                <p>Some description for this web site.</p>
            </div>

            <div className="topnav">
                {props.topMenu.map(el => <MenuItem key={el} item={el} />)}
            </div>
        </div>
    );
}

export default Header;
