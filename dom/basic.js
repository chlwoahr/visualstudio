// dom/basic.js

// DOM : 생성, 속성변경, 삭제, 부모-자식 관계설정


// event 생성
// addEventListener ('이벤트이름', '실행할 코드(이벤트 핸들러)')
// DOMContentLoaded : DOM컨텐트가 다 실행되면 이후 실행 페이지를 다 읽은후

document.addEventListener('DOMContentLoaded',function(){

  let h3Tag = document.getElementsByTagName('h3'); //tag이름으로 읽어오기 HTMLCollection타입
  console.log(h3Tag);
  h3Tag[1].innerHTML= 'content changed.'; // 가져온 값이 여러개일수있어 인덱스값으로 구분

  document.getElementById('first'); // element.하나
  console.log(first);
  first.innerHTML = 'Git Chaged'

  let second = document.getElementsByClassName('first');
  second[0].innerHTML = '사과';


  // CSS의 선택자 h3 > div
  //querySelector(부모>자식)
  let list = document.querySelector('ul>li'); //querySelector 만족하는 첫번째요소
  console.log(list);
  list = document.querySelectorAll('ul>li'); //만족하는 모든요소
  console.log(list);
  list[1].style.background = 'yellow';

  //DOM 생성.
  //createElement(생성할 태그)
  let newList=document.createElement('li'); // <li> 리스트 생성
  newList.innerHTML='Mango';
  console.log(newList);
  // ul 하위요소<li>Mango</li> 하위요소로 추가
let ulTag = document.querySelector('ul');
ulTag.appendChild(newList); //appendChild(추가할 요소) 자식요소추가
}); // document(body)요소 event등록
// getElementsByTagName , getElementById, getElementsByName, getElementsByClassName, .innerHTML 내용변경
// getElementById를 제외한 나머지 전체 복수형태

