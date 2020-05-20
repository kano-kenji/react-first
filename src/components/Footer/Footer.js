import React from 'react';
import FooterBlocks from "./FooterBlocks";

function Footer(props) {
    return (
        <div className="footer">
            {props.footerMenu.map(el => <FooterBlocks key={el} item={el} attempt={props.attempt}/>)}
            <p className="copyright">{props.copyright}</p>
        </div>
    );
}

export default Footer;
