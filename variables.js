//lets understand the vairables let ,var,const

var accountID=4321;//does not have block scope not use it is bad practice
let accountEmail="coolhub123@gmail.com"//The let keyword allows reassignment of accountEmail, but it has block scope (it exists only within the block {} where it is declared)
const phn= 9876456456;
address="spn";//why this value print and change-> JavaScript automatically creates it as a global variable (which is bad practice

//Now change These fields;

accountID=1234;
accountEmail="abhi@gmail.com";
// phn=98765432; this field not change due its constant nature
address="jpn"


console.log(accountID,accountEmail,address);



//
