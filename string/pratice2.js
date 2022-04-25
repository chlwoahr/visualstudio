// string pratice2.js

let sso = ['970101-1234567','970101 2234567','9701014234567','970101/3234567'];

function checkGender(ssn){
 let result1 = ssn.replace(/\D/, '').charAt(6);
  if (result1 == 1 || result1 == 3){
    return '남자';
  }else if(result1 == 2 || result1 ==4){
    return '여자';
    }  
   
 }
 sso.forEach(function (e1) {
  let result = checkGender(e1);
  console.log(result);
});
// ▼
 sso.forEach(e1 =>{
  let result = checkGender(e1);
  console.log(result);
});



