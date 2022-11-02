/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getLength(number) {
  return String(number).length;
}

function getDigit(number, place, longestNumber) {
  if (place > longestNumber) {
    return 0;
  } else {
    return (
      ((number % 10 ** (place + 1)) - (number % 10 ** place)) / 10 ** place
    );
  }
}

function getLongestNumber(array) {
  const maxNumber = Math.max(...array);
  return getLength(maxNumber);
}

function radixSort(array) {
  const longestNumber = getLongestNumber(array);
  const buckets = Array(10)
    .fill()
    .map(() => []);
  let result = [...array];
  for (let i = 0; i < longestNumber; i++) {
    while (result.length) {
      const num = result.shift();
      buckets[getDigit(num, i, longestNumber)].push(num);
    }

    for (let bucket of buckets) {
      while (bucket.length) {
        result.push(bucket.shift());
      }
    }
  }
  return result;
}

// unit tests
// do not modify the below code
test("radix sort", function () {
  test("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  test("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    console.log(nums);
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort((a, b) => a - b));
  });
});
