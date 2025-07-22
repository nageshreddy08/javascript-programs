//Using Finally block
/*
const promise = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});

promise 
.then((data) => {
console.log(data);
})
.catch((error) => {
console.log("error");
})
.finally(() => {
console.log("Finally block is executed");
});
*/

//Simple promise
const myPromise = new Promise(function(resolve, reject) {
    const x = 2;
    const y = 12;

 if(x == y){
    resolve("inside iff");//if x is equal to y then resolve() will be executed
    console.log("printing and not waiting for resolve..")
 }else{
    reject("Inside else..");//if x is not equal to y then reject() will be executed
 }
});
console.log("outside");

myPromise
.then(function(){
  console.log("Success");
})
.catch(function(error){
   console.log(error);
});