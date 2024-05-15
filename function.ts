// normal function
function normalFunction() {
  console.log(123);
}
normalFunction();
//parameter number function
function printNumber(num: number) {
  console.log(num);
}
printNumber(45);

// parameter string function
function printString(fname: string) {
  console.log(fname);
}
printString("Tousif");

// return number function
function returnNum(num: number) {
  return num + num;
}
let res = returnNum(1);
console.log(res);

// return string function
function returnString(value: string) {
  return value;
}

let res2 = returnString("Tasrik");
console.log(res2);

// any type
function returnAny(num: any) {
  return num;
}
let catchAny = returnAny("Tousif");
console.log(catchAny);
let catchAny2 = returnAny(12345555);
console.log(catchAny2);
