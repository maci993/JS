
const redBox = document.getElementById("red-box")
redBox.addEventListener("click", () => {
   alert("You clicked on the red-box!")
})

const greenBox = document.getElementById("green-box")
greenBox.addEventListener("click", (event) => {
    event.stopPropagation()
    alert("You clicked on the green box!")
})

const blueBox = document.getElementById("blue-box")
blueBox.addEventListener("click", (event) => {
    event,stopPropagation()
    alert("You clicked on the blue box!")
});