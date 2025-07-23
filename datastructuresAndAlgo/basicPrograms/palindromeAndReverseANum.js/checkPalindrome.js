//Check given String is palindrome or not

function isPalindrome(data){
    let reversedString="";
    for(let i=data.length-1;i>=0;i--)
    {
        reversedString=reversedString+data[i];
    }
console.log(reversedString);
    if(reversedString==data){
        console.log("true")
    }
    else{
        console.log("false")
    }

};

isPalindrome("nagesh");

//Check given number is palindrome or not i.e., if a number is reversed then it should be equal to original
//ex:333==333 ->true
//ex:345==543 ->false

// function isPalindromeNumber(num){
//     let tempNum=num;//this is not required if we are only reversing a number
//     let reversedNumber=0;
//     while(num>0){
//         let remainder=num%10;
//         console.log("Remainder is: ",remainder);
//         reversedNumber=remainder+reversedNumber*10;
//         num=Math.floor(num/10);
//         //console.log("num is: ", num);
//     } 
//     console.log("Reversed number is: ", reversedNumber);
    
//     if(tempNum==reversedNumber){
//         //console.log(reversedNumber);
//         console.log("true");
//         console.log(`Given number ${tempNum} is a palindrome`)
//     }
//     else{
//         console.log("false");
//         console.log(`Given number ${tempNum} is not a palindrome`)

//     }
// };

// isPalindromeNumber(345)

