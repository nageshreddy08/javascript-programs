function reverseString(str){
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString=reversedString+str[i];
    }
    console.log(reversedString);
};

reverseString("hello");