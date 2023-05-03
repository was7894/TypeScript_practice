var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age1;
var myName;
var tf;
//바로 할당가능.
var age3 = 100;
var 알수없음;
age1 = 12;
tf = false;
myName = "형섭";
/* 배열과 객체(complex types) */
//배열
var bobbies;
bobbies = ["수영", "축구", "음악"];
//함수
function addNumber(a, b) {
    return a + b;
}
addNumber(3, 7);
var dog03;
//프로퍼티 할당
dog03 = { name: "망고", age: 4 };
var doggy03;
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
var topic = "추론";
topic = "1234";
//유니온타입
var uni = "유니온타입";
uni = 1234;
uni = true;
var dog;
var dogs;
//제네릭:  타입을 마치 함수의 파라미터처럼 사용하는 것
function add(a, b) {
    return a + b;
}
console.log(add(1, "2"));
//void : return값이 비었음을 의미
function output(val) {
    console.log("val:", val);
    return;
}
output("출력");
// function insertAtBeginning(arr1: any[], arr2: any) {
//제네릭타입 : Generic이 없다면 타입을 미리 지정하거나, any를 이용해서 타입을 작성해야 한다. 제네릭을 통해 코드에 선언한 타입을 변수화 하고, 나중에 타입을 정하는 식으로 유연하게 사용이 가능
//<T>:타입파라미터 UNION타입의 허점을 방지
function insertAtBeginning(arr1, arr2) {
    var newArr = __spreadArray([arr2], arr1, true); //전개연산자.
    return newArr;
}
var testArr1 = [1, 2, 3];
var testArr2 = ["가", "나"];
var updateArr1 = insertAtBeginning(testArr1, 1);
var updateArr2 = insertAtBeginning(testArr2, "하이");
console.log(updateArr1);
console.log(updateArr2);
var stringArr = insertAtBeginning(["a", "b"], "c");
console.log(stringArr[0].split("")); //c반환
//union
function firstElement(arr) {
    return arr[0];
}
//first를 제네릭으로 변환해보기
function secondElement(arr) {
    return arr[0];
}
var NAME = secondElement(["김형섭", "박천주"]);
var NAME2 = secondElement(["김형섭", "박천주"]);
var AGE = secondElement([11, 12]);
var BOOL = secondElement([false, true]);
//arrow function
var thirdElement = function (arr) {
    return arr[0];
};
