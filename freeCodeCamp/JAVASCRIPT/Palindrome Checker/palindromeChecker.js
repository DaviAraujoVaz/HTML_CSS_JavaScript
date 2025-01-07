const checkBtn = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");

function cleanInputString(str) {
  const regex = /[\W_\s]+/g;
  str = str.replace(regex, "");
  return str.toLowerCase();
}

function isPalindrome() {
  const input = cleanInputString(inputText.value);
  const reversedInput = Array.from(input).reverse().join("");
  const targetResult = document.querySelector(`#result`);

  if (input != "") {
    if (input == reversedInput) {
      const HTMLisPalindrome = `
      <p><strong>${inputText.value} is a palindrome</strong></p>
      `;
      targetResult.innerHTML = HTMLisPalindrome;
    } else {
      const HTMLisNotPalindrome = `
      <p><strong>${inputText.value} is not a palindrome</strong></p>
      `;
      targetResult.innerHTML = HTMLisNotPalindrome;
    }
  } else {
    alert("Please input a value");
  }
}

checkBtn.addEventListener("click", isPalindrome);

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isPalindrome();
  }
});
