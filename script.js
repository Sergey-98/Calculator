let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');
let press = document.querySelector('.press');
let display = document.querySelector('.display');

for (let key of keys) {
  key.onclick = function () {
  display.textContent = display.textContent + key.textContent;
  }
};

press.onclick = function () {
  display.textContent = 'вы ввели текс';
};

clear.onclick = function () {
  display.textContent = '';
};
