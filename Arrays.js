//How to declare array

let arr = [1,2,3,4];
console.log(arr);

let arr2= new Array(1,2,3,4,65);
console.log(arr2);


//How access array element

console.log(arr2[4])//65

console.log(arr2.length);//5

//array method

arr2.push(9) //add on last index of array

console.log(arr2);//[1,2,3,4,65,9];
 arr2.push(4);
 console.log(arr2)

 arr2.pop();
 console.log(arr2)// [1, 2, 3, 4, 65, 9]

 //shift,unshift

 arr2.unshift(3);// add element and first place
   console.log(arr2)
   arr2.shift();//remove element from first
   console.log(arr2)
   arr2.shift();
   console.log(arr2)


//slice,splice

const ar = new Array(1,2,3,4,5);
 console.log("A" ,ar);
  const ar1=ar.slice(1,3);
 console.log(ar1);//[2, 3]
 console.log(ar);//Array same after slice

 const ar2= new Array(1,2,3,4,5);
 console.log("B",ar1)
 const ar3=ar2.splice(1,3);
 console.log(ar3);// [2, 3, 4]

 console.log(ar2);//[1, 5] Array modified after splice

const fruits =["apple","orange","banana","grapes"];
const vegies= ["onion","potato","cabbage","garlic"];
 
fruits.push(vegies);"❌"
  console.log(fruits);//['apple', 'orange', 'banana', 'grapes', Array(4)] its takes array as element 

const bucket =fruits.concat(vegies);
console.log(bucket);//g['apple', 'orange', 'banana', 'grapes', 'onion', 'potato', 'cabbage', 'garlic']  
//good but we have more than two arrays;

//spread operator use
//easy to access
const nuts=["cashew","almonds","rasins","pista"]
// const all=[...fruits,...nuts,...vegies];"✅"
// console.log(all);
// console.log(all[5]);


//check array or not
//isArray 
console.log(Array.isArray([1,2,3,4]))//true;
console.log(Array.isArray("Abhishek"))//true;
//conver in array

console.log(Array.from('Abhishek'))//['A', 'b', 'h', 'i', 's', 'h', 'e', 'k']
console.log(Array.of("Ram","Shyam","Hanuman"));//['Ram', 'Shyam', 'Hanuman']


const arrayInsideArray=[1,4,3,true,[5,3,2],false,["a","b","c"]];
const singleArray=(arrayInsideArray.flat(1));//[1, 4, 3, true, 5, 3, 2, false, 'a', 'b', 'c']
//flat(1) 1 indicate tha deepness of array inside array use infinity as default
const singleArray2=(arrayInsideArray.flat(Infinity));//SAME O/P
 
const a=2;
const b=5;
const c=7;

console.log(Array.of(a,b,c));// [2, 5, 7]
