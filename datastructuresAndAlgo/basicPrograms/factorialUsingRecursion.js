
// function factorial(n)
// //using normal-for loop approach//
// {
//     let fact=1;

//     if(n>0)
//     {
//     for(let i=1;i<=n;i++)
//     {
//         fact =fact*i;
//     }
//     //return fact;
//     console.log(fact);
// }
// else{
// console.log(1);
// }
// //return 1;

// }
// factorial(1)

//----------------//

/*using Recursion Approach*/

function findFactorialUsingRecursion(n){
    if(n<=0 || n==1){
        return 1;
    }
    else{
        return n* findFactorialUsingRecursion(n-1);
    }
}
const result=findFactorialUsingRecursion(3);
console.log(result);