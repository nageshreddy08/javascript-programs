//program to find frequency of characters in a string
let str="nageswara"
let freq={};
for(let char of str){
    if(freq[char]){
        freq[char]+=1;
    }
    else{
        freq[char] = 1;
    }
}

console.log(freq)
