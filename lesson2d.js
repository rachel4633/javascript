// if ... else if ... else statement
// It is used to evaluate multiple conditons

let age = 14

if (age < 15 ){
    console.log("You are too young to watch this episode")
}
else if(age >= 15 && age <= 18){
    console.log("You can watch this episode but with parental guidance")
}
else if(age > 18 && age < 40){
    console.log("Have a seat and Enjoy the episode")
}
else {
    console.log("This episode is not suitable for you.")
}