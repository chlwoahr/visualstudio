//dom/practice.js

document.addEventListener('DOMContentLoaded',function(){ // 전체로딩후 실행
  let btn = document.querySelector;
  btn.addEventListener('click',function(){
    // 입력값1, 입력값2 를 받아야함
  let aaa = document.getElementById('username').value; // id가 username인 value값을 불러옴
  let bbb = document.getElementById('userage').value;// id가 userage value값을 불러옴
  
  if(!aaa){
    alert('이름을 입력하세요..');
    return;
  }
  if(!bbb){
    alert('나이를 입력하세요..')
    return;
  }
  
  let span1 = document.createElement('span'); // <span></span> 태그 만들기
  span1.innerHTML = aaa;                     // <span>${name}</span>
  let span2 = document.createElement('span');
  span2.innerHTML = bbb;                      // <span>${age}</span>
  let div1 = document.createElement('div');
  div1.appendChild(span1); // <div><span></span></div>
  div1.appendChild(span2); // <div><span></span><span></span></div>
  
  document.getElementById('show').appendChild(div1); //화면출력
  });
})

