let age1: number;
let myName: string;
let tf: boolean;
//바로 할당가능.
let age3: number = 100;

age1 = 12;
tf = false;
myName = "형섭";

/* 배열과 객체(complex types) */

//배열
let bobbies: string[];
bobbies = ["수영", "축구", "음악"];

//객체
/* let dog = {
  name: "형섭",
  age: 32,
}; */

let dog: {
  name: string;
  age: number;
};
//프로퍼티 할당
dog = { name: "망고", age: 4 };

let doggy: { name: string; age: number }[];
doggy = [
  { name: "불독", age: 4 },
  { name: "진돗개", age: 2 },
];

console.log(doggy[0]);
console.log(doggy[1]);
