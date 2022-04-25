//dom/practice3.js

document.addEventListener('DOMContentLoaded',function(){ // 전체로딩후 실행
let but = document.querySelector('button');
but.addEventListener('click',function(){
  let na = document.getElementById('username').value
  let ag = document.getElementById('userage').value

  let s1 = document.createElement('span') 
  s1.innerHTML=na;                  // <span>na</span>
  let s2 = document.createElement('span')
  s2.innerHTML=ag;                  // <span>ag</span>

  let di = document.createElement('div')//<div></div> 
  di.appendChild(s1);// div태그에 자식요소추가 <div><span>na</span></div>
  di.appendChild(s2);// div태그에 자식요소추가 <div><span>na</span><span>ag</span></div>
  let di1 = document.getElementById('show')
  di1.appendChild(di);

})
})

