//Triple equal sign- checks whether two value are equal in both value and typel
let a = 10;
let b = 10;
console.log(a === b);

let x = 10
let y = "10"
console.log(x === y)





let distance = 900

if(distance >= 0 && distance <= 100){
    console.log("Pay 5 USD")
}
else if(distance >= 101 && distance <= 500){
    console.log("Pay 10 USD")
}
else if(distance >= 501 && distance <= 1000){
    console.log("Pay 20 USD")
}
else if(distance >=1001){
    console.log("Pay 40 USD")
}
else{
    console.log("INCORRECT INPUT")
}