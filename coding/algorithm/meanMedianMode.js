function getMean (arr) {
    return arr.reduce((acc, number) => acc + number, 0) / arr.length;
}

function getMedian(arr) {
    return arr.sort((a, b) => a - b)[Math.ceil(arr.length / 2) - 1];
}

function getMode (arr) {
    const arrMap = {};
    let mode = '';
    let biggest = 0;

    arr.forEach(item => {
        current = arrMap[item] || 0;
        arrMap[item] = current + 1;
    });

    Object.keys(arrMap).forEach(key => {
        if (arrMap[key] >= biggest) {
            mode = key;
            biggest = arrMap[key];
        }
    });

    return mode;
}

function meanMedianMode (arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    };
}

const test = meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);
console.log(test);

// getMode function is wrong
