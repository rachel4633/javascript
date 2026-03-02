// Create a for loop that is able to print out all the leap years from 2000 to 2026

for(let year = 2000; year <= 2026; year++){
    if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
        console.log(year);
    }
}

//Tasks Task: Write a for loop to print all odd numbers from 1 to 19. 


for (let x = 1; x <= 19; x++) {
  if (x % 2 !== 0) {
    console.log(x);
  }
}
// Task: Write a for loop to count down from 10 to 1 and print the numbers in the console. 

for (let i = 10; i >= 1; i--) {
  console.log(i);
}


// Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. 

let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number:", largest);


// Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Research on arrow function, functions with parameters and anonymous functions in javascript.

// Arrow functions - Are shrter syntax compared to other functions and used for simple operations.
// Example
// Arrow function
const greet = () => {
  console.log("Hello!");
};
greet(); // Output: Hello!

// functions with parameters allow you to pass values into functions and make functions flexible and reusable

//example
function add(x, y) {
  return x + y;
}

console.log(add(2, 10)); 
console.log(add(20, 5));

//Anonymous functions - are functions without names and often used as fall backs(functions passed into other functions)

//example
// Anonymous function assigned to a variable
let square = function(num) {
  return num * num;
};

console.log(square(4)); // Output: 16
