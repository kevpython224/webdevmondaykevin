console.log("Hi")

var name1 = ""
let name2 = ""
const name3 = ""

console.log(name1)
console.log(name2)
console.log(name3)

name1 = "test1 updated"
console.log("name1")

name2 = "test2 updated"
console.log("name2")

name3 = "test3 updated"
console.log("name3")

const food = "Burger"
let amnt = 10
var test = false

let foodText = document.getElementById("foodText").value.toLowerCase()
let checkButton = document.getElementById("checkButton")
checkButton.addEventListener("click", () => console.log("Button Clicked"))
let resultText = document.getElementById("resultText")
console.log(foodText)

function checkFood() {
    let foodTextval = foodText.value.toLowerCase()
    console.log(foodText.value.toLowerCase)
    if (foodText == "bread" || foodText == "rice"){
        resultText.innerHTML = foodTextval + "is healthy"
        resultText.style.color = "green"
    } else if (foodText == "burger" || foodText == "pizza"){
        resultText.innerHTML = foodTextval + "is not healthy"
        resultText.style.color = "red"
    } else {
        resultText.innerHTML = 'I dont know if ${foodTextVal} is healthy'
        resultText.style.color = "white"
    }
}