//Undefined, void - return types
function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult( num: number): void {
  console.log("result: " + num);
}

console.log(printResult(add(5, 12)));

function other(num: number) : undefined {
  console.log("result: " + num);
  return;

}