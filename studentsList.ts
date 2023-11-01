const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const countFruits = (arr) => {
  let countOb = {};
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    countOb[char] = countOb[char] ? countOb[char] + 1 : 1;
  }
  for (const key in countOb) {
    newArray.push(key);
  }
  return newArray;
};

console.log(countFruits(fruits));

const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "stas", age: 18 },
];
const bubble = [11, 3, 7, 8, 111];

const studentsList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].age > arr[j + 1].age) {
        let tmp = arr[j].age;
        arr[j].age = arr[j + 1].age;
        arr[j + 1].age = tmp;
      }
    }
  }
  return arr;
};
console.log(studentsList(students));
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = function (users) {
  return users.map((el) => el.name);
};

console.log(names); // Вася, Петя, Маша
