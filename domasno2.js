// 1.a.
let globalNum = 10;
function checkScope() {
  console.log(globalNum);
}
checkScope();

//б..
let localNum = 10;
function checkScope() {}
console.log(globalNum === localNum);

//в.
let blockNum = 10;
if (true) {
}
console.log(typeof blockNum);

//2.a. ???
let number = 10;
if (number % 10 == 0) {
  console.log("10 is even number");
} else if (number % 10 == 0) {
  console.log("10 is odd number");
}

//б.
let age = 18;
if (age >= 18) {
  console.log("Licnosta ima pravo da glasa");
} else {
  console.log("Licnosta nema pravo da glasa");
}

//в.
let score = 78;
if (score >= 90 && score <= 100) {
  console.log("Grade:A);
} else if (score >= 80 && score <=89) {
  console.log("Grade:B");
} else if (score >= 70 && score <= 79) {
 console.log("Grade:C");
} else if (score >= 60 && score <=69) {
console.log("Grade:D");
} else if (score >= 0 && score <=59) {
  console.log(Grade:F");
} else {
  console.log("Invalid score! Please enter a score between 0 and 100")

//г.
let dayNumber = "2";
switch (dayNumber) {
  case "1":
    console.log("The day is Sunday");
    break;
  case "2":
    console.log("The day is Monday");
    break;
  case "3":
    console.log("The day is Tuesday");
    break;
  case "4":
    console.log("The day is Wednesday");
    break;
  case "5":
    console.log("The day is Thursday");
    break;
  case "6":
    console.log("The day is Friday");
    break;
  case "7":
    console.log("The day is Saturday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7")

//3. 
function addThreeNumbers(number1, number2, number3) {
  let sum = number1 + number2 + number3;
  return sum;
}
console.log(addThreeNumbers(10, 15, 20);

//
function printMyBirthDate(){
    return "25.12.1993."
}
    console.log(printMyBirthDate())
    
// 
 function printNum (num1, num2){
    if(num1 === num2){
            console.log("These numbers are equal!");
        } else {
            console.log("These numbers are not equal")
        }
    }
 }
printNum(20, 23)

