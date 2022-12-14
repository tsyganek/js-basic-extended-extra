// Напишіть функцію findSmallerDigits(arr), яка приймає масив чисел arr та повертає новий масив чисел resultArr. Кожне число нового масиву resultArr[i] - це кількість чисел праворуч від arr[i], які менші за arr[i].
function findSmallerDigits(arr) {
  let newArr = [];

  arr.forEach(function (item, i, arrr) {
    let arr2 = arrr.slice(i + 1, arrr.length);

    let result = [];
    for (let j = 0; j < arr2.length; j++) {
      if (item > arr2[j]) {
        result.push(arr2[j]);
      }
    }
    newArr.push(result.length);
  });
  console.log(newArr);
  return newArr;
}

findSmallerDigits([5, 4, 3, 2, 1]);
// === [4, 3, 2, 1, 0]
findSmallerDigits([1, 2, 0]);
// === [1, 1, 0]
findSmallerDigits([1, 1, -1, 0, 0]);
// === [3, 3, 0, 0, 0]
findSmallerDigits([5, 4, 7, 9, 2, 4, 4, 5, 6]);
// === [4, 1, 5, 5, 0, 0, 0, 0, 0]
