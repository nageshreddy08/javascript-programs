//Using single for loop

// let check_duplicate_in_array = (input_array) => {
//     let duplicate_elements = [];
//     for (element of input_array) {
//         if (input_array.indexOf(element)!== input_array.lastIndexOf(element)) {
//             console.log(" index : ",input_array.indexOf(element))
//             console.log("last index : ",input_array.lastIndexOf(element))
//             duplicate_elements.push(element);
//         }
//     }
//     return [...new Set(duplicate_elements)];
// };
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6,1,4];
// console.log(check_duplicate_in_array(arr));

//Using nested for in loop
// let check_duplicate_in_array = (input_array) => {
//     let duplicate_elements = []
//     for (num in input_array) {
//         for (num2 in input_array) {
//             if (num === num2) {
//                 continue;
//             }
//             else {
//                 if (input_array[num] === input_array[num2]) {
//                     duplicate_elements.push(input_array[num]);
//                 }
//             }
//         }
//     }
//     return [...new Set(duplicate_elements)];
// }
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
// console.log(check_duplicate_in_array(arr));

//-->Remove duplicates from an array using reduce function
    let arr = ["apple", "mango",
        "apple", "orange", "mango", "mango", "Grapes"];
let arr2=[2,3,4,2,5,4]
function removeDuplicates(arr) {
  let unique = arr2.reduce(function (acc, curr) {
      if (!acc.includes(curr)){
          acc.push(curr);
      }
      return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr2));

  //--->Find duplicated using filter
//  function findDuplicatesFilter(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) !== index);
// }

// const numbers = [1, 2, 3, 2, 4, 1, 3];
// const duplicates = findDuplicatesFilter(numbers);
// console.log(duplicates); // Output: [2, 3]

// const numbers = [1, 2, 3, 2, 4, 5, 3];

//     let dups=numbers.filter((item,index)=>{
//         numbers.indexOf(item)!==index
//         console.log(numbers.indexOf(item));
//     })

//--->Find duplicates from an array using Reduce method
// function findDuplicates(arr) {
//   const seen = {};
  
//   const duplicates = arr.reduce((acc, current) => {
//     if (seen[current]) {
//       if (!acc.includes(current)) {
//         acc.push(current);
//       }
//     } else {
//       seen[current] = true;
//     }
//     return acc;
//   }, []);
  
//   return duplicates;
// }
// const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 1];
// const result = findDuplicates(numbers);

// console.log(result); // Output: [2, 3, 1]
