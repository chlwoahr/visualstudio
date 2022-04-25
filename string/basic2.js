// string/basic2.js

// indexOf(), lastIndexOf() : 찾을 문자열의 위치 인덱스 반환 , 없으면 -1반환
let result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.indexOf('홍길둥'); // 홍이 시작되는 위치
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.lastIndexOf('홍길동'); // 뒤에있는 홍길동
result = '안녕하세요 홍길동입니다,서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동',15); // 인덱스값 15번째부터 있는 홍길동의 값
let str1 = '안녕하세요 홍길동입니다,서울의 홍길동,부산의 홍길동 대구의 홍길동입니다.';
let position = str1.indexOf('부산'); // '부산'의 위치인덱스 리턴
console.log(position);
result = str1.indexOf('홍길동',position); // position 의 인덱스값으로 부산의 홍길동
console.log(result);

// charAt(인덱스) : 인덱스위치의 문자반환
let str2 = str1.charAt(result);//인덱스위치의 문자반환
console.log(str2);

// toLowerCase(), toUpperCase(); 문자변경.
let str3 = 'Lorem ipsum, DDLOR sit amet consectetur dolor';
console.log(str3.toUpperCase().toLocaleLowerCase());

//includes('찾을 문자열') : true/ false
result = str3.includes('dolors'); //문자열에 있는값을 반환 대/소문자구분O
console.log(result);

//search('찾을 문자열') 추가기능 : search(정규표현식); 찾을 문자열의 인덱스 반환.
result = str3.search('dolor');
// 정규표현식 오브젝트 / /(new RegExp()), 배열 [](new array(1,2)).
result = str3.search(/dolor/ig); //  ' // ' 를사용하면 정규표현식 i는 대소문자구분없이 찾기 g 있는대로 찾기 m
console.log(result);

//match('찾을 문자열'): 문자열 or null 반환. 문자열 찾기 i = 대소문자 구별없이, g = 모든 값
let str4 = 'bad MORING, goodmorning, GOOD AFTERNOON, good evening, and good night';
result= str4.match('good');
console.log(result);
result= str4.match(/good\s\w+/gi); //\s = 공백, \w = 뒤에 문자하나 \w+ = 뒤에 문자하나이상
console.log(result);

// replace('찾을 문자열','바꿀 문자열');
result = str4.replace('good' ,'better');
result = str4.replace(/good/ig,'better');
result = str4.replace(/\W/ig,'-'); // W : 문자 이외. d : 숫자, D : 숫자이외.
result = 'morning1 moning12 morning123'.replace(/\D/g, ''); // 숫자이외 변경

let sso = ['970101-1234567','970101 2234567','9701014234567','970101/5234567'];
sso.forEach(num => console.log(num.replace(/\D/g,'')))
console.log(result);


//문자열 합치기: + , concat()
console.log('hello' + 'world');
console.log('hello'.concat('world'));
console.log('hello'.concat('world','!!!','qqqq'));

