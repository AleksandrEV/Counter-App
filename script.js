let subsrtuct = document.getElementById('substract');
let add = document.getElementById('add');
let output = document.getElementById('result');

subsrtuct.addEventListener('click', function () {
   let result = Number(output.textContent) - 1;
   if (result >= 0) {
      output.textContent = result;
   }
})

add.addEventListener('click', function () {
   let result = Number(output.textContent) + 1;
   output.textContent = result;
})

document.getElementById('null').addEventListener('click', function () {
   output.innerHTML = 0;
})