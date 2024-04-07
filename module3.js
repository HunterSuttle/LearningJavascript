// Display output to the screen

function displayToConsole() {

  console.log("Hello from console.log!");

}

function writeToDocument() {

  document.write("Hello from document.write!");

}

function showAlert() {

  alert("Hello from alert!");

}

function updateElement() {

  const outputElement = document.getElementById("output");

  outputElement.innerHTML = "Hello from innerHTML!";

}

// Native Array ES6 functions

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

numbers.forEach((num) => console.log(num));

// Recursion: Factorial of a positive integer

function factorial(n) {

  if (n === 0 || n === 1) {

    return 1;

  }

  return n * factorial(n - 1);

}

console.log("Factorial of 5:", factorial(5));

// Using a JavaScript library (Lodash)

const shuffledArray = _.shuffle(numbers);

console.log("Shuffled array:", shuffledArray);

// Calculate the nth Fibonacci number using recursion

function fibonacci(n) {

  if (n <= 1) {

    return n;

  }

  return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log("Fibonacci(10):", fibonacci(10));

// Generate a random integer between min and max (inclusive)

function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log("Random number between 1 and 10:", getRandomInt(1, 10));

// Check if a string is a palindrome

function isPalindrome(str) {

  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleanedStr === cleanedStr.split("").reverse().join("");

}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));

// Generate a UUID (Universally Unique Identifier)

function generateUUID() {

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {

    const r = (Math.random() * 16) | 0;

    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);

  });

}

console.log("Generated UUID:", generateUUID());
