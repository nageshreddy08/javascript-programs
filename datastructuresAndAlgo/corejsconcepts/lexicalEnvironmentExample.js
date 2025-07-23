/*
var a=120;
function x(){
    var b=50;
     function y(){
       console.log(a);
    }
    y();
};
x();//output:120
console.log(b);//ReferenceError: b is not defined. 
// Because "b" is inside function scope of x(), but we are trying to access it in Global Scope
*/
//--->EX:2
// var g=20;
// let gc=40
// const gconst=100
// function A(){
//   var a=10;
// let ac=30
//   function B(){
//     console.log(a);
//     console.log(g);
//     console.log(ac);
//     console.log(gc);
//     console.log(gconst);
//   }
//   B();
// };
// A();


var a=10;
let b=20;
const c=30;

{
  console.log(a)//op:10
    console.log(b)//op:20
  console.log(c)//op:30

}