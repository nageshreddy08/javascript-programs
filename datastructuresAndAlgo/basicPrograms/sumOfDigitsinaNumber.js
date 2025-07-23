function findSumOfDigits(num){
    let res=0;
    while(num>0){
    
    let rem=num%10   // "%"" ->finds the last digit of the number
    res=res+rem
    num=Math.floor(num/10) ;  // "/" -> removes the last digit from the number
    
    }
    return res;
}

console.log(findSumOfDigits(3211));  
//u should use console.log because in function u are returning "res" variable which will 
//which will not print on console directly-->