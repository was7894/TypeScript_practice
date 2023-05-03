let age1: number;
let myName: string;
let tf: boolean;
//바로 할당가능.
let age3: number = 100;

let 알수없음: number | string;

age1 = 12;
tf = false;
myName = "형섭";

/* 배열과 객체(complex types) */

//배열
let bobbies: string[];
bobbies = ["수영", "축구", "음악"];

//함수
function addNumber(a: number, b: number): number {
  return a + b;
}

addNumber(3, 7);

let dog03: {
  name: string;
  age: number;
};
//프로퍼티 할당
dog03 = { name: "망고", age: 4 };

let doggy03: { name: string; age: number }[];
doggy03 = [
  { name: "불독", age: 4 },
  { name: "진돗개", age: 2 },
];

console.log(doggy03[0]);
console.log(doggy03[1]);

//타입추론 : 타입지정을 이런식으로 쓰는것 보단.
/* let topic:string;
topic = "123"; */

//자바스크립트와 다른점은 자바스크립트는 :any 타입스크립트는:string 정적으로!
let topic = "추론";
topic = "1234";
//유니온타입
let uni: string | number | boolean = "유니온타입";
uni = 1234;
uni = true;

//재사용가능한 타입 Type Aliases mixin이랑 비슷..?
type DogType = {
  name: string;
  age: number;
};

let dog: DogType;
let dogs: DogType[];

//제네릭:  타입을 마치 함수의 파라미터처럼 사용하는 것

function add(a: number, b: string): number | string {
  return a + b;
}
console.log(add(1, "2"));

//void : return값이 비었음을 의미
function output(val: any): void {
  console.log("val:", val);
  return;
}
output("출력");

/* generic */
//매개변수 arr 타입 2개 배열로 지정
type ArrType = {
  name: string;
  age: number;
};

// function insertAtBeginning(arr1: any[], arr2: any) {
//제네릭타입 : Generic이 없다면 타입을 미리 지정하거나, any를 이용해서 타입을 작성해야 한다. 제네릭을 통해 코드에 선언한 타입을 변수화 하고, 나중에 타입을 정하는 식으로 유연하게 사용이 가능
//<T>:타입파라미터 UNION타입의 허점을 방지
function insertAtBeginning<T>(arr1: T[], arr2: T) {
  const newArr = [arr2, ...arr1]; //전개연산자.
  return newArr;
}
const testArr1 = [1, 2, 3];
const testArr2 = ["가", "나"];
const updateArr1 = insertAtBeginning<number>(testArr1, 1);
const updateArr2 = insertAtBeginning<string>(testArr2, "하이");

console.log(updateArr1);
console.log(updateArr2);

const stringArr = insertAtBeginning<string>(["a", "b"], "c");
console.log(stringArr[0].split("")); //c반환

//union
function firstElement(arr: number[] | string[]): number | string {
  return arr[0];
}
//first를 제네릭으로 변환해보기
function secondElement<T>(arr: T[]): T {
  return arr[0];
}

const NAME = secondElement(["김형섭", "박천주"]);
const NAME2 = secondElement<string>(["김형섭", "박천주"]);

const AGE = secondElement([11, 12]);
const BOOL = secondElement([false, true]);

//arrow function
const thirdElement = <T>(arr: T[]): T => {
  return arr[0];
};
