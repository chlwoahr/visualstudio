// string/basic.js
// 문자열 vs 문자열 객체

let str1 = '문자열' // 문자열타입
console.log(typeof str1);

let str2 = new String('문자열'); //오브젝트
console.log(typeof str2)

console.log(str1==str2); // 비교연산자 == 값을 비교
console.log(str1===str2); // 비교연산자 === 값 % 타입.

//문자열타입 오브젝트 클래스 사용가능
let re = str1.substring(0 , 2);// index:0~index:2 자라내기. 
console.log(re);
re = str2.substr(0,2);// index:0 크기 2 잘라내기.
console.log(re);

const cal1 = `1+2*3`;//string
const cal2 = new String(`1+2*3`);//object

// eval() : 문자열 => 수식변경
console.log(eval(cal1)); // 1+2*3 = 7 문자열을 연산시켜줌
console.log(eval(cal2.valueOf())); // 오브젝트 타입은 eval함수를 사용하더라도 object 그대로 출력
                      //valueOf 오브젝트타입을 문자열로 변환후 eval로 수식계산

//eval = 문자열 연산함수 valueOf = object타입 문자열로 변환


// trim() : 좌우의 공백 잘라내기.
console.log(' 문자열 공백 테스트 ')
console.log(' 문자열 공백 테스트 '.trim());
console.log(' 문자열 공백 테스트 '.trimStart()); // 왼쪽 공백잘라내기
console.log(' 문자열 공백 테스트 '.trimEnd()); // 오른쪽 공백잘라내기


//문자열의 공백을 제거.
result = ' 문자열 공백 테스트 '.split(' '); // 매개값을 기준으로 문장을 잘라서 배열로 변경
//배열 filter메소드 배열
result = result.filter(function(val){ // filter값은 false값을 제외한 true값만 배열로 출력
 return val;//['','문자열', '공백','테스트','']
}); //각요소에어떤함수가 들어오는지에따라 조건에 만족하는 값을 true => 배열생성
console.log(result)

console.log(result.join('')) // 배열 => 문자열 변환.

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');// 문자열을 배열로 변경, filter로 false값제외한값 배열, join으로 문자열로 변경
console.log(result);

// 자바스크립트 boolean 값: null, '', 0, undefined => false

if('문자열'){ // null => false
  console.log('false값.')
}

// slice, substring, substr(Deprecated 사용안함);
console.log('안녕하세요 반갑습니다'.slice(0,-3)); //인덱스 값 기준으로 잘라냄 0~5이전까지 값 잘라내기. 마이너스값을 가질수있음
console.log('안녕하세요 반갑습니다'.substring(0,5));// 마이너스값 허용하지않음
console.log('안녕하세요 반갑습니다'.substr(0,5));

//toString(): 문자열로 변환.
let num1 = 123;
console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1);


true.toString(); // 'true'

let obj = {
  key: 'hong',
  value: 15,

}
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

