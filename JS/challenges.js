// REVERSE STRING //
// Reverse the provided string. You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

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
// END OF REVERSE STRING //
  console.log("------------------");
// FACTORIALIZE THE NUMBER //
// Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial
// is the product of all positive integers less than or equal to n.
    
    // FIRST SOLUTION //
// function factorialize(num) {
//   var result = 1;
//   for (var i=1; i<=num; i++) {
//   result = result * i;
//   }
//   return result;
// }
    // END OF FIRST SOLUTION //
    // SECOND SOLUTION //
    function factorialize(num) {
      if(num === 1) {
        return num;
        } else {
          return num * factorialize(num - 1);
          }
      }
    // END OF SECOND SOLUTION //
console.log(factorialize(5));