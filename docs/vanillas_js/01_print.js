// log = print
let name = "yugyeong";
// undefined
console.log(name);
// VM271:1 yugyeong


// let 변수선언
let welcome = 'Hello World!';
// undefined
welcome;
// 'Hello World!'
let numbers = 55;
// undefined
numbers;
// 55


// 문자와 문자 합하기 = + 기호 사용
let welcome = 'Hello World!';
'String :' + 'Hello world !'
// 'String :Hello world'
"String :" + welcome;
// 'String :Hello world !'
let concats = "String : " + welcome; 
concats;
// 'String : Hello World !'
let concat = 'String:'+welcome+', Number:'+numbers;
concat;
// 'String:Hello World!, Number:55'


// 억음부호 backtick(틸트) = 문자를 인식하기 위한 기호
//  ${} = string 안에서 변수를 인식하기 위한 기호
'String : Hello World!'
`String : ${welcome}, Number:${numbers}`;
// 'String : Hello World!, Number:55'
let concats_tilt = `String : ${welcome}, Number:${numbers}`;
concats_tilt;
// 'String : Hello World!, Number:55'
console.log(concats_tilt);
// String : Hello World!, Number:55


