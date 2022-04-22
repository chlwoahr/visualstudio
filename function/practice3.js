const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}

const persons = [person1, person2, person3]


//map은 리턴해주는값을 새로운배열에 담아줌
const newPersons = persons.map(function(val, idx){
  let newObj = {}; // 오븍젝트 타입을 선언.
  newObj.index = idx+1; // 오브젝트의 속성(필드) 추가
  newObj.fName = val.fullName;// ""
  newObj.age = val.age;// ""
  newObj.height = val.height;// ""
  return newObj; //map 리턴값 필수 없을경우 undefine
});
console.log(newPersons);

const all = [`순번, 이름, 나이, 키`]
//테이블만들어주는기능
// 함수정의문
function tableList(personAry){
  document.write(`<table border=1>`)
  document.write('<th>순번</th>')
  document.write('<th>이름</th>')
  document.write('<th>나이</th>')
  document.write('<th>키</th>')
  // for(let aaa in all){
  //   document.write(`<th>${all[aaa]}</th>`)
  
   for(let person of personAry){ // line 생성
    document.write(`<tr>`)
    for(let field in person){ // 칼럼<td> 생성
      document.write(`<td>${person[field]}</td>`)
    }
    document.write(`</tr>`)

  }
}
  document.write(`</table>`)

// }
// 함수실행.
tableList(newPersons);
