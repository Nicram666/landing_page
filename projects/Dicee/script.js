

function game() {
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var napis = document.querySelector(".container h1")
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png")

if (randomNumber1 > randomNumber2) {
    napis.textContent = "🚩Player 1 has won"
}

else if (randomNumber2 > randomNumber1) {
    napis.textContent = "🚩Player 2 has won"
}

else if (randomNumber2 == randomNumber1) {
    napis.textContent = "Draw"
}

}

document.addEventListener('click',game)


