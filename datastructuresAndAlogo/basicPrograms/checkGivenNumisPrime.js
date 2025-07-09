function isPrime(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  const result = count > 2 ? false : true;
  console.log(result);
}

isPrime(6);
