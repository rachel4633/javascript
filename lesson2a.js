//Objects data type:
//An object in Javascript is a data type that stores data in form of key value pairs.

let person = {
    Name : "Rachel Kerubo",
    Age : 18,
    isRegistered : true
};

console.log("The Details of the person is: ",person)
//first method is by use of the square brackets
console.log(person["Age"])

//second method is by use of the dot(.) notation
console.log(person["age"])

//check data type
console.log(typeof(person))

//Array data type
//This referes to collection of items that are on indexes

 let fruits = ["Mango","Pineapple","Apple","Banana","Melon","Lemon","Grapes"]

console.log("The entire array of fruit is: ",fruits)

//To access the items of an array we use the index
console.log(fruits[3])

//you can slice items of an array
console.log(fruits.slice(2, 5))