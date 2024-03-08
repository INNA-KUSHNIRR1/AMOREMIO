// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let totalSum = 0;
//   let counter = 0;
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       counter += 1;
//       totalSum += arg;
//     }
//   }
//   return totalSum / counter;
// }
// console.log(caclculateAverage(5, 15, 10, 'hello'));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
//

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return;
//   }
//   //
//   let smallerNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallerNumber) {
//       smallerNumber = number;
//     }
//   }
//   return smallerNumber;
// }
// console.log(findSmallerNumber(numbers));

//
//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function calculateTotalSalary(salaries) {
//   let sum = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(calculateTotalSalary(salaries));

//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27)); //42
// console.log(add(12, 4, 11, 48)); //75
// console.log(add(32, 6, 13, 19, 8)); //78

// function multiply(first, second, fierst, forr, ...args) {
//   console.log(first, second, fierst, forr, args);
// }

// multiply(1, 2, 7, 8, 'hello');
// multiply('nullooo');
// multiply(1, 2, 3, 4);

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const arg of args) {
//     if (value < arg) {
//       sum += arg;
//     }
//   }
//   return sum;
// }
// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

// function getExtremeScores(scores) {
//   const checkScores = {
//     best: 0,
//     worst: 0,
//   };
//   checkScores.best = Math.max(...scores);
//   checkScores.worst = Math.min(...scores);

//   return checkScores;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //{ best: 81, worst: 4 }

// const temps = [14, -4, 25, 8, 11, 5];

// // Це точна, але незалежна копія масиву temps
// const copyTemps = [...temps];
// console.log(copyTemps); // [14, -4, 25, 8, 11]

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.getPotions());

//sergey
// 6)
//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// const account = {
//   // current balance
//   balance: 0,
//   // histoty of transactions
//   transactions: [],

//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       id: window.crypto.randomUUID(),
//       type: type,
//       amount: amount,
//     };
//   },

//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транцякції.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
//     this.transactions.push(transaction);
//     // to test method  getTransactionDetails
//     return transaction.id;
//   },

//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транцякції.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('недостатньо коштів на рахунку');
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
//     this.transactions.push(transaction);
//   },

//   //Метод повертає поточний баланс
//   getBalance() {
//     return this.balance;
//   },

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   //Метод повертає кількість транзакцій певного типу транзакції з усієї історії транзакцій
//   getTransactionType(type) {
//     const transactionsWithType = [];
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) transactionsWithType.push(transaction);
//     }
//     return transactionsWithType;
//   },
// };

// account.deposit(555);
// account.deposit(666);
// account.withdraw(100);
// account.deposit(777);
// account.withdraw(200);
// console.log(
//   'getTransactionDetails',
//   account.getTransactionDetails(account.deposit(0))
// );
// console.log('transactions', account.transactions);
// console.log('balance', account.balance);
// console.log(
//   'getTransactionType',
//   account.getTransactionType(Transaction.DEPOSIT)
// );

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Mango')); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());
// console.log(makePizza);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage('Royal Grand', makePizza); // повертає рядок "Pizza Royal Grand is being prepared, please wait..."

// console.log(makeMessage('Royal Grand', makePizza));
// makeMessage('Ultracheese', deliverPizza); //повертає рядок "Delivering Ultracheese pizza."
// console.log(makeMessage('Ultracheese', deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Royal Grand', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Index ${i}, value ${numbers[i]}`);
// // }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index, array) {
//   console.log(`Index ${index}, value ${number}, ${array}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (element) {
//     totalPrice += element;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// function filterArray(numbers, value) {
//   const arrayNew = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       arrayNew.push(number);
//     }
//   });
//   return arrayNew;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100)); // повертає 500
// console.log(calculateTotalPrice(8, 60)); //повертає 480
// console.log(calculateTotalPrice(3, 400)); //повертає 1200

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

