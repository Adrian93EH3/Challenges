// REVERSE STRING
function reverseString(str) {
    //The split() method is used to split a string into an array of substrings,
    // and returns the new array.
    // If an empty string ("") is used as the separator, the string is split between each character.
    var array = str.split(""); // puts line 7 into an array
    var reverseArray = array.reverse();
    console.log(reverseArray); // returns ["o", "l", "l", "e", "h"]
    // The join() method returns the array as a string. If there were multiple elements,
    // each element will be separated by a comma.
    var reversedArray = reverseArray.join("")
    return reversedArray;
  }
  
  console.log(reverseString("hello")); // olleh