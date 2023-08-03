//! Given Task - 01
//? Store Mark's and John's mass and height in variables
//^ Accourding to Data 01: Mark's mass and height
let marksMass1 = 78;
let marksHeight1 = 1.69;
//^ Accourding to Data 01: John's mass and height
let johnsMass1 = 92;
let johnsHeight1 = 1.95;

//* Accourding to Data 02: Mark's mass and height
let marksMass2 = 95;
let marksHeight2 = 1.88;
//*Accourding to Data 02: John's mass and height
let johnsMass2 = 85;
let johnsHeight2 = 1.76;

//! Given Task - 02
//? Calculate both their BMIs using the formula (you can even implement both versions)
//~ Calculatation of Marks's BMIs:
console.log("Mark's BMIs: ");
let marksBMIs1 = marksMass1 / marksHeight1 ** 2;
console.log("BMI's of Mark's(Data - 01): " + marksBMIs1);

let marksBMIs2 = marksMass2 / marksHeight2 ** 2;
console.log("BMI's of mark's(Data - 02): " + marksBMIs2);

//~ Calculatation of Marks's BMIs:
console.log("John's BMIs: ");
let johnsBMIs1 = johnsHeight1 / johnsHeight1 ** 2;
console.log("BMI's of John's(Data - 01): " + johnsBMIs1);

let johnsBMIs2 = johnsMass2 / johnsHeight2 ** 2;
console.log("BMI's of John's(Data - 02): " + johnsBMIs2);

//! Given Task - 03
//? Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
console.log(
  "Comparison between marks and jhons who have higher BMI(Data - 01):"
);
if (marksBMIs1 > johnsBMIs1) {
  console.log("Mark's BMI is higher than John");
} else {
  console.log("Mark's BMI is not higher than John");
}

console.log(
  "Comparison between marks and jhons who have higher BMI(Data - 02):"
);
if (marksBMIs2 > johnsBMIs2) {
  console.log("Mark's BMI is higher than John");
} else {
  console.log("Mark's BMI is not higher than John");
}
