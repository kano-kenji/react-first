import React, {Component} from 'react';
import Logo from "./Logo";
import MenuItem from "./MenuItem";

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

function Header(props) {
    return (
        <div className="header">
            {/*lection 2 start: transfer variables to components*/}
            {props.version}
            <ul>
                <li key='1'>{props.menu1[0]}</li>
                <li key='2'>{props.menu1[1]}</li>
                <li key='3'>{props.menu1[2]}</li>
            </ul>

            <hr/>

            <ul>
                {props.menu1.map(el => <li key={el}>{el}</li>)}
            </ul>

            <hr />
            {/*Use menuItem component*/}
            <ul>
                {props.menu1.map(el => <MenuItem key={el} item={el}/>)}
            </ul>

            {/*lection 2 end*/}

            <Logo />
            <TopMenu />
        </div>
    );
}

export default Header;
