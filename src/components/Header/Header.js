import React, {Component} from 'react';
import MenuItem from "./MenuItem";
import Logo from "../../logo.svg";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            topMenu: props.topMenu,
            attempt: props.attempt
        }
    }

    render(){
        return(
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="ReactJS/Redux" />
                    <h1>ReactJS/Redux</h1>
                    <p>Home Works for first part of the ReactJS/Redux course</p>
                </div>
                <div className="topnav">
                    {this.state.topMenu.map(el => <MenuItem key={el} item={el} attempt={this.state.attempt}/>)}
                </div>
            </div>
        )
    }
}


// function Header(props) {
//
//     return (
//         <div className="header">
//             <div className="logo">
//                 <img src={Logo} alt="ReactJS/Redux" />
//                 <h1>ReactJS/Redux</h1>
//                 <p>Here is first part of the ReactJS/Redux course</p>
//             </div>
//             <div className="topnav">
//                 {props.topMenu.map(el => <MenuItem key={el} item={el} attempt={props.attempt}/>)}
//             </div>
//         </div>
//     );
// }

export default Header;
