import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faPencilAlt, faCheckSquare);

class App extends Component {
    state = {
        plOutput: "",
        startTextAreaRowCount: 10
    };

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Enter russian on the left</h1>
                    <h1>And see something actually readable on the right</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="md-form amber-textarea active-amber-textarea-2">
                            <FontAwesomeIcon
                                icon={faPencilAlt} color="orange"
                            />
                            <textarea
                                id="russian-text"
                                className="md-textarea form-control"
                                rows={this.state.startTextAreaRowCount}
                                onKeyUp={this.transformThat}
                            />
                            <label htmlFor="russian-text">Russian goes here</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="md-form amber-textarea active-amber-textarea-2">
                            <FontAwesomeIcon
                                icon={faCheckSquare} color="green"
                            />
                            <textarea
                                id="polish-text"
                                className="md-textarea form-control"
                                rows={this.state.startTextAreaRowCount}
                                contentEditable={false}
                                value={this.state.plOutput}
                            />
                            <label htmlFor="polish-text">Polish comes out here</label>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

    transformThat = (event) => {
        let input = event.currentTarget.value;
        let output = this.polishifyAllContent(input);
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
