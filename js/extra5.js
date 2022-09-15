// Реалізуй функцію getArrayProduct, яка отримує масив чисел numbers та повертає масив такого ж розміру, де numbers[i] дорівнює добутку усіх елементів масиву справа і зліва від цього елемента.

// Примітки:

// Початковий масив містить не менше 2 елементів
// Масив містить тільки додатні числа
// Числа можуть повторюватися
// Приклади:

function getArrayProduct(numbers) {
  let arr1 = [];
  let arr2 = [];
  let resultArray = [];
  numbers.forEach(function (item, i, arr) {
    arr1 = arr.slice(0, i);
    arr2 = arr.slice(i + 1, arr.length);
    let arr3 = arr1.concat(arr2);
    let result = arr3.reduce((a, b) => a * b);
    resultArray.push(result);
  });
  console.log(resultArray);
  return resultArray;
}

getArrayProduct([1, 5, 2]);
// === [10,2,5]

// The first element 10 is the product of all array's elements except the first element 1
// The second element 2 is the product of all array's elements except the second element 5
// The third element 5 is the product of all array's elements except the third element 2
getArrayProduct([12, 20]);
// === [20,12]

// The first element in array 20 is the product of all array's elements except the first element
// The second element 12 is the product of all array's elements except the second element
