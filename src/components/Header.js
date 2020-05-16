import React, {Component} from 'react';
import Logo from "./Logo";

const menu = [
    "TopMenu Item 1",
    "TopMenu Item 2",
    "TopMenu Item 3",
    "TopMenu Item 4"
];

class TopMenu extends Component{
    render() {
        return (
            <div className="header-right">
                {menu.map((value, index)=>{
                    return <span key={index}><TopMenuItems item={value} /></span>
                })}
            </div>
        );
    }
}

class TopMenuItems extends Component{
    render() {
        const url = "/" + this.props.item.toLowerCase().trim().replace(" ", "-");
        return (
            <a href={url}>{this.props.item}</a>
        );
    }
}

function Header() {
    return (
        <div className="header">
            <Logo />
            <TopMenu />
        </div>
    );
}

export default Header;
