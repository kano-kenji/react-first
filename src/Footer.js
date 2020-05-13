import React, {Component} from 'react';

const footerMenu = [
    "Block 1",
    "Block 2",
    "Block 3",
    "Block 4",
];

class FooterMenu extends Component{
    render() {
        return(
            <div className="footer">
                {footerMenu.map((value, index)=>{
                    return <span className="block" key={index}><FooterMenuBlocks block={value}/></span>
                })}
            </div>
        );
    }
}

class FooterMenuBlocks extends Component{
    render() {
        return this.props.block;
    }
}

function Footer() {
    return (
        <FooterMenu />
    );
}

export default Footer;
