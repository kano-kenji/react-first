import React from 'react';
import FooterBlocks from "./FooterBlocks";

function Footer(props) {
    {/*callback*/}
    const change = (e)=> props.attempt(e.target.value);
    return (
        <div className="footer">
            {/*callback*/}
            {/*<input type="text" onChange={(e) => props.attempt(e.target.value)} />*/}
            <input type="text" onChange={change} />
            {/*callback*/}
            <button onClick={() => props.attempt('Carp')}>Carp</button>

            {props.footerMenu.map(el => <FooterBlocks key={el} item={el}/>)}
            <p className="copyright">{props.copyright}</p>
        </div>
    );
}

export default Footer;
