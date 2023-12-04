//Задача 1.

function printFunc() {
  let seconds = 10;
console.log("Coding is not that hard");
}
let seconds = 5;
const printFunc1 = new Promise((resolve, reject) => {
if (printFunc != seconds) {
resolve("Please enter a number");
} else {
reject(printFunc < 9);
console.log("Please enter one digit number!")
}
}, 3000);

printFunc();

//Задача 2.

//a.
let prom1 = new Promise((resolve, reject) => {
  reject("Failure");
})
  .then((e) => {
    console.log("Hello Successful");
  })
  .catch((e) => {
    console.log(e);
  });

//
let prom2 = new Promise((resolve, reject) => {
  reject("Error!");
})
  .then((result) => {
    console.log("Hello!");
  })
  .catch((result) => {
    console.log("Error!");
  });

//
let prom3 = new Promise((resolve, reject) => {
  if (true) {
    resolve("Hi!");
  } else {
    reject("Oops");
  }
})
  .then((a) => {
    console.log(a);
  })
  .catch((a) => {
    console.log(a);
  });

//
let prom4 = new Promise((resolve, reject) => {
  if (false) {
    resolve("Hello there!");
  } else {
    reject("Error");
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

//
let prom5 = new Promise((resolve, reject) => {
  if (true) {
    resolve("Welcome!");
  } else {
    reject("Try again!");
  }
})
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });

//б.
function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise = { name: "Susie", age: 25 };
      resolve(promise);
    }, 3000);
  });
}
async function fetchPromise() {
  const promise = await getPromise();
  console.log(promise);
}
fetchPromise();

//
function getPromise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise1 = { subject: "Psychology", classes: 45 };
      resolve(promise1);
    }, 4000);
  });
}
async function fetchPromise1() {
  const promise1 = await getPromise1();
  console.log(promise1);
}
fetchPromise1();

//
function getPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise2 = { animal: "Lion", age: 10 };
      resolve(promise2);
    }, 2000);
  });
}
async function fetchPromise2() {
  const promise2 = await getPromise2();
  console.log(promise2);
}
fetchPromise2();

//
function getPromise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise3 = { student: "Lily", age: 19 };
      resolve(promise3);
    }, 4000);
  });
}
async function fetchPromise3() {
  const promise3 = await getPromise3();
  console.log(promise3);
}
fetchPromise3();

//
function getPromise4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise4 = { book: "Hunger Games", year: 2006 };
      resolve(promise4);
    }, 3000);
  });
}
async function fetchPromise4() {
  const promise4 = await getPromise4();
  console.log(promise4);
}
fetchPromise4();

//Задача 3.

//const checkNumber = (number) =>
//new Promise((resolve, reject) => {
//if (number % 2 === 0) {
//resolve("The number" + number + "is even");
//} else {
//reject("The number" + number + "is odd");
//}
//})
//  .then((message) => handleSuccess(message))
//console.log("The number is even")
//.catch((error) => handleError(error))
//console.log("The number is odd");

//const handleSuccess = (message) => console.log(message);
//const handleError = (message) => console.log(message);

//Задача 4.

function fetchData() {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve({
 name: "John Doe",
age: 30,
email: "john@example.com",
})
 }, 2000)
})
}
async function displayUserDetails() {
  try {
    const data = await fetchData();
  console.log(data);
   } catch (error) {
  console.log("Error");
  }
}
displayUserDetails();

//Задача 5.

function calculateSquareRoot(number) {
  try {
    if (number < 0) {
      error = new Error("Cannot calculate square root of a negative number");
      return error;
    }
    return Math.sqrt(number);
  } catch (error) {
    error = new Error("Error occurred during square root calculation");
    return error;
  } finally {
    console.log("Square root calculation completed.");
  }
}

console.log(calculateSquareRoot(10));
