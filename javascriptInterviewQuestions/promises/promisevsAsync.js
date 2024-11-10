//Promise Producer
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Inside P1 code");//try with resolve() as well
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Inside P2 code");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Inside P3 code");
    }, 1000);
  });
  
function getData() {

  p1.then((res) => console.log(res)).catch((rej) => console.log(rej));//If we dont use .catch(), it will throw "Unhandled Rejection error"

  //Promise will be moved to callback queue, when timer is completed it will be moved to call stack and gets executed

  p2.then((res) => console.log(res));

  console.log("Hello Javascript"); //Here "Hello Javascript" is printed first and then the promise will
  //be resolve because of the setTimeout attached to resolve() function in Promise.
}

getData();
console.log("Outside function");


//
//Promise Consumer
/*
async function asyncExample(){
    console.log("Namaste Javascript");
try{
    const data1=await p1;
    console.log("async code 1");
    console.log(data1);
  }
  catch(error){ //handling rejection in async/await
    console.log("Failed to get response");
  }

console.log("In the middle of promises");

    const data2= await p2;
    console.log("async code 2");
    console.log(data2);

    const data3= await p3;
    console.log("async code 3");
    console.log(data3);
 } */

// asyncExample();
console.log("After promises");
