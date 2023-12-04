// 1.a.
let globalNum = 10;
function checkScope() {
  console.log(globalNum);
}
checkScope();

//б..
let localNum = 10;
function checkScope() {
console.log(globalNum === localNum);
}

//в.

if (true) {
  let blockNum = 10;
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
if (age < 18) {
  console.log("Licnosta ima pravo da glasa");
} else if () {
  console.log("Licnosta nema pravo da glasa");
}

//в.
let score = 78;
if (score === 78) {
  console.log("Grade:C");
} else if (score > 100) {
  console.log("Invalid score! Please enter a score between 0 and 100");
} else score < 0;
console.log("Invalid score! Please enter a score between 0 and 100");

//г.
let dayNumber = 2;
switch (dayNumber) {
  case 2:
    console.log("The day is Monday");
    break;
  case "error":
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

//3. 
function addThreeNumbers(number1, number2, number3) {
  let sum = number1 + number2 + number3;
  return sum;
}
let result = addThreeNumbers(5,25,13)
console.log(result);

//
function printMyBirthDate(){
    return "25.12.1993."
}
    console.log(printMyBirthDate())
    
// ???
 function printNum (num1, num2){
    if(typeof num1 === num2){
        if(num1 != num2){
            console.log("These numbers are equal!")
        }else{
            console.log("These numbers are not equal")
        }
    }
 }

