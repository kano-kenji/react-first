import React, {Component} from 'react';
import FooterBlocks from "./FooterBlocks";

function Footer(props) {
    return (
        <div className="footer">
            <h3>useState in work (also here is use a callback function)</h3>
            {props.footerMenu.map(el => <FooterBlocks key={el} item={el} attempt={props.attempt}/>)}
            <p className="copyright">{props.copyright}</p>
        </div>
    );
}

// class Footer extends Component{
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return(
//             <div className="footer">
//                 <h3>useState in work</h3>
//                 {this.props.footerMenu.map(el => <FooterBlocks key={el} item={el} attempt={this.props.attempt}/>)}
//                 <p className="copyright">{this.props.copyright}</p>
//             </div>
//         )
//     }
// }

export default Footer;
