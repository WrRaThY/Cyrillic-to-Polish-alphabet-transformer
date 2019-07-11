import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faCheckSquare, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./App.scss";
import TransliterationHelper from "../services/TransliterationHelper";


library.add(faPencilAlt, faCheckSquare);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ruInput: "",
            plOutput: ""
        };
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="transformerTitle">Wypowiedz to!</h1>
                    </div>
                    <div className="row justify-content-center">
                        <h3 className="transformerSubtitle">Russian to Polish pronunciation transformer</h3>
                    </div>
                    {/*add space here*/}
                    <div className="row">
                        <div className="col">
                            <div className="form-group shadow-textarea">
                                <FontAwesomeIcon
                                    icon={faPencilAlt} color="orange"
                                    size={"1x"}
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
                                    size={"1x"}
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
                <footer className="page-footer font-small black">
                    <div className="py-2 footer-copyright text-center">
                        <span className="">© 2019 Copyright:
                            <a href="https://wrrathy.github.io" target="_blank" rel="noopener noreferrer"> Radosław Domański</a>
                        </span>
                    </div>
                </footer>
            </div>
        );
    }

    transformThat = (event) => {
        this.setState({ ruInput: event.currentTarget.value });

        let output = TransliterationHelper.transformString(this.state.ruInput);
        this.setState({ plOutput: output })
    };

    buildGoogleTranslateUrl = () => {
        let notEncodedUrl = "https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text=" + this.state.ruInput;
        return encodeURI(notEncodedUrl);
    };
}

export default App;
