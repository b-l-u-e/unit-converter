/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

const inputEl = document.getElementById("input");
const button = document.getElementById("button");
const inputResult = document.querySelectorAll(".input-result");

let result;

const meterToFeet = (value) => (value * feet).toFixed(3);
const literToGallon = (value) => (value * gallon).toFixed(3);
const kilogramToPound = (value) => (value * pound).toFixed(3);
const feetToMeter = (value) => (value / feet).toFixed(3);
const gallonToLiter = (value) => (value / gallon).toFixed(3);
const poundToKilogram = (value) => (value / pound).toFixed(3);

button.addEventListener("click", () => {
  const inputValue = inputEl.value;

  // Display the results
  inputResult[0].textContent = `${inputValue} meters = ${meterToFeet(
    inputValue
  )} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meters`;

  inputResult[1].textContent = `${inputValue} liters = ${literToGallon(
    inputValue
  )} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue)} liters`;

  inputResult[2].textContent = `${inputValue} kilograms = ${kilogramToPound(
    inputValue
  )} pounds | ${inputValue} pounds = ${poundToKilogram(inputValue)} kilograms`;
});


// toggle dark / light mode
// document.getElementById('toggleButton').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
// });
