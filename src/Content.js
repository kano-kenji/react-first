import React, {Component} from 'react';

class ContentRightBlock extends Component{
    render() {
        return (
            <div className="right-side">
                    asdasdad fad, sd as d
                    asd asd  adsdasda asd
                    asdasd asdasd, asdasd
                    asdsa asdas asd as
                    asdasd, as das ds  sd.
            </div>
        );
    }
}

class ContentCentralBlock extends Component{
    render() {
        return (
            <div className="main">
                <h1>asdasdasdas</h1>
                <p>asdda asdads asd ad asd as dasd asd asd</p>
                <p>asdsad asdasd asdasdasdasffas fasfas fsafasfasfas
                asfasfasfasfsafasfasfsa asfasfasf asfasfasfasf safasf
                asfasfasfasf asfasf asf asfasf asf a sfasfas fas fasfa.</p>
                <p>xcvvx xcvxv xcv f ds v xcv d gds b b xcbxb
                xbcb cb  bcbx b cb b xcb xcb xc bxcb x
                xcxcb xcbx cb xcbxcb xcbxcbxcb xcbxc bx cbxcbxbbc.</p>
            </div>
        );
    }
}

class ContentLeftBlock extends Component{
    render() {
        return (
            <div className="left-side">
                <ul>
                    <li>Left sub 1</li>
                    <li>Left sub 2</li>
                    <li>Left sub 3</li>
                    <li>Left sub 4</li>
                    <li>Left sub 5</li>
                </ul>
            </div>
        );
    }
}

function Content() {
    return (
        <div className="App-content">
            <ContentLeftBlock />
            <ContentCentralBlock />
            <ContentRightBlock />
        </div>
    );
}

export default Content;
