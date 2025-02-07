// function fun(){
//     console.log("Hello")
// }

// (fun());

// function addtwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// const res=(addtwoNumber(3,5))
// console.log(res);//8  undefined

// function addtwoNumbe2(num1,num2){
//     return num1+num2
// }
// const re2=(addtwoNumbe2(3,5))
// console.log(re2);//8  


// function userLogin(username ="sam"){ //deafult val
//     return `${username} Just Login`
// }

// console.log(userLogin(""))// Just Login
// console.log(userLogin("Abhishek"))//Abhishek Just Login

// //when we have multiple aruments and one parameter use rest/spread operator
// // function cartPrice(num1){
// //     return num1
// // }
// // console.log(cartPrice(5))//5

// // function cartPrice(...num1){
// //     return (num1)
// // }
// // console.log(cartPrice(5,3))//[5, 3]

// function cartPrice( val1,val2,...num1){
//     return (val1,val2,num1)
// }
// console.log(cartPrice(5,5,6,78))

//how function take object

// const user={
//     user:"Abhishek",
//     phn:12345
// }

// function getdetails(anyobject){
//  return anyobject.user;
// }

// console.log(getdetails(user))//abhishek
// console.log(getdetails({
//     user:"Abhishek",
//     phn:12345
// }))//also pass object as aruments


// //how pass array as aruments

// const data=[4,3,5,6,7];

// function getdata(antarray){
//     return antarray[4]
// }

// console.log(getdata(data))//7

// //also as arguments as data
// console.log(getdata([4,6,8,5,6]))//6



//+++++++++++++++++++++++Scope of Function++++++++++++++++++++++++++++++++++++++++++//

// let a=21;
// const b=11;
// var c=88;
//all are access
// if(true){
//     let a=20;
//     const b=10;
//     var c=9
//     console.log(a)//20
// }

// console.log(a);//a is not defined
// console.log(b);//b is not defined
// console.log(c);//9



//nested function 

function parent(username){
    // let username="Abhishek"
    function child(website){
        // let website="hello.com"
        console.log(username+website);
    }
    // console.log(website)//website is not defined
    child("hello")
}
parent("AbhishekS")//Abhishekhello.com  ->child access parent variables but parent cannot
 

//hoisting
// add(2,4)//6
// function add(a,b){
//    console.log(a+b);
// }

// // add(2,4);//6
// res(4,5)// Cannot access 'res' before initialization
// const res=function mutltiply(a,b){
//     console.log(a*b);
// }

// res(4,5)//20

//+++++++++ use of this +++++++//

//code without this
// const user={
//     username:"Abhishek",
//     location:"ghaziabad",
//     welcomemessage:function(username,location){
//         return `welcome ${username} to ${location} `
//     }
// }
// console.log(user.welcomemessage(user.username,user.location))
// user.username="shyam"
// console.log(user.welcomemessage(user.username,user.location))



// code with this->return current context
// const user={
//     username:"Abhishek",
//     location:"ghaziabad",
//     welcomemessage:function(){
//         // console.log(this)
//         // return `welcome ${this.username} to ${this.location} `
//     }
// }
// console.log(user.welcomemessage())

// user.username="Ram";
// console.log(user.welcomemessage())

// console.log(this)

// function one(){
//     console.log(this)
// }

// one();

const two =function(){
    let username="Abhishek"
    console.log(this.username);
}  
two();
const one =()=>{
    let username="Abhishek"
    console.log(this.username);
}  
one();


//implecit return 

// const implecit = (num1,num2)=> (num1+num2);
const implecit = ()=> ({username:"Abhishek"});
const explecit = (num1,num2)=> {
    return num1+num2;
    
}

// console.log(implecit(4,5));
console.log(implecit())

console.log(explecit(4,10));


//+++++++++++++++IIFE+++++++//

(function iifee(){
    console.log("I am name iinfe")
})();

(()=>{
   console.log("I am simple iife") 
})();//semicolon is required t0 exexute next iife function

(()=>{
   console.log(`I am simple ${name}`) 
})("iffe")






