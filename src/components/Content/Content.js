import React, {Component} from 'react';
import Countries from "../Countries/Countries";


class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            country: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleCountry(country){
        this.setState({
            country: country
        })
    }

    render() {
        return(
            <div className="row">
                <div className="column side">
                    <h2>Side</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                </div>
                <div className="column middle">
                    <h2>Main Content</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.
                        Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
                        Praesent scelerisque tortor sed accumsan convallis.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.
                        Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
                        Praesent scelerisque tortor sed accumsan convallis.
                    </p>

                    <h3>setState in work</h3>
                    <div className="block">
                        <div className="req-box">
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </div>
                        <div className="res-box">{this.state.value}</div>
                    </div>

                    <h3>setState with callback in work</h3>
                    <Countries countries={this.props.countries} attempt={this.handleCountry}/>
                    <div className="res-select">{this.state.country}</div>

                </div>
                <div className="column side">
                    <h2>Side</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                </div>
            </div>
        )
    }
}


// function Content(props) {
//
//     const transferText = (event) => {
//         props.attempt(event.target.value);
//     }
//
//     return (
//         <div className="row">
//             <div className="column side">
//                 <h2>Side</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
//             </div>
//             <div className="column middle">
//                 <h2>Main Content</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.
//                     Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
//                     Praesent scelerisque tortor sed accumsan convallis.
//                 </p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.
//                     Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
//                     Praesent scelerisque tortor sed accumsan convallis.
//                 </p>
//                 <p>
//                     <input type="text" onChange={transferText}/>
//                 </p>
//                 <p>
//                     <select onChange={transferText}>
//                         <option value="">Select Value</option>
//                         {props.countries.map((country, key) =>
//                             <option value={country} key={key}>
//                                 {country}
//                             </option>
//                         )}
//                     </select>
//                 </p>
//                 <div id="text-area">{props.text}</div>
//             </div>
//             <div className="column side">
//                 <h2>Side</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
//             </div>
//         </div>
//     );
// }

export default Content;
