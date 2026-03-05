 //Arrow function
//This is a function that was introduced in the ECMA script 6 and they give us the latest way of defining functions in a compact manner
//At times the arrow function can be said to be anonymous function why?This is because they use the names of the variable they are contained in.


const sayHello = () => {
    console.log("This is an arrow function.")
}
sayHello();

//create an arrow function that is able to find the product of three numbers
const multiplyThree = (a, b, c) => a * b * c;

// Example usage:
console.log(multiplyThree(2, 3, 4)); // Output: 24

//Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust that you are good") 
}

greet("lawrence");
greet("jane");

console.log("==============================")
//below is the function to find the area of the circle
const CircleArea = (pi, radius) =>{
    let area = pi*radius *radius
    console.log("The area of a circle is:"+ area + "cm\u00B2")
}
CircleArea(3.142, 7)
CircleArea(3.142, 28)

console.log("=================================")
//come up with your own example of an arrow function that utilises 3 parameters.
// Arrow function with 3 parameters
const calculateTotal = (price, quantity, discount) => {
  const subtotal = price * quantity;
  const total = subtotal - discount;
  return total;
};

// Example usage
console.log(calculateTotal(50, 3, 20)); // Output: 130