// function changeEven(numbers, value) {
//   const numbersNew = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       element = element + value;
//     }
//     numbersNew.push(element);
//   });

//   return numbersNew;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // повертає новий масив [144, 13, 81, 192, 136, 154]

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log(genres);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserEmails = users => users.map(user => user.email);

// console.log(getUserEmails(users));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'brown'));

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => user.age <= maxAge && user.age >= minAge);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// const arr = [2, 4, 6];
// const result = arr.filter(el => el <= 2);
// console.log(result);

// const isEveryUserActive = users => users.every(user => user.isActive === true);
// console.log(isEveryUserActive(users));

// const isAnyUserActive = users => users.some(user => user.isActive === true);
// console.log(isAnyUserActive(users));

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previouse, playtime) => {
//   return previouse + playtime;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
// console.log(totalPlayTime);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = users =>
//   users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
// console.log(calculateTotalBalance(users));

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrde );

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inDescendingScoreOrder);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = books.toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = books.toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// // console.log(pizzaPalace.checkPizza('Smoked'));
// console.log(pizzaPalace.order('Four meats'));

// function foo() {
//   console.log(this);
// }

// foo(5); // window

// const user = {
//   username: 'Poly',
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

// 'use strict';

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// 'use strict';

// const book = {
//   updateAuthor(newAuthor) {
//     console.log(this);
//     // ...
//   },
// };

// book.updateAuthor('Jacob');

// const book = {
//   updateTitle(newTitle) {
//     console.log(this);
//   },
// };

// const update = book.updateTitle;

// update('Lord Of The Rings');

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = 'John';
// const context = {
//   person: 'Alice',
// };

// greet.call(context, 'Bob');
// greet.call(context, 'Inna');

('use strict');

// const customer = {
//   username: 'Jacob',
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: 'Alice',
// };

// const greet = sayHello.bind(user);

// greet('Hello');

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

// 'use strict';

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount);

// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo: ', this);
//     };

//     foo();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// const a = () => {
//   console.log(this);
// };

// function b() {
//   a();
// }

// b.call({ user: 'Mango', kod: '555' });
// const animal = {
//   legs: 4,
//   nose: 1,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// animal.color = 'black';

// console.log(animal.isPrototypeOf(dog)); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog);
// console.log(dog.hasOwnProperty('nose'));

// const star = {
//   color: 'red',
//   form: 'hexagonal',
//   animation: true,
// };

// const square = Object.create(star);
// square.effect = '3d';
// square.name = 'zero';

// for (const key in square) {
//   console.log(key);
// if (square.hasOwnProperty(key)) {
// }
// }

// console.log(square);

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// class Car {}
// const newCar = new Car();
// console.log(newCar);

// const person = { name: 'Mango' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// // console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

// const person = { name: 'Inna Kushnir' };

// function getAcquaited(profession) {
//   return `Hi, I'm ${this.name} and I'm a ${profession}`;
// }
// console.log(getAcquaited.call(person, 'FullStack Developer'));

// 'use strict';

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')
// const person = { name: 'Mango' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// // console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

//

// const Car = function (color, price, quantity) {
//   this.color = color;
//   this.price = price;
//   this.quantity = quantity;
// };

// Car.prototype.getTotalPrice = function (price, quantity) {
//   return this.price * this.quantity;
// };

// Car.prototype.changeColor = function (color) {
//   this.color = color;
// };
// const newCar = new Car('red', 1500, 3);
// // console.log(newCar);

// const newCar2 = new Car('green', 1200, 4);
// // console.log(newCar2);

// const newCar3 = new Car('black', 1700, 2);
// // console.log(newCar3);

