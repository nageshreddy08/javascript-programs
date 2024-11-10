
var a=120;
function x(){
    var b=50;
     function y(){
       console.log(a);
    }
    y();
};
x();//output:120
console.log(b);//ReferenceError: b is not defined. Because "b" is inside function scope of x(), but we are trying to access it in Global Scope
