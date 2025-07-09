const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      reject("Failed")
      resolve("success");
      //reject("Failed");  //even though we used reject here, it will print "success" because we used resolve() before reject().
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  }).catch((rej)=>{
console.log("Promise rejected", rej);
  });
  
  console.log(4);
  