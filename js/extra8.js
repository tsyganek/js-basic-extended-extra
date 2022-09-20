// У цьому завданні тобі потрібно показати юзерам хто з їх друзів онлайн і готовий чатитись! Створи функцію whoIsOnline, яка приймає масив об'єктів friends і визначає хто з них online, offline чи away. Якщо юзер має статус online, але його не було в мережі більш ніж 10 хвилин (lastActivity > 10), то можна вважати, що фактично його статус вже away.

// Приклад вхідних даних:

// [{
//   username: 'Alice',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// Результат функції whoIsOnline:

// {
//   online: ['Alice'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Якщо в чаті немає активних юзерів, то результат має виглядати ось так:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Якщо ваших друзів зовсім немає в чаті, то до функції прийде порожній масив []. У цьому випадку потрібно повернути порожній об'єкт {}.

function whoIsOnline(friends) {
  let statusResult = {};
  let onlineCount = 0;
  let online = [];
  let offlineCount = 0;
  let offline = [];
  let awayCount = 0;
  let away = [];

  for (let friend of friends) {
    if (friend.status === "online" && friend.lastActivity <= 10) {
      online.push(friend.username);
      onlineCount += 1;
    } else if (friend.status === "offline") {
      offline.push(friend.username);
      offlineCount += 1;
    } else {
      away.push(friend.username);
      awayCount += 1;
    }
  }

  if (onlineCount !== 0) {
    statusResult.online = online;
  }

  if (offlineCount !== 0) {
    statusResult.offline = offline;
  }
  if (awayCount !== 0) {
    statusResult.away = away;
  }

  console.log(statusResult);
  return statusResult;
}

whoIsOnline([
  {
    username: "Alice",
    status: "online",
    lastActivity: 10,
  },
  // {
  //   username: "Lucy",
  //   status: "offline",
  //   lastActivity: 22,
  // },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
]);
