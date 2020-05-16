import React, {Component} from 'react';

function MenuItem(props) {
    return (
        <li className='menu-item'>
            {props.item}
        </li>
    );
}

export default MenuItem;
