function swapNumbers(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp;
}

//let arr=[0,1,1,1,0,0,0,1,0]
function sortArray(arr){
let i=0;
let j=arr.length-1;
while(i<=j){   //we are just checking value at i, we dont matter what value is at j
    if(arr[i]==1){
        swapNumbers(arr,i,j);//swapping the numbers
        j--;   //decrementing the j, so that j will move backward
    }
    else{
        i++;  ///else we are incrementing i, so that it will move forward
    }
}
}
let arr=[0,1,1,1,0,0,0,1,0]
sortArray(arr)
console.log(arr)
