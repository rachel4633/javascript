//Anonymous Function in Javascript
// These are function that exists without a name.

//Example
// The function shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there,hope your Monday is fine...")
}
console.log(typeof(greet))
greet();

//Below is another anonymous function
(function(){
    console.log("Welcome to the world of programming..")
})();