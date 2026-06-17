// PHASE - 1: JavaScript Basics

// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
console.log("hello JavaScript");

// 2. Print your name, age, and city using one `console.log()`.
console.log("my name is Shivam Das, my age is 21 and i live in Hyderabad")

// 3. Print a warning message using `console.warn()`.
console.warn("this is a warning message");

// 4. Print an error message using `console.error()`.
console.error("this is an error");

// 5. Use `console.table()` to display an array of 5 numbers.
console.table([1, 2, 3, 4, 5]);

// ---

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
var studentname = "shivam das";
console.log(studentname);

// 2. Create a variable `age` and print it.
var age = 21
console.log(age);

// 3. Create two variables and swap their values.
var a = 30
var b = 40
var temp = a
a = b
b = temp
console.log(a,b);

// 4. Create a constant variable for `PI` and print it.
const PI = 3.14
console.log(PI);

// 5. Declare a variable without assigning a value and print it.
var c
console.log(c);

// 6. Create a variable `score` and increase it by 10.
var score = 90
score += 10
console.log(score);

// 7. Create three variables for first name, last name, and full name.
var firstname = "shivam"
var lastname = "das"
var fullname = firstname + " " + lastname
console.log(fullname);

// ---

// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
var a1 = "shivam"
var a2 = 3
var a3 = true
var a4 = null
var a5
console.log(a1, a2, a3, a4, a5);

// 2. Check the type of different variables using `typeof`.
var a1 = "shivam"
var a2 = 3
var a3 = true
var a4 = null
var a5
console.log(typeof(a1), typeof(a2), typeof(a3), typeof(a4), typeof(a5));

// 3. Store your mobile number in a variable and check its type.
var num = 939270691
console.log(typeof(num));

// 4. Create a variable with value `null` and check its type.
var val = null
console.log(typeof(val));

// 5. Create a bigint number and print it.
var bnum = 783267666216261631616n
console.log(bnum);
console.log(typeof(bnum));

// ---

// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.\
var str = "33"
var numb = Number(str)
console.log(numb);
console.log(typeof(numb));
console.log(typeof(str));

// 2. Convert the number `100` into a string.
var numbe = 100
var stri = String(numbe)
console.log(stri);
console.log(typeof(stri));

// 3. Convert `"true"` into a boolean.
var str1 = "true"
var bool = Boolean(str1)
console.log(bool);
console.log(typeof(bool));
 
// 4. Check the output of:
// - `"5" + 2`
var giv1 = "5"
var giv2 = 2
var com = giv1 + giv2
console.log(com);

// - `"5" - 2`
var giv3 = "5"
var giv4 = 2
var com2 = giv3 - giv4
console.log(com2);

// - `true + 1`
var c = true
var d = 1
var com3 = c + d
console.log(com3);

// 1. Create a variable with value `"123abc"` and convert it into a number.
var  val1 = "123abc"
var val2 = Number(val1)
console.log(val2);

// 2. Use `parseInt()` on `"500px"`.
var val3 = parseInt("500px")
console.log(val3);

// ---

// ## Operators

// 1. Add two numbers and print the result.
var sum1 = 10
var sum2 = 20
console.log(sum1 + sum2);

// 2. Find the remainder when 25 is divided by 4.
var sum3 = 25
var sum4 = 4
console.log(sum3 % sum4);

// 3. Find the square of a number using exponent operator.
var exp = 5
console.log(exp ** 2);

// 4. Increment a variable using `++`.
var  v = 20
v++
console.log(v);

// 5. Decrement a variable using `-`.
var v1 = 30
v1--
console.log(v1);

// 6. Use `+=` operator to increase a variable by 20.
var v2 = 80
v2 += 20
console.log(v2);

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
var num1 = 10
var num2 = 20
console.log(num1 > num2, num1 < num2, num1 >= num2, num1 <= num2);

// 8. Check if two values are strictly equal using `===`.
var num3 = 25
var num4 = 35
var num5 = 33
var num6 = 33
console.log(num3 === num4);
console.log(num5 === num6);

// 9. Compare `"10"` and `10` using both `==` and `===`.
var str2 = "10"
var num7 = 10 
console.log(str2 == num7);
console.log(str2 === num7);

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
var bool2 = 0
var bool3 = 1
console.log(bool2 > bool3 && bool2 < bool3);
console.log(bool2 > bool3 || bool2 < bool3);
console.log(!bool2);

// ---

// ## Strings

