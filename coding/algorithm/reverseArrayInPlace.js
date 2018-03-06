function reverseArrayInPlace (arr) {
    const limit = arr.length / 2;
    for (let i = 0; i < limit; i++) {
        const temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const test = reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

console.log(test.join(',') === [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].join(','));
console.log(test.join(','))
console.log([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].join(','))