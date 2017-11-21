let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab the color of the clicked sqare
        let clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });

}

function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random()*256);
    //pick a "blue" from 0 to 255
    var g = Math.floor(Math.random()*256);
    //pick a "green" from 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

