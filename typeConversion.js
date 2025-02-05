//
let number1=1
// let StringNumber1= String( number1);//TYPE OF OBJECT
let numberBoolean= Boolean( typeof number1);//1-0//true
// console.log(numberBoolean);//null

let String="33";
let numberString= Number(  String);//33//typeof nan
let booleanString1= Boolean( typeof String);//TRUE
// console.log(booleanString);//0

let boolean=true/false
let booleanNmuber= Number( boolean);//1-0//typeof-NaN
// let booleanString= String(boolean);//true-false//typeof boolean
// console.log(booleanNmuber);

//////////////////////////////////////////*********operation******* /////////////////////////////////////
console.log(2+2) 
console.log(2-1)
console.log(2*9)
console.log(2**4)
console.log(2/6)
console.log(2%1)




console.log("1"+1)//11
console.log(1+1)//2
console.log("1"+1+5)//115
console.log(2+1+"1")//31



console.log(+true)//1
console.log(-true)//-1
console.log(+"")//0


let isNumber=100;
console.log(isNumber++)//100

console.log(++isNumber)//102;

var a=0
var b=null;

console.log(a==b);//false
console.log(1==b);//false
console.log(a>b);//true
console.log(a<b);//false

var a="2"
var b=1;

console.log(a==b);//false
console.log(1==b);//false
console.log(a>b);//true
console.log(a<b);//false

var a=null
var b=undefined;

console.log(a==b);//true
console.log(1==b);//false
console.log(a>b);//false
console.log(a<b);//false


//Note when comapre null or number comparison operator like <=,>=,<,> convert null into 0 ;
//Note when comapre null or undefined comparison operator like <=,>=,<,> convert null and undefined into NaN THEN any thing comapre with NaN is false ;












