
let data = [{studNo:101,studName:'조수연',engScore:90,korScore:80},
{studNo:102,studName:'황진주',engScore:88,korScore:85},
{studNo:103,studName:'권가희',engScore:92,korScore:90},
{studNo:104,studName:'유해정',engScore:94,korScore:100}
];
// 초기화
let list = document.getElementById('list') // tbody

data.forEach(function(elem){
  list.appendChild(makeTr(elem));
});

let changeBtn = document.querySelector('input[type="button"]');
let changeBtn1 = document.querySelector('input[type="submit"]');
// changeBtn.addEventListener('click',function(e){
//   //대상찾아오도록.
//   let targetTr = document.querySelectorAll('#list>tr');
//   console.log(targetTr);
//   let sno = document.getElementById('sno').value;
//   let sname = document.getElementById('sname').value;
//   let escore = document.getElementById('eng').value;
//   let kscore = document.getElementById('kor').value;

//   targetTr.forEach(function(tr){
//    if(tr.children[0].innerHTML == sno){
//      tr.children[1].innerHTML = sname;
//     tr.children[2].innerHTML = escore;
//     tr.children[3].innerHTML = kscore;
//    }
//   })
// });



changeBtn.addEventListener('click',changeCallBack1);
changeBtn1.addEventListener('click',addtd);

// 변경 버튼 이벤트 추가
function changeCallBack1(e){
  e.preventDefault();; // 기본기능 차단
  let sno = document.getElementById('sno').value
  console.log(sno);
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  if(!(sno&&sname&&eng&&kor)){
    alert("필수값을 입력하세요");
    return;
  }
  if(sno != list.children[0].innerHTML){
    alert("일치하는값이 없습니다.")
    return;
  }

  // if(!sno){
  //   alert('변경할 아이디를 입력>>>')
  //   return;
  // }else if(!sname){
  //   alert("이름을 입력하세요")
  //   return;
  // }else if(!eng||!kor){
  //   alert('점수를 입력하세요')
  //   return;
  // }
 
  let searchTr = document.getElementById(`sno_${sno}`);
  searchTr.children[1].innerHTML = document.getElementById('sname').value;
  searchTr.children[2].innerHTML = document.getElementById('eng').value;
  searchTr.children[3].innerHTML = document.getElementById('kor').value;

    console.log(searchTr);

}
//추가

 
function addtd(e){
 e.preventDefault();
 
  let sno = document.forms['myFrm'].elements['sno'].value;
  let sname = document.forms['myFrm'].elements['sname'].value;
  let eng = document.forms['myFrm'].elements['eng'].value;
  let kor = document.forms['myFrm'].elements['kor'].value;

  let student = {
    no: sno,
    na: sname,
    en: eng,
    ko: kor
    };


    document.getElementById('list').appendChild(makeTr(student));

    document.forms['myFrm'].elements['sno'].value = '';
    document.forms['myFrm'].elements['sname'].value = '';
    document.forms['myFrm'].elements['eng'].value = '';
    document.forms['myFrm'].elements['kor'].value = '';

    document.forms['myFrm'].elements['sno'].focus();





}










// student 한건 -> <tr><td>학번</td><td>이름</td><td>영어</td><td>국어</td></tr>
function makeTr(student){
  let tr = document.createElement('tr');
  tr.setAttribute('id','sno_'+student.studNo);
  tr.addEventListener('click',function(e){ // e.target는 선택한 최하위 요소를 가져옴
    // e.stopPropagation : 이벤트 전파 차단.
    // this 선택한 값 (tr)
    console.log(this.children) // this(tr).children(td*5)
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('eng').value = this.children[2].innerHTML;
    document.getElementById('kor').value = this.children[3].innerHTML;
  },false); // true : 이벤트요소를 상위->하위 false 하위->상위
  for(let field in student){ // student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  // 버튼 : 삭제.
  let btn = document.createElement('button'); 
  btn.innerHTML = '삭제';
  btn.addEventListener('click',function(e){
    e.stopPropagation(); // 이벤트 전파 차단.
    console.log(this);
    e.target.parentElement.parentElement.remove();
  },false);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
  



}