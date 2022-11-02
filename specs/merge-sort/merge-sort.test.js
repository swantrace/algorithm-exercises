/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/
// [1, 3, 5] [2, 4, 6]
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let arr = [];
  while (arr1[i] && arr2[j]) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  return [...arr, ...arr1.slice(i), ...arr2.slice(j)];
};

const mergeSort = (nums) => {
  const numsLength = nums.length;
  if (numsLength <= 1) {
    return nums;
  }
  return merge(
    mergeSort(nums.slice(0, Math.ceil(numsLength / 2))),
    mergeSort(nums.slice(Math.ceil(numsLength / 2), numsLength))
  );
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
