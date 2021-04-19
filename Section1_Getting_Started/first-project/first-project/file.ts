const button1 = document.querySelector("button");
const input3 = document.getElementById("num1")! as HTMLInputElement;
const input4 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input3.value, +input4.value));
});
