import React, {useState} from 'react';

function FooterBlocks(props) {

    const [item, setItem] = useState();

    return (
        <div className="column">
            {props.item.map((el, key) =>
                <p key={key} onClick={()=>setItem(props.attempt(el))}>
                    {el}
                </p>
            )}
        </div>
    );
}

// class FooterBlocks extends Component{
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return(
//             <div className="column">
//                 {this.props.item.map((el, key) =>
//                     <p key={key} onClick={()=>this.props.attempt(el)}>
//                         {el}
//                     </p>
//                 )}
//             </div>
//         )
//     }
// }

export default FooterBlocks;
