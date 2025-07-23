
//Method-1
function isPrime(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  const result = count > 1 ? false : true;
  console.log(result);
}

isPrime(5);


//Method-2
// function printPrimeNumbers(n) {
//   for (let i = 2; i < n; i++) {
   
//     if (n % i === 0) {
// return `${n} is not a prime number`
//     }
//   }
//   return `${n} is a prime number`
  
// }
// console.log(printPrimeNumbers(4));
