function isPalindrome(word) {
    if (typeof word !== "string") {
      return "Please put in a string";
    }
    reversed_word = word.split("").reverse().join("");
    if (word === reversed_word) {
      return true ;
    } else {
      return false;
    }
  }
// A palindrome word / sentences ignores case, spaces ,other characters
  
  const word = "racecar".toLowerCase().replace(/[\W_]/g,''); 
  const reversedWord = isPalindrome(word);
  console.log(reversedWord); // true
