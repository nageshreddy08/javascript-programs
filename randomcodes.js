/// --> Map, filter, reduce functions <--  ///


//--->Map function
const arr=[1,2,3,5,7]

const b=arr.map(ele=>ele*3)

const c = arr.map(ele=>ele>2)

console.log(b);
console.log(c);

//--->Filter Function

// const fruits=["apple","mango","watermelon","grapes"]

// const filteredList=fruits.filter(fruit=> fruit.length>7)

// const filteredFruits=fruits.filter(fruit=> 
//     fruit==="mango" || fruit==="grapes"
// )

// console.log(filteredList);
// console.log("Filtered fruits are: "+ filteredFruits)

const numArray=[1,2,3,4,5]

const filFunc=numArray.filter(num=>num>2)

console.log(filFunc);

//--->Reduce Function

//Reduce function accumulates the result into one value
//Example-1: Add the elements in an array
// const sampleArray=[20,30,40,60]

// const reducedArray=sampleArray.reduce(function (acc,curr){

// acc=acc+curr;
// return acc
// },0)

// console.log(reducedArray)

//Example-2:Find the maximum element in an array

// const arr2=[3,5,9,5]

// const res=arr2.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
// },0)
// console.log(res)

const users=[
    {name:"nag",age:27},
    {name:"meghana",age:26},
    {name:"shiva", age:3}
]

const op=users.reduce(function(acc,curr){
    if(curr.age>25){
        acc.push(curr.name)
    }
    return acc
},[])
console.log(op)