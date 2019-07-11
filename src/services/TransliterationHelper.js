class TransliterationHelper {
    transformString = (input) => {
        if (!input) {
            return "";
        }

        let result = "";
        input.split('').forEach(letter => {
            result += this.transformLetter(letter);
        });

        return result;
    };

    transformLetter = (letter) => {
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

export default new TransliterationHelper();
