---
title: "TypeScript Deep Dive"
link: https://radlohead.gitbook.io/typescript-deep-dive/
date: "2022/05/24"
---

# TypeScript Deep Dive

> link: https://radlohead.gitbook.io/typescript-deep-dive/

---

<br />

## 왜 타입스크립트인가?

타입스크립트를 쓰는 이유로는 크게 두 가지 목적이 있다.

-   자바스크립트에 타입 시스템을 선택해서 적용이 가능하다.
-   향후 자바스크립트 버전부터 최신 자바스크립트 엔진에 이르는 계획된 기능을 제공한다.

---

## 타입스크립트 타입 시스템

> `왜 타입을 추가해야 할까?`

-   구글, 페이스북과 같은 거대 기업틀이 타입을 사용함으로써 코드 퀄리티와 가독성을 높일 수 있다는 것을 입증했다.
-   함수의 시그니처에 타입을 이용하면 더 나은 웹 페이지를 만들 수 있다.

---

### 자바스크립트는 타입스크립트이다.

타입스크립트는 자바스크립트에 컴파일시 타입 안정성을 제공한다.
타입스크립트라는 이름을 생각해보면 당연한 일이다.

### 타입의 암시적 적용

타입스크립트는 개발에서 최소한의 비용으로 타입 안정성을 제공한다.

Example Code

```typescript
var foo = 123;
foo = "456"; // Error: cannot assign `string` to `number`

// Is foo a number or a string?
```

예시 코드를 보면 변수에 타입을 지정하지는 않았지만, 처음에 선언된 number 타입과
다른 타입을 대입하여 타입시스템이 이를 추론하고 알려준다.

### 타입의 명시적 적용

타입스크립트는 안전하게 추론할 수 있는 만큼 추론한다. 물론 직접 타입을 지정할 수도 있는 것.

```typescript
var foo: number = 123;
```

### 타입구조

일부 언어에서 정적 타입 시스템은 코드 작동여부와 관계없이 클린한 코드가 나오지 않는 경우가 있다.
타입스크립트는 클린한 코드를 유지할 수 있게 도와주는 좋은 언어이다.

```typescript
interface Point2D {
	x: number;
	y: number;
}
interface Point3D {
	x: number;
	y: number;
	z: number;
}
var point2D: Point2D = { x: 0, y: 10 };
var point3D: Point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point: Point2D) {
	/* do something */
}

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: missing information `y`
```

---

## 컴파일러 제어

많은 중요한 옵션들이 있지만, 꼭 알아야하는 것만 짚고 넘어가자.

> tsc --watch ( watch mode )

> 포함/제외

```json
{
	"include": ["./folder"],
	"exclude": ["./folder/**/*.spec.ts", "./folder/someSubFolder"]
}
```

> 전체를 선택할 때는 \*\*/\* 옵션을 사용해야 한다.
> (ex: somefolder/\*\*\/\*)

---

## 파일을 이용한 모듈화 예시들

```ts
export let someVar = 123;
export type SomeType = {
	foo: string;
};
```

```ts
// file `foo.ts`
let someVar = 123;
type SomeType = {
	foo: string;
};
export { someVar, SomeType };
```

```ts
// file `foo.ts`
let someVar = 123;
export { someVar as aDifferentName };
```

```ts
// file `bar.ts`
import { someVar, SomeType } from "./foo";
```

```ts
// file `bar.ts`
import { someVar as aDifferentName } from "./foo";
```

```ts
// file `bar.ts`
import * as foo from "./foo";
// you can use `foo.someVar` and `foo.SomeType` and anything else that foo might export.
```

`주의: 단일 import를 사용해 오직 하나의 파일만을 가져와야 한다.`

<br />

```ts
export * from "./foo";
```

```ts
export { someVar as aDifferentName } from "./foo";
```

> `전역 인터페이스 및 타입 사용하기`

```ts
declare const BUILD_MODE_PRODUCTION: boolean; // 조건부 컴파일에 사용될 수 있음
declare const BUILD_VERSION: string;
```

> `네임 스페이스 활용 예시들`

```ts
namespace Utility {
	export function log(msg) {
		console.log(msg);
	}
	export function error(msg) {
		console.error(msg);
	}
}

// usage
Utility.log("Call me");
Utility.error("maybe!");
```