// 1. Create a string and print its length.
var stri = "string"
console.log(stri.length);

// 2. Convert a string into uppercase.
var stri1 = "string"
console.log(stri1.toUpperCase());

// 3. Convert a string into lowercase.
var stri2 = "STRING"
console.log(stri2.toLowerCase());

// 4. Check if a string includes the word `"JavaScript"`.
var term = "frontend development with JavaScript"
console.log(term.includes("JavaScript"));

// 5. Extract the word `"World"` from `"Hello World"`.
var stri4 = "Hello World"   
console.log(stri4.substring(6, 11));

// 6. Replace `"apple"` with `"mango"` in a sentence.
var fruits = "apple, banana, grapes"
console.log(fruits.replace("apple", "mango"));

// 7. Split `"HTML,CSS,JS"` into an array.
var stri5 = "HTML,CSS,JS"
console.log(stri5.split(","));

// 8. Remove extra spaces from a string.
var stri3 = "   hello world   "
console.log(stri3.trim());

// 9. Repeat the word `"Hi"` 5 times.
var word = "hi"
console.log(word.repeat(5));

// 10. Print the first character of a string.
var word1 = "hello world"
console.log(word1.charAt(0));

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
var name = "aman"
var age = 20
console.log(`my name is ${name} and iam ${age} years old`);

// ---

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

// ---

// ## Conditionals

// 1. Check whether a number is positive or negative.
var num = 0
if (num > 0) {
    console.log("the number is positive");
}else if (num ==  0) {
    console.log("zero...zero hota hai yaar itna bhi nai pata tuje");
}else {
    console.log("the number is negative");
}

// 2. Check whether a number is even or odd.
var num1 = 3
if (num1 % 2 == 0) {
    console.log("the number is even");
}else {
    console.log("the number is odd");
}

// 3. Check whether a person is eligible to vote.
var  age = 18
if (age < 18 ) {
    console.log("tereko kisne bola be vote karne ke liye...chal nikal yaha se");
}else if (age == 18) {
    console.log("kya baat hai baccha bada hogaya...chal jaldi se vote kar");
}else if (age > 18 && age < 60) {
    console.log("yes....aap vote karsakte hai");
}else {
    console.log("kripiya apni sehat ka khayal rakhe...vote karne ke liye thoda sa wait kare");
}

// 4. Find the largest among two numbers.
var num2 = 46
var num3 = 56
if (num2 == num3) {
    console.log("the numbers are same");
}else if (num2 > num3) {
    console.log("largest number is ", num2);
}else {
    console.log("largest number is ", num3);
}

// 5. Find the largest among three numbers.
var s1 = 45
var s2 = 67
var s3 = 23
if (s1 > s2  && s1 > s3) {
    console.log("largest number is ", s1);
}else if (s2 > s3 && s2 > s1) {
    console.log("largest number is ", s2);
}else {
    console.log("largest number is ", s3);
}

// 6. Check whether a year is a leap year.
var year = 2026
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year, "is a leap year");
}else {
    console.log(year, "is not a leap year");
}

// 7. Check whether a number is divisible by both 3 and 5.
var val = 12
if (val % 3 == 0 && val % 5 == 0) {
    console.log(val, "is divisible by both 3 and 5");
}else {
    console.log(val, "is not divisible by both 3 and 5");
}

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
var marks = 85
if (marks >= 90 && marks < 100) {
    console.log("grade is A");
}else if (marks >= 75 && marks < 90) {
    console.log("grade is B");
}else if (marks >= 50 && marks < 75) {
    console.log("grade is C");
}else if (marks < 50) {
    console.log("grade is fail");
}

// 1. Check whether a character is a vowel or consonant.
var char = "b"
var vowels = "aeiouAEIOU"
if (vowels.includes(char)) {
    console.log("the character is a vowel");
}else {
    console.log("the character is a consonant");
}

// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.
var username = "shivam"
var pass = '2004'
if (username == "shivam" && pass == "2004") {
    console.log("login successful");
}else if(username != "shivam") {
    console.warn("invalid username");
}else if (pass != "2004") {
    console.warn("invalid password");
}else {
    console.warn("invalid username and password");
}

// ---

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
var em_st = ""
if (em_st) {
    console.log("truty value");
}else {
    console.log("falsy value");
}

// 2. Check whether `0` is truthy or falsy.
var zero = 0
if (zero) {
    conole.log("truty value");
}else {
    console.log("falsy value");
}

