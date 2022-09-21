// В нас є коробка зі шкарпетками декількох кольорів. Ми беремо з неї по 2 шкарпетки одного кольору і відкладаємо. Перша пара може бути червона, друга зелена, третя знов червона.

// Напиши функцію countMatchingSocks, яка приймає масив чисел colors, де кожне число — це шкарпетка певного кольору, та повертає максимальну кількість пар (два однакових числа), яку можна забрати з коробки.

// Приклади:

// [10, 10] - одна пара шкарпеток кольору 10.
// [2, 2, 2, 2, 2] - дві пари шкарпеток кольору 2.
// [10, 20, 30, 40, 50, 60] - всі шкарпетки різних кольорів - 0 пар.
// [10, 20, 30, 10, 20, 60] - 2 пари. Одна кольору 10 і одна кольору 20.

function countMatchingSocks(colors) {
  let result = 0;
  let colorPiles = {};
  for (let color of colors) {
    if (!colorPiles[color]) {
      colorPiles[color] = 1;
    } else {
      colorPiles[color] += 1;
    }
  }

  for (let key in colorPiles) {
    result += Math.floor(colorPiles[key] / 2);
  }
  console.log(result);
  return result;
}

countMatchingSocks([10, 10]);
countMatchingSocks([2, 2, 2, 2, 2]);
countMatchingSocks([10, 20, 30, 40, 50, 60]);
countMatchingSocks([10, 20, 30, 10, 20, 60]);
