// Функція getLeaders приймає масив чисел, та повертає масив Лідерів

// Пояснення: Число вважається Лідером, якщо воно більше за суму всіх елементів справа від нього.

// Примітки:

// Вхідний масив містить не менше 3 елементів
// Масив вхідних чисел може містити як позитивні, так і негативні числа
// Числа можуть повторюватися
// Масив який повертається, має містити числа в тому ж порядку, в якому вони зустрічаються у початковому масиві
// Відсутність елементів справа від числа розцінюється як 0
// Приклади:

function getLeaders(numbers) {
  let newArray = [];
  numbers.forEach(function (item, i, arr) {
    let result = arr.slice(i + 1, arr.length).reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    if (item > result) {
      newArray.push(item);
    }
  });
  console.log(newArray);
  return newArray;
}

getLeaders([1, 2, 3, 4, 0]);

// [4]

// 4 is greater than the sum all the elements to its right side
// The last element 0 is equal to right sum of its elements (abstract zero).
getLeaders([16, 17, 4, 3, 5, 2]);

// === [17, 5, 2]

// 17 is greater than the sum all the elements to its right side
// 5 is greater than the sum all the elements to its right side
// The last element 2 is greater than the sum of its right elements (abstract zero)
