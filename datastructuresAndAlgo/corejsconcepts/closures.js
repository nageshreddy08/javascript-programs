// function x(){
//     const a=10;//here we can use var/let/const
//     function y(){
//         console.log(a);
//     }
//     return y();
// };

// x();

// function createGreeting(name) {
//     const greeting = "Hello " + name; // Outer function variable
  
//     function greet() {
//       console.log(greeting); // Inner function accessing outer variable
//     }
  
//     return greet();
//   }

//   createGreeting("Nagesh")
  //-->Ex-3 Closures with setTimeout

  function c(){
    for(var i=0;i<=5;i++){
      setTimeout(()=>{
        console.log(i);
      },1*1000)
    }
    console.log("Hii");
  }
  c();
  