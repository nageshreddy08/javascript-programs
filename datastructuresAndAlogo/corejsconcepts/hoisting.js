// getName();
// console.log(x);
// console.log(getName);
// var x=4;
// function getName(){
//     console.log("Hello World");
// }

// "Hoisting" is a phenomena in JS by which you can access the variables and functions even before you have initialised them 
// or you have put some value in it.You can access them without any error(by assigning "undefined" to them);
console.log(x)
getData();
var x=1;
console.log("Func expression",num)//we cannot access function expression as well
var num=function(){
    return num;
}
console.log(y);
const y=4;
function getData(){
    console.log("Hoisting example 2");
}

//Observation: let and const variables cannot be accessed before initialisation.Throws ReferenceError:Cannot access 'y' before initialization
// this is because, there will be seperate reserved space for "let" and "const" variables and they are not stored in global space
//(but "var" is stored in global space)
