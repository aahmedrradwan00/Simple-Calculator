const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operations = ["%", "*", "/", "+", "-", "="];
const calculate = (bv) => {
  if (bv === "=" && display.value !== "") {
    try {
      display.value = eval(display.value.replace("%", "/100"));
    } catch (error) {
      display.value = "!Error";
    }
  } else if (bv === "C") {
    display.value = "";
  } else if (bv === "DEL") {
    display.value = display.value.slice(0, -1);
  } else {
    if (display.value === "" && operations.includes(bv)) return;
    display.value += bv;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