// newCar.getTotalPrice();
// // console.log(newCar2);
// newCar2.changeColor('white');
// // console.log(newCar2);
// Car.email = 'hhh@gmail.com';
// console.log(Car);

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const newCar = new Car("Audi", "Q3", 36000);
// new Car('BMW', 'X5', 58900);
// new Car('Nissan', 'Murano', 31700);
// console.log(new Car('BMW', 'X5', 58900));

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const newCar = new Car('Audi', 'Q3', 36000);
// console.log(newCar);

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
// User.getNameUser();

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #maxPrice = 50000;

//   constructor({ price }) {
//     this.price = price;
//   }
//   checkPrice(price) {
//     if (price === maxPrice) {
//       return `Success! Price is within acceptable limits`;
//     }
//     return 'Error! Price exceeds the maximum';
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//   const userName = prompt('WHAT is yuor name?');
//   if (!userName) {
//     return alert('bad name');
//   }
//   callback(userName);
// };
// const greet = name => {
//   alert(`Hi ${name}`);
// };
// letMeSeeYourName(greet);

//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// // makeDish('Poly', 'borsch');

// const makeShef = shefName => {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };
// const poly = makeShef('Poly');
// console.dir(poly);
// poly('salat');
// poly('dolce');

// const mango = makeShef('Mango');
// mango('caffe');

//массив обьектов
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// // Отримати масив імен всіх користувачів (поле name).
// // console.log(getUserNames(usersData))
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames(usersData) {
//   return usersData.map(user => user.name);
// }
// console.log(getUserNames(users));

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// function getUsersWithEyeColor(users, color) {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// }

// console.log(getUsersWithEyeColor(users, 'blue'));

// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// function getUsersWithGender(users, gender) {
//   return users.reduce((acc, user) => {
//     console.log(acc);
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// }
// console.log(getUsersWithGender(users, 'male'));

// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// const getInactiveUsers = users => users.filter(user => !user.isActive);
// console.log(getInactiveUsers(users));

//*************11111
// отримати Масив імен всіх користувачів які мають один із зазначеним ім'ям.

// function getUsersWithFriend(users, friend) {
//   return users.filter(user => user.friends.includes(friend));
// }

// const getUsersWithFriend = (users, friend) => {
//   return users.filter(user => user.friends.includes(friend));
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
// ***************22222
// Отримати масив користувачів віком від min до max

// function getUsersWithAge(users, min, max) {
//   return users.filter(user => min <= user.age && user.age <= max);
// }

// const getUsersWithAge = (users, min, max) =>
//   users.filter(user => user.age >= min && user.age <= max);

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age >= min && user.age <= max);
// };

// console.table(getUsersWithAge(users, 20, 30));
// // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.table(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// **************333333
// Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

// ************444444
// KAK?

// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
// const getNamesSortedByFriendsCount = users => {
//   users
//     .flatMap(user => user.friends)
//     .toSorted(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.Friends.length
//     )
//     .map(user => user.name);
// };
// console.log(getNamesSortedByFriendsCount(users));
//[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = users => users.flatMap(user => user.skills);
console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (price < Car.#maxPrice) {
//       return `Success! Price is within acceptable limits`;
//     }
//     return 'Error! Price exceeds the maximum';
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(36000)); // повертає рядок "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(18000)); // повертає рядок "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(64000)); // повертає рядок "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(57000)); // повертає рядок "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

// get email() {
//   return this.email;
// }

// set email(newEmail) {
//   this.email = newEmail;
// }
// }
// class Admin extends User {
//   static role = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

// console.log(Admin.role.BASIC); // повертає рядок "basic"
// console.log(Admin.role.SUPERUSER); // повертає рядок "superuser"

// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts); // ['post-1', 'post-2']

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   blacklistedEmails = [];
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   constructor({ email, access }) {
//     super(email);
//     this.access = access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// const user = {
//   id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//   name: 'Ross Vazquez',
//   email: 'rossvazquez@xinware.com',
//   eyeColor: 'green',
//   friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   isActive: false,
//   balance: 3793,
//   skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//   gender: 'male',
//   age: 24,
// };

// console.log(user.friends.length);
