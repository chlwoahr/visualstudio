//dom/practice2.js
// tag는 createelement, text는 createtextnode,속성 생성 : setAttribute('속성','속성이름')
document.addEventListener('DOMContentLoaded', function(){
  
let div = document.createElement('div');
let span1 = document.createElement('span');
span1.setAttribute('id','name'); // setAttribute('속성','속성이름')
let name = document.createTextNode('홍길동');
span1.appendChild(name); // span태그의 자식요소로 textnode <span>홍길동</span>
let span2 = document.createElement('span');
span2.setAttribute('class','age') //setAttribute('속성','속성이름')
let age = document.createTextNode('20살');
span2.appendChild(age);
let h = document.createTextNode(' - ');
div.appendChild(span1);
div.appendChild(h);
div.appendChild(span2);
let aa = document.getElementById('show').appendChild(div)

})