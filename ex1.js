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

// Объект
// -----------------------------------
const object = {
    x: 1,
    y: 2,
    move(x, y) {
        (this.x += x), (this.y += y);
    },
    toString() {
        return `[${this.x}, ${this.y}]`;
    },
};
// -----------------------------------
console.log(object.x, object.y);
object.move(2, 3);
console.log(object.x, object.y);
console.log(object);
console.log(object.toString());

//  Прототип
// -----------------------------------
function Point(x, y) {
    this.x = x;
    this.y = y;
}
// статический метод конструктора (нельзя вызвать у объекта)
Point.from = function (obj) {
    const { x, y } = obj;
    return new Point(x, y);
};
console.log(Point.from(object));
// методы экземпляров конструктора (объектов)
Point.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
};
Point.prototype.toString = function () {
    return `[${this.x}, ${this.y}]`;
};
// -----------------------------------
console.log(Point.prototype);
console.log(Point.prototype.move.prototype);
const pointObj = new Point(20, 50);
pointObj.move(5, 9);
console.log(pointObj);
console.log(pointObj.toString());

// Класс
// -----------------------------------
class PointClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static from(obj) {
        const { x, y } = obj;
        return new PointClass(x, y);
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
}
// -----------------------------------
const classObjPoint = new PointClass(45, 89);
console.log(classObjPoint);
console.log(classObjPoint.toString());

// Замыкание
// -----------------------------------
const point = (x, y) => {
    const p = {};
    // добавляем метод в объект
    p.move = (a, b) => {
        x += a;
        y += b;
    };
    // добавляем метод в объект
    p.toString = () => {
        return `[${x}, ${y}]`;
    };
    return p;
};
// -----------------------------------
const closureObj = point(5, 5);
closureObj.move(3, 7);
console.log(closureObj);
console.log(closureObj.toString());

// bind, call, apply
// -----------------------------------
function move(x, y) {
    this.x += x;
    this.y += y;
}
function toString() {
    return `[${this.x}, ${this.y}]`;
}
const p1 = {
    x: 10,
    y: 20,
};
// -----------------------------------
console.log(p1);
const pmove = move.bind(p1);
pmove(23, 45);
console.log(p1);

const pstring = toString.bind(p1);
console.log(pstring());

move.call(p1, 1, 2);
console.log(pstring());

move.apply(p1, [34, 89]);
console.log(pstring());

// Прототипное наследвание
// -----------------------------------
function Rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
Rect.prototype.toString = function () {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
};
function Square(x, y, side) {
    Rect.call(this, x, y, side, side);
}
Object.setPrototypeOf(Square.prototype, Rect.prototype); // чтобы иметь доступ к методу toString у Rect
// -----------------------------------
const r = new Rect(1, 3, 5, 3);
const p = new Square(1, 3, 5);
console.log(r.toString());
console.log(p.toString());

// Классы - наследование
// -----------------------------------
class Rect1 {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    toString() {
        return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
    }
}
class Square1 extends Rect1 {
    constructor(x, y, side) {
        super(x, y, side, side);
    }
}
// -----------------------------------
const s = new Square1(4, 5, 6);
const re = new Rect1(4, 5, 6, 7);
console.log(re.toString());
console.log(s.toString());

// __proro__ Ссылка на prototype
// -----------------------------------
function Rect2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Rect2.prototype.toString = function () {
    return `[${this.x}, ${this.y}]`;
};
// -----------------------------------
const k = { x: 2, y: 5 };
k.__proto__ = Rect2.prototype;
console.log(k.toString());
// -----------------------------------
class Rect3 {
    toString() {
        return `{${this.x}, ${this.y}}`;
    }
}
// -----------------------------------
k.__proto__ = Rect3.prototype;
console.log(k.toString());

// Сеттеры и геттеры
// -----------------------------------
class Figure {
    constructor() {
        this.x;
        this.y;
        this.width = 45;
    }
    // сеттер
    set add(x) {
        this.x = x;
    }
    // геттер
    get getWidth() {
        return `${this.width + this.x}`;
    }

    toString() {
        return this.x;
    }
}
// -----------------------------------
const figure = new Figure();
figure.add = 5;
console.log(figure.toString());
figure.add = 30;
console.log(figure.toString());
console.log(figure.getWidth);

// Каррирование
// -----------------------------------
const curr =
    (fn) =>
    (...args) => {
        if (fn.length > args.length) {
            const f = fn.bind(null, ...args);
            return curr(f);
        } else {
            return fn(...args);
        }
    };
curr();
const sum = (a, b, c, d) => {
    return a + b + c + d;
};
const f = curr(sum);
const f1 = f(1, 2, 3, 4);
const f2 = f(1, 2, 3)(4);
const f3 = f(1, 2)(3, 4);
const f4 = f(1)(2, 3, 4);
console.log(f1, f2, f3, f4);
// -----------------------------------

// Кэширование
// -----------------------------------
const fncach = () => {
    const cach = {};
    return (key) => {
        let res = cach[key];
        if (res) {
            console.log('Кэш', res);
            return res;
        } else {
            cach[key] = 'value' + key;
            res = cach[key];
            console.log('Вычисление', res);
            return res;
        }
    };
};
// -----------------------------------
const f11 = fncach();
const f12 = fncach();

f11(1);
f11(2);
f11(1);
f11(2);

f12(1);
f12(1);

// setTimeout с изменением приема аргументов и каррированием
// -----------------------------------
const curr1 =
    (fn) =>
    (...args) => {
        if (fn.length > args.length) {
            const f = fn.bind(null, ...args);
            return curr(f);
        } else {
            return fn(...args);
        }
    };

const fnlog = () => {
    return console.log('Ляляляля');
};

const invertTimeout = (time, fn) => setTimeout(fn, time);

const timer = curr1(invertTimeout);
// -----------------------------------
const t = timer(2000);
t(fnlog);
