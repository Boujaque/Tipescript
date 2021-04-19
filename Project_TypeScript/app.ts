//function as types
function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult( num: number): void {
  console.log("result: " + num);
}

console.log(printResult(add(5, 12)));

// let combineValues: () => number;
let combineValues: () => number;

combineValues = add;
combineValues = 5;
combineValues = printResult;

console.log(combineValues(8, 8));

// let someValue: undefined;


function other(num: number) : undefined {
  console.log("result: " + num);
  return;
