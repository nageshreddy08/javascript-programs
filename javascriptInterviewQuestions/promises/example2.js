
const p1=new Promise((resolve,reject) => {
    setTimeout(()=>{
       resolve("Inside P1 code");
    },10000);
})
    
const p2=new Promise((resolve,reject) => {
        setTimeout(()=>{
           resolve("Inside P2 code");//If we don't handle reject by using .catch(), it will throw an error.
        },5000)
})

function getData(){

p1.then((res) => console.log(res)).catch((rej)=> console.log(rej));//Promise will be moved to callback queue,
// when timer is completed it will be moved to call stack

console.log("Hello Javascript");//Here "Hello Javascript" is printed first and then the promise will
//be resolved because of the setTimeout attached to resolve() function in Promise.

p2.then((res,rej)=> console.log(res))
}

getData();
console.log("Outside function");