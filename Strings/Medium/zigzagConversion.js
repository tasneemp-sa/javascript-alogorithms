// Time O(n), Space O(m) where n = number of characters in string and m = number of rows

const convert = function(s, numRows) { 
    if (numRows === 1) return s;
    let transformedStr = '';
    let transformedArr = [];
    for (let i = 0; i < s.length; i++) {
        transformedArr[i] = '';
    }
    let row = 0;
    let goingDown = false;

    for (const char of s) {
        transformedArr[row] += char;
        if (row === 0 || row === numRows - 1 ) goingDown = !goingDown;
        row += goingDown ? 1 : -1;
    }

    for (const string of transformedArr) transformedStr += string;

    return transformedStr;
};

console.log(convert("PAYPALISHIRING", 3));