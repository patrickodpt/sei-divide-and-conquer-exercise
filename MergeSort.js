function mergeSort(arr) {
  // console.log(`initial array: ${arr}`);
  let lengthArr = arr.length
  let sortedArray = [];

  if (lengthArr < 2) {
    return arr
  } else {
    let mid = Math.floor((lengthArr / 2));
    let leftArray = Array(mid);
    let rightArray = Array(lengthArr - mid);

    for (let i = 0; i < mid; i++) {
      leftArray[i] = arr[i]
      // console.log(`left array: ${leftArray}`);
    }
    for (let i = mid; i < lengthArr; i++) {
      rightArray[i - mid] = arr[i]
      // console.log(`right array: ${rightArray}`);
    }
    sortedArray = merge(mergeSort(leftArray), mergeSort(rightArray))
  }

  return sortedArray

  // let arrHolder =[];
  // function mergeHelp() {
  //   while (arrHolder.length < ogArrLength) {
  //     //gets current middle index
  //     let halfArrIndex = (arr.length / 2) - 1
  //     //splices and pushes to arrHolder
  //     let rightArray = Array.of(arr.splice(halfArrIndex))
  //     let leftArray = Array.of(arr)
  //     if (arrHolder.length > 0) {
  //       arrHolder.splice()
  //     }
  //   }
  // }
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  // console.log(`I'M TRYING TO MERGE ${arr1} and ${arr2}`);
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
