// Кілька людей стоять поспіль, розділені на дві команди. Перша людина потрапляє до команди 1, друга - до команди 2, третя - до команди 1 і так далі.

// Реалізуй функцію getRowWeights, яка приймає масив чисел (ваги людей) та повертає новий масив з двох цілих чисел, де перше - загальна вага команди 1, а друге - загальна вага команди 2.

// Примітки:

// Розмір масиву не менше 1.
// Усі числа додатні.
// Приклад:

function getRowWeights(arr) {
  let weightTeam1 = [];
  let weightTeam2 = [];
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      weightTeam1.push(arr[i]);
    } else {
      weightTeam2.push(arr[i]);
    }
  }
  arrResult.push(weightTeam1.reduce((a, b) => a + b, 0));
  arrResult.push(weightTeam2.reduce((a, b) => a + b, 0));
  console.log(arrResult);
  return arrResult;
}

// getRowWeights([10]);
// === [10, 0]
getRowWeights([10, 85, 90]);
// === [100, 85]
getRowWeights([8, 5, 9, 3]);
// === [17, 8]
getRowWeights([10]);
