// REVERSE STRING
function reverseString(str) {
    //The split() method is used to split a string into an array of substrings,
    // and returns the new array.
    // If an empty string ("") is used as the separator, the string is split between each character.
    var array = str.split(""); // puts line 7 into an array
    var reverseArray = array.reverse();
    console.log(reverseArray); // returns ["o", "l", "l", "e", "h"]
  }
  
  console.log(reverseString("hello")); // 