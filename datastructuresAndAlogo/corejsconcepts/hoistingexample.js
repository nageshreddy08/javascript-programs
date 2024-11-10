greet();
console.log(x);
console.log(y);///ReferenceError: Cannot access 'y' before initialization

//meet()  //TypeError: meet is not a function

var x=10;
let y=20;
function greet(){
    console.log("Hellooo..");
};

var meet=function(){
    console.log("let's meet..")
}

meet();