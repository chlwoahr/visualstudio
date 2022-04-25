// array/basic2.js

let data=
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


//find():맞는요소 한개만 찾은후 종료
let objAry = [];
objAry = JSON.parse(data); // object타입으로 변경
let result = objAry.find(function(elem){
  return elem.gender == 'Female';  //맞는요소 한개만 찾은후 종료
});
console.log(result);

//