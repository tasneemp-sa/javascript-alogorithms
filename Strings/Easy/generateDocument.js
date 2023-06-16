function generateDocument(characters, document) {
    let charMap = new Map();
    
    for (const char of characters) {
      charMap.set(char, charMap.get(char) + 1 || 1)
    }
    console.log(charMap);
    for (const char of document) {
      if (charMap.get(char) === 0 || charMap.get(char) === undefined) return false;
      charMap.set(char, charMap.get(char) - 1);
    }
    return true;
    
  }

  console.log(generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!'));