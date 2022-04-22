//object/practice2.js
// 달력만들기




function showCalendar(year, month){
let firstDay = getFirstday(year, month); // 1일의 위치지정하기 위한 함수
let lastDate = getLastDate(year, month); // 해당월의 마지막날을 계산 함수.

document.write(`<table border = 1>`)
//요일 출력
showDayinfo();
// 빈공간 작성.
for(let i=0;i< firstDay;i++){
  
  document.write(`<td></td>`)
}
// 날짜 화면 출력.
for(let i=1;i<= lastDate;i++){
 //if((i+firstDay)%7 == 0){ //줄바꿈
//  document.write(`<td>${i}</td>`)
 
 //}
  if ((i+firstDay)%7==0){ // 토욜 파란색
  document.write(`<td style="background : blue;">${i}</td>`)
 
    
  }else if ((i+firstDay)%7==1){// 일욜 빨간색
    document.write(`<td style="background : red;">${i}</td>`)
  
  }else{
    document.write(`<td>${i}</td>`);
  }

if((i+firstDay) %7==0){
  document.write('</tr><tr>');
}
}
document.write('</tr></table>')
}
function showDayinfo(){
  let day = ['Sun','Mon','Tue','Wed','Thr','Fri','Say']
  document.write('<thead><tr>')
  day.forEach(function (day){
    document.write(`<th style = "background : green;">${day}</th>`)
  });
  document.write('</tr></thead>')
}
showCalendar(2022,4);

function getLastDate(year, month){
 //말일정보를 가져오는 함수
 switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  return 31;
  case 2:
    return 28;
    case 4:
      case 6:

      case 9:
  case 11:
    return 30;

      }
};


function getFirstday(year, month){ // 
  switch(month){
    case 1:
      return 6;
      case 2:
        return 2;
        case 3:
      return 2;
      case 4:
      return 5;
      case 5:
        return 0;
        case 6:
          return 3;
          case 7:
            return 5;
            case 8:
              return 1;
              case 9:
              return 4;
              case 10:
              return 6;
              case 11:
              return 2;
              case 12:
              return 4;

              
  }
};
