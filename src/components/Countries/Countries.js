import React, {Component} from 'react';

class Countries extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.attempt(event.target.value);
    }

    render() {
        return(
            <div className="select-block">
                <select value={this.props.value} onChange={this.handleChange}>
                    {this.props.countries.map((country, key) =>
                        <option value={country} key={key}>
                            {country}
                        </option>
                    )}
                </select>
            </div>
        )
    }
}

export default Countries;