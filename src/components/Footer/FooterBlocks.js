import React from 'react';

function FooterBlocks(props) {
    return (
        <div className="column">
            {props.item.map((el, key) =>
                <p key={key}>
                    {el}
                </p>
            )}
        </div>
    );
}

export default FooterBlocks;
