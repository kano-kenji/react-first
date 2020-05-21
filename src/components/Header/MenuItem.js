import React, {Component} from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        // if don't use arrow function, need to use this method with 'this' in callback
        // this.transferItemName = this.transferItemName.bind(this);
    }

    //this method with arrow function is a method syntax's fields of classes
    handleItem = (e) => {
        //this method return false for clicking by links tag
        this.props.attempt(this.props.item);
        e.preventDefault();
    }

    render() {
        const url = (this.props.item === "Home") ? "/" : "/" + this.props.item.toLowerCase().trim().replace(" ", "-");
        return(
            <a className='menu-item' href={url} onClick={this.handleItem}>
                {this.props.item}
            </a>
        )
    }
}

// function MenuItem(props) {
//     const transferItemName = () => {
//         props.attempt(props.item);
//     }
//     const url = (props.item === "Home") ? "/" : "/" + props.item.toLowerCase().trim().replace(" ", "-");
//     return (
//         <a className='menu-item' href={url} onClick={transferItemName}>
//             {props.item}
//         </a>
//     );
// }

export default MenuItem;