// 3. Check whether `[]` is truthy or falsy.
var arr = []
if (arr) {
    console.log("truty value");
}else {
    console.log("falsy value");
}

// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
var val2 = "shivam"
if (val2) {
    console.log("valid");
}else {
    console.log("invalid");
}

// ---

// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.

// ---

// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// 2. Calculate the area of a rectangle.
// 3. Calculate the simple interest.
// 4. Convert temperature from Celsius to Fahrenheit.
// 5. Convert kilometers into meters.
// 6. Calculate total marks and percentage of 5 subjects.
// 7. Calculate electricity bill based on units consumed.
// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces.

// ---

// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// 2. Check whether a number lies between 10 and 50.
// 3. Check whether a password length is greater than 8.
// 4. Check if a person can drive:
// - age > 18
// - has license = true
// 1. Check whether a number is divisible by 2, 3, or both.
// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// 3. Find whether a number is a multiple of 10.
// 4. Create a simple discount calculator.
// 5. Check whether a product is in stock.
// 6. Calculate final bill after GST.

// ---

// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
// 2. Reverse a 3-letter string manually.
// 3. Find the last character of a string.
// 4. Convert a full name into uppercase initials.
// 5. Check whether two strings are equal ignoring case sensitivity.
// 6. Create a simple login validation system.
// 7. Find whether a number is a 2-digit or 3-digit number.
// 8. Create a mini ATM balance checker.
// 9. Simulate a traffic light system using `switch`.
// 10. Build a small marksheet generator using variables and conditionals.


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// PHASE - 2: Functions, Arrays, and Loops

// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
// 2. Create a function `add(a, b)` that returns the sum.
// 3. Write a function to calculate the square of a number.
// 4. Create a function that checks whether a number is even or odd.
// 5. Write a function that converts Celsius to Fahrenheit.
// 6. Create a function with default parameter `"Guest"`.
// 7. Write a function that returns the greater of two numbers.
// 8. Create a function to calculate area of rectangle.
// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// 10. Create a function to reverse a string.

// ---

// ## Intermediate Level

// 1. Write a function expression for multiplication.
// 2. Convert a normal function into an arrow function.
// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// 4. Write a function that counts vowels in a string.
// 5. Create a function that checks if a string is palindrome.
// 6. Write a callback function example using `setTimeout`.
// 7. Create a higher-order function that executes another function twice.
// 8. Write a function that returns another function.
// 9. Create a pure function for subtraction.
// 10. Create an impure function using global variable modification.

// ---

// # Part 2 — Advanced Functions (21–35)

// 1. Write a recursive function for factorial.
// 2. Write recursive Fibonacci function.
// 3. Create a function that finds power using recursion.
// 4. Create an IIFE that prints `"Executed"`.
// 5. Write a function that memoizes factorial calculation.
// 6. Create a closure counter function.
// 7. Write a function currying example for addition.
// 8. Create debounce function logic.
// 9. Create throttle function logic.
// 10. Write a function that executes only once.
// 11. Create custom implementation of `map`.
// 12. Create custom implementation of `filter`.
// 13. Create custom implementation of `reduce`.
// 14. Create custom `forEach`.
// 15. Explain output:
// ```jsx
// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());
// ```

// ---

// # Part 3 — Arrays Basics (36–55)

// ## Beginner

// 1. Create an array of 5 fruits.
// 2. Print first and last element of array.
// 3. Find length of array.
// 4. Add element at end using `push`.
// 5. Remove last element using `pop`.
// 6. Add element at beginning using `unshift`.
// 7. Remove first element using `shift`.
// 8. Reverse an array.
// 9. Sort numbers ascending.
// 10. Sort numbers descending.

// ---

// ## Intermediate

// 1. Use `splice` to remove elements.
// 2. Use `splice` to insert elements.
// 3. Use `slice` to copy array.
// 4. Find index of an element.
// 5. Check if array contains a value.
// 6. Join array elements with .
// 7. Merge two arrays using spread operator.
// 8. Copy array using spread operator.
// 9. Find maximum value using `Math.max`.
// 10. Swap two variables using destructuring.

// ---

// # Part 4 — Array Iteration Methods (56–75)

