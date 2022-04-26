//dom/practice1.js

document.addEventListener('DOMContentLoaded',function(){
  let menu = ['아이스', '바닐라', '라떼' , '고구마', '체리콕']
  let ul = document.createElement('ul');
  menu.forEach(el=>{
    let li = document.createElement('li');
    li.innerHTML= el;
    ul.appendChild(li);
  })
    let aa = document.getElementById('show')
  aa.appendChild(ul);
 
});


// document.addEventListener('DOMContentLoaded',function(){
//   let ul = document.createElement('ul');
//   let li = document.createElement('li');
//   li.innerHTML= '아아';
//     ul.appendChild(li);
//     li = document.createElement('li');
//     li.innerHTML= '아2';
//     ul.appendChild(li);
//     li = document.createElement('li');
//     li.innerHTML= '아3';
//     ul.appendChild(li);  
//   let aa = document.getElementById('show')
//   aa.appendChild(ul);
 
// });

