// Time O(n), Space O(n) n => length of the string

function runLengthEncoding(string) {
    let encodedChars = [];
    let charCount = 1;
    for (let i = 1; i < string.length; i++) {
     let currentChar = string[i];
      let prevChar = string[i - 1];
      if (currentChar !== prevChar || charCount === 9) {
        encodedChars.push(charCount, prevChar);
        charCount = 0;
      }
      charCount++;
    }
  
    encodedChars.push(charCount, string[string.length - 1]);
    
    return encodedChars.join('');
  }

  console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'));