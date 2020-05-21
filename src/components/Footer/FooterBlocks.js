import React, {Component} from 'react';

class FooterBlocks extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="column">
                {this.props.item.map((el, key) =>
                    <p key={key} onClick={()=>this.props.attempt(el)}>
                        {el}
                    </p>
                )}
            </div>
        )
    }
}

// function FooterBlocks(props) {
//     return (
//         <div className="column">
//             {props.item.map((el, key) =>
//                 <p key={key} onClick={()=>props.attempt(el)}>
//                     {el}
//                 </p>
//             )}
//         </div>
//     );
// }

export default FooterBlocks;
