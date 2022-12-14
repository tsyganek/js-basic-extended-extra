// Напиши функцію getProductId, яка приймає рядок, що представляє собою URL-адресу сторінки цього товару у вашому Інтернет-магазині і повертає ідентифікатор товару з рядка.

// Усі URL-адреси відформатовані однаково, спочатку є домен exampleshop.com, потім у нас іде назва товару, розділена тире (-), потім іде буква p, що вказує на початок ідентифікатора товару, потім фактичний ідентифікатор (без обмеження довжини) і, нарешті, 8-значне представлення дати, коли товар було додано, а потім - .html.

// Назва товару також може містити літеру p або цифри.
// Ваш код повинен повернути ідентифікатор продукту у вигляді рядка.
// Усі URL-адреси будуть дійсними URL-адресами продуктів, і всі будуть відповідати вищевказаній структурі.

function getProductId(url) {
  let arr = url.split("-");
  return arr[arr.length - 2];
}

getProductId("exampleshop.com/fancy-coffee-cup-p-90764-12052019.html");
// >> productID is 90764

getProductId(
  "exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html"
);
// >> productID is 147

getProductId(
  "exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html"
);
// >> productID is 942312798
