var censoredWords = ["fuck", "ass", "cunt"];
var customCensoredWords = [];

function censorWord(word) {
    for (char in word) {
        word = word.replace(word[char], "*");
    }
    return word;
}

function censor(inputString) {
    for (index in censoredWords) {
        inputString = inputString.replace(censoredWords[index], censorWord(censoredWords[index]));
    }
    for (index in customCensoredWords) {
        inputString = inputString.replace(customCensoredWords[index], censorWord(customCensoredWords[index]));
    }
    return inputString;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censorWord = censorWord;
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;