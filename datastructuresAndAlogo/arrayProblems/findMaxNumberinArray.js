
//program to find max element in array
// function findMaxNum(arr){
//     if (arr.length===0) return null;

//     let max=arr[0];

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//       }
//     }
//     return max;
// }

// console.log(findMaxNum([2,1,23,5,2,6]))

//using reduce method
let arr=[3,4,2,6,77,22,111]

let maxNum=arr.reduce((acc,curr)=>{
    if(arr.length===0) return null;
if(curr>acc){
    return curr;
}
else{
   return acc;
}

},null)
console.log(maxNum);