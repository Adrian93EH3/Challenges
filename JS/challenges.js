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
// Result is equal to 1, so when the below logic is fired off it continuosly increments i and multiplies it by 1 until
// it reaches the value of the num param. For this example, the num param has a value of 5, so the for loops increments
// i until it reaches 5 while simultaneously multiplying it by result. So it'll do 1*1*1*2*1*3*1*4*1*5, which equals 120.
//   result = result * i;
//   }
//   return result;
// }
// END OF FIRST SOLUTION //
// SECOND SOLUTION //
function factorialize(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorialize(num - 1);
  }
}
// END OF SECOND SOLUTION //
console.log(factorialize(5));
console.log("------------------");
// CHECK IF PALINDROME //
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-aplhanumeric characters and turn everything lower case in order to check for palindromes.

function palindrome(str2) {
  // Using RegexOne for the non-alphanumeric testing
  var regexone = /[\W_]/g;
  // Match all the non-alphanumeric characters with nothing, aka remove them and put the str to lowercase as well
  var lowercase = str2.toLowerCase().replace(regexone, "");
  // Similar to the first challenge when it comes to checking the reverse part.
  // This works, but doesn't pass the test case. I need it to ignore spacing, punctuation and casing.
  var reverse = lowercase.split("").reverse().join("");
  console.log(reverse === lowercase);
}
palindrome("A man, a plan, a canal. Panama");
// FIND THE LONGEST WORD //
// Return the length of the longest word in the param. Your response should be a number.

function findLongestWord(str) {
  // Split the string into an array
  var words = str.split(" ");

  // Goes over the indexes of the array and returns the elements
  for (var word of words) {

    console.log(longest);
  }
}

findLongestWord("Which of these words is the longest");