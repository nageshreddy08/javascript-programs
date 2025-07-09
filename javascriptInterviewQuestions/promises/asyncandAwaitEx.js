const p1=new Promise((resolve,reject)=>{
console.log("entering p1");
setTimeout(()=>{
    console.log("Inside timeout1")
    resolve("Promise 1 completed");
},30000)

});

const p2=new Promise((resolve,reject)=>{
console.log("entering p2");
setTimeout(()=>{
    console.log("Inside timeout2")
    resolve("Promise 2 completed");
},20000)

});
//In Async/await, order of execution is followed, eventhough p2 is resolved before p1, since p1 is invoked above p2, 
// so p1 is printed in console and then p2 is printed.
//In below fun., if we invoke p2 before p1, then p2 will be resolved and printed first and then p1 will be printed.
async function getData(){
    
    const data1= await p1;
    console.log(data1);
    const data2=await p2;
    console.log(data2);

    //try this as well
    //const data2=await p2;
   // console.log(data2);
   //const data1= await p1;
    //console.log(data1);
};

getData();

async function getData2(){
    console.log("Printing data from second function");
};
getData2();