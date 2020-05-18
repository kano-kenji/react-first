import React from 'react';

function MenuItem(props) {
    return (
        <a className='menu-item' href="#">
            {props.item}
        </a>
    );
}

export default MenuItem;
