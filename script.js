let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');
let display = document.querySelector('.display');

for (let key of keys) {
  key.onclick = function () {
  display.textContent = display.textContent + key.textContent;
  }
};

clear.onclick = function () {
  display.textContent = '';
};
