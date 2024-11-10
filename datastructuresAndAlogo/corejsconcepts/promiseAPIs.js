const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error in promise 2");
const promise3 = Promise.resolve("Another success");

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // Won't run, as `promise2` rejected
  })
  .catch(error => {
    console.log("Caught an error:", error); // "Caught an error: Error in promise 2"
  });
