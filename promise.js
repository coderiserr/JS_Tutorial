//Promise come to resolve inversion control problem;
//example suppose we create e commerce cart
//Step 1.create order and return promise;
//Step 2.makePayement
// There are two one comsumer,second is producer par
//also attached function to catch between promise chaining
//promise prevent from callaback hell and iversion control

// const cart=["shoes","jeans","shirt"]
// //consumer

// const promise=createorder(cart);

// promise.then(function(oderId){
//     console.log(oderId);
//     return oderId;
// })
// // .catch(function(err){
// //     console.log(err.message);
// // })
// .then(function(oderId){
//    return makePayement(oderId);
  
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
// })
// .catch(function(err){
//     console.log(err.message);
// })





//producer part

function createorder(cart){
    const pr=new Promise(function(resolve,reject){//create promise
        
       //logic part
        if(!validateCart(cart)){
            const err=new Error("Cart is not validate")
            reject(err);
        }
        const oderId="1234";
        setTimeout(function(){
            if(oderId){
            resolve(oderId);
         }
        },5000)
         
       
    }) 
    return pr;
}

function makePayement(oderId){
  return new Promise(function(resolve,reject){//also return promise direct without need to create
  
    resolve("Payment is succesfully done");
  })
}

function validateCart(cart){
   return true
}



/*
*In the block of code when p1 have 5 sec delay and p2 have 10 sec delay 
first print 5 sec delay code
and then 10 sec code;

*In second senario if we have 10 sec delay for p1 and 5 sec for p2 
then it execute 10 sec delay  promise same as both have same delay 

*How async and await work behind the scene
We know that the js is the synchronous single threaded programming language and have only one call stack when 
function of promise handler invoked it execute line by line when the await keyword see it just suspend the and remove
from call stack when the promise execute asyncousnaly call stack empyt at that when promise execute it go again in 
call stack then go next line.then console it






 const p=new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("Promise resolve value")
     },5000)
   
 })
 const p2=new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("Promise resolve value2")
     },10000)
   
// })

async function handlePromis(){
    const val=await p;//js engine look like it wait to excute promise then go to next line
    console.log(val)
    console.log("Hello")


    const val2=await p2;
    console.log(val2)
    console.log("Hello2")
 }
 handlePromis();
*/

/*
How the fetch function work in js

fetch() method take api as promise and return response object then response.json() return promise;

const data= await fetch(apicall);
const json=await data.json()

console.log(json);


*/


/*
How To handle error 

try{
}
catch(err){
console.log(err.message);
}
*/


/*
what is async-its is the function  always return promise
*/
async function getdata(){
    return p;//always return promise
    //return "hello"-Promise {<fulfilled>: 'hello'}
}

 
//handle promise without async await
//with formal way using settimeout function promise execute 10 sec becoz js never wait for nothing so
//hello print first then promise value
// function getdata2(){
//     p.then((res)=> console.log(res));
//     console.log("hello")
// }
// getdata2()//Promise resolve value

//handle promise with async and await 
 async function handlePromis(){
    const val=await p;
    console.log(val)
   
 }
 handlePromis();//Promise resolve value































/*

what is await-its keyword that is use only inside the async function
how async and await work behind the scene 
example of using async/await
error handling
interview
Async await vs promise.then/.catch
Aysnc and wait use handle promises
*/

