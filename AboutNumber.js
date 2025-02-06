// const score=100;
// console.log(score);



// const num=new Number(40000000);
// console.log(num)

// console.log(num.toString())

// const number =123.99;
// console.log(number.toFixed(1))//round off and add place after point
// console.log(number.toPrecision(2))//round off and add place after point
// //round off and add place after point
// console.log(num.toLocaleString("en-IN")) //this convert ur number representation according ur country currency format

// console.log(Math)//Math library in js

// console.log(Math.PI)
// console.log(3-4)//-1
// console.log(Math.abs(3-4))//1

// console.log(Math.floor(4.999))//4
// console.log(Math.ceil(4.999))//5
// console.log(Math.cbrt(4))//1.54
// console.log(Math.floor(Math.cbrt(4)))//1

// console.log(Math.min(2,3,4,5));//2
// console.log(Math.round(3.5));//4
// console.log(Math.round(3.4));//3

console.log(Math.random())//give random number between 0 and 1
console.log(Math.random()+1)//Now 0.123 become 1.234
console.log(Math.random()*10)//Number given 0 to 9

//How to find random number in given range

const min=10;
const max=20;

console.log(Math.floor(Math.random() * ( max - min + 1)) +min)//10 to 20
/////////////////////////////////////////////////////////////////////////



 //Date object->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const date =new Date("June 16,2000 23:15:30");
console.log(date.getMonth())//5 JAN=0
console.log(date.getMonth()+1)//6

