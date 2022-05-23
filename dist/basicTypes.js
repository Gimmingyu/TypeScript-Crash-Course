"use strict";
// Basic Types
let id = 5;
let company = "Mingkim";
//
let isPublished = true;
// isPublished = 10; ==> Error!
// type any ==> 아무렇게나 정의할 수 있는 type
let x = "Hello world";
x = true;
// int array 선언
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// ids.push("Hello world"); ==> Error!
// any array도 가능하다.
let arr = [1, "2", "3", "4", "5", "6", "7"];
arr.push(true);
// Tuple
let person = [1, "Mingkim", false];
// let person: [number, string, boolean] = [1, 'Mingkim', 2] ==> Error!
// Tuple Array
let employees;
employees = [
    [1, "mingkim"],
    [2, "yeblee"],
    [3, "junsoh"],
];
// Union ==> MultiType
let age = 27;
age = "28";
// 여러개도 가능
let pId = 27;
pId = "mingkim";
pId = 42;
pId = true;
pId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 1
console.log(Direction1.Left); // 2
console.log(Direction1.Right); // 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // 'Up'
console.log(Direction2.Down); // 'Down'
console.log(Direction2.Left); // 'Left'
console.log(Direction2.Right); // 'Right'
// Objects
const user = {
    id: 1,
    name: "John Doe",
};
// Type을 추가할 수 있다.
const typeUser = {
    id: 1,
    name: "John Doe",
};
// 깔끔한 버전 1
const TypeUser = { id: 1, name: "John Doe" };
const newUser = {
    id: 1,
    name: "John Doe",
};
// Type Conversion
let cid = 1;
let customerId = cid;
let myId = cid;
let someBoolean = cid;
console.log(typeof cid, typeof myId, typeof cid); // number number number
console.log(cid, myId, cid); // 1 1 1
// 1로 설정해놔서 뭔 짓거리를 해도 number로 나온다.
// Function
// 함수에서는 any parameter하면 경고뜨는게 default, 싫으면 noImplicitAny를 바꾸면 된다.
let num1 = 1;
let num2 = 9;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(num1, num2)); // 10
// return value 설정하는 방법
function addNumber(x, y) {
    return x + y;
}
// return value 없을 때
function log(message) {
    console.log(message);
}
const user2 = {
    id: 1,
    name: "John",
};
const p1 = 1;
// optional로 주면 value가 없어도 성립
const testVariable = {
    name: "john",
    country: "United States",
};
const anyTest = {
    id: 1,
    name: "John",
};
const math = (x, y) => x + y;
const sub = (x, y) => x - y;
// interface를 적용한 클래스
class Person {
    // 생성자를 만들어준다.
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(this);
        // Person { id: 1, name: 'junsoh' }
        // Person { id: 2, name: 'yeblee' }
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// 선언하는 동시에 생성자 메소드 호출
const junsoh = new Person(1, "junsoh");
const yeblee = new Person(2, "yeblee");
// Error !
// Error가 뜬다고해서 실행이 안되지는 않는다.. 컴파일러 에러일 뿐
// junsoh.id = 5;
console.log(junsoh.register());
console.log(yeblee.register());
// Extended class ( Subclass )
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp);
// Generics
// function getArray(items: any[]): any[] {
// 	return new Array().concat(items);
// }
// let numArray = getArray([1, 2, 3, 4, 5]);
// let stringArray = getArray(["brad", "john", "joe"]);
// numArray.push("hello");
// type placeholders
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(["brad", "john", "joe"]);
// numArray.push("hello"); ==> Error!
//# sourceMappingURL=basicTypes.js.map