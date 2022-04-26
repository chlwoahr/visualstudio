// dom/practice4.js

document.addEventListener('DOMContentLoaded',function(){

  let showDiv = document.querySelector('#show');
  showDiv.style.width = '150px'
  showDiv.style.height = '300px'
  showDiv.style.background = 'yellow'
  
  let inputTag = document.getElementById('username');
  inputTag.addEventListener('change',function(){ // 엔터시 이벤트 발생
    let span = document.createElement('span');
    span.style.background = 'blue';
    span.style.color = 'white';
    span.style.display = 'inline-block'; // 인라인을 인라인-블럭태그로 변경
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginRight = '2px';
    span.style.marginLeft = '2px';
    

    span.innerHTML = document.querySelector('#username').value;
    showDiv.appendChild(span);

    //value => clear
    document.querySelector('#username').value = '';
  })



  //button 이벤트 추가.
  let add = document.querySelector('#addBtn')
  add.addEventListener('click',function(){
    let span = document.createElement('span');
    span.style.background = 'blue';
    span.style.color = 'white';
    span.style.display = 'inline-block'; // 인라인을 인라인-블럭태그로 변경
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginRight = '2px';
    span.style.marginLeft = '2px';
    

    span.innerHTML = document.querySelector('#username').value;
    showDiv.appendChild(span);

    //value => clear
    document.querySelector('#username').value = '';
  })
})