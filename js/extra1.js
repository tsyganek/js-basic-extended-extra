// У Боба на столі лежать камені розміщені в ряд. Кожен з них може бути червоним, зеленим або синім і представлений символом R, G або B відповідно.

// Допоможи Бобу знайти мінімальну кількість каменів, які він повинен прибрати зі столу, щоб камені однакового кольору не стояли поруч.

// Приклади:

function colorStones(stones) {
  let stonesOut = 0;
  for (let i = 0; i < stones.length - 1; i++) {
    if (stones[i + 1] === stones[i]) {
      console.log("yes, they are the same");
      stonesOut += 1;
    }
  }
  return stonesOut;
}

colorStones("RRGB");
// 'R' потрібно прибрати; в результаті залишиться 'RGB'

colorStones("RRGGB");
//  === 2 // 'R' і 'G' потрібно прибрати; в результаті залишиться 'RGB'

colorStones("RRRRGB");
// 'RRR' потрібно прибрати; в результаті залишиться 'RGB'

colorStones("RGBRGBRGGB");
//  === 1; // 'G' потрібно прибрати в результаті залишиться 'RGBRGBRGB'

colorStones("RGGRGBBRGRR");
//  === 3; // 'G', 'B' і 'R' потрібно прибрати; в результаті залишиться 'RGRGBRGR'

colorStones("RRRRGGGGBBBB");
// === 9; // 'RRR', 'GGG' і 'BBB' потрібно прибрати; в результаті залишиться 'RGB'
