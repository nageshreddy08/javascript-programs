//Write a program to print prime numbers for the given count

//Step:1 write a program to print prime numbers
//Step:2 Take the input and print them accordingly
//Prime numbers:2,3,5,7,11,13,17,19

function isPrime(num){
    if(num<=1){
        return false;
    }

    for(let i=2;i<=num/2;i++){//here we can use i< Math.sqrt(num)

        if(num%i==0){
            return false;
        }
    }
    return true;

}
//console.log(isPrime(7));
function printPrimeNumbers(n){
    //This will be useful to print prime numbers in a given interval
let lowerLimit=1;
let upperLimit=n;
let count=0;

for(let i=lowerLimit;i<=upperLimit;i++){
        if(isPrime(i)){
            console.log(i);
            count++;
        }
    }
}
printPrimeNumbers(10);