function quickSort(arr, start = 0, end = arr.length - 1){
  let partitionIndex = start;

  function partition(arr) {
    // console.log(`entered partition`)
    console.log(`array to be partitioned: ${arr}`)
    let pivot = arr[end];
    // console.log(`${pivot}`);
    for (let i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        let temp = arr[i];
        arr[i] = arr[partitionIndex];
        arr[partitionIndex] = temp;
        partitionIndex++
      }
    }
    let temp = arr[end] //put pivot in to temp
    arr[end] = arr[partitionIndex] //put current location of partitionIndex to pivot locale
    arr[partitionIndex] = temp // put pivot to current partitionIndex
    console.log(`partitioned ARRAY: ${arr}`)
    return partitionIndex
  }

  if (start < end){
    console.log(" IF RAN");
    partition(arr)
    quickSort(arr, start, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, end)
    return arr
  }
}
// ABOVE FEELS MEH BUT CURRENTLY WORKS! //
// PROPS TO mycodeschool FOR THE PARTIAL WALK THROUGH//



  // console.log(`initial array is: ${arr}`)
  // console.log(`arr[0] IS: ${arr[0]}`);
  // let pivot =  arr[arr.length-1];
  // console.log(`PIVOT IS: ${pivot}`);
  // let leftPart = [];
  // let rightPart = [];
  // let sortedArray = [];
  //
  // if (arr.length > 1) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < pivot) {
  //       leftPart.push(arr[i])
  //       console.log(`leftPart after push: ${i} :::: ${leftPart}`);
  //     } else if (arr[i] >= pivot) {
  //       rightPart.push(arr[i])
  //       console.log(`rightPart after push: ${i} :::: ${rightPart}`);
  //     }
  //   }
  //   // TODO::::: FIND INFINITE LOOP::::::
  //   quickSort(leftPart); //need to recursively divide both sides around pivot
  //   quickSort(rightPart);
  // } else {
  //   sortedArray.push(arr)
  //   return sortedArray
  // }
  //
  // return sortedArray

module.exports = quickSort;
