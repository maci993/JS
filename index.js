const myDiv = document.getElementById("red-box");
const clickHandler = () => {
  alert("You clicked on the red box!");
};
myDiv.addEventListener("click", clickHandler);

const myDiv1 = document.getElementById("green-box");
const clickHandler1 = () => {
  alert("You clicked on the green box!");
};
myDiv1.addEventListener("click", clickHandler1);

const myDiv2 = document.getElementById("blue-box");
const clickHandler2 = () => {
  alert("You clicked on the blue box!");
};
myDiv2.addEventListener("click", clickHandler2);