// 1. Use `forEach` to print all numbers doubled.
// 2. Use `map` to square all numbers.
// 3. Use `filter` to get even numbers.
// 4. Use `reduce` to calculate sum.
// 5. Use `reduce` to find maximum number.
// 6. Use `find` to get first even number.
// 7. Use `findIndex` to locate number > 50.
// 8. Use `some` to check if any number is negative.
// 9. Use `every` to check if all numbers are positive.
// 10. Create array of names and convert all to uppercase.
// 11. Filter all students with marks > 80.
// 12. Calculate average using reduce.
// 13. Count occurrences of numbers in array.
// 14. Flatten nested arrays using `flat`.
// 15. Remove duplicates using `Set`.
// 16. Sort array of objects by age.
// 17. Find total price of shopping cart.
// 18. Group users by age.
// 19. Chain `filter` and `map`.
// 20. Explain difference between `map` and `forEach`.

// ---

// # Part 5 — Objects Basics (76–90)

// 1. Create object for a student.
// 2. Access properties using dot notation.
// 3. Access properties using bracket notation.
// 4. Add new property dynamically.
// 5. Update existing property.
// 6. Delete a property.
// 7. Create object method.
// 8. Use `this` keyword inside method.
// 9. Create nested object.
// 10. Access deeply nested property.
// 11. Destructure object properties.
// 12. Rename variables while destructuring.
// 13. Add default values during destructuring.
// 14. Copy object using spread operator.
// 15. Merge two objects.

// ---

// # Part 6 — Advanced Objects + Real Logic (91–100)

// 1. Use `Object.keys()` on object.
// 2. Use `Object.values()`.
// 3. Use `Object.entries()`.
// 4. Loop through object using `for...in`.
// 5. Freeze an object and test modification.
// 6. Seal an object and test modification.
// 7. Create array of objects for users.
// 8. Find user with highest age.
// 9. Build a mini TODO app using arrays + objects.
// 10. Build a shopping cart system with:
// - add item
// - remove item
// - calculate total
// - quantity update

// ---

// > These questions are optional, but if you want to improve your JavaScript and logic building skills, then try solving them.Take help from ChatGPT, Google, or YouTube if needed, but understand the logic instead of copying answers.
// > 

// # Bonus Hard Questions

// ## Debugging Questions

// ### 101.
// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);

// ### 102.
// ```jsx
// console.log(typeof []);
// ```

// ### 103.
// ```jsx
// console.log([] == false);
// ```

// ### 104.
// ```jsx
// console.log([1,2] + [3,4]);
// ```

// ### 105.
// function x(a,b){
//    return a+b;
// }
// console.log(x(2));

// ---

// # Ultra Advanced Practice

// 1. Build custom `Array.prototype.map`.
// 2. Build custom `Array.prototype.filter`.
// 3. Build custom `Array.prototype.reduce`.
// 4. Implement deep clone function.
// 5. Create student management system.
// 6. Create library management system.
// 7. Create expense tracker logic.
// 8. Build inventory management system.
// 9. Create function composition utility.
// 10. Build calculator using objects and methods.

// ---

// # Scenario-Based Questions

// 1. You have an array of users. Return only active users.
// 2. Calculate total revenue from orders array.
// 3. Find second largest number in array.
// 4. Find missing number in array.
// 5. Check whether two objects are equal.

// ---

// # Interview-Level Questions

// 1. Difference between:
// - function declaration
// - function expression
// - arrow function
// 1. Difference between:
// - `slice`
// - `splice`
// 1. Difference between:
// - `map`
// - `filter`
// - `reduce`
// 1. Difference between:
// - `for...in`
// - `for...of`
// 1. Difference between:
// - shallow copy
// - deep copy

// ---

// # Logic Building Questions

// 1. Rotate array by k positions.
// 2. Find frequency of characters in string.
// 3. Find longest word in sentence.
// 4. Check if two strings are anagrams.
// 5. Capitalize first letter of every word.
// 6. Remove falsy values from array.
// 7. Convert array into object.
// 8. Convert object into array.
// 9. Find duplicate elements.
// 10. Merge two sorted arrays.

// ---

// # Real World Practice

// 1. Create authentication validation functions.
// 2. Create OTP generator.
// 3. Create password strength checker.
// 4. Build leaderboard system.
// 5. Create attendance management logic.

// ---

// # Advanced Functional Programming

// 1. Implement compose function.
// 2. Implement pipe function.
// 3. Create custom event emitter.
// 4. Build promise-like function logic.
// 5. Create retry mechanism function.

// ---

// # Final Challenge Questions

// 1. Build complete Notes App logic.
// 2. Build Student Dashboard logic.
// 3. Build Quiz App data handling.
// 4. Build E-commerce Cart System.
// 5. Build Mini Netflix Watchlist System.