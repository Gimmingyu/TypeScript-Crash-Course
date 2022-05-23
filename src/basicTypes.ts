// Basic Types

let id: number = 5;

let company: string = "Mingkim";

//
let isPublished: boolean = true;
// isPublished = 10; ==> Error!

// type any ==> 아무렇게나 정의할 수 있는 type
let x: any = "Hello world";
x = true;

// int array 선언
let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// ids.push("Hello world"); ==> Error!

// any array도 가능하다.
let arr: any[] = [1, "2", "3", "4", "5", "6", "7"];
arr.push(true);

// Tuple
let person: [number, string, boolean] = [1, "Mingkim", false];
// let person: [number, string, boolean] = [1, 'Mingkim', 2] ==> Error!

// Tuple Array
let employees: [number, string][];
employees = [
	[1, "mingkim"],
	[2, "yeblee"],
	[3, "junsoh"],
];

// Union ==> MultiType
let age: string | number = 27;
age = "28";

// 여러개도 가능
let pId: string | number | boolean | any[] = 27;
pId = "mingkim";
pId = 42;
pId = true;
pId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Enum
enum Direction1 {
	Up,
	Down,
	Left,
	Right,
}

console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 1
console.log(Direction1.Left); // 2
console.log(Direction1.Right); // 3

enum Direction2 {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

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
const typeUser: {
	id: number;
	name: string;
} = {
	id: 1,
	name: "John Doe",
};

// 깔끔한 버전 1
const TypeUser: { id: number; name: string } = { id: 1, name: "John Doe" };
// 깔끔한 버전 2
type User = {
	id: number;
	name: string;
};

const newUser: User = {
	id: 1,
	name: "John Doe",
};

// Type Conversion
let cid: any = 1;
let customerId = <boolean>cid;
let myId = cid as boolean;

let someBoolean: string = <string>cid;

console.log(typeof cid, typeof myId, typeof cid); // number number number
console.log(cid, myId, cid); // 1 1 1
// 1로 설정해놔서 뭔 짓거리를 해도 number로 나온다.

// Function
// 함수에서는 any parameter하면 경고뜨는게 default, 싫으면 noImplicitAny를 바꾸면 된다.
let num1: number = 1;
let num2: number = 9;
function addNum(x: number, y: number) {
	return x + y;
}

console.log(addNum(num1, num2)); // 10

// return value 설정하는 방법
function addNumber(x: number, y: number): number {
	return x + y;
}

// return value 없을 때
function log(message: string | number): void {
	console.log(message);
}

// Interfaces
// type으로 선언하는 것과 다른 점은 ??
/*

type User = {
	id: number;
	name: string;
};

 */
interface UserInterface {
	id: number;
	name: string;
}

const user2: UserInterface = {
	id: 1,
	name: "John",
};

// 가능
type Point = number | string;
const p1: Point = 1;

// 불가능
// interface PointInterface = number | string
// const p2: PointInterface = 1;

// Optional parameters in Interface
interface TestInterface {
	name: string;
	country: string;
	age?: number;
}

// optional로 주면 value가 없어도 성립
const testVariable: TestInterface = {
	name: "john",
	country: "United States",
};

// Read-only.
interface AnyInterface {
	readonly id: number;
	name: string;
	age?: number;
}

const anyTest: AnyInterface = {
	id: 1,
	name: "John",
};

// anyTest.id = 5; ==> Error!

// Function interface
interface MathFunc {
	(x: number, y: number): number;
}

const math: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

// interface를 적용한 클래스
class Person implements PersonInterface {
	// has no initializer and is not definitely assigned in the constructor.
	id: number; // protected, private, public options can be used
	name: string;

	// 생성자를 만들어준다.
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
		console.log(this);
		// Person { id: 1, name: 'junsoh' }
		// Person { id: 2, name: 'yeblee' }
	}

	register(): string {
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
	position: string;

	constructor(id: number, name: string, position: string) {
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
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let stringArray = getArray<string>(["brad", "john", "joe"]);

// numArray.push("hello"); ==> Error!
