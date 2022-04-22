// practice.js
const jsonObj=
`[{"id":1,"first_name":"Olwen","last_name":"Bigglestone","email":"obigglestone0@latimes.com","gender":"Polygender","ip_address":"103.252.34.64"},
{"id":2,"first_name":"Bond","last_name":"Hoonahan","email":"bhoonahan1@arstechnica.com","gender":"Male","ip_address":"183.164.11.75"},
{"id":3,"first_name":"Freida","last_name":"Burnsides","email":"fburnsides2@amazon.com","gender":"Female","ip_address":"203.150.136.136"},
{"id":4,"first_name":"Jenda","last_name":"Serginson","email":"jserginson3@usatoday.com","gender":"Female","ip_address":"221.156.71.146"},
{"id":5,"first_name":"Elly","last_name":"Reddlesden","email":"ereddlesden4@shutterfly.com","gender":"Female","ip_address":"247.56.12.21"},
{"id":6,"first_name":"Coletta","last_name":"Yeoman","email":"cyeoman5@nps.gov","gender":"Female","ip_address":"229.244.123.161"},
{"id":7,"first_name":"Kath","last_name":"Azema","email":"kazema6@techcrunch.com","gender":"Female","ip_address":"22.113.183.26"},
{"id":8,"first_name":"Nathalie","last_name":"Firks","email":"nfirks7@imageshack.us","gender":"Female","ip_address":"72.133.28.33"},
{"id":9,"first_name":"Glenine","last_name":"Headley","email":"gheadley8@behance.net","gender":"Female","ip_address":"247.240.140.79"},
{"id":10,"first_name":"Cthrine","last_name":"Gawler","email":"cgawler9@homestead.com","gender":"Female","ip_address":"172.150.133.218"},
{"id":11,"first_name":"Bonita","last_name":"Tapply","email":"btapplya@vkontakte.ru","gender":"Female","ip_address":"222.178.9.52"},
{"id":12,"first_name":"Phebe","last_name":"Pawelek","email":"ppawelekb@abc.net.au","gender":"Female","ip_address":"105.175.55.69"},
{"id":13,"first_name":"Nissa","last_name":"Wayte","email":"nwaytec@imageshack.us","gender":"Female","ip_address":"94.115.190.189"},
{"id":14,"first_name":"Ernest","last_name":"Gravatt","email":"egravattd@technorati.com","gender":"Male","ip_address":"238.180.175.181"},
{"id":15,"first_name":"Archie","last_name":"Jesper","email":"ajespere@pagesperso-orange.fr","gender":"Agender","ip_address":"51.49.159.142"}]`

// json 문자열 => javascript 오브젝트 변경해주는 api 메소드
//parse = 자바스크립트의 오브젝트 타입으로 변경해줌
const objAry = JSON.parse(jsonObj);
console.log(objAry);
                        // email: "obigglestone0@latimes.com"
                        // first_name: "Olwen"
                        // gender: "Polygender"
                        // id: 1
                        // ip_address: "103.252.34.64"
                        // last_name: "Bigglestone"



let fields = ['id','first_name','last_name','email'];
function showTable(ary){
  let tableTag = "";
  //<table> 
  //<thead><tr><th></th>*항목갯수만큼</tr></thead>
  //<tbody><tr><td></td>*항목갯수<tr>*건수</tbody>
  //</table>
  tableTag += '<table>';
  tableTag += createHead();
  tableTag += createBody(ary);
  tableTag += '</table>'
  document.write(tableTag);
}
function createHead(){
  //<thead><tr><th></th>*항목갯수</tr></thead>
let headTag ="";
headTag += '<thead>,<tr>';
fields.forEach(function(val) {
  headTag += `<th>${val}</th>`;
  
});

headTag += '</thead></tr>';
console.log(headTag);
  return headTag;
}
function createBody(ary){
  //<tbody><tr><td></td>*항목갯수<tr>*건수</tbody>
  let bodyTag= "";
  bodyTag += "<tbody>"
  ary.forEach(function (val, idx){
    bodyTag += `<tr style="background:${idx%2==0?'green':'blue'};">`;
    fields.forEach(function(field){
      bodyTag += `<td>${val[field]}</td>`;
    });
    bodyTag += '</tr>'

  });
  bodyTag += "</tbody>"
  console.log(bodyTag);
  return bodyTag;
}

showTable(objAry);