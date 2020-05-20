import React from 'react';

function Content(props) {

    const transferText = (event) => {
        props.attempt(event.target.value);
    }

    return (
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
                <p>
                    <input type="text" onChange={transferText}/>
                </p>
                <p>
                    <select onChange={transferText}>
                        <option value="">Select Value</option>
                        {props.countries.map((country, key) =>
                            <option value={country} key={key}>
                                {country}
                            </option>
                        )}
                    </select>
                </p>
                <div id="text-area"></div>
            </div>
            <div className="column side">
                <h2>Side</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
        </div>
    );
}

export default Content;
