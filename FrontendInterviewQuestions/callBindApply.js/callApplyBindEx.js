//--->Call() Example<---
//object-1
let personDetails={
    fname:"Nag",
    lname:"Reddy"
}
//Here we define the function only once, we can reuse it any no. of times
let printDetails=function(hometown,state){
    console.log(this.fname+" "+this.lname+" is from "+hometown+" "+state)
}
//First argument will be object in the function and remaining arguments we pass them individually not in array
printDetails.call(personDetails,"Kurnool","AP");

//Object-2
let peronDetailsTwo={
    fname:"Preetham",
    lname:"Itte"
}
//Here we resused the printDetails funtion by sending "personDetailsTwo" object as first argument.
printDetails.call(peronDetailsTwo,"Goothy","Anantapur");

//--->Apply Example<---
//Apply method is same as Call() method. But in Apply() method we pass arguments in the form of Array.

printDetails.apply(personDetails,["Hyd","Telangana"])

//--->Bind Example<---
//Bind method doesnot directly invokes the method, but it gives the copy of the method which can be invoked later

let printMyNameUsingBind=printDetails.bind(peronDetailsTwo,"Bangalore","KN");
printMyNameUsingBind();

//Key Differences:
// call() and apply() immediately execute the function. bind() returns a new function that can be executed later.
// call() takes arguments individually, while apply() takes them as an array.
// bind()-->It allows you to create a new function from an existing function, change the new function's this context, 
// and provide any arguments you want the new function to be called with.
//The call, apply, and bind methods in JavaScript are all used to explicitly control the this context of a function
// and to pass arguments to it. While they share this core purpose, their specific uses and behaviors differ:
//-->Uses:
//Function Borrowing 
//Passing arguments from one function to another
//Invoking functions with a known, fixed number of arguments
//***Note:Functional Components and Hooks: With the advent of functional components and Hooks, the need for explicit bind() has largely diminished. 
// Arrow functions inherently bind this to the lexical scope, 
//and Hooks like useCallback or useMemo handle memoization and dependency management, reducing the reliance on manual this binding.