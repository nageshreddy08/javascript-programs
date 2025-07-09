//Explain Closures in js?
//Ans:Function bundled along with its lexical environment is called closure
/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
(the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, 
closures are created every time a function is created, at function creation time.*/


function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    //var a=25;
    y();
    //console.log(a)
}
x();

function createGreeting(name) {
    const greeting = "Hello, " + name; // Outer function variable
  
    function greet() {
      console.log(greeting); // Inner function accessing outer variable
    }
  
    return greet;
  }
  
  const greetJohn = createGreeting("John");
  greetJohn(); // Output: Hello, John