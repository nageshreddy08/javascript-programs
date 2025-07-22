//fibonacci series:0,1,1,2,3,5,8,13,21,34....

// function fibonacciNumber(n) {
//   //here n is how many numbers u want to print ex:first 5 fibonacci numbers etc.,
//   if (n <= 0) {
//     console.log(n);
//     return;
//   }
//   let lastdigit = 0;
//   let secondlast = 1;
//   console.log(lastdigit);
//   console.log(secondlast);
//   for (let i = 2; i < n; i++) {
//     res = lastdigit + secondlast;
//     console.log(res);
//     lastdigit = secondlast;
//     secondlast = res;
//   }
// }
// fibonacciNumber(5);

//Recursive method:without using loops

// function fibonacciUsingRecursion(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     return fibonacciUsingRecursion(num - 1) + fibonacciUsingRecursion(num - 2);
//   }
// }
// let N = 5;
// for (let i = 0; i < N; i++) {
//   console.log(fibonacciUsingRecursion(i));
// }
//console.log(fibonacciUsingRecursion(6));


//<---Recursive method to find nth element in fibonacci sequence-->
//fibonacci series:0,1,1,2,3,5,8,13....
function nthFibonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return nthFibonacci(n-1)+nthFibonacci(n-2);
}
console.log(nthFibonacci(4));