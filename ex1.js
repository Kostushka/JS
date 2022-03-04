// Идентификаторы
let name = 'Nastya';
const year = 1998;
const greeting = (name) => {
    console.log(`Hi, ${name}`);
};
greeting(name);
// Циклы
const range = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(range(15, 30));

const rangeOdd = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(rangeOdd(15, 30));

// Функции
const average = (a, b) => (a + b) / 2;
console.log(average(1, 3));

const square = (a) => a ** 2;
console.log(square(4));

const cube = (a) => a ** 3;
console.log(cube(2));

const calculate = () => {
    const arr = [];
    for (let i = 0; i <= 9; i++) {
        const res = average(square(i), cube(i));
        arr.push(res);
    }
    return arr;
};
console.log(calculate());

// Объекты
const fn = () => {
    const obj1 = {
        name: 'N',
    };
    let obj2 = {
        name: 'N',
    };
    console.log((obj1.name = 'K'));
    console.log((obj2.name = 'L'));
    console.log((obj2 = { age: 20 }));
};
fn();

const createUser = (name, city) => ({
    name,
    city,
});
console.log(createUser('Mark', 'Moscow'));

// Класс
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const user = new User('John');
user.sayHello();

// Коллекции
const phonebook = [
    { name: 'N', phone: 797872761385 },
    { name: 'M', phone: 797872189382 },
];

const findPhoneByName = (name) => {
    for (let obj of phonebook) {
        if (obj.name === name) {
            return obj.phone;
        }
    }
};
console.log(findPhoneByName('M'));

const phonebook2 = {
    N: '797872761385',
    M: '797872189382',
};

const findPhoneByName2 = (name) => {
    for (let key in phonebook2) {
        if (key === name) {
            return phonebook2[key];
        }
    }
};
const findPhoneByName3 = (name) => {
    return phonebook2[name];
};
console.log(findPhoneByName2('N'));
console.log(findPhoneByName3('M'));

// Поднятие
const getHoisting = () => {
    console.log(a);
    var a = 10;
};
getHoisting();

// Примитвы и объекты
const inc = (n) => {
    return ++n;
};

const a = 5;
const b = inc(a);
console.dir({ a, b });

const inc2 = (num) => {
    return ++num.n;
};
const obj = { n: 5 };
const c = inc2(obj);
console.dir({ obj, c });

// Типы объектов
const arr = [
    true,
    '12',
    76,
    { a: 5 },
    () => {
        console.log('Hello');
    },
    [],
    null,
    undefined,
    6n,
];

const incObj = (arr) => {
    const counter = {
        boolean: 0,
        string: 0,
        number: 0,
        object: 0,
        function: 0,
        object: 0,
        undefined: 0,
        bigint: 0,
    };
    for (let el of arr) {
        const type = typeof el;
        console.log(type);
        counter[type]++;
    }
    return console.log(counter);
};
incObj(arr);

// Функции

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return console.log(Math.floor(Math.random() * (max - min + 1) + min));
};
random(8);

const generateKey = (length, characters) => {
    const charLength = characters.length;
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charLength);
        key += characters[index];
    }
    return console.log(key);
};
generateKey(5, 'Nastya');
