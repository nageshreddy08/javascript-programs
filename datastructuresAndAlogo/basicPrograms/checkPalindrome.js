//Check given String is palindrome or not

// function isPalindrome(data){
//     let reversedString="";
//     for(let i=data.length-1;i>=0;i--)
//     {
//         reversedString=reversedString+data[i];
//     }

//     if(reversedString==data){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }

// };

//isPalindrome("nahii");

//Check given number is palindrome or not

function isPalindromeNumber(num){
    let tempNum=num;//this is not required if we are only reversing a number
    let reversedNumber=0;
    while(num>0){
        let remainder=num%10;
        console.log(remainder);
        reversedNumber=remainder+reversedNumber*10;
        num=Math.floor(num/10);
        console.log(num)
    } 
    
    if(tempNum==reversedNumber){
        console.log(reversedNumber);
        console.log("true");
    }
    else{
        console.log("false");
    }
};

isPalindromeNumber(633)

