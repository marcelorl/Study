function isPalindrome (string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');

    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    })

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true

    return false
}

const test = isPalindrome("coding javascript");
console.log(test);