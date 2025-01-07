const decreaseCount = document.getElementById("decrease");
const resetCount = document.getElementById("reset");
const increaseCount = document.getElementById("increase");
const countDisplay = document.getElementById("display");

let count = 0;

increaseCount.onclick = function () {
  count++;
  countDisplay.textContent = count;
};

resetCount.onclick = function () {
  count = 0;
  countDisplay.textContent = count;
};

decreaseCount.onclick = function () {
  count--;
  countDisplay.textContent = count;
};

// Math.round(x);
// Math.floor(x);
// Math.ceil(x);
// Math.trunc(x);
// Math.pow(x, y);
// Math.sqrt(x);
// Math.log(x);
// Math.sin(x);
// Math.cos(x);
// Math.tan(x);
// Math.abs(x);
// Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
