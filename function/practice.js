// practice.js
const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    sum += numbers[i];
  }
}
console.log(sum)
sum = 0;

for (let number of numbers) {
  if (number % 2 == 0) {
    sum += number;
  }
}
console.log(sum)
sum = 0;

// 표현식으로
//짝수를 더한값을 sum에 넣기
//foreach 배열각각의 요소를 가져옴
let oddSum = (sss) => {
  if (sss % 2 == 1) {
    sum += sss;
  }
};


let evenSum = (sss) => {
  if (sss % 2 == 0) {
    sum += sss;
  }
};
numbers.forEach(evenSum);
console.log(`합:` + sum);



