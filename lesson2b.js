//Comparison Operators
//They usually evaluate to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)

// Triple egual sign - Research in javascript
// Logical operators are used to evaluate two or more conditions and they also give a boolean answer
//Logical AND (&&) it evaluates to true if and only if all of the conditions/statements are true 
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

//Logical OR (||)- It evaluates to true if one of the condition is true.
console.log((number1 < number2)) || ((number2 > number1))

//logical NOT (!)-  it is used to negate a condition or a statement

console.log(!(number1 < number2))