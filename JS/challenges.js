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
  console.log("------------------");
}
palindrome("A man, a plan, a canal. Panama");
// FIND THE LONGEST WORD //
// Return the length of the longest word in the param. Your response should be a number.

function findLongestWord(str3) {
  // Split the string into an array
  var words = str3.split(" ");
  // Empty string so I may store the longest word
  var longest = "";
  // Goes over the indexes of the array and returns the elements while setting the way to reference it as ' word '
  for (var word of words) {
    // Checks if the length of each word is greater than the word before it while simultaneously making the variable of ' longest ' equal to that word.
    if (word.length > longest.length){
      longest = word;
    }
    }
    console.log(longest);
    console.log("------------------");
  }


findLongestWord("The cow jumped over the moon and landed on Mars");
// TITLECASE //
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, connecting words like 'the' and 'of' should also have the first letters capitalized.
function titleCase(str4) {
  // Separate the string into individual words, also lowercasing it so I can later choose which to capitalize.
  var words = str4.toLowerCase().split(" ");

  for (var i=0; i<words.length; i++) {
    /* Attack the array of words, to the value of i since it constantly changes in the loop. 
     Then label the value of 0 attached to the ' words[i] ' because the 0 references the first value of each loop.
     For example, in this case the split is making the example string turn into an array of ['united', 'states', 'of', 'america'].
     So as the loop fires, 0 will be each value it loops through. Then the ' .toUpperCase ' method makes the first letter of each element capitalized.
     The last bit of the code attaches the rest of the element to the first letter.
     I understand this may be a bit confusing, so please refer to the examples I'll leave below.
     By adding the examples together and cycling through each index, we get the challenge correct by finishing it with the ' .join ' method at the end. */
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  // EXAMPLES //
  /* var names = ["adrian", "emily"];
   console.log(names[0].toUpperCase()) // it results in ' A '
   var name = "Adrian";
   console.log(name.slice(1)) // it results in ' drian ' */
  // END OF EXAMPLES //

  // Join the elements so it's not an array filled with a subset of strings, and instead is just one string.
  console.log(words.join(" "));
  console.log("------------------");
}

titleCase("United states of america");

// LARGEST NUMBER //
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestNumber(array) {
  var largest = []; // To store the largest number of each array
  
  // The line below loops through each element
  for (var i=0; i<array.length; i++) {
    // Every time the outer loop runs, the variable I declared will choose the first inner element of each element
    var firstInnerElement = array[i][0];
    console.log(array[i]); // prints out each element
    // Nested loop that prints out each inner element by looping through each outer element
    for (var ii=0; ii<array[i].length; ii++) {
      console.log(array[i][ii]);
      // Writing out a variable to easily access ' array[i][ii] ' without having to actually write it out each time
      var currentElement = array[i][ii];
      // Checks if ' currentElement ' is greater than or equal to ' firstInnerElement '
      if (currentElement >= firstInnerElement) {
        // If the line above is true, it will then equal that to ' currentElement ' and checks the rest of the values to see what to continuously set it to.
        // The loop will also end here
        firstInnerElement = currentElement;
      }
    }
    // Pushing the results of the loops above into the empty array I created in the beginning
    largest.push(firstInnerElement);
  }
  console.log(largest);
  console.log("------------------");
}
largestNumber([[1, 2, 4, 3], [21, 20, 17, 25], [100, 500, 300, 400], [4444, 1111, 2222, 3333]]);

// RETURN THE SUM OF TWO NUMBERS //
// Create a function that takes two numbers as arguments and returns their sum
function addition(num1, num2) {
  var add = num1 + num2;
  return add;
}

console.log(addition(-3, -6)); // Results in -9
console.log("------------------");
// INTEGER DIGITS COUNT //
// Create a function that counts the integer's number of digits
function lengthOfInteger(count) {
  if (count >= 0) {
    return count.toString().length;
  } else {
    /* This finds a loophole by subtracting one to the result of a negative number.
     The loophole is, -9 is technically 2 because it counts the dash, but the ' -1 ' makes it equal 1.
     Which is the literal amount of numbers in the integer. I could do some more fancy code to make it ignore symbols/special characters.
     But I decided to be efficient over fancy, not sure if that's the right call or not. */
    return count.toString().length - 1;
  }
}

console.log(lengthOfInteger(-999)); // Returns 3
console.log(lengthOfInteger(1999)); // Returns 4
console.log("------------------");

// CONVERT MINUTES TO SECONDS //
// Write a function that takes minutes and converts it to seconds
function convert(minutes) {
  var seconds = minutes * 60;
  return (seconds)
}

console.log(convert(90));
console.log("------------------");