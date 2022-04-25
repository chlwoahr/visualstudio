// string/pratice.js

let str1 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus veniam dolores, accusantium expedita modi eveniet iusto sapiente? Mollitia culpa explicabo nam quidem praesentium aliquid sint, soluta numquam ipsum id repellat?'.split(' ');
// 단어의 길이가 10개 이상인것 골라내기
let result = str1.split(' ').filter(e1 => e1.length >= 10).join(',');
console.log(result);