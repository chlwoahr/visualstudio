// array/basic1.js

// reduce(); map() =>새로운 배열, filter()=>새로운 배열
// reduce()=>결과값이 지정하는 값으로 string, number, 배열

const number = [23,4,77,51,63,34,62,92];

//배열 요소의 누적합
let result = number.reduce(function(accum,elem,idx,ary){ //accum : 누적값
console.log(accum,elem,idx,ary) // 0 23 idx 배열요소.
accum = accum + elem;
return accum;
}, 0); // 누적값을 0으로 초기화

// 배열요소의 *2 => 새로운 배열.
result = number.reduce(function(accum,elem){ //accum : 배열로 선언
   accum.push(elem*2); // [46,8]
   return accum;
  },[]); // 누적값을 배열로 초기화

//filter : 50보다 큰 숫자를 가지는 새로운 배열.
result = number.reduce(function(accum, elem){ //기본왼쪽부터 담아줌 reduceRight 오른쪽부터 담아줌
if(elem>30){
  accum.push(elem);
}
return accum; // 반환되는 값은 다음 순번의 초기값(accum);
},[]);

console.log(result);