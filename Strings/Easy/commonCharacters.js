// O(n * m), Space O(c)
// n = number of strings, m = number of chars in first string, c = number of unique characters

function commonCharacters(strings) {
    let commonChars = [];
    for (const char of strings[0]) {
      let isCommon = true;
      for (let i = 1; i < strings.length; i++){
        if (!strings[i].includes(char)) isCommon =  false;
      }
      if (isCommon && !commonChars.includes(char)) commonChars.push(char);
    }
    return commonChars;
  }

  console.log(commonCharacters(['abc', 'bcd', 'cbaccd']));