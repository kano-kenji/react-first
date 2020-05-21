import React, {Component} from 'react';
import FooterBlocks from "./FooterBlocks";

class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                {this.props.footerMenu.map(el => <FooterBlocks key={el} item={el} attempt={this.props.attempt}/>)}
                <p className="copyright">{this.props.copyright}</p>
            </div>
        )
    }
}

// function Footer(props) {
//     return (
//         <div className="footer">
//             {props.footerMenu.map(el => <FooterBlocks key={el} item={el} attempt={props.attempt}/>)}
//             <p className="copyright">{props.copyright}</p>
//         </div>
//     );
// }

export default Footer;
