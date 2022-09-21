// Реалізуй функцію sumObjects, яка приймає необмежену кількість об'єктів та повертає об'єкт, який об'єднує всі введені об'єкти.

// Примітки:

// Усі властивості об'єкта матимуть лише числові значення
// Якщо ключі об'єктів співпадають, значення відповідних ключів сумуються
// Функція завжди повертає об'єкт
// Числа в об'єкті можуть бути додатніми і від'ємними
// Ти можеш скористатися rest оператором, щоб зібрати аргументи передані в функцію в один масив

// const obj = {};
// sumObjects()
// === {};
// sumObjects(obj) === {};

function sumObjects(...obj) {
  let result = {};
  const superObj = [...obj];

  for (const object of superObj) {
    for (const key in object) {
      if (!result[key]) {
        result[key] = object[key];
      } else {
        result[key] += object[key];
      }
    }
  }
  console.log("object ", result);
  return result;
}

//   for (const letter of str) {
//     if (!result[letter]) {
//       result[letter] = 1;
//     } else {
//       result[letter] += 1;

const first = { a: 2, b: 4 };
const second = { a: 2, b: 10 };
const third = { d: -5 };

sumObjects(first);
// === { a: 2, b: 4 };
sumObjects(first, third);
// === { a: 2, b: 4, d: -5 };
sumObjects(first, second, third);
//  === { a: 4, b: 14, d: -5 };
