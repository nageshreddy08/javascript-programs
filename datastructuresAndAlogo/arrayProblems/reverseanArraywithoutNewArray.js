
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap the elements at left and right indices
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]
  