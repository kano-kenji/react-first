import React from 'react';

function MenuItem(props) {
    const transferItemName = () => {
        props.attempt(props.item);
    }
    // const url = (props.item === "Home") ? "/" : "/" + props.item.toLowerCase().trim().replace(" ", "-");
    return (
        // <a className='menu-item' href={url} onClick={viewLink}>
        <a className='menu-item' href="#" onClick={transferItemName}>
            {props.item}
        </a>
    );
}

export default MenuItem;
