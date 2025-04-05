//  function in javascript are reusable blocks of code that can be called when needed
//  function can be defined using the function keyword

function sum (x , y){
    return x + y ;
}
// console.log(sum (5 , 5));
//  function definition

function welcomeMsg(name){
    return("Hello" + nameVal + "welcome to my repo");
}
let nameVal = "User";
//calling the function
// console.log(welcomeMsg(nameVal));

// function expression
const mul = function(a,b){
    return a+b;
}
// console.log(mul(4,5));

// arrow function
const  a =["Hydrogen","Helium","Lithium","beryllium"];
const a2 = a.map(function(h){
    return h.length;
});
// console.log("Normal way", a2);

// arrow function
const a3 = a.map((s) => s.length);
console.log("using Arrow function" , a3);
