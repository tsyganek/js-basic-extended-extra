// Караул, когось вбили!

// Тобі вдалося трохи звузити список підозрюваних у вбивстві, адже, на щастя, ти знаєш, з ким кожен із них бачився у той день.

// Реалізуй функцію getKiller, яка приймає об'єкт підозрюваних suspects, де у кожного підозрюваного є список людей, з якими він зустрічався. Цей об'єкт виглядає ось так:

// {
//   'James': ['Jacob', 'Bill', 'Lucas'],
//   'Johnny': ['David', 'Kyle', 'Lucas'],
//   'Peter': ['Lucy', 'Kyle']
// }
// Окрім списку підозрюваних, функція також приймає масив жертв dead:

// ['Lucas', 'Bill']
// Тобі потрібно вирахувати вбивцю і повернути його ім'я (вбивця завжди працює наодинці). У нашому випадку це James, адже він єдиниий, хто бачив обох вбитих (Lukas і Bill).

// Якщо вбивцю не знайдено, то функція нічого не повертає.

function getKiller(suspects, dead) {
  for (let key in suspects) {
    let victims = 0;
    for (let deadPerson in dead) {
      if (suspects[key].includes(dead[deadPerson])) {
        victims += 1;
        if (victims === dead.length) {
          console.log(key);
          return key;
        }
      }
    }
  }
}

getKiller(
  {
    Johnny: ["David", "Kyle", "Lucas"],
    James: ["Jacob", "Bill", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
);

getKiller(
  {
    Tim: ["Bart", "Laura", "Helen"],
    Bob: ["Edward", "Mike", "Helen"],
    Margaret: ["Amy", "Laura"],
  },
  ["Helen", "Mike"]
);

getKiller({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]);

getKiller(
  {
    Brad: ["Sarah"],
    Megan: ["Ben", "Kevin"],
    Finn: ["James"],
  },
  ["Alice"]
);
