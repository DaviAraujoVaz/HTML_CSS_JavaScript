const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");

const output = document.querySelector(`#output`);

const romanNumerals = {
  [1]: "I",
  [4]: "IV",
  [5]: "V",
  [9]: "IX",
  [10]: "X",
  [40]: "XL",
  [50]: "L",
  [90]: "XC",
  [100]: "C",
  [400]: "CD",
  [500]: "D",
  [900]: "CM",
  [1000]: "M",
};

const numArray = Object.keys(romanNumerals).reverse();
for (let index = 0; index < numArray.length; index++) {
  numArray[index] = Number(numArray[index]);
}

const convertToRoman = (num) => {
  let romanNumber = "";

  if (num == "") {
    output.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (num <= 0) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (num > 3999) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    for (let index = 0; index < numArray.length; ) {
      if (num >= numArray[index]) {
        romanNumber += romanNumerals[numArray[index]];
        num -= numArray[index];
        if (num == 0) {
          break;
        }
      } else {
        index++;
      }
    }
    output.innerHTML = `<p>${romanNumber}</p>`;
    output.classList.remove("hidden");
  }
};

convertBtn.addEventListener("click", () => {
  convertToRoman(inputNumber.value);
});

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman(inputNumber.value);
  }
});
