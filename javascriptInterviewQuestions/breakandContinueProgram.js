

// for(let i=1;i<=5;i++){
//     if(i==4){
//         console.log(i)
//         break;
//         console.log("Hello from if")
//     }
//     else{
//         //.log(i)
//         //console.log("Hello from else")
//         continue;
//         console.log("Hello2 from else")
//     }
// }

for(let j=1;j<=5;j++){
if(j==3){
    console.log("Printing from IF", j);
    //;// if we use continue, code execution stops and next line of code does not get executed in that block(comes out of block) 
    //but controls goes to for loop and iteration continues
    break;
    //If we use break, the code will not gets executed further and it completely stops the execution and stops loop iteration.
    //output:1,2,Printing from IF 3
console.log("after continue")
console.log("HII");
}
 else{
     console.log("Printing from else block" ,j);
 }
}