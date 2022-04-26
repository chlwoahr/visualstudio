
let data = [{name:'홍길동',age:20,},{name:'김길동',age:22,},{name:'박박',age:33}];

document.addEventListener('DOMContentLoaded',function(){
  

  
  let table = document.createElement('table');
  table.setAttribute('border',1);
  thead = makehead();
  tbody = makebody(data);
  table.appendChild(thead);
  table.appendChild(tbody);
let showtag = document.getElementById('show').appendChild(table);

//추가 버튼 이벤트
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
  let obj = {}
  let username = document.getElementById('username').value;
  obj.name = username;
  let userage = document.getElementById('userage').value;
  obj.age = userage;
  obj.id = 110;
  document.querySelector('table>tbody').appendChild(makeTr(obj));
});
})



function makehead(){
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  tr.setAttribute('bgcolor','blue')
  let th = document.createElement('th');
  let name = document.createTextNode('이름');
  th.appendChild(name);
  let th1 = document.createElement('th');
  let age = document.createTextNode('나이');
  th1.appendChild(age);
  tr.appendChild(th);
  tr.appendChild(th1);
  thead.appendChild(tr);

  let btn = document.createElement('button');
  btn.innerHTML = '삭제'
  btn.addEventListener('click', function(evnt){
    evnt.target.parentElement.parentElement.remove();
                    //td           /tr
  });
  th1.appendChild(age);
  tr.appendChild(th);
  return thead;
}
function makeTr(obj){
  let fields = ['name','age'];

  let tr =  document.createElement('tr');
  tr.setAttribute('id',obj.id);
  
// name, age 필드 만큼 td 생성.
  fields.forEach(function(ee){
    let td = document.createElement('td');
    let name1 = document.createTextNode(obj[ee]+`${ee=="age"?"살":""}`);
    td.appendChild(name1);
    tr.appendChild(td);
  });
  let btn = document.createElement('button') // <button>삭제</button>
  btn.innerHTML='삭제';
  td.appendchild(btn);
  tr.appendChild(td);
  return tr;
}
//for in
// function makeTr(obj){
//   let tr1 =  document.createElement('tr');
//   tr1.setAttribute('id',obj.id);
//   for(let aa in obj){
//     let td = document.createElement('td');
//     let name1 = document.createTextNode(obj[aa]+`${aa=="age"?"살":""}`);
//     td.appendChild(name1);
//     tr1.appendChild(td);
//   };
//   return tr1;
// }

function makebody(objAry){
  let tbody = document.createElement('tbody');
//[{},{},{},{},{},{}]

  objAry.forEach(function(obj){
   
    tbody.appendChild(makeTr(obj));
    
  });
  
  
  return tbody;
}