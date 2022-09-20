// Напиши функцію countLettersInString, яка приймає рядок str і повертає об'єкт, в якому ключ - літери з str (всі в нижньому регістрі), а значення - кількість цих літер в str.

// Наприклад: countLettersInString('arithmetics') => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

function countLettersInString(str) {
  let result = {};
  for (const letter of str) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  console.log(result);
  return result;
}

countLettersInString("bag");

// function countBoxes(boxes) {
//   let obj = {};
//   for (const box of boxes) {
//     if (!obj[box]) {
//       obj[box] = 1;
//     } else {
//       obj[box]++;
//     }
//   }
//   console.log(obj);
//   return obj;
