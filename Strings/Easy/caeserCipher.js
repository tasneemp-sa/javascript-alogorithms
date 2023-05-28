// Time O(n), Space O(n)

function caesarCipherEncryptor(string, key) {
    let cipherArr = [];
    let newKey = key % 26;
    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      let newCharCode = charCode + newKey;
      if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode % 122);
      }
      cipherArr.push(String.fromCharCode(newCharCode));
    }
    return cipherArr.join('');
  }

  console.log(caesarCipherEncryptor('xyz', 2));