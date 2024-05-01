// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      yesCount++;
    } else if (surveyData[i] === "No") {
      noCount++;
    } else if (surveyData[i] === "Maybe") {
      maybeCount++;
    }
  }
  outputEl.innerHTML = `Yes: ${yesCount} <br> No: ${noCount} <br> Maybe: ${maybeCount}`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  let young = 0;
  let middle = 0;
  let old = 0;
  let oldest = 0;

  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      young++;
    } else if (ageData[i] <= 35) {
      middle++;
    } else if (ageData[i] <= 65) {
      old++;
    } else if (ageData[i] > 65) {
      oldest++;
    }
  }
  outputEl.innerHTML = `Under 18: ${young} <br> 18 to 35: ${middle} <br> 36 to 65: ${old} <br> Above 65: ${oldest}`;
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  let even = 0;
  let odd = 0;

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  outputEl.innerHTML = `Even: ${even} <br> Odd: ${odd}`;
}
