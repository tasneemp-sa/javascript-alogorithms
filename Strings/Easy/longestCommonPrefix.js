// Time O(nm), Space O(1);

const longestCommonPrefix = function(strs) {
    let shortestWord = '';
    let shortestWordLength = Infinity;
    let commonPrefix = '';
    for (const str of strs) {
        if (str.length < shortestWordLength) {
            shortestWordLength = str.length;
            shortestWord = str;
        }
    }

    commonPrefix = shortestWord;

    for (let i = 0; i < shortestWordLength; i++) {
        for (const str of strs) {
            if (str.slice(0, shortestWord.length) !== shortestWord) {
                shortestWord = shortestWord.slice(0, -1);
                commonPrefix = shortestWord;
                break;
            }
        }
    }

    return commonPrefix;
};

const strs = ["flower","flow","flight"];

console.log(longestCommonPrefix(strs));