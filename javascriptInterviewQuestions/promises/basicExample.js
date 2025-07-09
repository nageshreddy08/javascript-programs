
function fetchData(success){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve("Promise is success");
            }
            else{
                reject("Promise failed");
            }
        },1000)
    })
};
//Using .then and .catch
// Simulate a successful data fetch
fetchData(true)
  .then(response => {
    console.log(response); // Output: Promise is success
  })
  .catch(error => {
    console.error(error);
  });

//Simulate a failed data fetch
fetchData(false)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error); // Output: Error: Promise is failed
  });

//Using async and await

// async function getData() {
//     try {
//       const response = await fetchData(true); // Change to `false` to simulate failure
//       console.log(response); // Output: Data fetched successfully!
//     } catch (error) {
//       console.error(error); // Output if `success` is false: Error: Unable to fetch data.
//     }
//   }
  
  //getData();