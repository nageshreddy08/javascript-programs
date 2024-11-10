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

//using reduce function
    let arr = ["apple", "mango",
        "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
      if (!acc.includes(curr)){
          acc.push(curr);
      }
      return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr));


