// Time O(n), Space O(1)

function firstNonRepeatingCharacter(string) {
    let charMap = new Map();
    let indexOfUniqueChar = -1;
    for (const char of string) {
        charMap.set(char, charMap.get(char) + 1 || 1);
    }
    for (const [key, value] of charMap) {
      if (value === 1) return string.indexOf(key);
    }
    return indexOfUniqueChar;
  }

  console.log(firstNonRepeatingCharacter('abcdcaf'));
