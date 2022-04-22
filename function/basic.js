// function/basic.js
// 1.함수선언식으로 정의.
function sum(num1, num2){ //값을입력하지않으면 undefine출력 
  console.log(num1,num2);
  return num1 + num2;
}
// => let sum = function(num1, num2){console.log(num1,num2); return num1 + num2;}

//
let result = sum(10,20,30); // 리턴이없을경우 undefine출력 , 매개변수를 수만큼만 진행
console.log(`결과는 `+result);

//2. 함수표현식으로 정의.
let myfunc = function(val1, val2) {
 var myVal = 10;
 return val1 + val2 + myVal;
}
// 화살표 함수
let myfunc1 = (val1, val2) => {
  var myVal = 10;
  return val1 + val2 + myVal;
 }


console.log(typeof myfunc,myfunc);
result = myfunc(10,20);
console.log(result);

let mysum = myfunc; // myfunc의 function값을 가짐
result = mysum(20,30);
console.log(result);

const person = {
  fullName: 'Hong',
  age: 20,
  height:175.3
}
const person1 ={
  fullName: 'Hwang',
  age: 22,
  height:178.4
}
const person2 = {
  fullName: 'Park',
  age: 25,
  height:165.3
}
// 함수표현식 myinfo.
let myinfo = function(obj){
  var info = `${obj.fullName}이고 ${obj.age}살이고 키는${obj.height}입니다`;
  return info;
}
result = myinfo(person);
console.log(result);

//배열을 활용. 위 myinfo를 활용 출력 
const persons = [person,person1,person2];
for(let person of persons){
 let result = myinfo(person);
 console.log(result);
}
console.clear();

//자바스크립트에서 문자열, 숫자, boolean, 배열 = 매개값으로 사용가능.
//함수를 매개변수로 사용가능
//배열관련 매소드 배열에 들어있는 각각 요소들을 수 만큼 정의된 함수의기능을 실행
//val = 배열 persons에 들어있는 요소들을 가리키는 변수 , ind = 위치 , ary = 배열자체


let funcParam = function(val,ind,ary){
  // console.log(val,ind,ary);
  console.log(myinfo(val));
};
persons.forEach(funcParam); // 메소드의 매개값으로 활용되는 함수 =>콜백함수.

//함수 표현식 화살표함수
let funcParam1 = (val,ind,ary)=>{
  // console.log(val,ind,ary);
  console.log(myinfo(val));
};

