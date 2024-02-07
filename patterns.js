function pattern(n){

    //Logic to print pattern

    for(let row=1;row<=n;row+=1)
    {
//concatenate "*" --> n-row+1 times
let str="";

for(let col=1;col<=n-row+1;col+=1){

    str+="*";

}
console.log(str);
    }

}
pattern(5);