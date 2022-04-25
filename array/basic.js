//arrary/basic.js

// 배열선언 : [], new Array();

let arr = [1,2];
let newAry = [3,4,5,6];
//배열 메소드 추가: push: 마지막 위치 추가, unshift: 첫번째 위치 추가
arr.push(3);
// console.log(arr.toString());
arr.unshift(0);
// 제거 : pop() : 뒤제거, shift(): 제일 앞 제거;
arr.pop();
arr.shift();

// forEach
newAry.forEach(elem=>{
 arr.unshift(elem);
});
arr.pop(); // 6,5,4,3,1
arr.pop(); // 6,5,4,3
arr.shift(); // 5,4,3

// splice(위치, 크기만큼, 대체값); 추가, 수정, 삭제
// arr.splice(1,2); // 0을넣을경우 인덱스 위치값에서 추가 1: 대체값, 대체값이 없을경우 삭제

newAry.forEach(elem=>{
  arr.splice(1,0,elem); // arr=[5,4,3] index 1에 있는값을 지속적으로 바꿔서 마지막 6출력 arr=[5,6,3]
});

let names = [];
let anonym = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quasi. Expedita architecto corporis dolorum, consequuntur, nesciunt nobis non commodi voluptatem iusto voluptas odio. Repudiandae, quibusdam quas deleniti fugiat maxime veritatis!'
anonym.split(' ').forEach(elem=>{
names.push(elem);
});
console.log(names.toString()); // tostring는 출력할때 구분을위해 , 값이 추가되어출력
console.log(names);

//배열추가 push , unshift  제거 pop, shift
//splice(위치, 크기만큼, 대체값); 추가, 수정, 삭제

//foEach():반환 X
// map() : 각요소의 => mapping작업(다른 형태 반환)새로운형태의 배열생성
// filter(); return 조건을 만족하는 값만 반환하여 배열생성
let result = names.map(elem=>{
  return elem.toUpperCase(); // 대문자로 변환
}); // 새로운형태의 배열
console.log(result);

result = result.filter(elem=>{
  return elem.length >= 10; // 단어의수가 10개이상인값만
});

result = names
.map(elem=>elem.toUpperCase())
.filter(elem=> elem.length >= 10);
 // chain rules
console.log(result)
