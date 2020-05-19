import React from 'react';
import MenuItem from "./MenuItem";
import Logo from "../../logo.svg";

function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="ReactJS/Redux" />
                <h1>ReactJS/Redux</h1>
                <p>Here is first part of the ReactJS/Redux course</p>
            </div>

            <div className="topnav">
                {props.topMenu.map(el => <MenuItem key={el} item={el} />)}
            </div>
        </div>
    );
}

export default Header;
