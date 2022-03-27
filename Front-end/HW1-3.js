function reverse(word) {
    if (typeof word !== "string") {
      return "Please put in a string";
    }
    return word.split("").reverse().join("");
  }
  
  const word = "hello";
  const reversedWord = reverse(word);
  console.log(reversedWord); // 'olleh'