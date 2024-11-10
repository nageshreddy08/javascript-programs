
//Before Rest Operator
const arr = [1, 2, 3, 4, 5];

const first = arr[0]; // Extracting the first element
const rest = arr.slice(1); // Collecting the rest of the elements

console.log("First element:", first); // 1
console.log("Rest of the elements:", rest); // [2, 3, 4, 5]

//After Rest Operator
const[firstEle, ...restEle]=[1,2,3,4,5];
console.log("First Ele :", firstEle);
console.log("Rest Elements:", restEle);
;

// Spread Operator
const arr1=[11,12,13];
const arr2=[14,15,16];
const combinedArray=[...arr1,...arr2];
console.log("after combining arrays:",combinedArray);
