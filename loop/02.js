// write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [2, 4, 6, 3, 8, 9, 30];

function searchElement(val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

const res = searchElement(10);
console.log(res);

// write a function to return the count of  negative numbers from an array

{
  let arr = [3, 4, -1, -10, 2, 9];
  let count = 0;
  function negativeNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  }

  const res = negativeNumber(arr);
  console.log(res);
}

// 3 -> write a function that return the largest number from an array .

{
  // let arr = [12, 2, 50, 1, 11, 90, 47];
  let arr = [12];


  function largest(arr) {

    const result = arr.length === 1 ? arr[0] : arr.length === 0 && null;
    return result;

    let largestValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largestValue) {
        largestValue = arr[i];
      }
    }
    return largestValue;
  }

 const res =   largest(arr);
 console.log("largest value ", res);
}

// 3 -> write a function that return the smallest number from an array .

{
    // let arr = [12, 2, 50, 1, 11, 90, 47];
  let arr = [];


  function smallest(arr) {

    const result = arr.length === 1 ? arr[0] : arr.length === 0 && null;
    return result;

    let smallestValue = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
      }
    }
    return smallestValue;
  }

 const res =   smallest(arr);
 console.log("smallest value ", res);
}

