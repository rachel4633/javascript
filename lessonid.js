//string Data Type
//A string is a series /sequence of characters that are enclosed inside of quotation marks.
let name = "Rakel Kerubo"
console.log("The name is: ",name)
console.log(typeof(name))

//floating point: This is a number with decimal
let quantity = 35.5
console.log("The quantity of the sugar bought is:", quantity)
console.log(typeof(quantity))

//Boolean : It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is James an Adult?", isAdult)
console.log("Is he registered as voter? ", isRegistered)

console.log(typeof(isAdult))


//undefined: This is a data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is:", county)

//null data type :It is a data type that contains null values

let username = null
console.log("What is the username?", username)

//// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array.

//Array = a variable like structure that can hold more than 1 value.
let fruits = ["apple","orange","banana"];

fruits[3]="coconut";
fruits.push("coconut");
fruits.pop();
fruits.unshift("mango")
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("banana");
console.log(index);
fruits.sort().reverse()

for(let fruit of fruits){
    console.log(fruit);
}

//objcects
const fruit = [{name:"apple",color:"red",calories:95},
                {name:"orange",color:"orange",calories:90},
                {name:"banana",color:"yellow",calories:105},
                {name:"apple",color:"red",calories:95},
                {name:"watermelon",color:"green",calories:80}];


fruit.push({name: "grapes",color:"purple",calories:62});
console.log(fruit);

fruit.forEach(fruit => console.log(fruit.name))
fruit.forEach(fruit => console.log(fruit.color))
fruit.forEach(fruit => console.log(fruit.calories))




