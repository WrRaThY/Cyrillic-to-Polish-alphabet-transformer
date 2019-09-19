import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faCheckSquare, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./App.scss";
import TransliterationHelper from "../services/TransliterationHelper";

library.add(faPencilAlt, faCheckSquare);

const DONE_TYPING_INTERVAL = 500;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typingTimer: null,
            ruInput: this.getRuInput(window.location.search),
            plOutput: TransliterationHelper.transformString(this.getRuInput(window.location.search))
        };

        window.onpopstate = this.onBackButtonClicked;
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
                                    onKeyUp={this.handleRussianTyping}
                                    placeholder="Russian goes here"
                                    defaultValue={this.state.ruInput}
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

    onBackButtonClicked = event => {
        if(event.state){
            const ruInput = this.getRuInput(event.state);
            this.transformThat(ruInput);
            document.getElementById("russian-text").value = ruInput;
        }
    };

    handleRussianTyping = event => {
        let ruInput = event.currentTarget.value;

        clearTimeout(this.state.typingTimer);
        let typingTimer = setTimeout(() => this.transformThat(ruInput), DONE_TYPING_INTERVAL);

        this.setState({ typingTimer})
    };

    transformThat = (ruInput) => {
        let plOutput = TransliterationHelper.transformString(ruInput);
        this.setRuInput(ruInput);
        this.setState({ plOutput, ruInput });
    };

    buildGoogleTranslateUrl = () => {
        let notEncodedUrl = "https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text=" + this.state.ruInput;
        return encodeURI(notEncodedUrl);
    };

    getRuInput = data => {
        const searchParams = new URLSearchParams(data);
        return searchParams.get('ruInput') || '';
    };

    setRuInput = (newRuInput = "") => {
        if (newRuInput === this.state.ruInput){
            return;
        }

        const searchParams = new URLSearchParams();
        searchParams.set("ruInput", newRuInput);
        window.history.pushState(searchParams.toString(), "Search text update", "?" + searchParams.toString());
    };
}

export default App;
