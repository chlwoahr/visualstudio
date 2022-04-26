// // dom/practice4.js

document.addEventListener('DOMContentLoaded',function(){

  let showDiv = document.querySelector('#show');
    let inputTag = document.getElementById('username');
    inputTag.addEventListener('keydown',function(){
      let span1 = document.createElement('span');
      let span2 = document.createElement('span');
      span1.innerHTML = document.querySelector('#username').value;
      showDiv.appendChild(span1);
      span2.innerHTML = document.querySelector('#userage').value;
      showDiv.appendChild(span2);
      //value => clear
      document.querySelector('#username').value = '';
      document.querySelector('#userage').value = '';
  })



  //button 이벤트 추가.
  let add = document.querySelector('#addBtn')
  add.addEventListener('click',function(){
    let inputTag = document.getElementById('username');
    inputTag.addEventListener('change',function(){
      let span1 = document.createElement('span');
      span1.innerHTML = document.querySelector('#username').value;
      showDiv.appendChild(span1);
      let span2 = document.createElement('span');
      span2.innerHTML = document.querySelector('#userage').value;
      showDiv.appendChild(span2);
      //value => clear
      document.querySelector('#username').value = '';
      document.querySelector('#userage').value = '';
  })
})
});

// document.addEventListener('DOMContentLoaded',function(){

//   let showDiv = document.querySelector('#show');
//   let inputTag = document.getElementById('username');
//   inputTag.addEventListener('change',function(){
//     let span = document.createElement('span');
//     span.innerHTML = document.querySelector('#username').value;
//     showDiv.appendChild(span);
//     span = document.createElement('span');
//     span.innerHTML = document.getElementById('#userage').value;
//     showDiv.appendChild(span);
//     //value => clear
//     document.querySelector('#username').value = '';
//     document.querySelector('#userage').value = '';

//   })



//   //button 이벤트 추가.
//   let add = document.querySelector('#addBtn')
//   add.addEventListener('click',function(){
//     let showDiv = document.querySelector('#show');
//     let inputTag = document.getElementById('username');
//     inputTag.addEventListener('change',function(){
//       let span = document.createElement('span');
//       span.innerHTML = document.querySelector('#username').value;
//       showDiv.appendChild(span);
//       span = document.createElement('span');
//       span.innerHTML = document.getElementById('#userage').value;
//       showDiv.appendChild(span);
//       //value => clear
//       document.querySelector('#username').value = '';
//       document.querySelector('#userage').value = '';
//   })
// })