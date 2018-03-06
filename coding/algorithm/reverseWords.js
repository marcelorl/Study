function reverseWords (string) {
    const words = string.split(' ');

    words.forEach((word, i) => {
        const letters = word.split('');
        const nWord = [];

        while (letters.length > 0) {
            nWord.push(letters.pop());
        }

        words[i] = nWord.join('');
    });

    return words.join(' ');
}

const test = reverseWords('this is a string of words');

console.log(test === 'siht si a gnirts fo sdrow')

function reverseWordsBetter (string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];

    wordsArr.forEach(word => {
        var reversedWord = '';
        for(var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        reversedWordsArr.push(reversedWord);
    });

    return reversedWordsArr.join(' ');
}

const test2 = reverseWordsBetter('this is a string of words');

console.log(test2 === 'siht si a gnirts fo sdrow')