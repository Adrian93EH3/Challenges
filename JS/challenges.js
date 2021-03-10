// REVERSE STRING #1
function reverseString(str) {
    // FIRST WAY OF DOING THE CHALLENGE //
    // //The split() method is used to split a string into an array of substrings,
    // // and returns the new array.
    // // If an empty string ("") is used as the separator, the string is split between each character.
    // var array = str.split("");
    // var reverseArray = array.reverse();
    // console.log(reverseArray); // returns ["o", "l", "l", "e", "h"]
    // // The join() method returns the array as a string. If there were multiple elements,
    // // each element will be separated by a comma.
    // var reversedArray = reverseArray.join("")
    // return reversedArray;
    // END OF FIRST CODE //

    // SECOND WAY OF DOING THE CHALLENGE //
    // Splits the array into a substring array, then reverses it, and finishes it by joining it and breaking the array.
    return str.split("").reverse().join("");
    // END OF SECOND CODE //
  }
  
  console.log(reverseString("hello")); // olleh
  console.log("------------------");