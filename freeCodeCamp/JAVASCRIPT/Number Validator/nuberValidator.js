const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const userInput = document.getElementById("user-input");
const targetResult = document.querySelector(`#results-div`);

const regex = /^1?(| ?(?=\d{3}-|\d{3} )| \(?(?=\d{3}\) \d{3}-)|\(?(?=\d{3}\)))\d{3}(-?(?=\d{3}-)| ?(?=\d{3} )|\)?|\) ?)\d{3}(-?| ?)\d{4}$/g;

function isValidNumber() {
    const input = userInput.value;

    if (input != "") {
        if (regex.test(input)) {
            const HTMLisValidNumber = "Valid US number: " + userInput.value;
            targetResult.innerHTML = HTMLisValidNumber;
            regex.lastIndex = 0;
        } else {
            const HTMLisNotValidNumber = "Invalid US number: " + userInput.value;
            targetResult.innerHTML = HTMLisNotValidNumber;
            regex.lastIndex = 0;
        }
    } else {
        alert("Please provide a phone number");
    }
}

function clearResult() {
    targetResult.innerHTML = "";
}

checkBtn.addEventListener("click", isValidNumber);
clearBtn.addEventListener("click", clearResult);

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        isValidNumber();
    }
});
