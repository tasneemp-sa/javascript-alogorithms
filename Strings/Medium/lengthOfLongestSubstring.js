// Time O(n) | Space O(m),  n = length of the string s and m = unique characters in s

const lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let subStrLen = 0;
    let longestSubstrLen = 0;
    let left = 0;
    let right = 0;

    while(left < s.length && right < s.length) {
        if (!charMap.get(s[right])) {
            charMap.set(s[right], 1);
            subStrLen++;
            longestSubstrLen = Math.max(subStrLen, longestSubstrLen);
            right++;
        }
        else {
            while (s[left] !== s[right]) {
                charMap.delete(s[left]);
                subStrLen--;
                left++;
            }
            charMap.delete(s[left]);
            subStrLen--;
            longestSubstrLen = Math.max(subStrLen, longestSubstrLen);
            left++;
        }
    }

    return longestSubstrLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));