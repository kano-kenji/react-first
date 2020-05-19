import React from 'react';

function MenuItem(props) {
    console.log(window.location);
    const url = (props.item === "Home") ? "/" : "/" + props.item.toLowerCase().trim().replace(" ", "-");
    return (
        <a className='menu-item' href={url}>
            {props.item}
        </a>
    );
}

export default MenuItem;
