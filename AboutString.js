const string="hello";
console.log(string)

const newStr=new String("Abhishek    ");
console.log(newStr)
console.log(newStr.length)//12 space count
console.log(newStr.indexOf("b"));//1
console.log(newStr.charAt(5));//h
console.log(newStr.trim())//remove space
console.log(newStr.lastIndexOf("k"))//k
console.log(newStr.at(5))//h


const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false


const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";



const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."



