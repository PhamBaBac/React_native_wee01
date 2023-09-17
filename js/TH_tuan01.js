
// Coding Challenge #1

var markMass = 70; 
var markHeight = 1.75; 
var johnMass = 80;
var johnHeight = 1.80; 

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

if (markHigherBMI) {
  console.log("Mark has a higher BMI than John.");
} else {
  console.log("John has a higher or equal BMI to Mark.");
}

// Coding Challenge #2


if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

// Coding Challenge #3

var dolphinsScores = [96, 108, 89];
var koalasScores = [88, 91, 110];

//Ham tinh diem trung binh
function calculateAverageScore(scores) {
  var total = 0;
  for (var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

// Step 1: Diem trung binh cua moi doi
var dolphinsAverage = calculateAverageScore(dolphinsScores);
var koalasAverage = calculateAverageScore(koalasScores);

// Step 2: So sanh diem trung binh cua moi doi
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins win with an average score of ${dolphinsAverage}!`);
} 
else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas win with an average score of ${koalasAverage}!`);
} 
else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a draw with both teams having an average score of at least 100!");
} else {
  console.log("No team wins the trophy.");
}

// Coding Challenge #4

const billValues = [275, 40, 430];

billValues.forEach(bill => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const totalValue = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
});

// Function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Function to check the winner based on the average scores
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

// Coding Challenge #5

// Data 1: Dolphins score [44, 23, 71] and Koalas score [65, 54, 49]
const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);
checkWinner(dolphinsAvg1, koalasAvg1);

// Data 2: Dolphins score [85, 54, 41] and Koalas score [23, 34, 27]
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);
checkWinner(dolphinsAvg2, koalasAvg2);


// Coding Challenge #6
// Function to calculate the tip based on bill value
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// Test the calcTip function with a bill value of 100
const billValue = 100;
const tipValue = calcTip(billValue);
console.log(`For a bill of $${billValue}, the tip is $${tipValue}`);

// Array of test data (bill values)
const bills = [125, 555, 44];

// Calculate tips for each bill using the calcTip function
const tips = bills.map(calcTip);
console.log("Tips for each bill:", tips);

// Calculate the total values (bill + tip) for each bill
const totals = bills.map((bill, index) => bill + tips[index]);
console.log("Total values for each bill:", totals);


// Coding Challenge #7
// Create objects for Mark and John with their properties
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  // Method to calculate BMI
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  // Method to calculate BMI
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  },
};

// Calculate BMI for both Mark and John
mark.calcBMI();
john.calcBMI();

// Determine who has the higher BMI and log the result
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
  console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}

// Function to calculate the tip based on bill value
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


// Coding Challenge #8
// Array of test bill values
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arrays to store tips and totals
const tips1 = [];
const totals1 = [];

// Calculate tips and totals using a for loop
for (let i = 0; i < bills1.length; i++) {
  const tip = calcTip(bills1[i]);
  tips.push(tips1);
  totals.push(bills1[i] + tips1);
}

console.log("Bills:", bills1);
console.log("Tips:", tips1);
console.log("Totals:", totals1);

// Function to calculate the average of an array
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Calculate and log the average of the totals array
const averageTotal = calcAverage(totals1);
console.log("Average Total:", averageTotal);


// Coding Challenge #8

function printForecast(arr) {
  let forecastString = "";
  
  for (let i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}°C in ${i + 1} day${i === 0 ? "" : "s"} `;
  }
  
  console.log(forecastString);
}

// Test data 1
const data1 = [17, 21, 23];
printForecast(data1);

// Test data 2
const data2 = [12, 5, -5, 0, 4];
printForecast(data2);




