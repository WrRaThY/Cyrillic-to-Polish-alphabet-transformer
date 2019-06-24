import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faCheckSquare, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./App.scss";


library.add(faPencilAlt, faCheckSquare);

class App extends Component {
    state = {
        ruInput: "",
        plOutput: ""
    };

    render () {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="transformerTitle">Russian to Polish pronunciation transformer</h1>
                    </div>
                    {/*add space here*/}
                    <div className="row">
                        <div className="col">
                            <div className="form-group shadow-textarea">
                                <FontAwesomeIcon
                                    icon={faPencilAlt} color="orange"
                                    size={"3x"}
                                /> <label className="taTitle" htmlFor="russian-text">Russian</label>
                                <textarea
                                    id="russian-text"
                                    className="form-control z-depth-1"
                                    onKeyUp={this.transformThat}
                                    placeholder="Russian goes here"
                                />

                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group shadow-textarea">
                                <FontAwesomeIcon
                                    icon={faCheckSquare} color="green"
                                    size={"3x"}
                                /> <label className="taTitle" htmlFor="polish-text">A'la Polish</label>
                                <textarea
                                    id="polish-text"
                                    className="md-textarea form-control"
                                    contentEditable={false}
                                    value={this.state.plOutput}
                                    readOnly={true}
                                    placeholder="something actually readable will be here"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <h4 className="translation">And if Russian confuses you, google eagerly provides the
                            <a href={this.buildGoogleTranslateUrl()} target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-blue">
                                    translation <FontAwesomeIcon
                                    size="2x"
                                    color="white"
                                    icon={faLanguage}
                                />

                                </button>
                            </a>
                        </h4>
                    </div>

                    <div className="imageDiv">
                        <img src={process.env.PUBLIC_URL + '/bumblebee.png'} alt="bumblebeeeeeee" />
                    </div>


                </div>
                <footer className="page-footer font-small blue pt-4">
                    <div className="container-fluid text-center text-md-left">

                        <div className="row">

                            <div className="col-md-6 mt-md-0 mt-3">

                                <h5 className="text-uppercase">Footer Content</h5>
                                <p>Someone told me that I need to have a footer, so here it is</p>
                                <p>I still have no idea what to write tho :)</p>

                            </div>

                        </div>

                    </div>

                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://wrrathy.github.io" target="_blank" rel="noopener noreferrer"> Radosław Domański</a>
                    </div>
                </footer>
            </div>
        );
    }

    transformThat = (event) => {
        this.setState({ ruInput: event.currentTarget.value });

        let output = this.polishifyAllContent(this.state.ruInput);
        this.setState({ plOutput: output })
    };

    polishifyAllContent = (input) => {
        if (!input) {
            return "";
        }

        let result = "";
        input.split('').forEach(letter => {
            result += this.polishifyLetter(letter);
        });

        return result;
    };

    buildGoogleTranslateUrl = () => {
        let notEncodedUrl = "https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text=" + this.state.ruInput;
        return encodeURI(notEncodedUrl);
    };

    polishifyLetter = (letter) => {
        switch (letter) {
            case 'A':
            case 'a':
                return "a";
            case 'Б':
            case 'б':
                return "b";
            case 'В':
            case 'в':
                return "w";
            case 'Г':
            case 'г':
                return "g";
            case 'Д':
            case 'д':
                return "d";
            case 'Е':
            case 'е':
                return "je";
            case 'Ё':
            case 'ё':
                return "jo";
            case 'Ж':
            case 'ж':
                return "ż";
            case 'З':
            case 'з':
                return "z";
            case 'И':
            case 'и':
                return "i";
            case 'Й':
            case 'й':
                return "i";
            case 'К':
            case 'к':
                return "k";
            case 'Л':
            case 'л':
                return "l";
            case 'М':
            case 'м':
                return "m";
            case 'Н':
            case 'н':
                return "n";
            case 'О':
            case 'о':
                return "o";
            case 'П':
            case 'п':
                return "p";
            case 'Р':
            case 'р':
                return "r";
            case 'С':
            case 'с':
                return "s";
            case 'Т':
            case 'т':
                return "t";
            case 'У':
            case 'у':
                return "u";
            case 'Ф':
            case 'ф':
                return "f";
            case 'Х':
            case 'х':
            case 'x':
            case 'X':
                return "h";
            case 'Ц':
            case 'ц':
                return "c";
            case 'Ч':
            case 'ч':
                return "cz";
            case 'Ш':
            case 'ш':
                return "sz";
            case 'Щ':
            case 'щ':
                return "sia";
            case 'Ы':
            case 'ы':
                return "y";
            case 'Э':
            case 'э':
                return "e";
            case 'Ю':
            case 'ю':
                return "ju";
            case 'Я':
            case 'я':
                return "ja";
            case 'Ъ':
            case 'ъ':
                return "!";
            case 'Ь':
            case 'ь':
                return "`";
            default:
                return letter;
        }
    };
}

export default App;
