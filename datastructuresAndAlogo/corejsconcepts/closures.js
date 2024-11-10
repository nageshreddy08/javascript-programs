// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y();
// };

// x();

function createGreeting(name) {
    const greeting = "Hello, " + name; // Outer function variable
  
    function greet() {
      console.log(greeting); // Inner function accessing outer variable
    }
  
    return greet();
  }

  createGreeting("Nagesh")
  