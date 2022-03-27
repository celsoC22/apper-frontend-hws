function convertToVowels(word) {
    if (typeof word !== "string") {
      return "Please put in a string";
    }
    const vowels = ["a", "e", "i", "o", "u"];
    const wordArray = word.split("");
    const vowelArray = wordArray.filter((letter) =>
      vowels.includes(letter.toLowerCase())
    );
    return vowelArray.join("");
  }
  
  const word = "thisissomeword";
  const wordWithOnlyVowels = convertToVowels(word);
  console.log(wordWithOnlyVowels); // iioeo