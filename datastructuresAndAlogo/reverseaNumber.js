function reverseTheNumber(num){

let reversedNumber="";
let tempvar;

while(num>0){

tempvar=num%10;  //  "%" ->finds the last digit of the number-->remainder of the number
reversedNumber=reversedNumber+tempvar;
num=Math.floor(num/10)    //  "/" -> removes the last digit from the number-->quotient of the number

}
console.log(reversedNumber)
}

reverseTheNumber(3456);