var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var result = document.getElementById("result");

function drawDice(num) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(10, 10, 380, 380);
     ctx.font = "200px Arial"; 
    ctx.fillText(num, 130, 280);
}

function rollDice() {
    var num = Math.floor(Math.random() * 6) + 1;
    drawDice(num);
    result.textContent = "You rolled a " + num + "!";
}

document.getElementById("roll").addEventListener("click", rollDice);

document.getElementById("reset").addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    result.textContent = "";
});