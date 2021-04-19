// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if(typeof n1 !== 'number' || typeof n2 === 'number'){
  //   throw new Error ('Incorect input');
  // }
   const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrease = "Result is:";

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

add(number1, number2, printResult, resultPhrease);
