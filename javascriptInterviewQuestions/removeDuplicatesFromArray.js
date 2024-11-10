//using reduce function
//     let arr = ["apple", "mango",
//         "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//   let unique = arr.reduce(function (acc, curr) {
//       if (!acc.includes(curr)){
//           acc.push(curr);
//       }
//       return acc;
//   }, []);
//   return unique;
// }
// console.log(removeDuplicates(arr));

//---->using for-each method<------
let arr2=["apple", "mango","mango",
    "apple", "orange", "nag", "meg"];

    function removeDups(arr){
        let unique=[];
        arr.forEach(ele=>{
            if(!unique.includes(ele)){
                unique.push(ele)
            };
        })
        return unique;
    }
    console.log(removeDups(arr2));

//USing Set Method
// let arr2=["apple", "mango",
//        "apple", "orange", "mango", "mango"];

//        function removeDups(){
//         return [...new Set(arr2)]
//        };

//        console.log(removeDups());