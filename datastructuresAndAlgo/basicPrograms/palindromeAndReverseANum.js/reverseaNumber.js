function reverseTheNumber(num){

let reversedNumber=0;
let tempvar;

while(num>0){

tempvar=num%10;  //  "%" ->finds the last digit of the number-->remainder of the number
reversedNumber=tempvar+reversedNumber*10;
num=Math.floor(num/10)    //  "/" -> removes the last digit from the number-->quotient of the number

}
console.log(reversedNumber)
}




reverseTheNumber(45345346);

